import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

function TestComp (props) {
  return (
    <button>
      Nothing to do for now
    </button>)
}

test('test', () => {
  const button = renderer.create(< TestComp />).toJSON()
  expect(button).toMatchSnapshot()
})
