import { render } from '@redwoodjs/testing/web'

import SaveTodo from './SaveTodo'

describe('SaveTodo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SaveTodo />)
    }).not.toThrow()
  })
})
