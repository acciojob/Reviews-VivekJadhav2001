import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom.',
  },
];

function Reviews() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const randomReview = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = (random + 1) % reviews.length;
    }
    setIndex(random);
  };

  return (
    <main>
      <section className="container">
        <h1 id="review-heading">Our Reviews</h1>

        <div className="review">
          <img src={image} alt={name} className="person-img" />
          <h2 className="author" id={`author-${id}`}>{name}</h2>
          <h3 className="job">{job}</h3>
          <p className="info">{text}</p>

          <div className="btn-container">
            <button className="prev-btn" onClick={prevReview}>Previous</button>
            <button className="next-btn" onClick={nextReview}>Next</button>
          </div>

          <button className="random-btn" onClick={randomReview}>surprise me</button>
        </div>
      </section>
    </main>
  );
}

export default Reviews;
