import './Avatar.css';

function Avatar({ src, alt = '', size = 'medium', borderColor, className = '' }) {
  const sizeClass = size === 'large' ? 'avatar--large' : size === 'small' ? 'avatar--small' : '';

  return (
    <div
      className={`avatar ${sizeClass} ${className}`}
      style={borderColor ? { border: `3px solid ${borderColor}` } : undefined}
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default Avatar;
