import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="hero">
      <div className="mt-[20vh] max-md:mt-[10vh] wrapper w-full flex flex-col items-center justify-center text-center ">
        <h1 className="h1-bold">
          <span className="text-accent">Cirql</span> — Turn Cold Emails into
          Cash
        </h1>
        <p className="max-w-md text-large mt-6 max-md:mt-4 text-body ">
          Say goodbye to inbox clutter and start profiting from your cold
          emails. Focus on what matters most while we handle the rest.
        </p>
        <a href="https://platform.cirql.ai" target="_blank" rel="noopener noreferrer">
          <Button className="mt-8 max-md:mt-6" size="lg">
            <span>Start Your Free Trial</span>
          </Button>
        </a>

      </div>

      <div className="relative">
        <picture className="w-full h-full z-10">
          {/* Source for medium devices */}
          <source
              srcSet="/images/hero-img-medium.png"
            media="(max-width: 768px)"
            className="w-full h-full wrapper z-10"
          />
          {/* Default source */}
          <img
            src="/images/hero-img.png"
            alt="cirql-img-demo"
            className="w-full h-full wrapper z-10"
          />
        </picture>

        {/* lienar gradient */}
        <div className="h-full -z-10 w-full bg-gradient-to-t from-stroke-purple/40 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] " />
      </div>
    </section>
  );
};

export default Hero;
