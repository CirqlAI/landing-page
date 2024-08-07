import animationData from "../../public/cirql-animation.json";
import Lottie from "react-lottie";
import Helmet from "react-helmet";

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
          <p className="mt-8 text-medium ">
            Say goodbye to inbox clutter and hello to a streamlined, productive
            email experience.
          </p>
          <p className="mt-5 text-medium ">
            Join Cirql now and take control of your inbox, turning cold emails
            into cash while focusing on what truly matters.
          </p>
          {/* <form onSubmit={handleSubmit}>
            <div className="mt-12 flex items-center max-w-[420px] w-full p-2 border-[1.5px] border-[#BFBFBF] rounded-[10px] ">
              <Input
                className="outline-none border-none focus-visible:outline-none focus-visible:ring-transparent text-base placeholder:text-body/60 "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email address"
              />
              <Button type="submit">
                <span>Join the waitlist</span>
              </Button>
            </div>
            {error && (
              <p className="mt-2 text-red-500 flex items-center">
                <TriangleAlert className="text-red-500 mr-2 w-5 h-5 " />
                <span>{error}</span>
              </p>
            )}
          </form> */}

          <>
            <div
              id="getWaitlistContainer"
              data-waitlist_id="18907"
              data-widget_type="WIDGET_2"
              className="mt-10"
            ></div>
            <Helmet>
              <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
              />
              <script
                  src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
              <style type="text/css">
                {`
                #getWaitlistContainer input {
                  height: 40px; /* Set a consistent height for the input */
                  padding: 0 10px; /* Adjust padding for consistent size */
                }

                #getWaitlistContainer button {
                  border-radius: .375rem 0 0 .375rem;
                  height: 40px; /* Match the input field height */
                  font-size: 1rem; /* Default font size */
                  padding: 0 15px; /* Default padding */
                }

                #getWaitlistContainer button:hover {
                  background-color: #333333; /* Darker background on hover */
                }

                @media (max-width: 640px) {
                  #getWaitlistContainer button {
                    font-size: 0.875rem; /* Slightly reduce font size on small screens */
                    padding: 0 10px; /* Adjust padding on small screens */
                  }
                }
              `}
              </style>
            </Helmet>
          </>
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
