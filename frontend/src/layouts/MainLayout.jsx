import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#08090A] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;