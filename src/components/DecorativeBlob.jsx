import './DecorativeBlob.css';

const BLOB_SHAPES = {
  orange: (
    <div className="blob blob--orange" />
  ),
  'purple-ellipse': (
    <svg width="40" height="56" viewBox="0 0 40 56">
      <ellipse cx="20" cy="28" rx="16" ry="28" fill="#c084fc" />
    </svg>
  ),
  'purple-diamond': (
    <svg width="56" height="56" viewBox="0 0 56 56">
      <path
        d="M28 0C28 0 56 0 56 28C56 56 28 56 28 56C28 56 0 56 0 28C0 0 28 0 28 0Z"
        fill="#7c3aed"
      />
    </svg>
  ),
  triangle: (
    <svg width="60" height="52" viewBox="0 0 60 52">
      <polygon points="30,0 60,52 0,52" fill="#ff4d4d" />
    </svg>
  ),
  'newsletter-blob': (
    <svg width="70" height="90" viewBox="0 0 70 90">
      <defs>
        <linearGradient id="nlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <ellipse cx="35" cy="45" rx="30" ry="45" fill="url(#nlGrad)" />
    </svg>
  ),
};

function DecorativeBlob({ type, className = '', style }) {
  return (
    <div
      className={`decorative-shape ${className}`}
      style={{ position: 'absolute', pointerEvents: 'none', zIndex: 2, ...style }}
    >
      {BLOB_SHAPES[type]}
    </div>
  );
}

export default DecorativeBlob;
