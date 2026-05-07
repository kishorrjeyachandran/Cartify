const PromoBanner = () => {
  return (
    <section className="py-24">
      <div className="relative overflow-hidden rounded-[40px] border border-[#1F1F22] bg-[#111214] p-10 md:p-16">
        
        {/* Gradient */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zinc-800 blur-[120px]" />

        <div className="relative max-w-3xl">
          <p className="text-sm text-zinc-500 mb-4">
            LIMITED OFFER
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            Upgrade your shopping experience today.
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mb-8">
            Explore premium curated collections with
            fast delivery and seamless checkout.
          </p>

          <button className="h-12 px-6 rounded-xl bg-white text-black font-medium hover:opacity-90 transition">
            Explore Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;