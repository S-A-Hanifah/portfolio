import visipinLogo from "../img/Projects/project1/logo.png";
import travelLogo from "../img/Projects/project2/logo.png";
import adLogo from "../img/Projects/project3/logo.png";

//

import visiPin1 from "../img/Projects/project1/1.png";
import visiPin2 from "../img/Projects/project1/2.png";
import visiPin3 from "../img/Projects/project1/3.png";

//

import travelTube1 from "../img/Projects/project2/1.png";
import travelTube2 from "../img/Projects/project2/2.png";
import travelTube3 from "../img/Projects/project2/3.png";

//

import admin1 from "../img/Projects/project3/1.png";
import admin2 from "../img/Projects/project3/2.png";
import admin3 from "../img/Projects/project3/3.png";

//

import htmlImg from "../img/Projects/stacks/html.png";
import cssImg from "../img/Projects/stacks/css.png";
import jsImg from "../img/Projects/stacks/js.png";
import bootstrapImg from "../img/Projects/stacks/bootstrap.png";
import reactImg from "../img/Projects/stacks/react.png";
import mongodbImg from "../img/Projects/stacks/mongodb.png";
import nodeImg from "../img/Projects/stacks/nodejs.png";
import expressImg from "../img/Projects/stacks/express.png";
import mongooseImg from "../img/Projects/stacks/mongoose.png";

//
import githubImg from "../img/Projects/stacks/github.png";
import gmailImg from "../img/Projects/stacks/gmail.png";
import linkedinImg from "../img/Projects/stacks/linkedin.png";
import {
  visipinDesc,
  visipinFeats,
  travelTubeDesc,
  travelTubeFeats,
  adminDesc,
  adminFeats,
  visiStack,
  travelStack,
  ecomStack,
} from "./details";

export const myProjects = [
  {
    img: visipinLogo,
    name: "Visipin",
    nav: "visipin",
    items: [visiPin1, visiPin2, visiPin3],
    mainDesc: visipinDesc,
    features: visipinFeats,
    stacks: visiStack,
    link: "https://visipin.onrender.com/",
  },
  {
    img: travelLogo,
    name: "TravelTube",
    nav: "traveltube",
    items: [travelTube1, travelTube2, travelTube3],
    mainDesc: travelTubeDesc,
    features: travelTubeFeats,
    stacks: travelStack,
    link: "https://traveltube.onrender.com/",
  },
  {
    img: adLogo,
    name: "Ecom Vision",
    nav: "ecom",
    items: [admin1, admin2, admin3],
    mainDesc: adminDesc,
    features: adminFeats,
    stacks: ecomStack,
    link: "https://admin-frontend-h0qh.onrender.com",
  },
];

export const mySkills = [
  {
    img: htmlImg,
    name: "HTML",
  },
  {
    img: cssImg,
    name: "CSS",
  },
  {
    img: jsImg,
    name: "JavaScript",
  },
  {
    img: bootstrapImg,
    name: "BootStrap",
  },
  {
    img: reactImg,
    name: "ReactJs",
  },
  {
    img: nodeImg,
    name: "NodeJs",
  },
  {
    img: expressImg,
    name: "ExpressJs",
  },
  {
    img: mongodbImg,
    name: "MongoDB",
  },
  {
    img: mongooseImg,
    name: "Mongoose",
  },
];

export const contact = [
  {
    img: gmailImg,
    directory: "Gmail",
    link: "mailto:syed.abu.hanifah16@gmail.com",
  },
  {
    img: githubImg,
    directory: "github",
    link: "https://github.com/S-A-Hanifah",
  },
  {
    img: linkedinImg,
    directory: "linkedin",
    link: "https://www.linkedin.com/in/syed-abu-hanifah/",
  },
];
