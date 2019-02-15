import React from 'react'
import renderer from 'react-test-renderer'

import { Publication } from '../Publications'

import defaultResume from './mockResume.json'

test('renders publications section', () => {
  const data = defaultResume.publications[0]
  const component = renderer.create(<Publication item={data} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
