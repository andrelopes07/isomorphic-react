import React from 'react';
import renderer from 'react-test-renderer';
import TagsList from '../TagsList';

describe('The Tags List', () => {
    it('Should match snapshot', () => {
        const component = renderer
        .create(<TagsList tags={['html', 'css', 'javascript']} />)
        .toJSON();

        expect(component).toMatchSnapshot();
    });
});
