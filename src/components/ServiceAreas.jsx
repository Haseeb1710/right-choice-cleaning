import './ServiceAreas.css'

const areas = [
  'Cranston', 'Auburn Bay', 'Mahogany', 'Seton',
  'McKenzie Towne', 'Copperfield', 'New Brighton', 'Walden',
  'Legacy', 'Chaparral', 'Lake Bonavista', 'Midnapore',
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="areas-section">
      <div className="container">
        <div className="areas-inner">
          {/* Left: Map embed */}
          <div className="areas-map">
            {/* =====================================================
                GOOGLE MAPS INTEGRATION
                =====================================================
                Replace the iframe src below with your own Google Maps embed URL.

                Steps:
                  1. Go to https://maps.google.com
                  2. Search for your business or service area
                  3. Click Share → Embed a map → Copy HTML
                  4. Paste the src URL from that iframe here

                OR for a business pin:
                  https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR+BUSINESS+NAME
            ===================================================== */}
            <div className="map-wrapper">
              <iframe
                id="google-maps-embed"
                title="Right Choice Cleaning — 310 Cranford Dr SE, Calgary, AB"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.085!2d-113.9669505!3d50.8742604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6942f805a2094d6d%3A0xdbbbfd474217a884!2sRight%20Choice%20Cleaning!5e0!3m2!1sen!2sca!4v1713654157000!5m2!1sen!2sca"
                width="100%"
                height="420"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Text + Area tags */}
          <div className="areas-text">
            <span className="section-label">Where We Operate</span>
            <h2 className="section-title">
              Service <span>Areas</span>
            </h2>
            <div className="gold-line left"></div>
            <p style={{ marginBottom: '1.5rem', color: 'var(--gray-600)' }}>
              Right Choice Cleaning proudly serves homeowners and businesses across the following areas.
              Not sure if we cover your location? Give us a call!
            </p>

            <div className="area-tags">
              {areas.map((area, i) => (
                <div key={i} className="area-tag">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="areas-cta">
              <a href="#booking" className="btn btn-gold">
                <span>Book in Your Area</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="tel:+15873552116" className="areas-phone">
                <i className="fa-solid fa-phone"></i>
                <span>(587)-355-2116</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
