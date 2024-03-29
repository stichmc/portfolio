import { useState, useEffect } from "react";

const WorkExperience = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const workExperienceData = [
    {
      id: 6,
      position: "Full Stack Software Developer Intern",
      company: "National Aeronautics and Space Administration (NASA)",
      startDate: "June 2023",
      endDate: "August 2023",
      responsibilities: [
        "Created a graphical user interface using React to efficiently manage and control a prototype lunar power grid, which resulted in a substantial reduction of the prototype's total development time",
        "Designed, modeled, and 3D printed essential components for the prototype, ensuring precise fit and functionality, which expedited the prototype's assembly process",
        "Implemented a new fast frequency measurement algorithm in VHDL for the prototype’s FPGA clock",
      ],
      location: "Cleveland, Ohio",
      logo: `${import.meta.env.BASE_URL}nasa.svg`,
    },
    {
      id: 5,
      position: "NPSS Library Software Developer Intern",
      company: "National Aeronautics and Space Administration (NASA)",
      startDate: "January 2023",
      endDate: "May 2023",
      responsibilities: [
        "Refactored the official NASA Numerical Propulsion System Simulation (NPSS) Power System Library, resulting in significant performance and reliability enhancements crucial to the library’s functionality",
        "Engineered new electrical components into the library, ensuring precise simulation of their intended functions",
        "Created and implemented unit tests for all electrical components within the library, ensuring robustness and stability of the software",
        "Designed and deployed a GitHub self-hosted runner capable of automating NPSS development projects, streamlining workflows and enhancing productivity for development teams",
      ],
      location: "Remote",
      logo: `${import.meta.env.BASE_URL}nasa.svg`,
    },
    {
      id: 4,
      position: "CU Foundation Engagement Ambassador",
      company: "Ruffalo Noel Levitz",
      startDate: "Aug 2022",
      endDate: "Jan 2023",
      responsibilities: [
        "Fostered relationships with CU Boulder alumni",
        "Successfully fundraised over $50,000 for scholarships",
        "Learned to spark amazing and fruitful conversations with strangers",
      ],
      location: "Boulder, CO",
      logo: `${import.meta.env.BASE_URL}rnl.png`,
    },
    {
      id: 3,
      position: "Logistics Coordinator",
      company: "United Parcel Service (UPS)",
      startDate: "May 2022",
      endDate: "Aug 2022",
      responsibilities: [
        "Learned the value of paying attention to the details in my work",
        "Improved delivery driver efficiency by organizing packages on mail trucks",
        "Ensured accurate and timely deliveries by strategizing which mail trucks would be loaded",
      ],
      location: "Glenwood Springs, CO",
      logo: `${import.meta.env.BASE_URL}ups.png`,
    },
    {
      id: 2,
      position: "Mover",
      company: "Johnson Storage and Moving",
      startDate: "May 2021",
      endDate: "Aug 2021",
      responsibilities: [
        "Safely packed, moved, and stored customer’s property",
        "Developed perseverance and critical thinking under pressure",
        "Learned the value of hard work through physically demanding tasks that lasted 13+ hours",
      ],
      location: "Parker, CO",
      logo: `${import.meta.env.BASE_URL}johnson.jpg`,
    },
    {
      id: 1,
      position: "Tire Service Technician",
      company: "Discount Tire",
      startDate: "May 2019",
      endDate: "Mar 2020",
      responsibilities: [
        "Upheld company standards for customer satisfaction",
        "Ensured customers had functioning, safe, and reliable tires on their cars",
        "Learned that providing excellent customer service is crucial for the success of a business",
      ],
      location: "Parker, CO",
      logo: `${import.meta.env.BASE_URL}discount.jpg`,
    },
  ];
  return (
    <div
      className={`flex justify-center items-center h-full mb-32 ${
        fadeIn ? "opacity-100 duration-1000" : "opacity-0 duration-500"
      } transition-opacity`}
    >
      <div className="text-black p-8 rounded-md shadow-lg max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Work Experience</h1>
        {workExperienceData.map((job) => (
          <div key={job.id} className="flex items-center border border-black p-4 rounded mb-4">
            <div className="hidden sm:block flex-shrink-0 w-16 h-16 mr-4">
              <img
                src={job.logo}
                className="w-full h-full object-contain rounded-full mt-[-2]"
                alt={`${job.company} Logo`}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">{job.company}</h2>
              <p className="text-md font-bold">{`${job.position}`}</p>
              <p className="text-sm">{`${job.startDate} - ${job.endDate} | ${job.location}`}</p>
              <ul className="list-disc ml-6 mt-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-sm">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
