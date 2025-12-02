import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Button } from "../components/ui/button";
import HomeLayout from "../layout/HomeLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <HomeLayout footerTopSpace={false}>
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <Button asChild variant="outline">
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
};

export default NotFound;
