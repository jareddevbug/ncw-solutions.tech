import { useEffect, useMemo, useState } from 'react';
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import heroImage from '../assets/hero-image.png';

const services = [
  {
    eyebrow: 'Product Engineering',
    title: 'Web platforms built for launch and scale',
    description:
      'We design and ship conversion-focused websites, SaaS dashboards, and internal tools with clean architecture and measurable business outcomes.',
    highlights: ['React frontends', 'API integration', 'Scalable design systems'],
  },
  {
    eyebrow: 'Mobile Experience',
    title: 'Apps that feel fast, polished, and dependable',
    description:
      'From MVPs to mature products, we create mobile experiences that reduce friction, increase retention, and support real-world workflows.',
    highlights: ['Cross-platform delivery', 'Performance tuning', 'App store readiness'],
  },
  {
    eyebrow: 'UX Strategy',
    title: 'Journeys mapped around user trust',
    description:
      'We audit your customer path, simplify core flows, and turn complexity into interfaces that are easier to understand and easier to buy from.',
    highlights: ['UX audits', 'Wireframes and prototypes', 'Accessibility review'],
  },
  {
    eyebrow: 'Startup Support',
    title: 'A technical partner for fast-moving teams',
    description:
      'Need a team that can think with you, not just code for you? We help founders move from rough idea to launch-ready roadmap.',
    highlights: ['Discovery workshops', 'Feature prioritization', 'Fractional product guidance'],
  },
];

const projects = [
  {
    slug: 'northstar',
    category: 'Fintech',
    title: 'Northstar Treasury',
    description:
      'A finance operations dashboard that unified reporting, approvals, and cash visibility for a distributed leadership team.',
    outcome: 'Reduced weekly reporting time by 68%',
    details:
      'We redesigned the reporting flow, surfaced decision-critical metrics, and gave operators one place to move money, approve requests, and review trends.',
    signals: ['Live treasury dashboards', 'Approval workflows', 'Executive summaries'],
  },
  {
    slug: 'pilotops',
    category: 'SaaS',
    title: 'PilotOps Control Center',
    description:
      'A multi-tenant admin suite with onboarding flows, usage insights, and role-aware controls for growing customer operations.',
    outcome: 'Cut setup friction for new accounts',
    details:
      'The platform turned fragmented setup tasks into a guided launch path, helping operations teams see adoption signals and unblock customers faster.',
    signals: ['Multi-tenant controls', 'Guided onboarding', 'Usage analytics'],
  },
  {
    slug: 'carepath',
    category: 'Healthcare',
    title: 'CarePath Companion',
    description:
      'A mobile-first patient experience that simplified scheduling, reminders, and follow-up communication across the care journey.',
    outcome: 'Improved completion rates across key tasks',
    details:
      'We focused on trust, clarity, and accessibility so patients could move through important tasks with less confusion and lower drop-off.',
    signals: ['Mobile-first UX', 'Reminder system', 'Accessibility-first flows'],
  },
];

const metrics = [
  { value: '4-6 wks', label: 'for a focused MVP sprint' },
  { value: '98%', label: 'client retention on follow-on work' },
  { value: '24 hrs', label: 'average response time on active projects' },
];

const process = [
  {
    step: '01',
    title: 'Clarify the problem',
    text: 'We translate business goals, edge cases, and user pain into a practical build plan.',
  },
  {
    step: '02',
    title: 'Design the path',
    text: 'We shape content, flows, and components so the product feels coherent before development ramps up.',
  },
  {
    step: '03',
    title: 'Ship with confidence',
    text: 'We build, test, refine, and hand off a product that is ready for users instead of just ready for demo day.',
  },
];

