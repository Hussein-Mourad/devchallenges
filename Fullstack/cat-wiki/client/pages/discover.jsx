import Link from "next/link";
import { useEffect, useState } from "react";
export default function Discover() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await fetch("/api/heroImages");
    const data = await res.json();
    setData(data.slice(0, 10));
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-4xl font-medium text-primary">
        Top 10 most searched breeds
      </h1>
      <div className="mt-8">
        {data.map((cat, index) => (
          <div className="flex my-8">
            <div className="flex justify-center w-44 h-44 mr-8">
              <Link href={`/breeds/${encodeURIComponent(cat.id)}`}>
                <img
                  className="rounded-lg cursor-pointer"
                  src={cat.image.url}
                  alt={cat.name}
                />
              </Link>
            </div>
            <div className="w-7/12">
              <Link href={`/breeds/${encodeURIComponent(cat.id)}`}>
                <h2 className="text-primary font-medium text-2xl mb-2 cursor-pointer">
                  {index + 1}. {cat.name}
                </h2>
              </Link>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
