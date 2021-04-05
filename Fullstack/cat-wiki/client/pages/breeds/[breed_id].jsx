import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Property from "../../components/Property";
import Loader from "react-loader-spinner";

export default function Cat() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { breed_id } = useRouter().query;
  const fields = [
    "temperament",
    "origin",
    "life_span",
    "adaptability",
    "affection_level",
    "child_friendly",
    "grooming",
    "intelligence",
    "health_issues",
    "social_needs",
    "stranger_friendly",
  ];
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(async () => {
    try {
      const res = await axios.get(`/api/${encodeURIComponent(breed_id)}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
      setError(err);
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
    <>
      <div className="mt-5 md:flex">
        {data && data[0]?.breeds && (
          <>
            <div className="mb-5 md:mr-7 w-full md:w-3/12">
              <img
                className="rounded-md"
                src={data[0]?.url}
                alt={data[0].breeds[0]?.name}
              />
            </div>
            <div className="text-primary md:w-9/12">
              <h1 className="font-medium text-xl mb-3">
                {data[0].breeds[0]?.name}
              </h1>
              <p>{data[0].breeds[0]?.description}</p>
              {fields.map((field, index) => (
                <Property
                  title={capitalizeFirstLetter(field.replace("_", " "))}
                  rating={index >= 3}
                >
                  {data[0].breeds[0][field]}
                </Property>
              ))}
            </div>
          </>
        )}
      </div>
      {data[1]?.url && (
        <div>
          <h1 className="text-2xl font-medium text-primary mt-20">
            Other Photos
          </h1>
          <div className="masonry mt-8">
            {data.slice(1, 10).map((item) => (
              <img
                className="rounded-lg mb-5"
                src={item?.url}
                alt={item.breeds[0]?.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
