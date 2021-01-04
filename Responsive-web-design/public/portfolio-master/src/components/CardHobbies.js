export const CardHobbies = (props) => {
  return (
    <div className="my-5 p-5 shadow-lg max-w-full rounded-xl bg-white text-gray-600">
      <h1 className="text-2xl mb-5">Hobbies</h1>
      <div className="grid sm:grid-cols-3 gap-10">
        <div>
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            className="rounded-xl w-full"
            alt="coding img"
          />
          <h1 className="mt-3 mb-2">Coding</h1>
          <p>
            I enjoy problem solving and making ideas come to life.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            className="rounded-xl w-full"
            alt="random img"
          />
          <h1 className="mt-3 mb-2">Motorcycling</h1>
          <p>
            Cruising with a motorcycle is the best thing ever.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1537151377170-9c19a791bbea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            className="rounded-xl w-full"
            alt="random img"
          />
          <h1 className="mt-3 mb-2">Electronics</h1>
          <p>
           I love playing with electronics and making simple circuits.
          </p>
        </div>
      </div>
    </div>
  );
};


//  <div className="m-10 p-5 shadow-lg w-1/3 rounded-xl bg-white text-gray-600">
//    <h1 className="text-2xl mb-5">Hobbies</h1>
//    <div className="grid grid-row-3 gap-8">
//      <div>
//        <img
//          src="https://picsum.photos/300/150"
//          className="rounded-xl w-full"
//          alt="random img"
//        />
//        <h1 className="mt-3 mb-2">Hobby 1</h1>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
//          dolorem inventors.{" "}
//        </p>
//      </div>
//      <div>
//        <img
//          src="https://picsum.photos/300/150"
//          className="rounded-xl w-full"
//          alt="random img"
//        />
//        <h1 className="mt-3 mb-2">Hobby 2</h1>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
//          dolorem inventors.{" "}
//        </p>
//      </div>
//      <div>
//        <img
//          src="https://picsum.photos/300/150"
//          className="rounded-xl w-full"
//          alt="random img"
//        />
//        <h1 className="mt-3 mb-2">Hobby 3</h1>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
//          dolorem inventors.{" "}
//        </p>
//      </div>
//    </div>
//  </div>;
