import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { GameOverPopup } from '../../../components/game/GameOverPopup';

test('"GameOverPopup" component renders correctly', () => {
    const snapshot = renderer.create(<GameOverPopup/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
