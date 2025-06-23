import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Accompagnement Startup", href: "#services" },
        { name: "Levée de Fonds", href: "#services" },
        { name: "Formation", href: "#services" },
        { name: "Mentorat", href: "#services" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Webinaires", href: "#" },
        { name: "Success Stories", href: "#testimonials" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#about" },
        { name: "Équipe", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Presse", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "#contact" },
        { name: "FAQ", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "🔗" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" }
  ]

  return (
    <footer className="footer-section py-5">
      <Container>
        <Row className="g-4 mb-5">
          {/* About */}
          <Col lg={4}>
            <h5 className="fw-bold mb-3 text-primary-custom">Startup Academy</h5>
            <p className="text-white" style={{ opacity: '0.8' }}>
              L'académie de référence pour transformer vos idées en entreprises prospères. 
              Formation, mentorat et accompagnement personnalisé.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-primary-custom"
                  style={{ width: '45px', height: '45px' }}
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </Col>

          {/* Links */}
          {footerSections.map((section, index) => (
            <Col key={index} lg={2}>
              <h6 className="fw-semibold mb-3 text-white">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a
                      href={link.href}
                      className="text-white text-decoration-none"
                      style={{ opacity: '0.8' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Newsletter */}
          <Col lg={2}>
            <h6 className="fw-semibold mb-3 text-white">Newsletter</h6>
            <p className="small text-white" style={{ opacity: '0.8' }}>
              Recevez nos conseils startup chaque semaine
            </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control 
                  type="email" 
                  placeholder="Votre email"
                  className="form-control-dark"
                />
              </Form.Group>
              <Button className="btn-primary-custom w-100">
                S'abonner
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom */}
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-white" style={{ opacity: '0.6' }}>
              © 2024 Startup Academy. Tous droits réservés.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex gap-3 justify-content-md-end">
              <a href="#" className="text-white text-decoration-none" style={{ opacity: '0.6' }}>Mentions légales</a>
              <a href="#" className="text-white text-decoration-none" style={{ opacity: '0.6' }}>Confidentialité</a>
              <a href="#" className="text-white text-decoration-none" style={{ opacity: '0.6' }}>Cookies</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer 