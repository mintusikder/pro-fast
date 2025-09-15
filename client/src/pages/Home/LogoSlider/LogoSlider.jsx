import Marquee from "react-fast-marquee";

const logos = [
  "/public/brands/amazon.png",
  "/public/brands/amazon_vector.png",
  "/public/brands/casio.png",
  "/public/brands/moonstar.png",
  "/public/brands/randstad.png",
  "/public/brands/start-people 1.png",
  "/public/brands/start.png",


];

const LogoSlider = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        We've helped thousands of sales teams
      </h2>

      <Marquee gradient={false} speed={40} pauseOnHover>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="h-16 mx-12 object-contain"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default LogoSlider;
