const Vision = () => {
  return (
    <section className="container-xl">
      <div className="grid lg:grid-cols-2 lg:gap-[200px] gap-[100px]">
        <div className="lg:space-y-[56px] space-y-[30px]">
          <div className="space-y-4">
            <h4 className="text-[#9C9D9D]">FOUNDED</h4>
            <p>2022</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#9C9D9D]">OUR MISSION</h4>
            <p>
              We aim to simplify international payments and financial
              management, ensuring seamless and transparent services that cater
              to the diverse needs of our users.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#9C9D9D]">OUR VISSION</h4>
            <p>
              Our vision is to create a world where financial barriers are
              removed, enabling everyone to transact and thrive globally with
              ease.
            </p>
          </div>
        </div>
        <div className="lg:space-y-[56px] space-y-[30px]">
          <div className="space-y-4">
            <h4 className="text-[#9C9D9D]">THE PROBLEM</h4>
            <p>
              Our world as we know it has become more connected than ever
              before. We can send messages across the globe in just a fraction
              of a second and even have real time conversations with people who
              are miles away from us. Why should money be any different?
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#9C9D9D]">HOW WE SOLVED IT</h4>
            <p>
              Through access to multi-currency wallets, variety of methods for
              sending and receiving money like instant wave transfers powered by
              our peer-to-peer (P2P) technology, convenient email transfers,
              direct deposits to bank accounts and over 120 gift cards to choose
              from.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center mt-20">
        <h4 className="w-full max-w-[700px] text-[#9C9D9D] text-[30px] font-bold">
          We envision a world without distance, where every corner of the world
          is 5 seconds or less, and{" "}
          <span className="text-[#1E8DCC]">We Are Here</span> to make that a
          reality.
        </h4>
      </div>
    </section>
  );
};

export default Vision;
