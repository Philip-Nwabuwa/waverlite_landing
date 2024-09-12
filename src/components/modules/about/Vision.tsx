const Vision = () => {
  return (
    <section className="container-xl visionLogo">
      <div className="grid lg:grid-cols-6 gap-10 lg:gap-[110px] pt-[50px] pb-[126px]">
        <div className="lg:col-span-1">
          <h3 className="text-primary text-[24px] font-semibold mb-4">
            Founded
          </h3>
          <p className="lg:text-[20px] text-[16px] font-bold">2022</p>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-[30px]">
          <div>
            <h3 className="text-primary text-[24px] font-semibold mb-4">
              OUR MISSION
            </h3>
            <p className="text-[18px] font-normal">
              We aim to simplify international payments and financial
              management, ensuring seamless and transparent services that cater
              to the diverse needs of our users.
            </p>
          </div>
          <div>
            <h3 className="text-primary text-[24px] font-semibold mb-4">
              OUR VISION
            </h3>
            <p className="text-[18px] font-normal">
              Our vision is to create a world where financial barriers are
              removed, enabling everyone to transact and thrive globally with
              ease.
            </p>
          </div>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-[30px]">
          <div>
            <h3 className="text-primary text-[24px] font-semibold mb-4">
              THE PROBLEM
            </h3>
            <p className="text-[18px] font-normal">
              Our world as we know it has become more connected than ever
              before. We can send messages across the globe in just a fraction
              of a second and even have real time conversations with people who
              are miles away from us. Why should money be any different?
            </p>
          </div>
          <div>
            <h3 className="text-primary text-[24px] font-semibold mb-4">
              HOW WE SOLVED IT
            </h3>
            <p className="text-[18px] font-normal">
              Through access to multi-currency wallets, variety of methods for
              sending and receiving money like instant wave transfers powered by
              our peer-to-peer (P2P) technology, convenient email transfers,
              direct deposits to bank accounts and over 120 gift cards to choose
              from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
