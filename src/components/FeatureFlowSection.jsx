import Container from './Container';
import ReadMoreLink from './ReadMoreLink';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './FeatureFlowSection.css';

const OFFERS = [
  {
    tag: 'Office of multiple\ninterest content',
    title: 'Colaborative & partnership',
  },
  {
    tag: 'The hanger US Air force\ndigital experiments',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
    badge: true,
  },
];

function FeatureFlowSection() {
  const ref = useScrollAnimation(0.12);

  return (
    <section className="feature-flow" ref={ref}>
      <Container className="feature-flow__container">
        <div className="feature-flow__glow" aria-hidden="true" />

        <svg
          className="feature-flow__line"
          viewBox="0 0 1080 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="feature-flow__line-shadow"
            d="M344 380C426 336 522 364 612 430C686 484 758 486 806 420C858 348 888 282 964 286C1020 290 1060 322 1084 356M160 824C212 746 318 724 410 746C514 772 580 806 630 794C680 782 642 644 720 624C828 596 944 658 1086 634"
          />
          <path
            className="feature-flow__line-main"
            d="M344 380C426 336 522 364 612 430C686 484 758 486 806 420C858 348 888 282 964 286C1020 290 1060 322 1084 356M160 824C212 746 318 724 410 746C514 772 580 806 630 794C680 782 642 644 720 624C828 596 944 658 1086 634"
          />
        </svg>

        <div className="feature-flow__scene feature-flow__scene--top">
          <div className="feature-flow__copy feature-flow__copy--top">
            <h2 className="feature-flow__heading">
              Tomorrow should
              <br />
              be better than <span className="feature-flow__pill">today</span>
            </h2>
            <p>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to play
              things safe.
            </p>
            <ReadMoreLink />
          </div>

          <div className="feature-flow__image feature-flow__image--meeting">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=900&fit=crop"
              alt="Business meeting"
            />
          </div>

          <div className="feature-flow__kite" aria-hidden="true" />
        </div>

        <div className="feature-flow__scene feature-flow__scene--middle">
          <div className="feature-flow__triangle feature-flow__triangle--left" aria-hidden="true" />

          <div className="feature-flow__image feature-flow__image--workspace">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=900&fit=crop"
              alt="Creative team at work"
            />
          </div>

          <div className="feature-flow__triangle feature-flow__triangle--bottom" aria-hidden="true" />

          <div className="feature-flow__copy feature-flow__copy--progress">
            <h2 className="feature-flow__heading feature-flow__heading--progress">
              <span className="feature-flow__pill">See</span> how we can
              <br />
              help you <span className="feature-flow__underline">progress</span>
            </h2>
            <p>
              We add a layer of fearless insights and action that allows change makers
              to accelerate their progress in areas such as brand, digital, comms and
              social research.
            </p>
            <ReadMoreLink />
          </div>
        </div>

        <div className="feature-flow__offer">
          <svg
            className="feature-flow__offer-line"
            viewBox="0 0 380 150"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M378 2C360 26 306 34 252 18C196 2 142 18 116 52C88 88 92 136 66 144C44 150 26 138 24 122" />
          </svg>

          <h2 className="feature-flow__offer-title">
            What we <span className="feature-flow__pill">can</span>
            <br />
            <span className="feature-flow__underline">offer</span> you!
          </h2>

          <div className="feature-flow__offer-list">
            {OFFERS.map((offer) => (
              <div key={offer.title} className="feature-flow__offer-row">
                <span className="feature-flow__offer-tag">{offer.tag}</span>
                <span className="feature-flow__offer-name">{offer.title}</span>
                {offer.badge ? <span className="feature-flow__offer-badge" aria-hidden="true" /> : null}
                <span className="feature-flow__offer-arrow">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeatureFlowSection;
