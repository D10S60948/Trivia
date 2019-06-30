import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SubHeader from '../../../components/headers/SubHeader';

test('"SubHeader" component renders correctly', () => {
    const snapshot = renderer.create(<SubHeader text={['SETTINGS']}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
