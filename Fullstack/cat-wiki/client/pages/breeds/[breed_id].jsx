import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Property from "../../components/Property";
import Loader from "react-loader-spinner";

export default function Cat() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { breed_id } = useRouter().query;
  useEffect(async () => {
    const res = await axios.get(`/api/${encodeURIComponent(breed_id)}`);
    console.log(res.data[0]);
    setData(res.data);
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
              <Property title="Temperament">
                {data[0].breeds[0]?.temperament}
              </Property>
              <Property title="Origin"> {data[0].breeds[0]?.origin}</Property>
              <Property title="Life Span">
                {" "}
                {data[0].breeds[0]?.life_span} years
              </Property>
              <Property title="Adaptability" rating>
                {data[0].breeds[0]?.adaptability}
              </Property>
              <Property title="Affection level" rating>
                {data[0].breeds[0].affection_level}
              </Property>

              <Property title="Child friendly" rating>
                {data[0].breeds[0].child_friendly}
              </Property>

              <Property title="Grooming" rating>
                {data[0].breeds[0].grooming}
              </Property>

              <Property title="Intelligence" rating>
                {data[0].breeds[0].intelligence}
              </Property>

              <Property title="Health issues" rating>
                {data[0].breeds[0].health_issues}
              </Property>
              <Property title="Social needs" rating>
                {data[0].breeds[0].social_needs}
              </Property>
              <Property title="Stranger friendly" rating>
                {data[0].breeds[0].stranger_friendly}
              </Property>
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

// {data.map((cat, index) => (
//         <div className="flex my-8">
//           <div className="flex justify-center w-44 h-44 mr-8">
//             <img
//               className="rounded-lg cursor-pointer"
//               src={cat.image.url}
//               alt={cat.breeds.name}
//             />
//           </div>
//           <div className="w-7/12">
//             <h2 className="text-primary font-medium text-2xl mb-2 cursor-pointer">
//               {index + 1}. {cat.breeds.name}
//             </h2>

//             <p>{cat.breeds.description}</p>
//           </div>
//         </div>
//       ))}
