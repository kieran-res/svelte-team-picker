<script lang="ts">
	import type { Team } from "../state/picker";
	import { Pick } from "../state/utils/picker-utils";
    export let team: Team;
    export let enabled: boolean;

    let pickedName: string

    function pick() {
        pickedName = Pick(team)
    }
    
    function clear() {
        pickedName = ''
    }
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

{#if enabled}
    {#if !pickedName}
    <button on:click={pick}>Pick</button>
    {:else}
    <div>
        <h4>Next pick: {pickedName}</h4>
        <h4>Do you accept?</h4>
        <div style="display: flex; flex-direction: row;">
            <form method="POST" action="?/pick">   
                <input type="hidden" name="id" value={team.id} />
                <input name="name" type="hidden" value={pickedName}>
                <button>Yes</button>
            </form> 
            <button on:click={clear}>No</button>
        </div>
    </div>
    {/if}
{/if}
