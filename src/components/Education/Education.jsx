import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 h-full"></div>

        {/* Education Entries */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
            >
              {/* Timeline Circle */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-16 h-16 rounded-full justify-center items-center z-20 shadow-lg shadow-purple-500/50">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>

              {/* Education Card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-2" : "md:pl-2"
                  }`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/60 backdrop-blur-sm">
                  {/* Header Section */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* School Logo */}
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg overflow-hidden shadow-md">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>

                    {/* Degree and School Info */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm md:text-base text-gray-300 font-medium mb-1">
                        {edu.school}
                      </h4>
                      <p className="text-xs md:text-sm text-purple-400 font-semibold">
                        {edu.date}
                      </p>
                    </div>
                  </div>

                  {/* Grade Section */}
                  <div className="mb-4 pb-4 border-b border-gray-700">
                    <p className="text-sm md:text-base text-gray-300">
                      <span className="font-bold text-purple-400">Grade:</span>{" "}
                      <span className="font-semibold text-white">{edu.grade}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;