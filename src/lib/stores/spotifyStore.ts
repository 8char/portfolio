import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import WebSocket from 'isomorphic-ws';
import {
    setInterval
} from 'isomorphic-timers-promises';

type HelloMessage = {
    op: 1;
    d: {
        heartbeat_interval: number;
    };
};

type EventMessageBase<E, T> = {
    op: 0;
    t: E;
    d: T;
};

type SpotifyData = {
    track_id: string;
    song: string;
    album_art_url: string;
    artist: string;
};

type LanyardPresenceData = {
    spotify: SpotifyData;
    listening_to_spotify: boolean;
};

type InitializeEvent = EventMessageBase<'INIT_STATE', Record<string, LanyardPresenceData>>;
type PresenceUpdateEvent = EventMessageBase<'PRESENCE_UPDATE', LanyardPresenceData>;

type EventMessage = InitializeEvent | PresenceUpdateEvent;

type SocketMessage = HelloMessage | EventMessage;

type LanyardCallBack = (data: LanyardPresenceData) => void

class LanyardConnection {
    private readonly socket: WebSocket;

    private heartbeatId?: NodeJS.Timeout;

    private readonly callback: LanyardCallBack;

    constructor(callback: LanyardCallBack) {
        this.callback = callback;

        this.socket = new WebSocket('wss://api.lanyard.rest/socket');
        this.socket.onmessage = this.onSocketMessage.bind(this);
    }

    private onSocketMessage(msg: any) {
        const data: SocketMessage = JSON.parse(msg.data);

        switch (data.op) {
            case 0:
                this.handleEvent(data);
                break;
            case 1:
                this.handleHello(data);
                break;
            default:
                break;
        }
    }

    private handleHello(data: HelloMessage) {
        this.sendInitialize();

        this.heartbeatId = setInterval(() => {
            this.sendHeartbeat();
        }, data.d.heartbeat_interval);
    }

    private sendHeartbeat() {
        const data = JSON.stringify({
            op: 3,
        });

        this.socket.send(data);
    }

    private sendInitialize() {
        const data = JSON.stringify({
            op: 2,
            d: {
                subscribe_to_ids: [import.meta.env.VITE_DISCORD_USER_ID],
            },
        });

        this.socket.send(data);
    }

    private handleEvent(data: EventMessage) {
        let userData: LanyardPresenceData | undefined;

        if (data.t === 'INIT_STATE') {
            userData = data.d[import.meta.env.VITE_DISCORD_USER_ID];
        } else if (data.t === 'PRESENCE_UPDATE') {
            userData = data.d;
        }

        if (!userData) return;

        this.callback(userData);
    }

    public close() {
        this.socket.close();
        // clearInterval(this.heartbeatId);
    }
}

export default function createSpotifyDataStore() {
    const store = writable<SpotifyData | false | null>(null);

    const socket = new LanyardConnection((data) => {
        store.update(() => data.listening_to_spotify ? data.spotify : false);
    });

    // onDestroy(() => socket?.close());

    return store;
}