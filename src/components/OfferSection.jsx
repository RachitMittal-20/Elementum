import Container from './Container';
import HighlightText from './HighlightText';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './OfferSection.css';

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
  },
];

function OfferItem({ tag, title }) {
  return (
    <div className="offer-item">
      <span className="offer-item__tag">{tag}</span>
      <span className="offer-item__title">{title}</span>
      <span className="offer-item__arrow">&rarr;</span>
    </div>
  );
}

function OfferSection() {
  const ref = useScrollAnimation();

  return (
    <section className="section-offer" ref={ref}>
      <Container>
        <h2>
          <HighlightText>What</HighlightText> we{' '}
          <HighlightText variant="yellow">can</HighlightText>
          <br />
          <HighlightText>offer</HighlightText> you!
        </h2>
        <div className="offer-list">
          {OFFERS.map((offer, index) => (
            <OfferItem key={index} tag={offer.tag} title={offer.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default OfferSection;
