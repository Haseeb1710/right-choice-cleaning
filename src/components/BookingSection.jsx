import './BookingSection.css'

export default function BookingSection() {
  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Book Online</span>
          <h2 className="section-title">Schedule Your <span>Clean Today</span></h2>
          <div className="gold-line"></div>
          <p className="section-sub">
            Claim your <strong style={{ color: 'var(--gold-dark)' }}>$50 welcome voucher</strong> when you book online.
            Fast, easy, and secure — powered by BookingKoala.
          </p>
        </div>

        {/* =====================================================
            BOOKINGKOALA INTEGRATION
            =====================================================
            Replace the src below with your BookingKoala booking URL.
            Options:
              1) Inline iframe: paste your BookingKoala embed URL as the src
              2) Script embed: paste the BookingKoala <script> snippet below
                 instead of the iframe.

            Get your embed code from:
              BookingKoala Dashboard → Settings → Website Integration

            Your booking widget URL will look like:
              https://app.bookingkoala.com/booknow/YOUR_COMPANY_ID
        ===================================================== */}
        <div className="booking-embed-wrapper">
          <div className="booking-placeholder">
            <i className="fa-solid fa-calendar-days booking-placeholder-icon"></i>
            <h3>BookingKoala Widget</h3>
            <p>
              Replace this placeholder with your BookingKoala embed code.<br />
              In <code>BookingSection.jsx</code>, swap the iframe <code>src</code> with your BookingKoala URL.
            </p>
            <code className="embed-hint">
              {'<iframe src="https://app.bookingkoala.com/booknow/YOUR_COMPANY_ID" ... />'}
            </code>
          </div>

          {/* UNCOMMENT & UPDATE this iframe once you have your BookingKoala URL: */}
          {/*
          <iframe
            id="bookingkoala-iframe"
            src="https://app.bookingkoala.com/booknow/YOUR_COMPANY_ID"
            title="Book a Cleaning Service"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="yes"
            style={{ borderRadius: '12px', border: 'none' }}
          />
          */}
        </div>

        {/* SMS Consent */}
        <div className="booking-consent">
          <i className="fa-solid fa-circle-info"></i>
          <p>
            By booking, you consent to receive SMS notifications and appointment reminders from Right Choice Cleaning.
            Message & data rates may apply. Reply STOP to unsubscribe.
            See our <a href="#contact">Terms & Conditions</a> and <a href="#contact">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
