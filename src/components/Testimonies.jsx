import React from 'react';
import '../styles/testimonies.css'

const Testimonial = () => {
  const testimonials = [
    { id: 1, image: 'https://via.placeholder.com/100', name: 'John Doe', feedback: 'This institute has helped me build a strong foundation in programming. The trainers are highly knowledgeable and provide hands-on learning!' },
    { id: 2, image: 'https://via.placeholder.com/100', name: 'Jane Smith', feedback: 'I was able to get a job within 2 months of completing the course. The curriculum is updated and covers the latest trends in tech.' },
    { id: 3, image: 'https://via.placeholder.com/100', name: 'Emily Johnson', feedback: 'The teaching style is great. The instructors focus on real-world applications, which made me feel confident in my skills.' },
    { id: 4, image: 'https://via.placeholder.com/100', name: 'Robert Brown', feedback: 'The best software training institute I\'ve attended. I learned everything from basics to advanced topics, and the career support was excellent.' },
    { id: 5, image: 'https://via.placeholder.com/100', name: 'Sarah Lee', feedback: 'The hands-on projects helped me gain practical experience. I’m now working as a developer at a top tech company!' },
    { id: 6, image: 'https://via.placeholder.com/100', name: 'Michael Harris', feedback: 'I loved the interactive nature of the classes. The support team was always there to help when I needed guidance.' },
    { id: 7, image: 'https://via.placeholder.com/100', name: 'Jessica Moore', feedback: 'This institute gave me the opportunity to learn coding at my own pace. I’m now confident in my software development skills!' },
    { id: 8, image: 'https://via.placeholder.com/100', name: 'David White', feedback: 'The instructors are patient and the environment is very supportive. I highly recommend this institute to anyone wanting to learn software development.' },
    { id: 9, image: 'https://via.placeholder.com/100', name: 'Maria Garcia', feedback: 'From Java to Python, I learned it all here. The practical approach to teaching made complex concepts easy to grasp.' },
    { id: 10, image: 'https://via.placeholder.com/100', name: 'James Wilson', feedback: 'I gained in-depth knowledge of web development. The career services team helped me land my first full-time job!' },
    { id: 11, image: 'https://via.placeholder.com/100', name: 'Sophia Adams', feedback: 'What I appreciated the most was the hands-on approach. It made the learning process much more effective.' },
    { id: 12, image: 'https://via.placeholder.com/100', name: 'Brian Clark', feedback: 'The training I received here helped me transition into a new career in tech. I’m grateful for everything I learned!' },
    { id: 13, image: 'https://via.placeholder.com/100', name: 'Natalie Scott', feedback: 'This institute goes above and beyond. The community and resources they offer made my learning experience top-notch!' },
    { id: 14, image: 'https://via.placeholder.com/100', name: 'Daniel Martinez', feedback: 'I enrolled for the web development course, and now I’m building my own websites as a freelancer. The courses were comprehensive!' },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-header">Student Testimonials</h1>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
