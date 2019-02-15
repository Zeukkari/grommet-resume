import React from 'react'
import renderer from 'react-test-renderer'

import { SecondaryTitle } from '../SecondaryTitle'

test('renders secondary title', () => {
  const component = renderer.create(<SecondaryTitle>test</SecondaryTitle>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
