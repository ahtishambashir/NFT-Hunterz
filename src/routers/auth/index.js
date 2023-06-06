import AnalyticPage from "../../views/AnalyticsPage/AnalyticsPage";
import Collection from "../../views/CollectionPage/Collection";
import LandingPage from "../../views/LandingPage/LandingPage";
import { landingpage, collectionpage, analyticspage } from "../RoutePath";

const AuthRouter = [
  { path: landingpage, component: LandingPage },
  { path: collectionpage, component: Collection },
  { path: analyticspage, component: AnalyticPage },
];

export default AuthRouter;
