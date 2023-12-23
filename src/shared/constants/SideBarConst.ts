export const sideBarData: ISideBarData[] = ([
  {
    title: "Dashboard",
    path: "/",
    roles: ["user"],
    children: [
      { title: "Main", path: "/", roles: ["user"] },
      { title: "Analytics", path: "/analytic", roles: ["admin"] },
    ],

  },
  { title: "Blog", path: "/blog", roles: ["admin"] }
])