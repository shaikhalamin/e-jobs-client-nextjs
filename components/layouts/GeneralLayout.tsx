import Meta from "../header/Meta";
// import GeneralNavbar from "../header/GeneralNavbar";
import GeneralFooter from "../Footer/GeneralFooter";
import GeneralNavbar from "../header/navbar/GeneralNavbar";
import TopSearchComponent from "../search/GeneralSearchComponent";

interface ChildProps {
  children: React.ReactNode;
}
const GeneralLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <GeneralNavbar />
      <TopSearchComponent />
      {children}
      <GeneralFooter />
    </>
  );
};

export default GeneralLayout;
