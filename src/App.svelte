<script>
    import Board from "./components/Board.svelte";
    import GameOptions from "./components/Gameoptions.svelte";
	import { createGrid } from "./scripts/game.js";
	let rows = 5
	let cols = 5
	let grid = []
	function handleOnSelect(MapSize){
		rows = MapSize
		cols = MapSize
	}

	$: {
        grid = createGrid(rows, cols);
    }
</script>

<main>
	<h1 id="title">Minesweeper</h1>
	<div class="container">
		<GameOptions onSelect={handleOnSelect}/>
		<Board grid={grid} rows={rows} cols={cols}/>		
	</div>
</main>

<style>
	#title {
		text-align: center;
	}
	.container {
		padding: 3vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>