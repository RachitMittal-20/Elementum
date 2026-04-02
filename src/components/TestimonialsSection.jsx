import Container from './Container';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './TestimonialsSection.css';

const TESTIMONIAL_AVATARS = [
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=face', x: '3%', y: '58%', size: '40px', delay: '0.1s' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face', x: '8%', y: '26%', size: '54px', delay: '0.5s' },
  { src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=220&h=220&fit=crop&crop=face', x: '17%', y: '75%', size: '112px', delay: '0.9s' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face', x: '84%', y: '46%', size: '40px', delay: '0.35s' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=180&h=180&fit=crop&crop=face', x: '92%', y: '30%', size: '66px', delay: '0.8s' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180&h=180&fit=crop&crop=face', x: '78%', y: '62%', size: '62px', delay: '1.1s' },
  { src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=240&h=240&fit=crop&crop=face', x: '90%', y: '86%', size: '122px', delay: '1.4s' },
];

function TestimonialsSection() {
  const ref = useScrollAnimation(0.12);

  return (
    <section className="testimonials-showcase" ref={ref}>
      <Container className="testimonials-showcase__container">
        {TESTIMONIAL_AVATARS.map((avatar) => (
          <div
            key={`${avatar.src}-${avatar.x}-${avatar.y}`}
            className="testimonials-showcase__avatar"
            style={{
              '--x': avatar.x,
              '--y': avatar.y,
              '--size': avatar.size,
              '--delay': avatar.delay,
            }}
          >
            <img src={avatar.src} alt="Customer portrait" />
          </div>
        ))}

        <div className="testimonials-showcase__copy">
          <h2 className="testimonials-showcase__title">
            <span className="testimonials-showcase__pill">What</span> our customer
            <br />
            says <span className="testimonials-showcase__underline">About Us</span>
          </h2>

          <div className="testimonials-showcase__card">
            <span className="testimonials-showcase__quote testimonials-showcase__quote--open">&ldquo;</span>
            <p>
              Elementum delivered the site within the timeline they requested. In the
              end, the client found a 50% increase in traffic within days since its
              launch. They also had an impressive ability to use technologies the
              company hadn&apos;t used, which proved to be easy to use and reliable.
            </p>
            <span className="testimonials-showcase__quote testimonials-showcase__quote--close">&rdquo;</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
