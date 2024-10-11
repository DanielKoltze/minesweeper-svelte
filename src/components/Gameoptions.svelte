<script>
    import GameOption from "./Gameoption.svelte";
    export let onSelect
</script>

<main>
    <div class="container"></div>
    <GameOption MapSize="5" onSelect={onSelect}/>
    <GameOption MapSize="10" onSelect={onSelect}/>
    <GameOption MapSize="20" onSelect={onSelect}/>
    <GameOption MapSize="30" onSelect={onSelect}/>
</main>

<style>
    .container {
        display: flex;
        justify-content: Center;
        align-items: center;        
    }
</style>