import AdminLayout from "../Layout/AdminLayout";
import AdminLocation from "../Page/AdminPage/AdminLocation/AdminLocation";
import AdminUserPage from "../Page/AdminPage/AdminUserPage/AdminUserPage";

export const adminRoute = [
  {
    url: "/",
    component:<AdminLayout Component={AdminUserPage}/>
  },
  {
    url: "/admin-user",
    component:<AdminLayout Component={AdminUserPage}/>
  },
  {
    url: "/admin-location",
    component:<AdminLayout Component={AdminLocation}/>
  },
];
