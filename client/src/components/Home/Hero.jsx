const Hero = () => {
  return (
    <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-right-top min-h-[80vh]">
      <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-transparent opacity-65 w-1/2 absolute inset-0 z-10 "></div>
      <div className="px-16 absolute  z-30">
        <h1 className="text-6xl mt-52 uppercase font-bold leading-relaxed text-slate-100">
          Show Yourself <br /> to the World <br /> with
          <span className="text-blue-500 ml-4">Linkstar</span>
        </h1>
        <p className="text-white font-semibold">
          Create an Account and join our family today.
        </p>
      </div>
    </section>
  );
};

export default Hero;
