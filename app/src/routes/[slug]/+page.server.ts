import { error, type LoadEvent } from '@sveltejs/kit';
import { teams } from '../../data/teams';
import type { RequestEvent } from './$types';

export function load({ params }: LoadEvent) {
	const team = teams.find((team) => team.id === params.slug);

	if (!team) throw error(404);

	return {
		team
	};
}

export const actions = {
    pick: async ({ request }: RequestEvent) => {
        const data = await request.formData();
        const teamId = data.get('id');
        const user = data.get('name');

        const teamToUpdate = teams.find((team) => team.id === teamId);

        if (!teamToUpdate) throw error(404);

        const userToUpdate = teamToUpdate.members.find(u => u.name === user);

        if (!userToUpdate) throw error(404);

        teamToUpdate.lastPick = user?.toString();
        userToUpdate.numberOfPicks++;

        return teamToUpdate;
    },
    add: async ({ request }: RequestEvent) => {
        const data = await request.formData();
        const teamId = data.get('id');
        const user = data.get('name');

        const teamToUpdate = teams.find((team) => team.id === teamId);

        if (!teamToUpdate) throw error(404);
        if (!user) throw error(404);

        teamToUpdate.members.push({ name: user.toString(), numberOfPicks: 0})

        return teamToUpdate;
    },
    remove: async ({ request }: RequestEvent) => {
        const data = await request.formData();
        const teamId = data.get('id');
        const user = data.get('name');

        const teamToUpdate = teams.find((team) => team.id === teamId);

        if (!teamToUpdate) throw error(404);
        if (!user) throw error(404);

        teamToUpdate.members = teamToUpdate.members.filter(member => member.name !== user.toString())

        return teamToUpdate;
    }
}