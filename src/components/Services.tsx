import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

const Services = () => {
  const services = [
    {
      icon: "💡",
      title: "Idéation & Validation",
      description: "Transformez vos idées en concepts viables avec notre méthodologie éprouvée.",
      features: ["Market research", "Validation d'idée", "Business model"]
    },
    {
      icon: "🚀",
      title: "Développement MVP",
      description: "Créez votre produit minimum viable avec l'aide de nos experts techniques.",
      features: ["Prototypage", "Développement", "Tests utilisateurs"]
    },
    {
      icon: "💰",
      title: "Levée de Fonds",
      description: "Accédez à notre réseau d'investisseurs et préparez votre pitch parfait.",
      features: ["Pitch deck", "Réseau investisseurs", "Due diligence"]
    },
    {
      icon: "👥",
      title: "Team Building",
      description: "Constituez l'équipe parfaite grâce à notre réseau de talents.",
      features: ["Recrutement", "Management", "Culture d'entreprise"]
    },
    {
      icon: "📈",
      title: "Growth Hacking",
      description: "Développez votre startup rapidement avec nos stratégies de croissance.",
      features: ["Marketing digital", "Analytics", "Optimisation"]
    },
    {
      icon: "🌍",
      title: "Expansion Internationale",
      description: "Étendez votre business à l'international avec notre accompagnement.",
      features: ["Stratégie globale", "Partenariats", "Réglementation"]
    }
  ]

  return (
    <section id="services" className="py-5 section-dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-primary-custom fw-semibold fs-5 mb-2 fade-in-down">Services</div>
          <h2 className="display-4 fw-bold mb-4 text-white fade-in-up delay-1">
            Nos services d'accompagnement
          </h2>
          <p className="lead mx-auto text-white fade-in-up delay-2" style={{ maxWidth: '600px', opacity: '0.8' }}>
            De l'idée au succès, nous vous accompagnons à chaque étape de votre parcours entrepreneurial.
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className={`card-custom h-100 fade-in-up delay-${(index % 3) + 1}`}>
                <Card.Body className="p-4 text-center">
                  {/* Icon */}
                  <div 
                    className="service-icon mx-auto mb-3 animated-icon"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                      color: 'var(--secondary-dark)',
                      fontSize: '2rem'
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="h5 fw-bold mb-3 text-white">{service.title}</h3>

                  {/* Description */}
                  <p className="text-white mb-4" style={{ opacity: '0.8' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {service.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex}
                        className={`p-2 fw-normal scale-in delay-${featureIndex + 1}`}
                        style={{ 
                          background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                          color: 'var(--secondary-dark)',
                          fontSize: '0.8rem'
                        }}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div className="text-center mt-5 fade-in-up delay-5">
          <Card className="d-inline-block shadow-lg border-0 rounded-4 pulse-animation" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
            <Card.Body className="p-5">
              <div className="float-animation mb-3" style={{ fontSize: '3rem' }}>🎯</div>
              <h3 className="h4 fw-bold mb-3 text-white">
                Prêt à lancer votre startup ?
              </h3>
              <p className="mb-4 text-white" style={{ opacity: '0.8' }}>
                Discutons de votre projet et définissons ensemble la stratégie parfaite.
              </p>
              <button className="btn btn-primary-custom btn-lg">
                Réserver une consultation gratuite
              </button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Services 