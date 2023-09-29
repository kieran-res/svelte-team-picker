<script lang="ts">
    import type { Team, User } from '../state/picker';
	import PickResult from './PickResult.svelte';
    export let team: Team;

    let name = '';
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
    <h1>Welcome to the team picker, {team.id}!</h1>
    <PickResult enabled={team.members.length >= 2} team={team} />
    <div style="display: flex; flex-direction: row;">
        <h4>Name</h4>
        <form method="POST" action="?/add">
            <input type="hidden" name="id" value={team.id} />
            <input name="name" bind:value={name}>
            <button disabled={name.length === 0}>Add</button>
        </form>
    </div>
    {#each team.members as member}
        <div style="display: flex; flex-direction: row;">
            <h4>{member.name}: {member.numberOfPicks}</h4>
            <form method="POST" action="?/remove">
                <input type="hidden" name="id" value={team.id} />
                <input name="name" type="hidden" value={member.name}>
                <button>Remove</button>
            </form>
        </div>
    {/each}
</div>
  
  