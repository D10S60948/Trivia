import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Popup } from '../../../components/game/Popup';

test('"Popup" component renders correctly', () => {
    const snapshot = renderer.create(<Popup/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
