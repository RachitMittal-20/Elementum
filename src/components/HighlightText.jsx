import './HighlightText.css';

function HighlightText({ children, variant = 'green' }) {
  return (
    <span className={`highlight highlight-${variant}`}>
      {children}
    </span>
  );
}

export default HighlightText;
