import './WaveDivider.css';

function WaveDivider({ variant = 'green' }) {
  if (variant === 'green') {
    return (
      <div className="wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,30 Q360,60 720,30 T1440,30"
            stroke="#c6f740"
            strokeWidth="40"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="wave-divider wave-divider--pink">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,40 C200,10 400,50 600,30 C800,10 1000,50 1200,20 C1300,10 1400,40 1440,35"
          stroke="#ff8ec4"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
