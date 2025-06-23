import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Ngono",
      role: "CEO, TechCamer",
      company: "Startup FinTech",
      image: "👩‍💼",
      content: "Grâce à Startup Academy, j'ai pu lever 500 millions FCFA en seulement 8 mois. L'accompagnement personnalisé et le réseau d'investisseurs camerounais sont exceptionnels.",
      rating: 5,
      metrics: "500M FCFA levés"
    },
    {
      name: "Thomas Mbarga",
      role: "Fondateur, EcoTech Cameroun",
      company: "AgriTech",
      image: "👨‍💻",
      content: "L'expertise technique et business de l'équipe m'a permis de développer un MVP adapté au marché camerounais et de trouver mes premiers clients à Douala et Yaoundé.",
      rating: 5,
      metrics: "150M FCFA ARR"
    },
    {
      name: "Sophie Atangana",
      role: "Co-fondatrice, HealthApp CM",
      company: "HealthTech",
      image: "👩‍⚕️",
      content: "Le mentorat et les formations m'ont donné la confiance nécessaire pour piloter une équipe de 25 personnes. Startup Academy a transformé ma vision entrepreneuriale !",
      rating: 5,
      metrics: "25 employés"
    },
    {
      name: "Alexandre Fouda",
      role: "CEO, FoodTech Pro CM",
      company: "FoodTech",
      image: "👨‍🍳",
      content: "Leur approche méthodique et leurs outils m'ont aidé à structurer mon business model et à scaler rapidement sur 5 villes du Cameroun et 2 pays de la CEMAC.",
      rating: 5,
      metrics: "5 villes + 2 pays"
    }
  ]

  return (
    <section id="testimonials" className="py-5 section-dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-primary-custom fw-semibold fs-5 mb-2 fade-in-down">Témoignages</div>
          <h2 className="display-4 fw-bold mb-4 text-white fade-in-up delay-1">
            Ce que disent nos entrepreneurs camerounais
          </h2>
          <p className="lead mx-auto text-white fade-in-up delay-2" style={{ maxWidth: '600px', opacity: '0.8' }}>
            Découvrez comment Startup Academy a transformé la vie de centaines d'entrepreneurs à travers le Cameroun.
          </p>
        </div>

        {/* Testimonials Grid */}
        <Row className="g-4 mb-5">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={6}>
              <Card className={`testimonial-card h-100 fade-in-up delay-${(index % 2) + 1}`}>
                <Card.Body className="p-4">
                  {/* Quote mark */}
                  <div className="position-absolute top-0 end-0 p-3">
                    <span className="display-4 text-primary-custom opacity-50 rotate-in">"</span>
                  </div>

                  {/* Rating */}
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-warning scale-in" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="mb-4">
                    <p className="text-white mb-0" style={{ opacity: '0.9' }}>"{testimonial.content}"</p>
                  </blockquote>

                  {/* Metrics */}
                  <Badge 
                    className="mb-3 p-2 fw-semibold glow-animation"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))', 
                      color: 'var(--secondary-dark)',
                      fontSize: '0.9rem'
                    }}
                  >
                    <span className="bounce-animation">📈</span> {testimonial.metrics}
                  </Badge>

                  {/* Author */}
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 float-animation"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                        fontSize: '1.2rem',
                        animationDelay: `${index * 0.3}s`
                      }}
                    >
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="fw-semibold text-white">{testimonial.name}</div>
                      <div className="small text-white" style={{ opacity: '0.7' }}>{testimonial.role}</div>
                      <div className="small text-primary-custom">{testimonial.company}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats */}
        <Card className="gradient-bg text-white rounded-4 scale-in delay-5">
          <Card.Body className="p-5">
            <Row className="g-4 text-center">
              <Col md={3}>
                <div className="fade-in-up delay-1">
                  <div className="display-4 fw-bold mb-2 text-primary-custom stat-number">200+</div>
                  <div className="text-white" style={{ opacity: '0.8' }}>Startups accompagnées</div>
                </div>
              </Col>
              <Col md={3}>
                <div className="fade-in-up delay-2">
                  <div className="display-4 fw-bold mb-2 text-primary-custom stat-number">92%</div>
                  <div className="text-white" style={{ opacity: '0.8' }}>Taux de satisfaction</div>
                </div>
              </Col>
              <Col md={3}>
                <div className="fade-in-up delay-3">
                  <div className="display-4 fw-bold mb-2 text-primary-custom stat-number">15M+ FCFA</div>
                  <div className="text-white" style={{ opacity: '0.8' }}>Fonds levés</div>
                </div>
              </Col>
              <Col md={3}>
                <div className="fade-in-up delay-4">
                  <div className="display-4 fw-bold mb-2 text-primary-custom stat-number">4.8/5</div>
                  <div className="text-white" style={{ opacity: '0.8' }}>Note moyenne</div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}

export default Testimonials 