import React from 'react';
import renderer from 'react-test-renderer';
import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';

describe('The Question Detail Component', () => {
    describe('The Container Element', () => {
        describe('mapStateToProps', () => {
            it('Should map state to props correctly', () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: 'Some body'
                };
                const appState = {
                    questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id: 42
                };
                const componentState = mapStateToProps(appState, ownProps);

                expect(componentState).toEqual(sampleQuestion);
            });
        });
    });

    describe('mapStateToProps', () => {
        it(`Should not regress`, () => {
            const component = renderer.create(
                <QuestionDetailDisplay
                    title='Some Title'
                    body='Some Body'
                    answer_count={0}
                    tags={['tag1', 'tag2']} />
            );
            expect(component.toJSON()).toMatchSnapshot();
        });    
    });
});
