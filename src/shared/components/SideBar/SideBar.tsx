import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import SidebarLinkGroup from "shared/components/SideBar/SideBarGroup";

const SideBar = ({ sideBar }: ISideBarProps) => {
  const { pathname } = useLocation();
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const _makeGroup = () => {
    if (sideBar.length === 0) return null;

    return sideBar.map((sb) => {
      if (!sb.children?.length) {
        return (
          <li
            key={sb.path}
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes(sb.path) && "bg-slate-900"
            }`}>
            <Link
              to={sb.path}
              className={`block text-slate-200 truncate transition duration-150 ${
                pathname.includes(sb.path)
                  ? "hover:text-slate-200"
                  : "hover:text-white"
              }`}>
              <div className="flex items-center justify-between">
                <div className="grow flex items-center">
                  {sb.icon}
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {sb.title}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        );
      }

      return (
        <SidebarLinkGroup
          key={sb.title}
          activeCondition={pathname.includes(sb.path)}>
          {(handleClick, open) => {
            return (
              <React.Fragment>
                <a
                  href="#0"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname === "/" || pathname.includes("dashboard")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                  }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {sb.icon}
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {sb.title}
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="flex shrink-0 ml-2">
                      <svg
                        className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                          open && "rotate-180"
                        }`}
                        viewBox="0 0 12 12">
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                    {_makeChildren(sb.children || [])}
                  </ul>
                </div>
              </React.Fragment>
            );
          }}
        </SidebarLinkGroup>
      );
    });
  };

  const _makeChildren = (c: ISideBarData[]) => {
    if (!c.length) return null;

    return c.map((item) => {
      const isActive = pathname === item.path;
      return (
        <li key={item.path} className="my-3 last:mb-1">
          <Link
            to={item.path}
            className={`block transition duration-150 truncate ${
              isActive ? "text-white" : "text-gray-400"
            }`}>
            <span
              className={
                "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
              }>
              {item.title}
            </span>
          </Link>
        </li>
      );
    });
  };
  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}>
        {/* Sidebar header */}
        <div className="flex justify-between mb-4 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}>
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link to="/" className="block">
            <img src="/public/images/diqit.png" />
          </Link>
        </div>

        {/* Links */}
        <div className="space-y-8">
          <ul className="mt-3">{_makeGroup()}</ul>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24">
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
