import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <div>
        <div className="m-auto my-20">
          <img
            alt="Cozy room filled with books"
            src="./images/heroBackground.jpg"
            className="max-w-[20.375rem] max-h-[21.5rem] m-auto rounded-3xl"
          />
        </div>
        <hr className="w-11/12 mx-auto border-2 rounded-full border-darkGreen" />
      </div>
      <div className="flex flex-col">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
