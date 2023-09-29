import { describe, it, expect } from 'vitest';
import type { Team } from '../picker';
import { Pick } from './picker-utils';

describe('Pick', () => {
    it.each([
        ['UserA', 0],
        ['UserA', 1],
        ['UserB', 0]]
    )('Given one team member, then returns that person', (username: string, numberOfPicks: number) => {
        const team: Team = {
            id: 'team',
            members: [{
                name: username,
                numberOfPicks,
            }],
        };

        const pickedUser = Pick(team);

        expect(pickedUser).toBe(username)
    })

    // TODO: it would be good to mock out a random number generator, but for now I'm not going to test this component.
})