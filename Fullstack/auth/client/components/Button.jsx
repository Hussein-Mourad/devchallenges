export default function Button({
  className,
  children,
  
  ...props
}) {
  return (
    <button
      className={`${className} px-3 py-2 inline-flex items-center justify-center hover:bg-opacity-90 rounded-md focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-opacity-90`}
      {...props}
    >
      {children}
    </button>
  );
}
