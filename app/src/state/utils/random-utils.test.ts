import { describe, it, expect } from 'vitest';
import type { Team } from '../picker';
import { GetProbability } from './random-utils';

describe('GetProbability', () => {
    it('Given a team of two, where one person was previously picked, member who picked last should have zero change and other user should have 1', () => {
        const team: Team = {
            id: 'team',
            members: [{
                name: 'UserA',
                numberOfPicks: 1,
            },
            {
                name: 'UserB',
                numberOfPicks: 0,
            }],
            lastPick: 'UserA',
        };

        const pickProbability = GetProbability(team);

        expect(pickProbability).toHaveLength(2);
        const userAProbability = pickProbability.filter(p => p.name === 'UserA')[0].probability;
        expect(userAProbability).toBe(0);

        const userBProbability = pickProbability.filter(p => p.name === 'UserB')[0].probability;
        expect(userBProbability).toBe(1);
    })

    it('Given a team of two, where no one has picked, each person should have 50% chance', () => {
        const team: Team = {
            id: 'team',
            members: [{
                name: 'UserA',
                numberOfPicks: 0,
            },
            {
                name: 'UserB',
                numberOfPicks: 0,
            }],
        };

        const pickProbability = GetProbability(team);

        expect(pickProbability).toHaveLength(2);
        const userAProbability = pickProbability.filter(p => p.name === 'UserA')[0].probability;
        expect(userAProbability).toBe(1);

        const userBProbability = pickProbability.filter(p => p.name === 'UserB')[0].probability;
        expect(userBProbability).toBe(1);
    })

    it('Given a team of three, expect probability to ve inversely proportional to the number of picks', () => {
        const team: Team = {
            id: 'team',
            members: [{
                name: 'UserA',
                numberOfPicks: 1,
            },
            {
                name: 'UserB',
                numberOfPicks: 3,
            },
            {
                name: 'UserC',
                numberOfPicks: 3,
            }],
            lastPick: 'UserC'
        };

        const pickProbability = GetProbability(team);

        expect(pickProbability).toHaveLength(3);
        const userAProbability = pickProbability.filter(p => p.name === 'UserA')[0].probability;
        expect(userAProbability).toBe(3);

        const userBProbability = pickProbability.filter(p => p.name === 'UserB')[0].probability;
        expect(userBProbability).toBe(1);

        const userCProbability = pickProbability.filter(p => p.name === 'UserC')[0].probability;
        expect(userCProbability).toBe(0);
    })

    it('Given a team of three, where everyone has picked and one user was last pick, expect probability to be inversely proportional', () => {
        const team: Team = {
            id: 'team',
            members: [{
                name: 'UserA',
                numberOfPicks: 1,
            },
            {
                name: 'UserB',
                numberOfPicks: 2,
            },
            {
                name: 'UserC',
                numberOfPicks: 3,
            }],
            lastPick: 'UserC'
        };

        const pickProbability = GetProbability(team);

        expect(pickProbability).toHaveLength(3);
        const userAProbability = pickProbability.filter(p => p.name === 'UserA')[0].probability;
        expect(userAProbability).toBe(2);

        const userBProbability = pickProbability.filter(p => p.name === 'UserB')[0].probability;
        expect(userBProbability).toBe(1);

        const userCProbability = pickProbability.filter(p => p.name === 'UserC')[0].probability;
        expect(userCProbability).toBe(0);
    })
})