import './TestimonialsSection.css'

// Fallback static reviews (shown until TrueReview is configured)
const staticReviews = [
  { name: 'Sarah M.', rating: 5, text: 'Absolutely incredible service! My house has never looked so clean. The team was professional, thorough, and so friendly. Highly recommend!', date: 'March 2026' },
  { name: 'James T.', rating: 5, text: 'Used Right Choice Cleaning for a move-out clean and the landlord was blown away. Full deposit returned! Will definitely use again.', date: 'February 2026' },
  { name: 'Emily R.', rating: 5, text: 'Booked their deep cleaning service and it was worth every penny. Attention to detail was incredible. My kitchen sparkles!', date: 'January 2026' },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="testimonials-section bg-off-white">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title">What Our <span>Clients Say</span></h2>
          <div className="gold-line"></div>
          <p className="section-sub">
            Don't just take our word for it — see what our customers are saying about Right Choice Cleaning.
          </p>
        </div>

        {/* =====================================================
            TRUEREVIEW INTEGRATION
            =====================================================
            Replace the placeholder below with your TrueReview widget code.

            Steps:
              1. Log in at https://truereview.co/
              2. Go to Dashboard → Widget → Copy Embed Code
              3. Replace the div.truereview-placeholder block below
                 with: <div dangerouslySetInnerHTML={{ __html: `YOUR_WIDGET_SCRIPT` }} />
              OR: paste the script tag into index.html and add the widget div here.

            Example:
              <div id="truereview-widget" data-location-id="YOUR_LOCATION_ID"></div>
        ===================================================== */}
        <div className="truereview-placeholder review-placeholder">
          <i className="fa-solid fa-star review-placeholder-icon"></i>
          <h3>TrueReview Widget</h3>
          <p>
            Replace this with your TrueReview embed widget.<br />
            Log in to TrueReview → Dashboard → Widget → Copy Embed Code.
          </p>
        </div>

        {/* Static fallback reviews — remove once TrueReview is active */}
        <div className="reviews-grid">
          {staticReviews.map((r, i) => (
            <div key={i} className={`review-card card fade-up fade-up-delay-${i + 1}`}>
              <div className="review-top">
                <div className="reviewer-avatar">{r.name[0]}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="stars">{'★'.repeat(r.rating)}</div>
                </div>
                <div className="review-source">
                  <i className="fa-brands fa-google"></i>
                </div>
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-date">{r.date}</div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="review-cta text-center">
          <p className="review-cta-text">Loved our service? Leave us a review!</p>
          {/* ⚠️ Replace YOUR_GOOGLE_PLACE_ID with your actual Google Maps Place ID */}
          {/* Find it at: https://developers.google.com/maps/documentation/places/web-service/place-id */}
          <a
            href="https://www.google.com/maps/place/Right+Choice+Cleaning/@50.8742604,-113.9669505,17z/data=!3m1!4b1!4m6!3m5!1s0x6942f805a2094d6d:0xdbbbfd474217a884!8m2!3d50.8742604!4d-113.9669505"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            id="google-review-btn"
          >
            <i className="fa-brands fa-google"></i>
            <span>Leave a Google Review</span>
          </a>
        </div>
      </div>
    </section>
  )
}
