import { useState, useEffect } from "react";

const Education = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const educationData = [
    // {
    //   id: 1,
    //   institution: "University of Colorado Boulder",
    //   degree: "Master of Science",
    //   fieldOfStudy: "Data Science",
    //   date: "May 2026",
    //   description:
    //     "I am currently pursuing a Master of Science degree in Data Science at the University of Colorado Boulder. I am able to do this while simultaneously pursuing my undergraduate degree because CU Boulder offers a bachelors accelerated graduate program. The Data Science program focuses on teaching advanced statistical methods, machine learning, and data visualization. The course provides a comprehensive understanding of data acquisition, cleaning, and ethical considerations, both in theory and practice. This program has equipped me with the necessary skills and knowledge to navigate the complexities of data science.",
    // },
    {
      id: 2,
      institution: "University of Colorado Boulder",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      // date: "May 2025",
      description:
        "As I continue my journey to earn a Bachelor of Science degree in Computer Science, I am focusing on building a solid foundation in computing principles. The coursework covers a wide range of topics such as algorithms, data structures, software engineering, and computer architecture, which are essential to develop programming proficiency and problem-solving skills. This education is centered around critical thinking and effective communication, allowing me to gain a comprehensive understanding of computer science and excel in a rapidly evolving field.",
    },
  ];

  return (
    <div
      className={`flex justify-center items-center h-full ${
        fadeIn ? "opacity-100 duration-1000" : "opacity-0 duration-500"
      } transition-opacity mb-32`}
    >
      <div className="text-black p-8 rounded-md shadow-lg max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Education</h1>
        <div className="grid gap-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="border border-black p-4 rounded">
              <h2 className="text-xl font-bold">{edu.institution}</h2>
              <p className="text-md font-bold">{`${edu.degree} in ${edu.fieldOfStudy}`}</p>
              {/* <p className="text-sm">{`Expected Graduation: ${edu.date}`}</p> */}
              <p className="text-sm mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-12 hidden xl:block relative h-96 w-96">
        <div className="h-full w-full rounded-full shadow-xl overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}buffs.svg`}
            className="h-3/4 w-3/4 mx-auto my-auto object-contain mt-10"
            alt="Buff Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
