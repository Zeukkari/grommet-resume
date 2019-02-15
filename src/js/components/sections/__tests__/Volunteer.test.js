import React from 'react'
import renderer from 'react-test-renderer'

import { VolunteerItem } from '../Volunteer'

import defaultResume from './mockResume.json'

test('renders volunteer section', () => {
  const data = defaultResume.volunteer[0]
  const component = renderer.create(<VolunteerItem item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
