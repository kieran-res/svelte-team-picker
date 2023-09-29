// Testing any sort of connected component seems to be impossible.

// import '@testing-library/jest-dom'
// import { describe, it, expect, afterEach } from 'vitest';
// import {render, fireEvent, screen, cleanup} from '@testing-library/svelte'
// import Picker from './Picker.svelte';

// describe('Picker', () => {
//     afterEach(() => cleanup())

//     it('adds a team member on click', async () => {
//         render(Picker)
//         const user = "username"

//         const input = screen.getByTestId('input')
//         await fireEvent.change(input, { target: { value: user } });
//         screen.getByRole('button', { name: /Add/i }).click();

//         expect(screen.getByText(user)).toBeVisible();
//     })

//     it('Removes a team member on click', async () => {
//         render(Picker)
//         const user = "username"

//         await fireEvent.change(screen.getByRole('textbox'), { target: { value: user } });
//         screen.getByText('Add').click();

//         expect(screen.findByText(user)).toBeDefined();

//         screen.getByText('Remove').click();

//         expect(screen.queryAllByText(user)).toHaveLength(0);
//     })

//     it('Does not show a pick button until there are at least two users', async () => {
//         render(Picker)
//         const userA = "userA"
//         const userB = "userB"

//         expect(screen.queryByRole('button', { name: 'Pick' })).toBeNull();

//         await fireEvent.change(screen.getByRole('textbox'), { target: { value: userA } });
//         screen.getByRole('button', {name: 'Add'}).click();
//         await fireEvent.change(screen.getByRole('textbox'), { target: { value: userB } });
//         screen.getByRole('button', {name: 'Add'}).click();

//         expect(screen.getByRole('button', { name: 'Pick' })).toBeVisible();
//     })
// })
