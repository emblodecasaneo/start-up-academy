import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "contact@startupacademy.fr",
      link: "mailto:contact@startupacademy.fr"
    },
    {
      icon: "📞",
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: "📍",
      title: "Adresse",
      content: "Station F, 5 Parvis Alan Turing, 75013 Paris",
      link: "https://maps.google.com"
    }
  ]

  return (
    <section id="contact" className="py-5 section-gray">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-primary-custom fw-semibold fs-5 mb-2">Contact</div>
          <h2 className="display-4 fw-bold mb-4 text-white">
            Prêt à lancer votre startup ?
          </h2>
          <p className="lead mx-auto text-white-50" style={{ maxWidth: '600px' }}>
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
        </div>

        <Row className="g-5">
          {/* Contact Form */}
          <Col lg={6}>
            <Card className="shadow-lg border-0 rounded-4" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
              <Card.Body className="p-4">
                <h3 className="h4 fw-bold mb-4 text-white">Envoyez-nous un message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium text-white">Nom complet</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          required
                          className="rounded-3 form-control-dark"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium text-white">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre.email@exemple.com"
                          required
                          className="rounded-3 form-control-dark"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mt-3">
                    <Form.Label className="fw-medium text-white">Entreprise (optionnel)</Form.Label>
                    <Form.Control
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="rounded-3 form-control-dark"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mt-3">
                    <Form.Label className="fw-medium text-white">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de votre projet..."
                      required
                      className="rounded-3 form-control-dark"
                    />
                  </Form.Group>
                  
                  <Button type="submit" className="btn-primary-custom w-100 mt-4">
                    <span className="me-2">✈️</span>
                    Envoyer le message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col lg={6}>
            <div>
              <h3 className="h4 fw-bold mb-4 text-white">Nos coordonnées</h3>
              <div className="mb-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    as="a" 
                    href={info.link}
                    className="mb-3 text-decoration-none border-0 shadow-sm rounded-3"
                    style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
                  >
                    <Card.Body className="p-4 d-flex align-items-start">
                      <div 
                        className="rounded-3 d-flex align-items-center justify-content-center me-3"
                        style={{ 
                          width: '50px', 
                          height: '50px', 
                          background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                          fontSize: '1.2rem'
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="fw-semibold text-white">{info.title}</div>
                        <div className="text-white-50">{info.content}</div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <Card className="rounded-4 shadow-sm" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
                <Card.Body 
                  className="d-flex align-items-center justify-content-center text-center"
                  style={{ height: '250px' }}
                >
                  <div className="text-white-50">
                    <div style={{ fontSize: '3rem' }} className="mb-2">📍</div>
                    <p className="mb-0">Carte interactive</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact 