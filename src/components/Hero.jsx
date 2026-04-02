import Container from './Container';
import './Hero.css';

const HERO_AVATARS = [
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    x: '3%',
    y: '80%',
    size: '84px',
    delay: '0s',
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    x: '13%',
    y: '72%',
    size: '108px',
    delay: '0.7s',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    x: '33%',
    y: '48%',
    size: '122px',
    delay: '1.2s',
  },
  {
    src: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
    x: '40%',
    y: '77%',
    size: '108px',
    delay: '0.4s',
  },
  {
    src: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop&crop=face',
    x: '58%',
    y: '60%',
    size: '116px',
    delay: '1.4s',
  },
  {
    src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300&h=300&fit=crop&crop=face',
    x: '67%',
    y: '73%',
    size: '92px',
    delay: '0.9s',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=320&fit=crop&crop=face',
    x: '84%',
    y: '55%',
    size: '118px',
    delay: '0.6s',
  },
  {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face',
    x: '92%',
    y: '75%',
    size: '98px',
    delay: '1.7s',
  },
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__curves" aria-hidden="true">
        <svg viewBox="0 0 180 360">
          <path
            className="hero__curve hero__curve--coral"
            d="M42 0C-2 24 -2 86 42 112C84 138 84 200 42 226C-2 252 -2 314 42 360"
          />
          <path
            className="hero__curve hero__curve--black"
            d="M92 14C138 42 138 100 92 126C48 152 48 210 92 236C138 262 138 320 92 346"
          />
        </svg>
      </div>

      <Container className="hero__shell">
        <div className="hero__copy">
          <h1 className="hero__title">
            <span className="hero__line">
              The <span className="hero__scribble-anchor">thinkers
                <svg className="hero__scribble hero__scribble--primary" viewBox="0 0 330 42" aria-hidden="true">
                  <path d="M12 24C72 18 132 16 192 18C238 20 280 22 318 20" />
                  <path d="M0 34C64 30 138 26 212 28C248 30 284 29 329 27" />
                </svg>
              </span> and
            </span>
            <span className="hero__line">
              doers were <span className="hero__pill hero__pill--pink">changing</span>
              <svg className="hero__scribble hero__scribble--secondary" viewBox="0 0 220 22" aria-hidden="true">
                <path d="M4 16C48 11 94 10 140 11C168 12 192 13 216 11" />
              </svg>
            </span>
            <span className="hero__line">
              the <span className="hero__pill hero__pill--green">status</span> Quo with
            </span>
          </h1>

          <p className="hero__subtitle">
            We are a team of strategists, designers communicators, researchers. Together,
            we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        <div className="hero__accent-purple" aria-hidden="true">
          <svg viewBox="0 0 92 124">
            <path d="M69 6C91 28 97 65 87 91C77 117 52 126 20 121L0 117L69 6Z" fill="#8750ef" />
          </svg>
        </div>

        <div className="hero__avatars">
          {HERO_AVATARS.map((avatar) => (
            <div
              key={`${avatar.src}-${avatar.x}-${avatar.y}`}
              className="hero__avatar"
              style={{
                '--x': avatar.x,
                '--y': avatar.y,
                '--size': avatar.size,
                '--delay': avatar.delay,
              }}
            >
              <img src={avatar.src} alt="Team member" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
