import React from 'react'
import renderer from 'react-test-renderer'

import { EducationItem } from '../Education'

import defaultResume from './mockResume.json'

test('renders education section', () => {
  const data = defaultResume.education[0]
  const component = renderer.create(<EducationItem item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
