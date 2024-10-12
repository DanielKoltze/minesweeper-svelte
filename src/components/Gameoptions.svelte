<script>
    import GameOption from "./Gameoption.svelte";
    export let onSelect
</script>

<main>
    <div class="container"></div>
    <GameOption cols=5 rows=5 onSelect={onSelect}/>
    <GameOption cols=10 rows=10 onSelect={onSelect}/>
    <GameOption cols=20 rows=20 onSelect={onSelect}/>
    <GameOption cols=30 rows=30 onSelect={onSelect}/>
</main>

<style>
    .container {
        display: flex;
        justify-content: Center;
        align-items: center;        
    }
</style>