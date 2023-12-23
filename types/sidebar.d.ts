interface ISideBarProps {
  sideBar: ISideBarData[];

}

interface ISideBarData {
  title: string;
  children?: ISideBarData[];
  path: string;
  roles?: string[];
}

interface ISideBarLinkGroupProps {
  children: (fnc: () => void, open: boolean) => React.ReactNode,
  activeCondition: boolean,
}