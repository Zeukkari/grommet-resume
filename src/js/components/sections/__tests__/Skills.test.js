import React from 'react'
import renderer from 'react-test-renderer'

import { Skill } from '../Skills'

import defaultResume from './mockResume.json'

test('renders skills section', () => {
  const data = defaultResume.skills[0]
  const component = renderer.create(<Skill item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