const contactChannels = [
  { label: 'Email', value: 'ncw-solutions@ncwsolutions.tech' },
  { label: 'Availability', value: 'New projects starting April 2026' },
  { label: 'Focus', value: 'Startup websites, dashboards, and product MVPs' },
];

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState({
    type: '',
    message: '',
  });
  const [activeProject, setActiveProject] = useState(projects[0].slug);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const validationError = useMemo(() => {
    if (!formData.name.trim()) {
      return 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      return 'Please enter your email address.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      return 'Please share a short note about your project.';
    }

    return '';
  }, [formData]);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitState.type) {
      setSubmitState({ type: '', message: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validationError) {
      setSubmitState({ type: 'error', message: validationError });
      return;
    }

    setSubmitState({
      type: 'success',
      message: "Thanks for reaching out. We'll reply with the next steps soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const spotlightProject = projects.find((project) => project.slug === activeProject) ?? projects[0];

  return (
    <main className="site-shell">
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <div className="hero-copy reveal-up is-visible">
                <span className="eyebrow">NCW Solutions</span>
                <h1>Digital products that make early-stage teams look established.</h1>
                <p className="hero-lead">
                  We help startups launch faster with conversion-ready websites, intuitive
                  dashboards, and product experiences designed to win trust from day one.
                </p>
                <div className="hero-actions">
                  <Button href="#contact" className="cta-primary">
                    Start a project
                  </Button>
                  <Button href="#portfolio" variant="link" className="cta-secondary">
                    See recent work
                  </Button>
                </div>
                <div className="hero-metrics">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="metric-card">
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-visual reveal-up is-visible">
                <div className="orb orb-one"></div>
                <div className="orb orb-two"></div>
                <div className="grid-glow"></div>
                <div className="hero-panel hero-panel-main">
                  <p className="panel-label">Launch-ready stack</p>
                  <h2>Design, build, and iterate in one delivery loop.</h2>
                  <p>
                    Clear scope, thoughtful UX, and reliable implementation for teams that
                    need momentum without sacrificing quality.
                  </p>
                </div>
                <div className="hero-image-frame">
                  <img src={heroImage} alt="NCW Solutions team workspace" className="hero-image" />
                </div>
                <div className="hero-panel hero-panel-accent">
                  <span>Trusted by founders who need speed and clarity.</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ticker-section">
        <div className="ticker-track">
          <span>Conversion-focused landing pages</span>
          <span>Founder-friendly product sprints</span>
          <span>Dashboard UX systems</span>
          <span>Faster MVP delivery</span>
          <span>Accessibility-conscious design</span>
          <span>Reliable frontend execution</span>
          <span>Conversion-focused landing pages</span>
          <span>Founder-friendly product sprints</span>
        </div>
      </section>

      <section id="services" className="content-section">
        <Container>
          <div className="section-heading reveal-up" data-reveal>
            <span className="eyebrow">Services</span>
            <h2>Everything your product presence needs to feel credible.</h2>
            <p>
              We bring strategy, UX, and engineering together so your website or product
              experience looks sharp, explains itself quickly, and supports growth.
            </p>
          </div>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={service.title} md={6} xl={3}>
                <Card
                  className="info-card service-card h-100 reveal-up"
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <Card.Body>
                    <p className="card-eyebrow">{service.eyebrow}</p>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <ul className="card-list">
                      {service.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="portfolio" className="content-section section-surface">
        <Container>
          <div className="section-heading reveal-up" data-reveal>
            <span className="eyebrow">Selected Work</span>
            <h2>Built to support real teams, not just portfolio screenshots.</h2>
            <p>
              A few examples of the kinds of digital products and business outcomes we help
              our clients pursue.
            </p>
          </div>
          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.title} lg={4}>
                <Card
                  className={`info-card project-card h-100 reveal-up ${
                    activeProject === project.slug ? 'project-card-active' : ''
                  }`}
                  data-reveal
                >
                  <Card.Body>
                    <Badge bg="light" text="dark" className="project-badge">
                      {project.category}
                    </Badge>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <p className="project-outcome">{project.outcome}</p>
                    <Button
                      type="button"
                      variant="link"
                      className="project-link"
                      onClick={() => setActiveProject(project.slug)}
                    >
                      Open case study
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="spotlight-shell reveal-up" data-reveal>
            <div className="spotlight-copy">
              <span className="eyebrow">Case Study Spotlight</span>
              <h3>{spotlightProject.title}</h3>
              <p>{spotlightProject.details}</p>
              <div className="spotlight-signals">
                {spotlightProject.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </div>
            <div className="spotlight-metrics">
              <div className="spotlight-stat">
                <strong>{spotlightProject.outcome}</strong>
                <span>Outcome we optimized for</span>
              </div>
              <div className="signal-bars" aria-hidden="true">
                <div className="signal-bar signal-bar-lg"></div>
                <div className="signal-bar signal-bar-md"></div>
                <div className="signal-bar signal-bar-sm"></div>
                <div className="signal-bar signal-bar-xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="content-section">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={5}>
              <div className="section-heading section-heading-left reveal-up" data-reveal>
                <span className="eyebrow">How We Work</span>
                <h2>A practical delivery process for ambitious startup teams.</h2>
                <p>
                  We keep communication tight, decisions visible, and progress tangible so
                  you always know what is happening and why.
                </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="process-grid">
                {process.map((item, index) => (
                  <article
                    key={item.step}
                    className="process-card reveal-up"
                    data-reveal
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <span className="process-step">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="content-section section-surface">
        <Container>
          <Row className="g-4 align-items-start">
            <Col lg={5}>
              <div className="section-heading section-heading-left contact-copy reveal-up" data-reveal>
                <span className="eyebrow">Contact</span>
                <h2>Tell us what you are building, and we will help shape the next move.</h2>
                <p>
                  If you already have requirements, great. If you only have a rough idea,
                  that works too. We can turn it into a clear, buildable plan.
                </p>
              </div>
              <div className="contact-stack">
                {contactChannels.map((item, index) => (
                  <div
                    key={item.label}
                    className="contact-card reveal-up"
                    data-reveal
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={7}>
              <Card className="contact-form-card border-0 reveal-up" data-reveal>
                <Card.Body className="p-4 p-md-5">
                  <Form onSubmit={handleSubmit} noValidate>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="contactName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Jane Smith"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="contactEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jane@startup.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="contactMessage">
                          <Form.Label>Project brief</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="What are you building, who is it for, and what kind of help do you need?"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {submitState.message ? (
                      <div
                        className={`form-status ${
                          submitState.type === 'success' ? 'form-status-success' : 'form-status-error'
                        }`}
                        aria-live="polite"
                      >
                        {submitState.message}
                      </div>
                    ) : null}

                    <div className="form-actions">
                      <Button type="submit" className="cta-primary">
                        Send inquiry
                      </Button>
                      <p>No pressure. We usually reply with fit, timing, and suggested next steps.</p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
