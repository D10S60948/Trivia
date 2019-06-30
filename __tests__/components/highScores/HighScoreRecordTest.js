import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HighScoreRecord from '../../../components/highScores/HighScoreRecord';

test('"HighScoreRecord" component renders correctly', () => {
    const index = 4;
    const value = {name: 'Test', score: 100};
    const snapshot = renderer.create(
        <HighScoreRecord ranking={ index + 1 } name={ value.name } score={ value.score } key={index} />
        ).toJSON();
    expect(snapshot).toMatchSnapshot();
});
