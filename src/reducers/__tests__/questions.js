import { questions } from '../questions';

describe('The Questions Reducer', () => {
    it('Should not modify state for unrecognized action', () => {
        const state = ['foo', 'bar'];
        const stateClone = ['foo', 'bar'];
        const newState = questions(state, { type: 'UNRECOGNIZED_ACTION' });

        expect(newState).toEqual(stateClone);
        expect(newState).toBe(state);
    });

    it('Should add new questions', () => {
        const state = [{ question_id: 'foo' }, { question_id: 'bar' }];
        const newQuestion = { question_id: 'baz' };
        const newState = questions(state, { type: 'FETCHED_QUESTION', question: newQuestion });
        const expectedState = [{ question_id: 'baz' }, { question_id: 'foo' }, { question_id: 'bar' }];

        expect(newState).toContain(newQuestion);
        expect(state).not.toContain(newQuestion);
        expect(newState).toHaveLength(3);
        expect(newState).toEqual(expectedState);
    });
});
