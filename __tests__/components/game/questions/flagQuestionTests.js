import 'react-native';
import React from 'react';
import { FlagQuestion } from '../../../../components/game/questions/FlagQuestion';
import renderer from 'react-test-renderer';
import { StyleSheet } from 'react-native';

// jest.mock('react-native', () => {
//     let items = {};
//         StyleSheet: {
//             create: () => ({})
//         },
//     }
// });

test('"FlagQuestion" component renders correctly', () => {
    const snapshot = renderer.create(<FlagQuestion flag='emoji'/>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
