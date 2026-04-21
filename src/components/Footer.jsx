import './Footer.css'

const footerLinks = {
  Services: [
    { label: 'Residential Cleaning', href: '#services' },
    { label: 'Office Cleaning', href: '#services' },
    { label: 'Property Management', href: '#services' },
    { label: 'Deep Cleaning', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#service-areas' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Right Choice Cleaning" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Professional, reliable cleaning services for homes and offices in Calgary, AB.
              Licensed, insured, and trusted by hundreds of happy customers.
            </p>
            <div className="footer-contact">
              <a href="tel:+15873552116">
                <i className="fa-solid fa-phone"></i> (587)-355-2116
              </a>
              <a href="mailto:info@rightchoicecleaning.ca">
                <i className="fa-solid fa-envelope"></i> info@rightchoicecleaning.ca
              </a>
              <div className="footer-hours">
                <i className="fa-solid fa-clock"></i> Mon – Sat: 8am – 8pm
              </div>
              <div className="footer-address">
                <i className="fa-solid fa-location-dot"></i>
                <span>310 Cranford Dr SE, Calgary, AB T3M 1N1</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Google"><i className="fa-brands fa-google"></i></a>
              <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="footer-col" key={category}>
              <h4 className="footer-col-title">{category}</h4>
              <ul>
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Book CTA */}
          <div className="footer-cta-col">
            <h4 className="footer-col-title">Book Online</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Claim your $50 welcome voucher when you book online today!
            </p>
            <a href="#booking" className="btn btn-gold footer-book-btn">
              <span>Book Now</span>
              <i className="fa-solid fa-calendar-check"></i>
            </a>
            {/* PayPal Trust Badge */}
            <div className="paypal-trust">
              <i className="fa-brands fa-paypal"></i>
              <span>Secure Payments by PayPal</span>
            </div>
            {/* TrueReview Badge */}
            <div className="trust-badge-row">
              <div className="trust-badge">
                <i className="fa-solid fa-star"></i>
                <span>5.0 Rating</span>
              </div>
              <div className="trust-badge">
                <i className="fa-solid fa-shield-halved"></i>
                <span>Fully Insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Right Choice Cleaning — All Rights Reserved</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
