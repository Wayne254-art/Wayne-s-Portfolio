import React from 'react';

const skills = {
    frontEnd: [
        { name: 'HTML-5', level: 90 },
        { name: 'CSS-3', level: 90 },
        { name: 'Bootstrap', level: 53 },
        { name: 'Tailwind CSS', level: 99 },
        { name: 'React.js', level: 95 },
        { name: 'Adobe Photoshop & Illustrator', level: 68 },
    ],
    backEnd: [
        { name: 'JavaScript', level: 60 },
        { name: 'Node.js', level: 81 },
        { name: 'Express.js', level: 80 },
        { name: 'Sequelize', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'JWT', level: 83 },
    ],
};

const SkillBar = ({ name, level }) => {
    return (
        <div className="mb-6">
            {/* Skill Name */}
            <div className="flex justify-between mb-2 text-sm text-gray-700">
                <span>{name}</span>
            </div>

            {/* Skill Bar */}
            <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                {/* Filled Bar */}
                <div
                    className="h-full bg-blue-500 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${level}%` }}
                >
                    {/* Percentage inside the colored bar */}
                    <span className="text-xs text-gray-200">{level}%</span>
                </div>
            </div>
        </div>
    );
};

const SkillsPage = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-8">
            <div className="container mx-auto">
                <h2 className="text-blue-500 font-bold uppercase text-center text-lg sm:text-xl">
                    The Skills I Have Gained as a Developer
                </h2>
                <h3 className="mt-6 text-center text-xl sm:text-2xl font-semibold text-gray-800">
                    My Professional Skills
                </h3>
                <div className="mt-8 flex flex-col sm:flex-row gap-12">
                    {/* Front-End Skills */}
                    <div className="flex-1">
                        <h4 className="mb-6 text-lg sm:text-xl font-medium text-black">
                            Front-End Skills
                        </h4>
                        {skills.frontEnd.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} />
                        ))}
                    </div>

                    {/* Back-End Skills */}
                    <div className="flex-1">
                        <h4 className="mb-6 text-lg sm:text-xl font-medium text-black">
                            Back-End Skills
                        </h4>
                        {skills.backEnd.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
