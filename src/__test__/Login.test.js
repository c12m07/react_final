import { render, screen } from '@testing-library/react'
import Login from '../components/login'

describe('Login component', () => {

  beforeEach(() => {
    render(<Login />)
    const title = screen.getByTestId('title')
  });

  it('Comprueba titulo', () => {
    expect(title.textContent).toBe('Inician Sesion')
  })
})