import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Features = () => {
  const features = [
    {
      icon: "🎓",
      title: "Formation Continue",
      description: "Accédez à plus de 100 heures de contenu exclusif créé par des entrepreneurs à succès."
    },
    {
      icon: "💬",
      title: "Mentorat Personnel",
      description: "Bénéficiez d'un accompagnement one-to-one avec des mentors expérimentés."
    },
    {
      icon: "☁️",
      title: "Plateforme Cloud",
      description: "Tous vos outils et ressources centralisés dans une plateforme intuitive."
    },
    {
      icon: "🛡️",
      title: "Garantie Succès",
      description: "Nous nous engageons sur vos résultats avec notre garantie de satisfaction."
    },
    {
      icon: "🏆",
      title: "Réseau d'Alumni",
      description: "Rejoignez une communauté de 500+ entrepreneurs qui ont réussi leur projet."
    },
    {
      icon: "❤️",
      title: "Support 24/7",
      description: "Notre équipe est disponible pour vous accompagner à tout moment."
    }
  ]

  return (
    <section id="features" className="py-5 section-gray">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-primary-custom fw-semibold fs-5 mb-2 fade-in-down">Fonctionnalités</div>
          <h2 className="display-4 fw-bold mb-4 text-white fade-in-up delay-1">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="lead mx-auto text-white fade-in-up delay-2" style={{ maxWidth: '600px', opacity: '0.8' }}>
            Notre plateforme intègre tous les outils et ressources nécessaires pour transformer votre idée en entreprise prospère.
          </p>
        </div>

        {/* Features Grid */}
        <Row className="g-4 mb-5">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <div className={`text-center h-100 fade-in-up delay-${(index % 3) + 1}`}>
                {/* Icon */}
                <div 
                  className="mx-auto rounded-4 d-flex align-items-center justify-content-center mb-4 animated-icon float-animation"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                    fontSize: '2rem',
                    color: 'var(--secondary-dark)',
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="h5 fw-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white" style={{ opacity: '0.8' }}>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div className="text-center fade-in-up delay-5">
          <Card className="d-inline-block shadow-lg border-0 rounded-4 glow-animation" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
            <Card.Body className="p-5">
              <div className="bounce-animation mb-3" style={{ fontSize: '3rem' }}>🚀</div>
              <h3 className="h4 fw-bold mb-3 text-white">
                Prêt à commencer votre aventure entrepreneuriale ?
              </h3>
              <p className="mb-4 text-white" style={{ opacity: '0.8' }}>
                Rejoignez dès maintenant des milliers d'entrepreneurs qui ont choisi Startup Academy.
              </p>
              <Button className="btn-primary-custom pulse-animation">
                Commencer gratuitement
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Features 