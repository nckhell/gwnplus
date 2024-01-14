interface MenuItem {
  url: string;
  label: string;
}

export const menu: Array<MenuItem> = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Loopbaanbegeleiding",
    url: "/loopbaanbegeleiding",
  },
  {
    label: "Over Gwen",
    url: "/over-gwen",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
