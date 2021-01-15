import RandomButton from "../components/RandomButton";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import AuthorLink from "../components/AuthorLink";
import useFetch from "../api/useFetch";
import HandleErrorAndLoading from "../components/HandleErrorAndLoading";

function Home({ setAuthor }) {
  const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  const { data: quote, isLoading, error, loadData } = useFetch(url);
  return (
    <div className="relative container mx-auto py-5 min-h-screen">
      <RandomButton onClick={loadData} isLoading={isLoading} />
      <HandleErrorAndLoading error={error} isLoading={isLoading} />
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-xl">
        {quote && (
          <>
            <Quote>{quote[0].quoteText}</Quote>
            <AuthorLink
              author={quote[0].quoteAuthor}
              genre={quote[0].quoteGenre}
              onClick={() => setAuthor(quote[0].quoteAuthor)}
            />
          </>
        )}
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

export default Home;
