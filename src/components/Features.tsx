import { Button } from "./ui/button";

const Features = () => {
  return (
    <section id="features" className=" w-full py-16 max-sm:py-10">
      <h2 className="h2-bold text-center">Discover Our Key Benefits</h2>

      {/* Feature 1 */}
      <div className="mt-20 max-sm:mt-14 w-full flex max-md:flex-col items-center justify-between max-md:items-start max-md:justify-start gap-10">
        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[380px] max-lg:h-[330px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-md:py-3 max-md:px-2 py-6 px-4 w-[580px] h-[528px]
         bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/feature-1.png"
            alt="feature-image"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 max-w-lg w-[50%] max-md:w-full ">
          <h3 className="h3-bold">Monetize Your Inbox with Cold Emails</h3>
          <p className="mt-8 text-medium ">
            Cirql transforms cold emails into opportunities.
            Automatically respond with meeting options,
            and let eager salespeople pay for premium access to your inbox.
          </p>
          <a href="https://platform.cirql.ai" target="_blank" rel="noopener noreferrer">
            <Button className="mt-8 max-md:mt-6" size="lg">
              <span>Start Your Free Trial</span>
            </Button>
          </a>

        </div>
      </div>

      {/* Feature 2 */}
      <div
          className="mt-16 w-full flex max-md:flex-col-reverse items-center justify-between max-md:items-start max-md:justify-start gap-10">
        <div className="flex-1 max-w-lg  ">
          <h3 className="h3-bold">Streamline Your Inbox</h3>
          <p className="mt-8 text-medium ">
            Cirql streamlines your inbox with intelligent email categorization.
            Customize folders or let us tailor categories based on your role,
            industry, and goals, ensuring you focus on what matters.
          </p>
          <a href="https://platform.cirql.ai" target="_blank" rel="noopener noreferrer">
            <Button className="mt-8 max-md:mt-6" size="lg">
              <span>Start Your Free Trial</span>
            </Button>
          </a>

        </div>

        <div
            className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[380px] max-lg:h-[330px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-md:py-3 max-md:px-2 py-6 px-4 w-[580px] h-[528px]
         bg-no-repeat flex items-center justify-center"
        >
          <img
            src="/images/feature-2.png"
            alt="feature-image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Feature 3 */}
      <div className="mt-16 w-full flex max-md:flex-col items-center max-md:items-start max-md:justify-start justify-between gap-10">
        <div
          className="bg-gradient-cover bg-center max-md:max-w-[580px] max-md:w-full max-md:max-h-[528px] max-lg:w-[380px] max-lg:h-[330px] max-xl:w-[520px] max-xl:h-[470px] rounded-2xl max-md:py-3 max-md:px-2 py-6 px-4 w-[580px] h-[528px]
         bg-no-repeat flex items-center justify-center "
        >
          <img
            src="/images/feature-3.png"
            alt="feature-image"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 max-w-lg ">
          <h3 className="h3-bold">Unlock Email Insights</h3>
          <p className="mt-8 text-medium ">
            Unlock valuable insights into your email traffic with detailed analytics.
            Track tasks, invoices, POs, and quotes at both individual and organizational levels to stay ahead.
          </p>
          <a href="https://platform.cirql.ai" target="_blank" rel="noopener noreferrer">
            <Button className="mt-8 max-md:mt-6" size="lg">
              <span>Start Your Free Trial</span>
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Features;
