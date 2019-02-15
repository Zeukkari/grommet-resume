import React from 'react'
import renderer from 'react-test-renderer'

import { Interest } from '../Interests'

import defaultResume from './mockResume.json'

test('renders interests section', () => {
  const data = defaultResume.interests[0]
  const component = renderer.create(<Interest item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
