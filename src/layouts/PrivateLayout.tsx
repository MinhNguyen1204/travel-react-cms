import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/sidebar';
const lngs = {
  en: { nativeName: 'English' },
  jp: { nativeName: 'Japan' },
  vi: { nativeName: 'Vietnam' },
};
const PrivateLayout = ({ children }: any) => {
  const [isCheckRole, setIsCheckRole] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [sidebarData] = useState<ISideBarData[]>(
    [
      {
        title: "Dashboard",
        path: "/en/dashboard",
        roles: ["admin"],
        children: [
          { title: "Main", path: "/en/dashboard/main", roles: ["user"] },
          { title: "Analytics", path: "/en/dashboard/analytic", roles: ["admin"] },
        ],

      },
      { title: "Blog", path: "/en/blog", roles: ["admin"] }
    ]
  );
  useEffect(() => {

  }, []);

  <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} sidebarData={sidebarData} />
  const { t } = useTranslation();


  useEffect(() => {

  }, []);

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="flex">


        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} sidebarData={sidebarData} />

        <main className="text-xl">{children}</main>


      </div>
    </div>
  );
};

export default PrivateLayout;
