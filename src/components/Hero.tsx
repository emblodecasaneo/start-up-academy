import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap'

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <div className="text-center text-white">
          {/* Hero Content */}
          <div className="mb-5 fade-in-up">
            <h1 className="display-2 fw-bold mb-4">
              Transformez votre idée en <span className="text-gradient">startup à succès</span>
            </h1>
            <p className="lead fs-3 mb-5 mx-auto" style={{ maxWidth: '700px', opacity: '0.9' }}>
              Rejoignez l'académie #1 en France pour entrepreneurs ambitieux. 
              Formation, mentorat et financement pour concrétiser vos projets.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button size="lg" className="btn-primary-custom px-4 py-3">
                Commencer gratuitement
              </Button>
              <Button size="lg" variant="outline-light" className="btn-outline-custom px-4 py-3">
                Voir la démo
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <Row className="g-4 mt-5">
            <Col md={3}>
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="display-4 fw-bold text-primary-custom mb-2">500+</div>
                  <div className="text-white">Startups lancées</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="display-4 fw-bold text-primary-custom mb-2">€50M+</div>
                  <div className="text-white">Fonds levés</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="display-4 fw-bold text-primary-custom mb-2">95%</div>
                  <div className="text-white">Taux de succès</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="display-4 fw-bold text-primary-custom mb-2">24/7</div>
                  <div className="text-white">Support expert</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Hero 