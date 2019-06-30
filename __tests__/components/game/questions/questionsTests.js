import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FlagQuestion from '../../../../components/game/questions/FlagQuestion';
import RegionQuestion from '../../../../components/game/questions/RegionQuestion';
import PopulationQuestion from '../../../../components/game/questions/PopulationQuestion';
import LanguagesQuestion from '../../../../components/game/questions/LanguagesQuestion';
import CapitalQuestion from '../../../../components/game/questions/CapitalQuestion';
import BordersQuestion from '../../../../components/game/questions/BordersQuestion';

test('"FlagQuestion" component renders correctly', () => {
  const snapshot = renderer.create(<FlagQuestion flag={'emoji'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('"RegionQuestion" component renders correctly', () => {
  const snapshot = renderer.create(<RegionQuestion region={'Asia'} name={'Israel'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('"PopulationQuestion" component renders correctly', () => {
  const snapshot = renderer.create(<PopulationQuestion name={'Israel'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('"LanguagesQuestion" component renders correctly', () => {
  const snapshot = renderer.create(<LanguagesQuestion languages={['English', 'Hebrew']} name={'Israel'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('"CapitalQuestion" component renders correctly', () => {
  const snapshot = renderer.create(<CapitalQuestion countryName={'Israel'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('"BordersQuestion" component renders correctly', () => {
  const snapshot = renderer.create(<BordersQuestion countries={[]} borders={['EGY', 'SYR', 'JOR', 'LBN']} name={'Israel'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

