import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';
import WebSocket from 'isomorphic-ws';
import {
    setInterval
} from 'isomorphic-timers-promises';

const OPCODES = {
    EVENT: 0,
    HELLO: 1,
    INITIALIZE: 2,
    HEARTBEAT: 3,
} as const;

type HelloMessage = {
    op: typeof OPCODES.HELLO;
    d: {
        heartbeat_interval: number;
    };
};

type EventMessageBase<E, T> = {
    op: typeof OPCODES.EVENT;
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

    private readonly callback: LanyardCallBack;

    constructor(callback: LanyardCallBack) {
        this.callback = callback;

        this.socket = new WebSocket('wss://api.lanyard.rest/socket');
        this.socket.onmessage = this.onSocketMessage.bind(this);
    }

    private onSocketMessage(msg: any) {
        const data: SocketMessage = JSON.parse(msg.data);

        switch (data.op) {
            case OPCODES.EVENT:
                this.handleEvent(data);
                break;
            case OPCODES.HELLO:
                this.handleHello(data);
                break;
            default:
                break;
        }
    }

    private handleHello(data: HelloMessage) {
        this.sendInitialize();

        setInterval(() => {
            this.sendHeartbeat();
        }, data.d.heartbeat_interval);
    }

    private sendHeartbeat() {
        const data = JSON.stringify({
            op: OPCODES.HEARTBEAT,
        });

        this.socket.send(data);
    }

    private sendInitialize() {
        const data = JSON.stringify({
            op: OPCODES.INITIALIZE,
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
}

export default function createSpotifyDataStore() {
    const store = writable<SpotifyData | false | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const socket = new LanyardConnection((data) => {
        store.update(() => data.listening_to_spotify ? data.spotify : false);
    });

    return store;
}