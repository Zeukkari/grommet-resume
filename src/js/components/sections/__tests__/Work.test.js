import React from 'react'
import renderer from 'react-test-renderer'

import { WorkItem } from '../Work'

import defaultResume from './mockResume.json'

test('renders work section', () => {
  const data = defaultResume.work[0]
  const component = renderer.create(<WorkItem item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
