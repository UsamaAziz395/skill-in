import Laptop from '../assets/images/Rresources/Laptop.jpg'
import Ceo from '../assets/images/Rresources/Ceo.jpg'
import News from '../assets/images/Rresources/News.jpg'
import Press from '../assets/images/Rresources/Press.jpg'

export const Resourcesdata = {
  heading: "Lastest News and Resources",
  subHeading: "See the developments that have occurred to Skillines in the world",
  
  // Left side main big card data
  featuredNews: {
    id: 1,
    image: Laptop,
    badge: "NEWS",
    badgeColor: "bg-[#F48C06] text-white",
    title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    linkText: "Read more",
    linkUrl: "#"
  },

  // Right side small cards data
  sideNews: [
    {
      id: 2,
      image: Press,
      badge: "PRESS RELEASE",
      badgeColor: "bg-[#FFC107] text-white",
      title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      description: "Class Technologies Inc., the company that created Class,..."
    },
    {
      id: 3,
      image: News,
      badge: "NEWS",
      badgeColor: "bg-[#FFC107] text-white",
      title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
      description: "Zoom was never created to be a consumer product. Nonetheless, the..."
    },
    {
      id: 4,
      image: Ceo,
      badge: "NEWS",
      badgeColor: "bg-[#FFC107] text-white",
      title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      description: "This year, investors have reaped big financial returns from betting on Zoom..."
    }
  ]
};

export default Resourcesdata;
