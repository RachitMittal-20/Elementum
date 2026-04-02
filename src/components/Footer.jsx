import Container from './Container';
import './Footer.css';

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'Linkedin', 'Youtube', 'Twitter'],
  },
];

function Footer() {
  return (
    <footer className="footer-soft">
      <Container>
        <div className="footer-soft__grid">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="footer-soft__column">
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className="footer-soft__column">
            <h4>Terms & Policies</h4>
            <p>14949 Fulton st, STE</p>
            <p>20 Chicago, IL, 60637</p>
            <p>(629) 456789030</p>
            <a href="#">info@elementum.com</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
