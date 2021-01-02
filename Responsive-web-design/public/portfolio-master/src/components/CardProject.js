export const CardProject = () => {
    return (
      <div className="p-5 shadow-lg  rounded-xl  bg-white text-gray-600 ">
        <img
          src="https://picsum.photos/300/200"
          className="rounded-xl w-full mb-5"
          alt="random img"
        />
        <div>
          <ul className="flex justify-between w-52">
            <li>#HTML</li>
            <li>#CSS</li>
            <li>#responsive</li>
          </ul>
          <div>
            <h2 className=" text-2xl my-2">Name</h2>
          </div>
          <div className="text-gray-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque doloremque vero praesentium provident rerum placeat
              molestias id autem nobis quod dolorem, fugiat labore consequatur
              ex reiciendis eius dolore deleniti?
            </p>
          </div>
          <div className="mt-5">
            <button className="px-9 py-2 mr-5 bg-blue-500 text-white rounded-xl border border-blue-500">
              Demo
            </button>
            <button className=" px-9 py-2 text-blue-500 border border-blue-500 rounded-xl">
              Code
            </button>
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
}
