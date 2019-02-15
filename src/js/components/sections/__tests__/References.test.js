import React from 'react'
import renderer from 'react-test-renderer'

import { Reference } from '../References'

import defaultResume from './mockResume.json'

test('renders references section', () => {
  const data = defaultResume.references[0]
  const component = renderer.create(<Reference item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
