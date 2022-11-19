import { render } from '@redwoodjs/testing/web'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoItem />)
    }).not.toThrow()
  })
})
