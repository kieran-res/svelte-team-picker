import type { Team } from "../picker";

export type PickProbability = {
    name: string;
    probability: number;
}

// TODO: Do we need a fudge factor to avoid new people being 100% change of being picked?
export function GetProbability(team: Team): PickProbability[] {
    const probabilities: PickProbability[] = [];

    if (team.lastPick) {
        probabilities.push({ name: team.lastPick, probability: 0})
    }

    const membersWithoutLastPick = team
        .members
        .filter(member => member.name !== team.lastPick);

    const totalPicks = membersWithoutLastPick.map(member => member.numberOfPicks).reduce((acc, val) => acc + val);

    if (totalPicks === 0) {
        membersWithoutLastPick.forEach(member => probabilities.push({ name: member.name, probability: 1 }))
    }
    else {
        membersWithoutLastPick.forEach(member => probabilities.push({ name: member.name, probability: totalPicks - member.numberOfPicks }))
    }

    return probabilities;
}