import React from "react";
import { getUserInfo } from "features/authen";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "shared/components/Dropdown";

const UserMenuHeader = () => {
  const user = useSelector(getUserInfo);

  return (
    <Dropdown
      render={() => (
        <div>
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700">
            <div className="font-medium text-slate-800 dark:text-slate-100">
              {user.name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 italic">
              {user.role}
            </div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                to="/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3"
                to="/signin">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      )}>
      <div className="flex items-center truncate">
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
          style={{
            width: 32,
            height: 32,
            borderRadius: 9999,
          }}
        />
        <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
          {user.name}
        </span>
        <svg
          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
          viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
    </Dropdown>
  );
};

export default UserMenuHeader;
