import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Story
        </h2>

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
          <p>
            For over two decades, I helped build Toptix and then SeatGeek into one of the most trusted and scalable ticketing platforms in the world. As a senior engineering leader, I shaped teams, scaled systems, and grew people. I applied what I learned to deliver with speed, stability, and quality, and to lead with clarity, even in complexity.
          </p>

          <p>
            That chapter came to a close. The world was shifting: technology, leadership, and the role of AI were all accelerating. And I knew it was time to step forward again, not just to keep up, but to be ahead of it.
          </p>

          <p>
            I&apos;m not changing careers. I&apos;m evolving as a leader who thinks and operates AI-first. To do that, I&apos;ve gone back to the building blocks: writing code, experimenting with tools, shipping small products, and getting my hands in the loop. This is how I accelerate my leadership for what&apos;s coming next.
          </p>

          <p className="text-xl font-medium text-gray-900 dark:text-white pt-4 mb-0">
            This site is the beginning of that journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
