export const CardProject = (props) => {
  return (
    <div className="p-5 shadow-lg rounded-xl bg-white text-gray-600 dark:bg-gray-800 dark:shadow-dark dark:text-white">
      <div className="h-56 mb-5 overflow-hidden">
        <img
          src={props.data.img}
          className="rounded-xl w-full"
          alt="project img"
        />
      </div>
      <div>
        <ul className="flex justify-between w-52">
          {props.data.tags.map((tag) => (
            <li key={tag.id}>{tag.value}</li>
          ))}
        </ul>
        <div>
          <h2 className="text-2xl my-2">{props.data.name}</h2>
        </div>
        <div className="text-gray-400">
          <p>{props.data.text}</p>
        </div>
        <div className="mt-5">
          <a
            href={props.data.demoLink}
            className="px-9 py-2 mr-5 bg-blue-500 text-white rounded-xl border border-blue-500  dark:bg-blue-600 dark:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            href={props.data.codeLink}
            className=" px-9 py-2 text-blue-500 border border-blue-500 rounded-xl  dark:text-blue-600 dark:border-blue-600 hover:bg-blue-500 hover:text-white dark:hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
    //   <div className="m-10 p-5 shadow-lg max-w-full rounded-xl flex bg-white text-gray-600 ">
    //     <img
    //       src="https://picsum.photos/300/200"
    //       className="rounded-xl mr-8"
    //       alt="random img"
    //     />
    //     <div>
    //       <ul className="flex justify-between w-52">
    //         <li>#HTML</li>
    //         <li>#CSS</li>
    //         <li>#responsive</li>
    //       </ul>
    //       <div>
    //         <h2 className=" text-2xl my-2">Name</h2>
    //       </div>
    //       <div className="text-gray-400">
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    //           eaque doloremque vero praesentium provident rerum placeat
    //           molestias id autem nobis quod dolorem, fugiat labore consequatur
    //           ex reiciendis eius dolore deleniti?
    //         </p>
    //       </div>
    //       <div className="mt-5">
    //         <button className="px-9 py-2 mr-5 bg-blue-500 text-white rounded-xl border border-blue-500">
    //           Demo
    //         </button>
    //         <button className=" px-9 py-2 text-blue-500 border border-blue-500 rounded-xl">
    //           Code
    //         </button>
    //       </div>
    //     </div>
    //   </div>
  );
};
