export const mobileNavItems = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/about",
    label: "about",
  },
  {
    path: "/work",
    label: "work",
  },
  {
    path: "/resources",
    label: "resources",
  },
  {
    path: "/contact",
    label: "contact",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
