import { Container, Row, Col, Card } from 'react-bootstrap'

const About = () => {
  const features = [
    {
      icon: "🎯",
      title: "Vision Camerounaise",
      description: "Développer l'écosystème entrepreneurial camerounais avec des solutions adaptées au marché local."
    },
    {
      icon: "💡",
      title: "Innovation Africaine",
      description: "Encourager l'innovation technologique et sociale qui répond aux défis du Cameroun et de l'Afrique."
    },
    {
      icon: "🤝",
      title: "Réseau Local",
      description: "Connecter les entrepreneurs avec les investisseurs, mentors et partenaires camerounais."
    },
    {
      icon: "📈",
      title: "Croissance Durable",
      description: "Accompagner la création d'entreprises pérennes qui contribuent au développement économique du pays."
    }
  ]

  return (
    <section id="about" className="py-5 section-gray">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-primary-custom fw-semibold fs-5 mb-2 fade-in-down">À propos</div>
          <h2 className="display-4 fw-bold mb-4 text-white fade-in-up delay-1">
            L'académie startup du Cameroun
          </h2>
          <p className="lead mx-auto text-white fade-in-up delay-2" style={{ maxWidth: '600px', opacity: '0.8' }}>
            Nous accompagnons les entrepreneurs camerounais dans la création et le développement 
            de startups innovantes adaptées au marché africain.
          </p>
        </div>

        <Row className="g-5 align-items-center">
          {/* Video Section */}
          <Col lg={6}>
            <div className="fade-in-left delay-1">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/XyGU2VSnbXw"
                  title="Présentation Startup Academy Cameroun"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-4"
                  style={{ minHeight: '315px' }}
                ></iframe>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center pointer-events-none">
                  <div className="bg-primary-custom text-dark rounded-circle p-3" style={{ opacity: '0.9' }}>
                    <span className="fs-3">▶️</span>
                  </div>
                </div>
              </div>
              <p className="text-center mt-3 text-white" style={{ opacity: '0.7' }}>
                🎬 Découvrez notre vision pour l'entrepreneuriat camerounais
              </p>
            </div>
          </Col>

          {/* Content */}
          <Col lg={6}>
            <div className="fade-in-right delay-2">
              <h3 className="h3 fw-bold mb-4 text-white">
                Pourquoi choisir Startup Academy Cameroun ?
              </h3>
              <p className="text-white mb-4" style={{ opacity: '0.8' }}>
                Depuis notre création, nous nous engageons à développer l'écosystème entrepreneurial 
                camerounais en offrant un accompagnement de qualité internationale adapté aux réalités locales.
              </p>

              {/* Features Grid */}
              <Row className="g-4">
                {features.map((feature, index) => (
                  <Col key={index} sm={6}>
                    <div className={`fade-in-up delay-${index + 1}`}>
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
                          {feature.icon}
                        </div>
                        <div>
                          <h5 className="fw-semibold mb-2 text-white">{feature.title}</h5>
                          <p className="small text-white mb-0" style={{ opacity: '0.7' }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Stats */}
              <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <Row className="text-center">
                  <Col sm={4}>
                    <div className="mb-3">
                      <div className="h4 fw-bold text-primary-custom mb-1">3+</div>
                      <div className="small text-white" style={{ opacity: '0.7' }}>Années d'expérience</div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="mb-3">
                      <div className="h4 fw-bold text-primary-custom mb-1">50+</div>
                      <div className="small text-white" style={{ opacity: '0.7' }}>Mentors experts</div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="mb-3">
                      <div className="h4 fw-bold text-primary-custom mb-1">10+</div>
                      <div className="small text-white" style={{ opacity: '0.7' }}>Villes couvertes</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About 