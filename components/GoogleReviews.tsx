import { googleReviews, companyConfig } from '@/data/company';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GoogleReviews() {
  return (
    <section className="reviews-section">
      <div className="section-head">
        <div>
          <div className="eyebrow">CLIENT EXPERIENCES</div>
          <h2>What our clients say</h2>
        </div>
        <a href={companyConfig.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-link">
          View all on Google <ArrowRight size={15}/>
        </a>
      </div>
      <div className="reviews-grid">
        {googleReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">— {review.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
