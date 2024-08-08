import {
  ControlYourData,
  FAQs,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  Privacy,
  Problem,
  HowItWorks,
  Waitlist,
} from "./components";

export default function Home() {
  return (
    <div className="w-full  min-h-screen ">
      <Header />
      <main className="text-body">
        <Hero />

        <div className="wrapper">
          <Problem />
          <HowItWorks />
          <Features />
          <ControlYourData />
          <Privacy />
          <Pricing />
          <Waitlist />
          <FAQs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
