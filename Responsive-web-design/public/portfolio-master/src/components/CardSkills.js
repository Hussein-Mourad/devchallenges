
export const CardSkills = (props) => {
  const skills = [
    { id: 1, name: "React", percent: "30%" },
    { id: 2, name: "Javascript", percent: "40%" },
    { id: 3, name: "CSS", percent: "100%" },
    { id: 4, name: "Vue", percent: "50%" },
    { id: 5, name: "Redux", percent: "70%" },
    { id: 6, name: "React Native", percent: "80%" },
  ];
  return (
    <div className="my-5 p-5 shadow-lg max-w-full rounded-xl bg-white text-gray-600">
      <h1 className="text-2xl mb-2">Frontend</h1>
      <div className="grid grid-cols-2 gap-x-4">
        {skills.map((skill) => (
          <div className="flex justify-between" key={skill.id}>
            <span className={skill.id % 2 === 0 ? "w-32" : "w-14"}>
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
