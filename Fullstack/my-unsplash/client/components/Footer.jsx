export default function Footer({ className }) {
    return (
        <footer className={"text-gray-800 w-full text-center " + " " + className}>
            created by{" "}
            <a
                className="underline"
                href="https://devchallenges.io/portfolio/Hussein-Mourad"
            >
                Hussein-Mourad
            </a>{" "}
            - devchallenges.io
        </footer>
    );
}
