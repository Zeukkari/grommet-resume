import React from 'react'
import renderer from 'react-test-renderer'

import { Section, SectionTitle } from '../common'

test('renders common resume section', () => {
  const component = renderer.create(<Section />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders common resume title', () => {
  const component = renderer.create(<SectionTitle />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
