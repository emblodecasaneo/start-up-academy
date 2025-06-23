import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = () => {
  const [expanded, setExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Accueil', href: '#home' },
    { id: 'about', label: 'À propos', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'features', label: 'Fonctionnalités', href: '#features' },
    { id: 'testimonials', label: 'Témoignages', href: '#testimonials' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100 // Offset pour le header fixe

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      // Si on est tout en haut, activer home
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Appel initial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, sectionId: string) => {
    setActiveSection(sectionId)
    setExpanded(false)
    
    // Smooth scroll vers la section
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      variant="dark"
      className="navbar-dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="fw-bold fs-3 text-primary-custom fade-in-down"
          onClick={() => handleNavClick('#home', 'home')}
        >
          <span className="float-animation">🚀</span> Startup Academy
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item, index) => (
              <div key={item.id} className="position-relative">
                <Nav.Link 
                  href={item.href}
                  className={`mx-2 fade-in-right delay-${index + 1} ${
                    activeSection === item.id 
                      ? 'text-primary-custom fw-semibold' 
                      : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href, item.id)
                  }}
                  style={{
                    transition: 'all 0.3s ease',
                    transform: activeSection === item.id ? 'translateY(-2px)' : 'translateY(0)'
                  } as React.CSSProperties}
                >
                  {item.label}
                </Nav.Link>
                {activeSection === item.id && (
                  <span 
                    className="position-absolute w-100 glow-animation"
                    style={{
                      bottom: '-5px',
                      left: '0',
                      height: '2px',
                      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                      borderRadius: '2px'
                    } as React.CSSProperties}
                  />
                )}
              </div>
            ))}
            <Button 
              href="#contact" 
              className="btn-primary-custom ms-3 pulse-animation"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact', 'contact')
              }}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header 