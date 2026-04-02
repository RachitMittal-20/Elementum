import Container from './Container';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './NewsletterSection.css';

function NewsletterSection() {
  const ref = useScrollAnimation(0.12);

  return (
    <section className="newsletter-band" ref={ref}>
      <Container className="newsletter-band__container">
        <svg
          className="newsletter-band__scribble"
          viewBox="0 0 220 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M8 62C34 30 70 18 112 24C154 30 182 16 210 2" />
          <path d="M44 82C70 56 104 44 138 46C164 48 188 36 212 18" />
        </svg>

        <div className="newsletter-band__copy">
          <h2>
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p>To make your stay special and even more memorable</p>
          <a href="#" className="newsletter-band__button">
            Subscribe Now
          </a>
        </div>

        <div className="newsletter-band__blob" aria-hidden="true" />
      </Container>
    </section>
  );
}

export default NewsletterSection;
