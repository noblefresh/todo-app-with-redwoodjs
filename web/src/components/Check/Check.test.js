import { render } from '@redwoodjs/testing/web'

import Check from './Check'

describe('Check', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Check />)
    }).not.toThrow()
  })
})
