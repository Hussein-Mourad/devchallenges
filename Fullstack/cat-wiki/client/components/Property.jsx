export default function Property({ title, children, rating }) {
  var elements = children;
  if (rating) {
    elements = [];
    for (let i = 0; i < 5; i++) {
      var bgColor = "bg-secondary";
      if (children <= i) {
        bgColor = "bg-gray-200";
      }
      elements.push(
        <div
          className={`${bgColor} w-8 h-2 sm:w-14 sm:h-3 rounded-lg mr-2`}
        ></div>
      );
    }
  }

  return (
    <p className="my-2 sm:flex">
      <span
        className={`font-semibold sm:mr-3 ${
          rating ? "sm:w-3/12 lg:w-2/12" : ""
        }`}
      >
        {title}:
      </span>
      <span className={`${rating ? "block" : "ml-3 sm:ml-0 sm:inline-flex"}`}>
        <span
          className={`inline-flex items-center mt-2 sm:mt-0 ${
            rating ? "sm:w-9/12 lg:w-10/12" : ""
          }`}
        >
          {elements}
        </span>
      </span>
    </p>
  );
}
