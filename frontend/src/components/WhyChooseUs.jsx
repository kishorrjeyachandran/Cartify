const features = [
  {
    title: "Fast Delivery",
    description:
      "Quick and reliable shipping for every order.",
  },
  {
    title: "Secure Payments",
    description:
      "Safe transactions with trusted payment systems.",
  },
  {
    title: "Premium Quality",
    description:
      "Carefully curated products with modern design.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      
      <div className="mb-14">
        <p className="text-sm text-zinc-500 mb-3">
          WHY CHOOSE US
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Built for modern commerce.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl border border-[#1F1F22] bg-[#111214]"
          >
            <h3 className="text-2xl font-medium mb-4">
              {feature.title}
            </h3>

            <p className="text-zinc-400 leading-7">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;