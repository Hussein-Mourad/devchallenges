import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import WhyCats from "../components/WhyCats";
import MostSearched from "../components/MostSearched";
import Loader from "react-loader-spinner";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const res = await fetch("/api/heroImages");
    const data = await res.json();
    var sugg = [];
    data.forEach((item) => sugg.push({ name: item.name, id: item.id }));
    setSuggestions(sugg);
    setData(
      data
        .filter((obj) => {
          return obj.image.width === obj.image.height;
        })
        .slice(4, 8)
    );
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="h-full grid place-items-center">
        <Loader type="Oval" color="#000" height={32} width={32} />
      </div>
    );
  }

  return (
    <div>
      <Hero suggestions={suggestions} setSuggestions={setSuggestions} />
      <MostSearched>
        {data.map((item) => (
          <Link href={`/breeds/${encodeURIComponent(item.id)}`}>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <img
                key={item.id}
                className="rounded-md"
                src={item.image.url}
                alt={item.image.width}
              />
              <p className="font-medium text-lg mt-2">{item.name}</p>
            </div>
          </Link>
        ))}
      </MostSearched>
      <WhyCats />
    </div>
  );
}
