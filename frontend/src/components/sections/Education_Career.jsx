import React from "react";
import "./sections.css";

import mbstulogo from "../../assets/images/mbstu.png";
import ndclogo from "../../assets/images/ndc.png";
import bbslogo from "../../assets/images/bbs.jpg";
export default function Education_Career() {
  const educationData = [
    {
      id: 1,
      year: "2023",
      degree: "Bachelor of Science in Information and Communication Technology",
      institution:
        "Mawlana Bhashani Science and Technology University, Bangladesh",
      description:
        "Currently pursuing a Bachelor of Science in Information and Communication Technology with a focus on Software Engineering.",
      score: "CGPA 3.47 / 4.00 (Upto 4 Semester)",
      dateRange: "August 2023 Onwards",
      dotColor: "bg-blue-500",
      logo: mbstulogo,
    },
    {
      id: 2,
      year: "2022",
      degree: "Higher Secondary Certificate",
      institution: "Notre Dame College, Dhaka",
      description:
        "Completed Higher Secondary Certificate (HSC) under the Dhaka Board of Education in the Science group.",
      score: "GPA 5.00 / 5.00",
      dateRange: "Class of 2022",
      dotColor: "bg-emerald-500",
      logo: ndclogo,
    },
    {
      id: 3,
      year: "2020",
      degree: "Secondary School Certificate",
      institution: "Bindu Basini Government Boys' High School, Bangladesh",
      description:
        "Completed Secondary School Certificate (SSC) under the Dhaka Board of Education in the Science group.",
      score: "GPA 5.00 / 5.00",
      dateRange: "Class of 2020",
      dotColor: "bg-purple-500",
      logo: bbslogo,
    },
  ];

  return (
    <section className="education_career py-12 md:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center mb-16 md:mb-16">
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            My academic journey
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line for timeline (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0"></div>

          {/* Vertical Line for timeline (Mobile) */}
          <div className="md:hidden absolute left-[27px] h-full w-0.5 bg-gray-200 z-0 top-2"></div>

          <div className="space-y-0 relative z-10">
            {educationData.map((item, index) => {
              const isLeft = index % 2 !== 0; // 0 -> false (Right), 1 -> true (Left), 2 -> false (Right)
              const delayClass = `delay-${(index + 1) * 100}`;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row justify-between items-center w-full ${isLeft ? "md:flex-row-reverse" : ""} pb-10 md:pb-12 group relative animate-fade-in-up ${delayClass}`}
                >
                  {/* Empty space for the other side (Desktop only) */}
                  <div className="hidden md:block md:w-[45%]"></div>

                  {/* Timeline Dot and Year (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center z-20">
                    <div
                      className={`w-5 h-5 rounded-full shadow-sm border-[4px] border-white ${item.dotColor} group-hover:scale-125 transition-transform duration-300 ease-out`}
                    ></div>
                    <span className="mt-4 px-4 py-1.5 text-sm font-bold rounded-full bg-gray-50 text-gray-700 shadow-sm border border-gray-200 whitespace-nowrap group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[45%] relative">
                    {/* Timeline Dot and Year (Mobile) */}
                    <div className="md:hidden absolute left-[27px] transform -translate-x-1/2 flex flex-col items-center top-1 z-20">
                      <div
                        className={`w-4 h-4 rounded-full shadow-sm border-[3px] border-white ${item.dotColor}`}
                      ></div>
                    </div>

                    {/* Year Label Mobile */}
                    <div className="md:hidden absolute left-[55px] top-[-3px] z-20">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-50 text-gray-700 shadow-sm border border-gray-200 whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>

                    {/* The Card Itself */}
                    <div className="bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 p-6 md:p-8 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-all duration-300 ml-[45px] md:ml-0 mt-12 md:mt-0 group-hover:-translate-y-1.5 relative overflow-hidden">
                      {/* Subtle background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                      {/* Header: Logo and Title */}
                      <div className="flex items-start gap-4 md:gap-5 mb-5">
                        {/* Custom SVG Icon as Logo */}
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-gray-100/80 flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={`${item.institution} logo`}
                              className="w-full h-full object-contain rounded-xl group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <svg
                              className="w-full h-full text-gray-500 group-hover:text-blue-600 transition-colors duration-300"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 14L22 9L12 4L2 9L12 14Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M22 9V15C22 15 19 18 12 18C5 18 2 15 2 15V9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 18V22"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>

                        <div className="flex-1 pt-0 md:pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                            {item.degree}
                          </h3>
                          <p className="text-gray-500 text-sm mt-1 font-medium">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>
                      )}

                      {/* Footer: Date and Score */}
                      <div className="flex flex-wrap items-center gap-4 md:gap-5 text-sm font-medium text-gray-500 pt-5 border-t border-gray-100/80">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          {item.dateRange}
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                          </svg>
                          {item.score}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
