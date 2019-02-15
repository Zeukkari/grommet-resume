import React from 'react'
import renderer from 'react-test-renderer'

import { Language } from '../Languages'

import defaultResume from './mockResume.json'

test('renders languages section', () => {
  const data = defaultResume.languages[0]
  const component = renderer.create(<Language item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
