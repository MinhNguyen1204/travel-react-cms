import { useEffect, useState } from "react";
import { getUserInfo } from "features/authen";
import { UserRole } from "features/authen/constants";
import { MarkerIcon } from "icons/MarkerIcon";
import { MessageIcon } from "icons/MessageIcon";
import Header from "layouts/Header";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "shared/components/SideBar/SideBar";
import { RoutePath, RouteRoles } from "shared/constants/RouteConst";
import { getFirstPathBySideBar } from "shared/utils/Path";

const lngs = {
  en: { nativeName: "English" },
  jp: { nativeName: "Japan" },
  vi: { nativeName: "Vietnam" },
};

export const sideBarData: ISideBarData[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    roles: ["user"],
    icon: <MarkerIcon width={24} height={24} />,
    children: [
      { title: "Main", path: "/dashboard/main", roles: ["user"] },
      { title: "Analytics", path: "/dashboard/analytic", roles: ["admin"] },
    ],
  },
  {
    title: "Products",
    icon: <MessageIcon />,
    path: "/products",
    roles: ["admin"],
  },
];

const PrivateLayout = ({ children }: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector(getUserInfo);
  const [sideBar, setSidebarData] = useState<ISideBarData[]>([]);

  const onRoleCheck = (_sidebar: ISideBarData[]): ISideBarData[] => {
    return _sidebar.filter((data) => {
      if (user.role === UserRole.ADMIN || !data.roles?.length) return true;
      if (!data.roles.includes(user.role)) {
        return false;
      }
      if (!!data.children?.length) {
        data.children = onRoleCheck(data.children);
      }
      return true;
    });
  };

  const redirect = (_sidebar: ISideBarData[]) => {
    if (_sidebar.length === 0) {
      navigate("/404");
      return;
    }
    const path = getFirstPathBySideBar(_sidebar);
    navigate(path);
  };
  useEffect(() => {
    if (user === null) return;
    const newSideBar = onRoleCheck(sideBarData);
    const currentRouteRoles = RouteRoles[RoutePath["Products"]];

    if (!currentRouteRoles.includes(user.role as UserRole)) {
      redirect(newSideBar);
    }
    setSidebarData(newSideBar);
  }, [user]);

  return (
    <div className="w-full flex h-screen overflow-hidden antialiased bg-slate-100">
      <SideBar sideBar={sideBar} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={true} setSidebarOpen={() => null} />

        <main className="text-xl">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
