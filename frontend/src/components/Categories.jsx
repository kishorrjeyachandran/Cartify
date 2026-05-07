const categories = [
  "Electronics",
  "Fashion",
  "Accessories",
  "Gaming",
];

const Categories = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        
        {categories.map((category, index) => (
          <div
            key={index}
            className="h-36 rounded-3xl border border-[#1F1F22] bg-[#111214] flex items-center justify-center text-lg font-medium hover:border-zinc-700 transition cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;