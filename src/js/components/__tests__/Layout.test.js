import React from 'react'
import renderer from 'react-test-renderer'

import { ResumeLayout, TopLayout } from '../ResumeLayout'

test('renders main layout', () => {
  const component = renderer.create(<ResumeLayout>a b c</ResumeLayout>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders top layout', () => {
  const component = renderer.create(<TopLayout>a b c</TopLayout>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
