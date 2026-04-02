import Container from './Container';
import HighlightText from './HighlightText';
import ReadMoreLink from './ReadMoreLink';
import DecorativeBlob from './DecorativeBlob';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './ProgressSection.css';

function ProgressSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-progress" ref={ref}>
      <Container>
        <div className="progress-grid">
          <div className="progress-image">
            <DecorativeBlob
              type="triangle"
              style={{ top: '-20px', left: '-15px' }}
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
              alt="Working on progress"
            />
          </div>
          <div className="progress-text">
            <h2>
              See how we can help you{' '}
              <HighlightText>progress</HighlightText>
            </h2>
            <p>
              We add a layer of fearless insights and action that allows change makers
              to accelerate their progress in areas such as brand, design digital,
              comms and social research.
            </p>
            <ReadMoreLink />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProgressSection;
