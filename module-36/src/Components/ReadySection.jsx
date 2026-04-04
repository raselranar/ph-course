export default function ReadySection() {
  return (
    <section className="bg-primary-gradient">
      <div className="container mx-auto py-15 px-2">
        <h2 className="font-extrabold text-3xl/relaxed lg:text-5xl text-white text-center">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-[14px] mt-2 text-center sm:text-lg text-white">
          Join thousands of professionals who are already using AI Tools to work
          smarter.Start your free trial today.
        </p>
        <div className="mt-5 flex gap-4 justify-center">
          <button className="btn">Explore Products</button>
          <button className="btn btn-outline text-white">View Pricing</button>
        </div>
        <p className="text-white text-xs mt-4 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
