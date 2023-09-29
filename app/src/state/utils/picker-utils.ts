import type { Team } from "../picker";
import { GetProbability } from "./random-utils";

export function Pick(team: Team): string {
    if (team.members.length === 1) {
        return team.members[0].name;
    }

    const probabilities = GetProbability(team);
    const hat: string[] = [];

    probabilities.forEach(probability => {
        if (probability.probability == 0) {
            return;
        }

        for (let i = 0; i<probability.probability; i++) {
            hat.push(probability.name);
        }
    })

    return PickFromHat(hat);
}

function PickFromHat(hat: string[]) {
    return hat[Math.floor(Math.random() * hat.length)];
}