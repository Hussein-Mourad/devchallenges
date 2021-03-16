import DarkModeSwitch from "./DarkModeSwitch";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-4 py-3 sm:py-6 min-h-screen relative">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-900 dark:text-gray-200 text-3xl">
          Github <span className="font-light">Jobs</span>
        </h1>
        <DarkModeSwitch />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
