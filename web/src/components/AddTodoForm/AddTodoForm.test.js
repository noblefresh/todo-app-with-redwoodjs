import { render } from '@redwoodjs/testing/web'

import AddTodoForm from './AddTodoForm'

describe('AddTodoForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddTodoForm />)
    }).not.toThrow()
  })
})
