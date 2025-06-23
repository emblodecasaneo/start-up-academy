import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'

const About = () => {
  const features = [
    "Accompagnement personnalisé par des experts",
    "Réseau d'investisseurs et de mentors",
    "Programmes de formation spécialisés",
    "Accès à des outils et ressources premium"
  ]

  return (
    <section id="about" className="py-5 section-gray">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left side - Image */}
          <Col lg={6}>
            <div className="position-relative">
              <div 
                className="rounded-4 shadow-lg d-flex align-items-center justify-content-center"
                style={{ 
                  height: '400px',
                  background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)'
                }}
              >
                <div style={{ fontSize: '5rem' }}>🎯</div>
              </div>
              <div 
                className="position-absolute bottom-0 end-0 translate-middle-y translate-middle-x rounded-4 shadow-lg d-flex align-items-center justify-content-center text-white"
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                }}
              >
                <span style={{ fontSize: '2rem' }}>✨</span>
              </div>
            </div>
          </Col>

          {/* Right side - Content */}
          <Col lg={6}>
            <div className="text-primary-custom fw-semibold fs-5 mb-2">À propos de nous</div>
            <h2 className="display-4 fw-bold mb-4 text-white">
              L'académie qui propulse vos idées vers le succès
            </h2>
            <p className="lead mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Startup Academy est la première plateforme française dédiée à l'accompagnement complet des entrepreneurs. 
              Nous combinons expertise technique, mentorat personnalisé et accès au financement pour transformer 
              vos idées innovantes en entreprises prospères.
            </p>

            {/* Features list */}
            <ListGroup variant="flush" className="mb-4">
              {features.map((feature, index) => (
                <ListGroup.Item key={index} className="border-0 px-0 d-flex align-items-center bg-transparent">
                  <span 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center fw-bold"
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                      color: 'var(--secondary-dark)',
                      fontSize: '12px'
                    }}
                  >
                    ✓
                  </span>
                  <span className="text-white">{feature}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* CTA */}
            <Button className="btn-primary-custom">
              En savoir plus
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About 