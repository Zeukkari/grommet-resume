import React from 'react'
import renderer from 'react-test-renderer'

import { Loading } from '../Loading'

test('renders loading indicator', () => {
  const component = renderer.create(<Loading />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
