import Meta from "../header/Meta";
import AdminNavbar from "../header/AdminNavbar";
import AdminFooter from "../Footer/AdminFooter";

interface ChildProps {
  children: React.ReactNode;
}
const AdminLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <AdminNavbar />
      {children}
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
