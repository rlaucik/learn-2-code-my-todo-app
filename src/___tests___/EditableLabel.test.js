import React from 'react';
import { shallow } from 'enzyme';
import { EditableLabel } from '../EditableLabel';

describe('EditableLabel', () => {
    it('renders label when not editing', () => {
        const component = shallow(
            <EditableLabel
                text="some text"
            />
        );
        
        expect(component).toMatchSnapshot();
    });
    it('renders input when in editing mode', () => {
        const component = shallow(
            <EditableLabel
                text="text to edit"
            />
        );

        component.setState({ isEditing: true });
        
        expect(component).toMatchSnapshot();
    });
});