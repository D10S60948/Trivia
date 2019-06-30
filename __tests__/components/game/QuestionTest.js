import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Question } from '../../../components/game/Question';

test('"Question" component renders correctly', () => {
    const snapshot = renderer.create(<Question/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
