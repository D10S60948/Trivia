import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Answers } from '../../../components/game/Answers';

test('"Answers" component renders correctly', () => {
    const snapshot = renderer.create(<Answers/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
