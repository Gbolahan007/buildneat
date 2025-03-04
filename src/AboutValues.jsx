import { FaRegHandshake } from 'react-icons/fa';
import { FaUsersBetweenLines } from 'react-icons/fa6';
import { MdOutlineAssuredWorkload, MdVerifiedUser } from 'react-icons/md';
import { RiUserFollowLine } from 'react-icons/ri';

function AboutValues() {
  const values = [
    {
      title: 'Quality',
      icon: MdOutlineAssuredWorkload,
      textColor: 'text-blue-500',
      hoverTextColor: 'group-hover:text-blue-500',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Integrity',
      icon: RiUserFollowLine,
      textColor: 'text-purple-500',
      hoverTextColor: 'group-hover:text-purple-500',
      bgColor: 'bg-purple-500',
    },
    {
      title: 'Security',
      icon: MdVerifiedUser,
      textColor: 'text-green-500',
      hoverTextColor: 'group-hover:text-green-500',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Self Fulfillment',
      icon: FaUsersBetweenLines,
      textColor: 'text-orange-500',
      hoverTextColor: 'group-hover:text-orange-500',
      bgColor: 'bg-orange-500',
    },
    {
      title: 'Loyalty',
      icon: FaRegHandshake,
      textColor: 'text-red-500',
      hoverTextColor: 'group-hover:text-red-500',
      bgColor: 'bg-red-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
        Our values
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-6 px-4 shadow-md lg:grid-cols-5 lg:px-12">
        {values.map((value, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center py-6 transition-all duration-300 ease-in-out"
          >
            <div className="relative mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <value.icon
                className={`${value.textColor} transition-all duration-300 ease-in-out`}
                size={80}
              />
            </div>

            <h3
              className={`text-center text-lg font-medium transition-colors duration-300 ${value.hoverTextColor}`}
            >
              {value.title}
            </h3>

            <div
              className={`mt-2 h-0.5 w-0 ${value.bgColor} transition-all duration-300 group-hover:w-16`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutValues;
