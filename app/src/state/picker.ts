import { writable } from "svelte/store";

export type User = {
    numberOfPicks: number;
    name: string;
}

export type Team = {
    id: string;
    members: User[]
    lastPick?: string
}
const initialState: Team = {
    id: "team A",
    members: []
}

function createPickerState() {
    const { subscribe, update, set } = writable<Team>(initialState);

    return {
        subscribe,
        addMember: (name: string) => update(team => ({ ...team, members: [...team.members, { name, numberOfPicks: 0 }] })),
        removeMember: (name: string) => update(team => ({ ...team, members: team.members.filter( member => member.name !== name)})),
        pick: (name: string) => update(team => ({ ...team, lastPick: name, members: team.members.map(member => ({ ...member, numberOfPicks: member.name === name ? member.numberOfPicks + 1 : member.numberOfPicks })) })),
        reset: () => set(initialState),
        set: (team: Team) => set(team),
    }
}

export const picker = createPickerState();