import React from 'react'
import renderer from 'react-test-renderer'

import { SectionContent } from '../SectionContent'

test('renders section content element', () => {
  const component = renderer.create(<SectionContent>test</SectionContent>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
