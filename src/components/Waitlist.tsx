import animationData from "../../public/cirql-animation.json";
import Lottie from "react-lottie";

const Waitlist = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="waitlist" className=" w-full py-16 max-sm:py-10">
      <div className="w-full flex max-md:flex-col-reverse items-center justify-between max-md:items-start max-md:justify-start gap-10">
        <div className="flex-1 max-w-lg w-[50%] max-md:w-full ">
          <h3 className="h3-bold">Start using Cirql today!</h3>
          <p className="mt-8 text-medium">
            Say goodbye to inbox clutter and hello to a streamlined, productive email experience.
          </p>
          <p className="mt-5 text-medium">
            <a href="https://platform.cirql.ai" target="_blank" rel="noopener noreferrer"
               className="text-blue-500 underline">
              Join Cirql now
            </a>{" "}
            and take control of your inbox, turning cold emails into cash while focusing on what
            truly matters.
          </p>
          <p className="mt-5 text-medium">
            Have any questions? We're here to help! Feel free to reach out to us at <a
              href="mailto:support@cirql.ai" className="text-primary underline">support@cirql.ai</a>.
          </p>

        </div>

        <div
            className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[470px] max-lg:w-[380px] max-lg:h-[330px] max-xl:w-[520px] max-xl:h-[380px] rounded-2xl max-md:py-3 max-md:px-2 py-6 px-4 w-[580px] h-[528px]
         bg-no-repeat flex items-center justify-center "
        >
          <Lottie options={defaultOptions} height={250} width={250}/>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
