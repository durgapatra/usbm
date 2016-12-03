import HomePage from "./component/page/home-page";
import Home from "./component/page-container/home";
import Mca from "./component/page-container/courses/mca";
import TheInstitute from "./component/page-container/about-usbm/the-institute";
import VisionMission from "./component/page-container/about-usbm/vision-mission";
import DirectorMessage from "./component/page-container/about-usbm/director-message";
import PrincipalMessage from "./component/page-container/about-usbm/principle-message";
const a=[
    {path:"/",component:HomePage,
        indexRotes:{path:"/home",component:Home},
        childRoutes:[
            {path:"/home",component:Home},
            {path:"the-institute", component:TheInstitute},
            {path:"vision-mission", component:VisionMission},
            {path:"director-message", component:DirectorMessage},
            {path:"principle-message", component:PrincipalMessage},
            {path:"mca",component:Mca}
        ]},
]
export default a;





