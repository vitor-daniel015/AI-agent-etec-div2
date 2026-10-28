import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the institutional hero and main navigation', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /conectando estudantes, famílias e comunidade ao futuro/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /^início$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^cursos$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^notícias$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^admin$/i })).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /conhecer cursos/i,
      }),
    ).toBeInTheDocument()
  })

  it('shows the main course cards on the landing page', () => {
    render(<App />)

    expect(screen.getByText(/administração/i)).toBeInTheDocument()
    expect(screen.getByText(/informática/i)).toBeInTheDocument()
    expect(screen.getByText(/eletrônica/i)).toBeInTheDocument()
    expect(screen.getByText(/segurança do trabalho/i)).toBeInTheDocument()
  })

  it('shows institutional news highlights', () => {
    render(<App />)

    expect(
      screen.getByText(/processo seletivo abre inscrições para o próximo semestre/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/alunos participam de projetos com foco em inovação/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/semana institucional destaca a conexão com a comunidade/i),
    ).toBeInTheDocument()
  })

  it('renders the admin login form', () => {
    render(<App />)

    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })
})
