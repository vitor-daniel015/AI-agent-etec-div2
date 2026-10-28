import './App.css'

const stats = [
  { value: '12', label: 'cursos técnicos' },
  { value: '3.000+', label: 'estudantes atendidos' },
  { value: '90%', label: 'foco em prática profissional' },
  { value: '24/7', label: 'acesso a informações' },
]

const courses = [
  {
    name: 'Administração',
    badge: 'Gestão e empreendedorismo',
    text: 'Desenvolve competências em planejamento, finanças, processos e relações de trabalho.',
  },
  {
    name: 'Informática',
    badge: 'Tecnologia e sistemas',
    text: 'Combina lógica, programação, redes e suporte técnico para formar profissionais digitais.',
  },
  {
    name: 'Eletrônica',
    badge: 'Automação e manutenção',
    text: 'Explora circuitos, sensores, automação industrial e soluções técnicas para o mercado.',
  },
  {
    name: 'Segurança do Trabalho',
    badge: 'Qualidade e prevenção',
    text: 'Conecta conhecimentos de saúde, segurança e gestão para ambientes produtivos mais seguros.',
  },
]

const news = [
  {
    title: 'Processo seletivo abre inscrições para o próximo semestre',
    summary: 'A escola reforça o atendimento às famílias com orientações claras e apoio completo na matrícula.',
  },
  {
    title: 'Alunos participam de projetos com foco em inovação',
    summary: 'As atividades práticas conectam teoria e mercado, preparando estudantes para desafios reais.',
  },
  {
    title: 'Semana institucional destaca a conexão com a comunidade',
    summary: 'Atividades abertas ao público reforçam a presença da ETEC como referência local.',
  },
]

const features = [
  'Ambiente moderno e acolhedor',
  'Contato direto com estudantes e famílias',
  'Conteúdo institucional em layout responsivo',
  'Base preparada para expansão de cursos e notícias',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">ET</div>
          <div>
            <p className="brand-name">ETEC</p>
            <span className="brand-subtitle">Educação Profissional</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#cursos">Cursos</a>
          <a href="#noticias">Notícias</a>
          <a href="#admin">Admin</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Formação com propósito</p>
            <h1>Conectando estudantes, famílias e comunidade ao futuro.</h1>
            <p className="lead">
              A ETEC oferece uma formação técnica de excelência, com foco em desenvolvimento profissional,
              inovação e acesso à educação de qualidade.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#cursos">Conhecer cursos</a>
              <a className="secondary-button" href="#admin">Acesso administrativo</a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Resumo institucional">
            <div className="panel-card">
              <p className="panel-label">Atuação</p>
              <h2>Educação técnica com visão de mercado</h2>
              <ul>
                {features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="stats-section" aria-label="Estatísticas da escola">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="section" id="cursos">
          <div className="section-heading">
            <p className="eyebrow">Cursos técnicos</p>
            <h2>Formação profissional com foco em oportunidades reais.</h2>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.name}>
                <span className="course-badge">{course.badge}</span>
                <h3>{course.name}</h3>
                <p>{course.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="noticias">
          <div className="section-heading">
            <p className="eyebrow">Notícias e destaques</p>
            <h2>Acompanhe as principais novidades da comunidade escolar.</h2>
          </div>

          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <span className="news-tag">Institucional</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="login-section" id="admin">
          <div className="login-copy">
            <p className="eyebrow">Área administrativa</p>
            <h2>Gestão simples para publicar conteúdos e acompanhar a escola.</h2>
            <p>
              A estrutura pensada para evolução incremental permite cadastrar notícias, manter informações
              institucionais e preparar o próximo ciclo de desenvolvimento.
            </p>
          </div>

          <form className="login-card" aria-label="Login administrativo">
            <label>
              Usuário
              <input type="text" placeholder="Digite seu usuário" />
            </label>
            <label>
              Senha
              <input type="password" placeholder="Digite sua senha" />
            </label>
            <button type="button">Entrar</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>ETEC | Educação técnica conectada ao futuro.</p>
      </footer>
    </div>
  )
}

export default App
