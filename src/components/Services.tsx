import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

const Services = () => {
  const services = [
    {
      icon: "💡",
      title: "Idéation & Validation",
      description: "Transformez vos idées en concepts viables adaptés au marché camerounais et africain.",
      features: ["Étude de marché local", "Validation d'idée", "Business model FCFA"]
    },
    {
      icon: "🚀",
      title: "Développement MVP",
      description: "Créez votre produit minimum viable avec nos experts camerounais et internationaux.",
      features: ["Prototypage local", "Développement agile", "Tests utilisateurs"]
    },
    {
      icon: "💰",
      title: "Levée de Fonds",
      description: "Accédez aux investisseurs camerounais, africains et internationaux pour financer votre projet.",
      features: ["Pitch deck FCFA", "Réseau investisseurs", "Due diligence locale"]
    },
    {
      icon: "👥",
      title: "Team Building",
      description: "Constituez une équipe solide avec les meilleurs talents camerounais et africains.",
      features: ["Recrutement local", "Management interculturel", "Culture d'entreprise"]
    },
    {
      icon: "📈",
      title: "Growth Hacking",
      description: "Développez votre startup rapidement sur les marchés camerounais et africains.",
      features: ["Marketing digital local", "Analytics adaptés", "Optimisation FCFA"]
    },
    {
      icon: "🌍",
      title: "Expansion Africaine",
      description: "Étendez votre business dans la sous-région CEMAC et en Afrique de l'Ouest.",
      features: ["Stratégie pan-africaine", "Partenariats régionaux", "Réglementation OHADA"]
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
            De l'idée au succès, nous vous accompagnons à chaque étape de votre parcours entrepreneurial au Cameroun.
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
              <div className="float-animation mb-3" style={{ fontSize: '3rem' }}>🇨🇲</div>
              <h3 className="h4 fw-bold mb-3 text-white">
                Prêt à lancer votre startup au Cameroun ?
              </h3>
              <p className="mb-4 text-white" style={{ opacity: '0.8' }}>
                Discutons de votre projet et définissons ensemble la stratégie parfaite pour le marché camerounais.
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