export default function Footer() {
  return (
    <footer className="mt-20 p-5 sm:px-10 bg-black text-white rounded-t-3xl sm:flex justify-between items-center">
      <img src="/icons/CatLogoWhite.svg" alt="logo" />
      <p className="mt-4 sm:mt-0">
        &copy; created by{" "}
        <a
          className="underline"
          href="https://devchallenges.io/portfolio/Hussein-Mourad"
        >
          Hussein-Mourad
        </a>{" "}
        - <a href="https://devchallenges.io">devchallenges.io</a> 2021
      </p>
    </footer>
  );
}
