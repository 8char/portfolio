<script lang="ts">
	import { onMount } from 'svelte/internal';

    const X_COORDINATE = 0;
    const Y_COORDINATE = 1;
    const TICK_DELAY = 200;
	const GRID_SIZE = 20;
	const SNAKE_HEAD = 0;
    const FOOD_PER_EAT = 2;

    type VectorForce = 1 | 0 | -1
    type TwoDimensionalVector = [VectorForce, VectorForce]
    type TwoDimensionalCoordinate = [number, number]
    type OneDimensionalCoordinate = number
	type Cell = 'empty' | 'snake' | 'food';
    type CellGrid = Cell[][]

	let lost = false;
	let grid: CellGrid = [...Array(GRID_SIZE)].map(() => [...Array(GRID_SIZE)].map(() => 'empty'));
	let snakePosition: Array<[number, number]> = [[12, 13]];
	let direction: TwoDimensionalVector = [0, 0];
	let gridWithSnake = grid;

	function getRandomInt(max: number) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	function spawnFood() {
        [...Array(FOOD_PER_EAT)].forEach(() => grid[getRandomInt(GRID_SIZE)][getRandomInt(GRID_SIZE)] = 'food')
	}

	spawnFood();

	$: {
		for (let i = 0; i < gridWithSnake.length; i++) {
			for (let k = 0; k < gridWithSnake.length; k++) {
				if (gridWithSnake[i][k] === 'snake') {
					gridWithSnake[i][k] = 'empty';
				}
			}
		}
		snakePosition.forEach(([x, y]) => {
			gridWithSnake[x][y] = 'snake';
		});
	}
	const nextTick = (tickDelay: number) => {
		setTimeout(() => {
			const [x, y] = snakePosition[SNAKE_HEAD];
			const [dx, dy] = direction;
			const futureSnakeHead = [dx + x, y + dy] as TwoDimensionalCoordinate;

			function isOutOfBounds(location: OneDimensionalCoordinate): boolean {
				return location < 0 || location > GRID_SIZE - 1;
			}

			if (
                isOutOfBounds(futureSnakeHead[X_COORDINATE])
                || isOutOfBounds(futureSnakeHead[Y_COORDINATE])
            ) {
				lost = true;
				return;
			}

			let ateFood = false;
			if (gridWithSnake[futureSnakeHead[X_COORDINATE]][futureSnakeHead[Y_COORDINATE]] === 'food') {
				ateFood = true;
				spawnFood();
			}

			const snakeBody = snakePosition.slice(0, snakePosition.length - (ateFood ? 0 : 1));

			if (snakeBody.some((x) => x[X_COORDINATE] === futureSnakeHead[X_COORDINATE]
                && x[Y_COORDINATE] === futureSnakeHead[Y_COORDINATE])) {
				lost = true;
				return;
			}

			snakePosition = [futureSnakeHead, ...snakeBody];
			nextTick(TICK_DELAY);
		}, tickDelay);
	};
	onMount(() => {
		nextTick(TICK_DELAY);
	});

	function restart() {
		snakePosition = [[12, 13]];
		direction = [0, 0];
		grid = [...Array(GRID_SIZE)].map(() => [...Array(GRID_SIZE)].map(() => 'empty'));
		gridWithSnake = grid;
		spawnFood();
		lost = false;
		nextTick(TICK_DELAY);
	}
</script>

<svelte:window
	on:keydown={(e) => {
		switch (e.key) {
			case 'ArrowLeft':
				direction = [0, -1];
				break;
			case 'ArrowRight':
				direction = [0, 1];
				break;
			case 'ArrowUp':
				direction = [-1, 0];
				break;
			case 'ArrowDown':
				direction = [1, 0];
				break;
			case 'Enter':
				restart();
				break;
		}
	}}
/>

<main class="flex flex-col text-white">
	{#if lost}
		<h1 class="text-center">You lost!</h1>
		<h3 class="text-center">Hit <code class="kbd">ENTER</code> to restart</h3>
	{/if}
	<h3 class="text-center">snake length {snakePosition.length}</h3>
    <div class="mx-auto">
        <div class="flex flex-col justify-center align-center gap-px w-fit">
            {#each gridWithSnake as row, i}
                <div class="flex gap-px">
                    {#each row as cell, k}
                        <div on:click={
                            () => grid[i][k] = 'food'
                        } class={`w-6 h-6 ${cell}`} />
                    {/each}
                </div>
            {/each}
        </div>
    </div>

	{#if lost}
        <button on:click={restart}> Start again </button>
	{/if}
</main>

<style>
	.empty {
		@apply bg-gray-900/50 backdrop-blur-xl rounded-md;
	}
	.food {
		@apply bg-secondary-500/50 backdrop-blur-xl rounded-md;
	}
	.snake {
		@apply bg-primary-500/50 backdrop-blur-xl rounded-md;
	}
	.tcenter {
		text-align: center;
	}
	.restart {
		margin-top: 10px;
	}

	.enter {
		border: #000 1px solid;
		background-color: #eee;
		border-radius: 2px;
		padding: 5px;
	}
</style>
