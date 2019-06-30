import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Answer } from '../../../components/game/Answer';

test('"Answer" component renders correctly', () => {
    const snapshot = renderer.create(<Answer/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
