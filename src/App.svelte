<script>
    import Board from "./components/Board.svelte";
    import GameOptions from "./components/Gameoptions.svelte";
	import { createGrid } from "./scripts/game.js";
	let rows = 4
	let cols = 4
	let grid = []
	function handleOnSelect(_cols,_rows){
		cols = _cols
		rows = _rows
	}

	$: {
        grid = createGrid(rows, cols);
    }
</script>

<main>
	<h1 id="title">Minesweeper</h1>
	<div class="container">
		<GameOptions onSelect={handleOnSelect}/>
		<Board grid={grid} size={rows}/>		
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