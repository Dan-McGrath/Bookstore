import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <div>
        <div className="relative m-auto my-15">
          <div className="my-4 text-center">
            <h1 className="text-4xl text-darkGreen font-primarySemiBoldItalic">Cozy Corner</h1>
            <p className="mt-1 text-xl text-darkGreen font-primarySemiBold">Build your own digital library!</p>
          </div>
          <img
            alt="Cozy room filled with books"
            src="./images/heroBackground.jpg"
            className="max-w-[20.375rem] max-h-[21.5rem] m-auto rounded-3xl"
          />
        </div>
        <hr className="w-11/12 mx-auto mt-8 border-2 rounded-full border-darkGreen" />
      </div>
      <div className="flex flex-col">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;

// <div className="absolute inset-8 backdrop-sepia-0 bg-white/70 max-w-[20rem] max-h-[10rem] rounded-3xl"></div>
