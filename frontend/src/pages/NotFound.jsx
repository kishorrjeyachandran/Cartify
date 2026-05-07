import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-8xl font-bold mb-4">
          404
        </h1>

        <p className="text-zinc-400 text-xl mb-8">
          Page Not Found
        </p>

        <Link
          to="/"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Go Home
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;