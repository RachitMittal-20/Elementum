import Container from './Container';
import HighlightText from './HighlightText';
import ReadMoreLink from './ReadMoreLink';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './AboutSection.css';

function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-about" ref={ref}>
      <Container>
        <div className="about-grid">
          <div className="about-text">
            <h2>
              <HighlightText>Tomorrow</HighlightText> should be better than{' '}
              <HighlightText variant="yellow">today</HighlightText>
            </h2>
            <p>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to play
              things safe.
            </p>
            <ReadMoreLink />
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
