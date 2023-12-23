import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SideBar from './SideBar/sidebar';
import Header from './Header';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'features/Auth';
import { sideBarData } from 'shared/constants/SideBarConst';
import { UserRole } from 'features/auth/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath, RouteRoles } from 'shared/constants/RouteConst';
const lngs = {
  en: { nativeName: 'English' },
  jp: { nativeName: 'Japan' },
  vi: { nativeName: 'Vietnam' },
};

interface IProps {
  children: React.ReactNode;
  roles: string[];
}
const PrivateLayout = ({ children }: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector(getUserInfo);

  const [sideBar, setSidebarData] = useState<ISideBarData[]>(
    []
  );

  const onRoleCheck = (_sidebar: ISideBarData[]): ISideBarData[] => {
    return _sidebar.filter((data) => {
      if (user.role === UserRole.ADMIN) return true;
      if (!data.roles.includes(user.role)) {
        return false
      }
      if (!!data.children?.length) {
        data.children = onRoleCheck(data.children);
      }
      return true;
    });
  }

  const redirect = (_sidebar: ISideBarData[]) => {
    if (_sidebar.length === 0) {
      navigate("/404")
      return;
    }
    for (let i = 0; i < _sidebar.length; i++) {
      if (!_sidebar[i].children?.length) {
        navigate(_sidebar[i].path);
        break;
      }
      const childPath = _sidebar[i].children?.find(item => item.path)?.path;
      if (childPath) {
        navigate(childPath);
        break;
      }

    }
  }
  useEffect(() => {
    const newSideBar = onRoleCheck(sideBarData);
    const currentRouteRoles = RouteRoles[RoutePath["Blog"]];

    if (!currentRouteRoles.includes(user.role as UserRole)) {
      redirect(newSideBar);
    }
    setSidebarData(newSideBar);
  }, []);

  return (
    <div className="w-full flex h-screen overflow-hidden antialiased bg-slate-100">
      <SideBar sideBar={sideBar} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

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
