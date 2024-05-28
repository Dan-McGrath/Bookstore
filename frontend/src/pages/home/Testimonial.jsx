import React from 'react';

const Testimonial = ({ text, src, altText, index }) => {
  // if index is even return true
  const isReversed = index % 2 === 0;
  // if false use row reverse to flip content
  return isReversed ? (
    <article className="flex items-center justify-between max-w-xs gap-4 mx-auto my-10 text-darkBrown">
      <img src={src} alt={altText} className="max-w-40 max-h-44 rounded-3xl" />
      <p className="text-xs">{text}</p>
    </article>
  ) : (
    <article className="flex flex-row-reverse items-center justify-between max-w-xs gap-4 mx-auto my-10 text-darkBrown">
      <img src={src} alt={altText} className="max-w-40 max-h-44 rounded-3xl" />
      <p className="text-xs">{text}</p>
    </article>
  );
};

export default Testimonial;
