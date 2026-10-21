
import Instructors from '../assets/images/Skillin/Instructors.jpg'
import Student from '../assets/images/Skillin/Student.jpg'

const Skillindata = [
  {
    id: 1,
    title: "FOR INSTRUCTORS",
    buttonText: "Start a class today",
    buttonStyle: "border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300",
    image :Instructors,
  },
  {
    id: 2,
    title: "FOR STUDENTS",
    buttonText: "Enter access code",
    buttonStyle: "bg-[#23BDEE] text-white hover:bg-[#1ba8d4] transition-colors duration-300", // Cyan color
    image: Student,
  },
];

export default Skillindata