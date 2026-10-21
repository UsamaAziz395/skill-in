import { FaFileAlt, FaCalendarAlt, FaUserFriends } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    icon: FaFileAlt,        // Document/Invoice icon
    bgColor: "bg-blue-500", // Figma mein blue color hai
    title: "Online Billing, Invoicing, & Contracts",
    description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
  },
  {
    id: 2,
    icon: FaCalendarAlt,       // Calendar icon
    bgColor: "bg-orange-500",  // Figma mein orange color hai
    title: "Easy Scheduling & Attendance Tracking",
    description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
  },
  {
    id: 3,
    icon: FaUserFriends,      // Users/Group icon
    bgColor: "bg-cyan-400",   // Figma mein light blue/cyan color hai
    title: "Customer Tracking",
    description: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization.",
  },
];

export default featuresData;