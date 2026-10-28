import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the institutional hero and course section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /conectando estudantes, famílias e comunidade ao futuro/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /conhecer cursos/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/formação profissional com foco em oportunidades reais/i)).toBeInTheDocument()
  })
})
