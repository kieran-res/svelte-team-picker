import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { picker, type Team } from './picker';

describe('application state', () => {
    let currentState: Team;
    let unsubscribe: () => void;

    beforeEach(() => {
        unsubscribe = picker.subscribe(state => currentState = state);
    })

    afterEach(() => {
        picker.reset();
        unsubscribe();
    });

    it('adds a new team member', () => {
        const user = "user A";
        picker.addMember(user)

        expect(currentState.members).toHaveLength(1);
        expect(currentState.members).toContainEqual({ name: user, numberOfPicks: 0 })
    })

    it('adds two new team members', () => {
        const userA = "user A";
        const userB = "user B";
        picker.addMember(userA)

        expect(currentState.members).toHaveLength(1);
        expect(currentState.members).toContainEqual({ name: userA, numberOfPicks: 0 })
    
        picker.addMember(userB)

        expect(currentState.members).toHaveLength(2);
        expect(currentState.members).toContainEqual({ name: userB, numberOfPicks: 0 })
    })

    it ('removes someone from the team', () => {
        const userA = "user A";
        const userB = "user B";
        picker.addMember(userA)
        picker.addMember(userB)

        expect(currentState.members).toHaveLength(2);

        picker.removeMember(userA);

        expect(currentState.members).toHaveLength(1);
        expect(currentState.members[0].name).toBe(userB);
    })

    it ('updates state based on pick', () => {
        const userA = "user A";
        const userB = "user B";
        picker.addMember(userA)
        picker.addMember(userB)

        picker.pick(userA)

        expect(currentState.members.filter(m => m.name === userA)[0].numberOfPicks).toBe(1);
        expect(currentState.members.filter(m => m.name === userB)[0].numberOfPicks).toBe(0);
        expect(currentState.lastPick).toBe(userA);
    })

    it ('sets whole state', () => {
        const state: Team = {
            id: "another team",
            lastPick: "user1",
            members: [{name: 'user1', numberOfPicks: 0}]
        }

        picker.set(state)

        expect(currentState).toStrictEqual(state);
    })
})