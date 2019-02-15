import React from 'react'
import renderer from 'react-test-renderer'

import { DateSection } from '../DateSection'

test('renders date section', () => {
  const component = renderer.create(<DateSection>test</DateSection>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
