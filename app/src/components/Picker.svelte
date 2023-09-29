<script lang="ts">
    import { picker, type User } from '../state/picker'
	import PickResult from './PickResult.svelte';

    let name = '';

    function addNewTeamMember() {
        picker.addMember(name);
        name = ''
    }

    function removeTeamMember(member: User) {
        picker.removeMember(member.name);
    }
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1 {
        color: red;
    }
</style>

<div>
    <h1>Welcome to the team picker, {$picker.id}!</h1>
    <PickResult enabled={$picker.members.length >= 2} />
    <div style="display: flex; flex-direction: row;">
        <h4>Name</h4>
        <input data-testId="input" bind:value={name}>
        <button disabled={name.length === 0} on:click={addNewTeamMember}>Add</button>
    </div>
    {#each $picker.members as member}
        <div style="display: flex; flex-direction: row;">
            <h4>{member.name}: {member.numberOfPicks}</h4>
            <button on:click={() => removeTeamMember(member)}>Remove</button>
        </div>
    {/each}
</div>
  
  