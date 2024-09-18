const Hero = () => {
  return (
    <section className="bg-[#E4F5FF] aboutUsWave">
      <div className="container-xl !pt-[200px] text-center">
        <h1 className="lg:text-[50px] text-[20px] font-bold mb-5">
          About Waverlite
        </h1>

        <p className="lg:text-[20px] text-[16px] font-semibold lg:pb-[145px] pb-[74px]">
          Waverlite is a multi-currency digital wallet designed for immigrants
          and tourists, <br className="lg:flex hidden" /> allowing them to spend
          their local currency seamlessly in Canada.{" "}
          <br className="lg:flex hidden" />
          It ensures financial inclusion for everyone arriving in Canada,
          <br className="lg:flex hidden" />
          enabling access to funds even before booking their flight
        </p>
      </div>
    </section>
  );
};

export default Hero;
