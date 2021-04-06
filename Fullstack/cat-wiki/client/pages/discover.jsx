import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
export default function Discover() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(async () => {
    try {
      const res = await fetch("/api/breeds/");
      const data = await res.json();
      setData(data.slice(0, 10));
    } catch (err) {
      console.log(err);
      setError("Oops! Something went wrong. Please try again");
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="h-full grid place-items-center">
        <Loader type="Oval" color="#000" height={32} width={32} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-full grid place-items-center">
        <h2 className="text-red-500 font-medium text-lg">{error}</h2>
      </div>
    );
  }

  return (
    <div className="my-5">
      <h1 className="text-4xl font-medium text-primary">
        Top 10 most searched breeds
      </h1>
      <div className="mt-8">
        {data.map((cat, index) => (
          <div className="sm:flex my-12 sm:my-8">
            <div className="flex justify-center w-full sm:w-44 sm:h-44 mb-5 sm:mb-0 sm:mr-8">
              <Link href={`/breeds/${encodeURIComponent(cat.id)}`}>
                <img
                  className="rounded-lg cursor-pointer"
                  src={cat.image.url}
                  alt={cat.name}
                />
              </Link>
            </div>
            <div className="w-full sm:w-7/12">
              <Link href={`/breeds/${encodeURIComponent(cat.id)}`}>
                <h2 className="text-primary font-medium text-2xl mb-2 cursor-pointer">
                  {index + 1}. {cat.name}
                </h2>
              </Link>
              <p className="text-lg sm:text-base">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
