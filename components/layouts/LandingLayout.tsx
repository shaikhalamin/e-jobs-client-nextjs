import Meta from "../header/Meta";
import LandingNavbar from "../header/LandingNavbar";
import LandingFooter from "../Footer/LandingFooter";

interface ChildProps {
  children: React.ReactNode;
}
const Landing: React.FC<ChildProps> = ( {children} ) => {
  return (
    <>
      <Meta />
      <LandingNavbar />
      {children}
      <LandingFooter />
    </>
  );
};

export default Landing;
