import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Adresse",
      details: ["Akwa, Douala", "Bastos, Yaoundé", "Cameroun"]
    },
    {
      icon: "📞",
      title: "Téléphone",
      details: ["+237 6XX XXX XXX", "+237 2XX XXX XXX"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["contact@startupacademy.cm", "info@startupacademy.cm"]
    },
    {
      icon: "🕒",
      title: "Horaires",
      details: ["Lun - Ven: 8h - 18h", "Sam: 9h - 15h", "Fermé dimanche"]
    }
  ]

  return (
    <section id="contact" className="py-5 section-gray">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-primary-custom fw-semibold fs-5 mb-2 fade-in-down">Contact</div>
          <h2 className="display-4 fw-bold mb-4 text-white fade-in-up delay-1">
            Parlons de votre projet
          </h2>
          <p className="lead mx-auto text-white fade-in-up delay-2" style={{ maxWidth: '600px', opacity: '0.8' }}>
            Prêt à transformer votre idée en startup à succès ? Contactez-nous dès aujourd'hui 
            pour une consultation gratuite adaptée au marché camerounais.
          </p>
        </div>

        <Row className="g-5">
          {/* Contact Info */}
          <Col lg={5}>
            <div className="fade-in-left delay-1">
              <h3 className="h4 fw-bold mb-4 text-white">
                Startup Academy Cameroun
              </h3>
              <p className="text-white mb-4" style={{ opacity: '0.8' }}>
                Nous sommes là pour vous accompagner dans votre parcours entrepreneurial. 
                N'hésitez pas à nous contacter pour discuter de vos projets.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className={`card-custom border-0 fade-in-up delay-${index + 1}`}>
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start">
                        <div 
                          className="flex-shrink-0 rounded-3 d-flex align-items-center justify-content-center me-3"
                          style={{ 
                            width: '50px', 
                            height: '50px', 
                            background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                            fontSize: '1.5rem'
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="fw-semibold mb-2 text-white">{item.title}</h5>
                          {item.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="small text-white mb-1" style={{ opacity: '0.7' }}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <h5 className="fw-semibold mb-3 text-white">Suivez-nous</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-primary-custom hover-scale" style={{ fontSize: '1.5rem' }}>📘</a>
                  <a href="#" className="text-primary-custom hover-scale" style={{ fontSize: '1.5rem' }}>📷</a>
                  <a href="#" className="text-primary-custom hover-scale" style={{ fontSize: '1.5rem' }}>🐦</a>
                  <a href="#" className="text-primary-custom hover-scale" style={{ fontSize: '1.5rem' }}>💼</a>
                  <a href="#" className="text-primary-custom hover-scale" style={{ fontSize: '1.5rem' }}>📱</a>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Card className="card-custom border-0 fade-in-right delay-2">
              <Card.Body className="p-5">
                <h3 className="h4 fw-bold mb-4 text-white">
                  Envoyez-nous un message
                </h3>
                
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-white fw-semibold">Prénom *</Form.Label>
                        <Form.Control 
                          type="text" 
                          className="form-control-dark"
                          placeholder="Votre prénom"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-white fw-semibold">Nom *</Form.Label>
                        <Form.Control 
                          type="text"
                          className="form-control-dark"
                          placeholder="Votre nom"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-white fw-semibold">Email *</Form.Label>
                        <Form.Control 
                          type="email"
                          className="form-control-dark"
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-white fw-semibold">Téléphone</Form.Label>
                        <Form.Control 
                          type="tel"
                          className="form-control-dark"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="text-white fw-semibold">Type de projet</Form.Label>
                        <Form.Select className="form-control-dark">
                          <option>Sélectionnez votre domaine</option>
                          <option>FinTech</option>
                          <option>AgriTech</option>
                          <option>HealthTech</option>
                          <option>EdTech</option>
                          <option>E-commerce</option>
                          <option>Autre</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="text-white fw-semibold">Message *</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={5}
                          className="form-control-dark"
                          placeholder="Décrivez votre projet et vos besoins..."
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <Form.Check 
                      type="checkbox"
                      id="privacy"
                      label="J'accepte d'être contacté(e) par Startup Academy Cameroun concernant mon projet"
                      className="text-white mb-4"
                      style={{ opacity: '0.8' }}
                      required
                    />
                    
                    <Button 
                      type="submit" 
                      className="btn-primary-custom btn-lg w-100 pulse-animation"
                    >
                      Envoyer le message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact 