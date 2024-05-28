import Testimonial from './Testimonial';

const TESTIMONIALARRAY = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores distinctio quis, accusamus, repellat placeat officia expedita aliquam vel cumque voluptates quisquam culpa similique at est mollitia nobis? Id, atque.',
    src: './images/tempPic.jpg',
    alt: '',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex earum, fuga temporibus ipsa fugit praesentium at, incidunt non rerum eligendi minima quod voluptatem alias nesciunt similique modi! Est, harum?',
    src: './images/tempPic.jpg',
    alt: '',
  },
];

const Testimonials = () => {
  return (
    <>
      {TESTIMONIALARRAY.map((ele) => {
        let index = TESTIMONIALARRAY.indexOf(ele);
        return (
          <>
            <Testimonial index={index} altText={ele.alt} text={ele.text} key={ele.src} src={ele.src} />
          </>
        );
      })}
    </>
  );
};

export default Testimonials;
