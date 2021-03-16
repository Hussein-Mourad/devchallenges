export default function JobBadge({ className, text }) {
  return (
    <>
      {text && (
        <div
          className={`max-w-max px-3 py-1 border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-gray-200 rounded-md ${className}`}
        >
          {text}
        </div>
      )}
    </>
  );
}
