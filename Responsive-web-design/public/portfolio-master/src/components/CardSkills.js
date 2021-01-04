
export const CardSkills = (props) => {
  const skills = [
    { id: 1, name: "Python", percent: "80%" },
    { id: 2, name: "Html", percent: "90%" },
    { id: 3, name: "C", percent: "10%" },
    { id: 4, name: "CSS", percent: "70%" },
    { id: 5, name: "SQL", percent: "80%" },
    { id: 6, name: "Javascript", percent: "60%" },
    { id: 7, name: "Django", percent: "60%" },
    { id: 8, name: "React", percent: "10%" },
  ];
  return (
    <div className="my-5 p-5 shadow-lg max-w-full rounded-xl bg-white text-gray-600">
      <h1 className="text-2xl mb-3">FullStack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {skills.map((skill) => (
          <div className="flex justify-between" key={skill.id}>
            <span className="w-24">
              {skill.name}
            </span>
            <div className="w-full h-3 bg-gray-300 rounded-xl my-auto mx-3">
              <div
                className="h-full bg-blue-500 rounded-xl"
                style={{ width: skill.percent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* <div className="m-10 p-5 shadow-lg w-1/3 rounded-xl bg-white text-gray-600">
  <h1 className="text-2xl mb-2">Frontend</h1>
  <div className="">
    {skills.map((skill) => (
      <div className="flex justify-between" key={skill.id}>
        <span className="w-40">{skill.name}</span>
        <div className="w-full h-3 bg-gray-300 rounded-xl my-auto mx-3">
          <div
            className="h-full bg-blue-500 rounded-xl"
            style={{ width: skill.percent }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div> */
