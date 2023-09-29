<script lang="ts">
	import { Pick } from "../state/utils/picker-utils";
    import { picker } from '../state/picker'

    export let enabled: boolean;

    let pickedName: string

    function pick() {
        pickedName = Pick($picker)
    }
    
    function acceptPick() {
        picker.pick(pickedName)
        pickedName = ''
    }

    function rejectPick() {
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
            <button on:click={acceptPick}>Yes</button>
            <button on:click={rejectPick}>No</button>
        </div>
    </div>
    {/if}
{/if}
