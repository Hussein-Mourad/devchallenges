import useFetch from "../api/useFetch";
import data from "../data/authors.json";
import RandomButton from "../components/RandomButton";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import HandleErrorAndLoading from "../components/HandleErrorAndLoading";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function Author({ author, setAuthor }) {
  var authors = data.authors;
  var path = "https://quote-garden.herokuapp.com/api/v3/quotes";
  var url = new URL(path),
    params = { author: author };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const { data: quotes, isLoading, error, loadData } = useFetch(url);

  return (
    <div className="relative container mx-auto py-5 min-h-screen">
      <RandomButton
        onClick={() => {
          setAuthor(authors[Math.floor(Math.random() * authors.length)]);
          loadData();
        }}
        isLoading={isLoading}
      />
      <HandleErrorAndLoading error={error} isLoading={isLoading} />

      {quotes && (
        <div className="mt-14 mb-20 mx-auto max-w-xl">
          <div className="grid grid-cols-12">
            <h1 className="text-3xl text-gray-800 mb-14 col-start-2 col-span-9 ml-3">
              {quotes[0].quoteAuthor}
            </h1>

            <Link
              to="/"
              className="underline text-gray-600 inline-flex items-center justify-end text-base col-start-11 col-span-2 max-h-9 "
            >
              <Icon className="mr-2" fontSize="small">
                west
              </Icon>
              Back
            </Link>
          </div>
          <div className="">
            {quotes.map((quote) => (
              <Quote key={quote.id}>{quote.quoteText}</Quote>
            ))}
          </div>
        </div>
      )}
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

export default Author;
