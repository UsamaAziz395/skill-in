
import Bally from '../assets/images/Discussions/Bally.png';
import Sarah from '../assets/images/Discussions/Sarah.jpg';
import picone from '../assets/images/Managment/picone.png';
import pictwo from '../assets/images/Managment/pictwo.png';
import picthree from '../assets/images/Managment/picthree.png';

const FeaturesData = {
  subtitle: "Our Features",

  description:
    "This very extraordinary feature can make learning activities more efficient",

  sectionTitle: "A user interface designed for the classroom",

  classroomImage: picone,

  students: [
    {
      id: 1,
      name: "Jenny Wilson",
      image: Bally,
    },
    {
      id: 2,
      name: "Adam Levine",
      image: Sarah,
    },
    {
      id: 3,
      name: "Patricia Mendoza",
      image: picone,
    },
    {
      id: 4,
      name: "Student 4",
      image: pictwo,
    },
    {
      id: 5,
      name: "Student 5",
      image: picthree,
    },
  ],

  features: [
    {
      id: 1,
      icon: "grid",
      text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    },
    {
      id: 2,
      icon: "monitor",
      text: "TA's and presenters can be moved to the front of the class.",
    },
    {
      id: 3,
      icon: "users",
      text: "Teachers can easily see all students and class data at one time.",
    },
  ],
};

export default FeaturesData;
