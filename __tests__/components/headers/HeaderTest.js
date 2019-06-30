import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header  from '../../../components/headers/Header';

test('"Header" component renders correctly', () => {
    const snapshot = renderer.create(<Header/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
