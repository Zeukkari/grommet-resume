import React from 'react'
import renderer from 'react-test-renderer'

import { Award } from '../Awards'

import defaultResume from './mockResume.json'

test('renders awards section', () => {
  const data = defaultResume.awards[0]
  const component = renderer.create(<Award item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
