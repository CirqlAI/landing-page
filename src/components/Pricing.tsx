import {ArrowRight, Check} from "lucide-react";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {Separator} from "./ui/separator";
import {Tabs, TabsList, TabsTrigger} from "../components/ui/tabs";
import {useState} from "react";

const Pricing = () => {
  const [Pricing, setPricing] = useState("monthly");

  return (
      <section id="pricing" className=" w-full py-16 max-sm:py-10">
        <h2 className="h2-bold text-center">Simple Pricing Structure</h2>

        <Tabs
            defaultValue="monthly"
            className="w-[400px] mx-auto flex flex-col items-center justify-center mt-8 "
        >
          <TabsList>
            <TabsTrigger value="monthly" onClick={() => setPricing("monthly")}>
              Monthly
            </TabsTrigger>
            <TabsTrigger value="annually" onClick={() => setPricing("annually")}>
              Annually
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div
            className="w-full mt-24 max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center items-start max-md:gap-12 md:gap-6 lg:gap-10 ">
          <div
              className="py-8 px-6 max-w-md mx-auto w-full rounded-xl border border-[#D9D9D9] bg-[#FEFEFF] shadow-sm cursor-pointer">
            <div className="pb-4 space-y-4">
              <div className="w-full flex items-center justify-between">
                <h4 className="h4-bold">Data Removal</h4>
                <Badge variant="default">Coming soon</Badge>
              </div>

              <p className="text-body text-base">
                One time payment option as an adder
              </p>
            </div>

            <Separator className="bg-accent/35"/>

            <div className="mt-4">
              <div className="text-base text-body">
                {" "}
                <span className="text-primary text-[32px] font-bold ">$49</span> /
                one time payment
              </div>

              <div className="mt-6 text-base space-y-3 flex items-start justify-start flex-col ">
                <div className="flex items-center justify-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Automatic Opt-Out requests sent to data brokers</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Ensures significant drop in cold calls, emails, and DM’s</p>
                </div>
              </div>

              <a href="#waitlist">
                <Button
                    variant="outline"
                    size="lg"
                    className="mt-6 w-full text-lg group"
                >
                  <span>Contact us</span>{" "}
                  <ArrowRight className="text-accent ml-2 group-hover:text-white "/>
                </Button>
              </a>
            </div>
          </div>
          <div
              className="relative max-w-md mx-auto w-full py-8 px-6 rounded-xl border border-accent bg-stroke-purple/5 shadow-md cursor-pointer">
            <button
                className="absolute -top-8 left-12 bg-[#3E1E5A] rounded-t-lg text-xs font-bold py-2 px-4 text-white">
              Recommended
            </button>

            <div className="pb-4">
              <h4 className="h4-bold">Premium</h4>
              <p className="text-body text-base">
                Unlimited emails per month with our Premium plan.
              </p>
            </div>

            <Separator className="bg-accent/35"/>

            <div className="mt-4">
              <div className="text-base text-body">
      <span className="text-primary text-[32px] font-bold">
        {Pricing === "monthly" ? "$5" : "$50"}
      </span>
                / {Pricing === "monthly" ? "month" : "year"}
              </div>

              <Button size="lg" className="mt-6 w-full text-lg group">
                Coming Soon
              </Button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Advanced cold email filtering</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Automated responses to cold emails</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>
                    Get paid to read emails from senders who value your time
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Comprehensive admin portal access</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Email categorization (coming soon)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5"/>
                  <p>Future feature upgrades at no additional cost</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 max-w-md mx-auto w-full ">
            <div
                className="py-8 px-6 rounded-xl border border-[#D9D9D9] bg-[#FEFEFF] shadow-sm cursor-pointer">
              <div className="pb-4 space-y-4">
                <div className="w-full flex items-center justify-between">
                  <h4 className="h4-bold">Enterprise</h4>
                  <Badge variant="default">Coming soon</Badge>
                </div>

                <p className="text-body text-base">
                  Increments of 50k emails analyzed per month and divided between
                  any amount of inboxes.
                </p>
              </div>


              <div className="mt-4">
                <a href="#waitlist">
                  <Button
                      variant="outline"
                      size="lg"
                      className="mt-6 w-full text-lg group transition duration-200 "
                  >
                    <span>Contact us</span>{" "}
                    <ArrowRight className="text-accent ml-2 group-hover:text-white "/>
                  </Button>
                </a>
              </div>
            </div>
            <div
                className="relative md:hidden xl:flex p-8 rounded-xl border border-[#D9D9D9] bg-[#FEFEFF] shadow-sm cursor-pointer">
            <span className="text-accent/30 text-[150px] absolute -top-8 left-6 ">
              “
            </span>
              <span className="text-accent/30 text-[150px] absolute top-20 right-8 ">
              ”
            </span>
              <div className="w-full flex flex-col items-center justify-center space-y-6">
                <h4 className="h4-bold text-center italic z-20 ">
                  “I took one meeting and it paid for the entire year!”
                </h4>

                <div className="w-full flex items-center justify-center gap-2">
                  <img
                      src="images/maise.jpg"
                      alt="maise"
                      className="h-9 w-9 rounded-full object-top object-cover"
                  />
                  <div className="-space-y-0.5">
                    <h4 className="text-base font-medium text-primary">
                      Maisie Tucker
                    </h4>
                    <p className="text-xs">Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
              className="relative p-8 xl:hidden max-md:hidden rounded-xl border border-[#D9D9D9] bg-[#FEFEFF] shadow-sm cursor-pointer">
          <span className="text-accent/30 text-[150px] absolute -top-8 left-6 ">
            “
          </span>
            <span className="text-accent/30 text-[150px] absolute top-20 right-8 ">
            ”
          </span>
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <h4 className="h4-bold text-center italic z-20 ">
                “I took one meeting and it paid for the entire year!”
              </h4>

              <div className="w-full flex items-center justify-center gap-2">
                <img
                    src="images/maise.jpg"
                    alt="maise"
                    className="h-9 w-9 rounded-full object-top object-cover"
                />
                <div className="-space-y-0.5">
                  <h4 className="text-base font-medium text-primary">
                    Maisie Tucker
                  </h4>
                  <p className="text-xs">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
      </section>
  );
};

export default Pricing;
