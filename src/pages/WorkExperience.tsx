import ringyIcon from "@/assets/work_experience/ringy_logo.png";
import nasaIcon from "@/assets/work_experience/nasa.svg";
import rnlIcon from "@/assets/work_experience/rnl.png";
import upsIcon from "@/assets/work_experience/ups.png";
import johnsonIcon from "@/assets/work_experience/johnson.jpg";
import discountIcon from "@/assets/work_experience/discount.jpg";

const workExperienceData = [
    {
    id: 7,
    position: "Software Engineer",
    company: "Ringy",
    startDate: "August 2024",
    endDate: "Present",
    responsibilities: [],
    location: "Denver, Colorado",
    logo: ringyIcon,
  },
  {
    id: 6,
    position: "Full Stack Software Developer Intern",
    company: "National Aeronautics and Space Administration",
    startDate: "June 2023",
    endDate: "August 2023",
    responsibilities: [
      "Created a graphical user interface using React to efficiently manage and control a prototype lunar power grid, which resulted in a substantial reduction of the prototype's total development time",
      "Designed, modeled, and 3D printed essential components for the prototype, ensuring precise fit and functionality, which expedited the prototype's assembly process",
      "Implemented a new fast frequency measurement algorithm in VHDL for the prototype’s FPGA clock",
    ],
    location: "Cleveland, Ohio",
    logo: nasaIcon,
  },
  {
    id: 5,
    position: "NPSS Library Software Developer Intern",
    company: "National Aeronautics and Space Administration",
    startDate: "January 2023",
    endDate: "May 2023",
    responsibilities: [
      "Refactored the official NASA Numerical Propulsion System Simulation (NPSS) Power System Library, resulting in significant performance and reliability enhancements crucial to the library’s functionality",
      "Engineered new electrical components into the library, ensuring precise simulation of their intended functions",
      "Created and implemented unit tests for all electrical components within the library, ensuring robustness and stability of the software",
      "Designed and deployed a GitHub self-hosted runner capable of automating NPSS development projects, streamlining workflows and enhancing productivity for development teams",
    ],
    location: "Remote",
    logo: nasaIcon,
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
    logo: rnlIcon,
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
    logo: upsIcon,
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
      "Learned the value of hard work through physically demanding tasks",
    ],
    location: "Parker, CO",
    logo: johnsonIcon,
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
    logo: discountIcon,
  },
];

const WorkExperience = () => {
  return (
    <div className="text-black p-4 sm:p-8 rounded-2xl shadow-lg bg-white w-full">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">Work Experience</h1>
      {workExperienceData.map((job) => (
        <div key={job.id} className="flex items-center border-2 border-black p-4 rounded-2xl mb-2">
          <div className="hidden sm:block flex-shrink-0 w-32 h-32 p-2 mr-4">
            <img src={job.logo} className="w-full h-full object-contain mt-[-2]" alt={`${job.company} Logo`} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{job.company}</h2>
            <p className="text-md sm:text-lg font-bold">{`${job.position}`}</p>
            <p className="text-md sm:text-lg font-semibold">{`${job.startDate} - ${job.endDate} | ${job.location}`}</p>
            <ul className="list-disc ml-6 mt-2">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-md sm:text-xl font-semibold">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
