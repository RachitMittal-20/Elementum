import './ReadMoreLink.css';

function ReadMoreLink({ href = '#', text = 'Read more' }) {
  return (
    <a href={href} className="read-more-link">
      {text} <span>———</span>
    </a>
  );
}

export default ReadMoreLink;
