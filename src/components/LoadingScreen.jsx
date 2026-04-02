import './LoadingScreen.css';

function LoadingScreen({ exiting = false }) {
  return (
    <div className={`loading-screen ${exiting ? 'loading-screen--exit' : ''}`} aria-hidden="true">
      <div className="loading-screen__ambient" />
      <div className="loading-screen__inner">
        <svg className="loading-screen__logo" viewBox="0 0 760 180" role="img" aria-label="Elementum">
          <text className="loading-screen__logo-glow" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            Elementum
          </text>
          <text className="loading-screen__logo-draw" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            Elementum
          </text>
        </svg>
        <span className="loading-screen__line" />
      </div>
    </div>
  );
}

export default LoadingScreen;
