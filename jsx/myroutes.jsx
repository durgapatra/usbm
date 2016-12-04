import HomePage from "./component/page/home-page";
import Home from "./component/page-container/home";
import TheInstitute from "./component/page-container/about-usbm/the-institute";
import VisionMission from "./component/page-container/about-usbm/vision-mission";
import DirectorMessage from "./component/page-container/about-usbm/director-message";
import PrincipalMessage from "./component/page-container/about-usbm/principle-message";
import Mba from "./component/page-container/courses/mba";
import Mca from "./component/page-container/courses/mca";
import McaLe from "./component/page-container/courses/mca-le"
const a=[
    {path:"/",component:HomePage,
        indexRotes:{path:"/home",component:Home},
        childRoutes:[
            {path:"/home",component:Home},
            {path:"the-institute", component:TheInstitute},
            {path:"vision-mission", component:VisionMission},
            {path:"director-message", component:DirectorMessage},
            {path:"principle-message", component:PrincipalMessage},
            {path:"mba",component:Mba},
            {path:"mca",component:Mca},
            {path:"mca-le",component:McaLe}

        ]},
]
export default a;





