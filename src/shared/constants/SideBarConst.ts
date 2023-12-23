export const sideBarData: ISideBarData[] = ([
  {
    title: "Dashboard",
    path: "/dashboard",
    roles: ["user"],
    children: [
      { title: "Main", path: "/dashboard/main", roles: ["user"] },
      { title: "Analytics", path: "/dashboard/analytic", roles: ["admin"] },
    ],

  },
  { title: "Products", path: "/products", roles: ["admin"] }
])