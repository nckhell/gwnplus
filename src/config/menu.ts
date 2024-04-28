interface MenuItem {
  url: string;
  alt: string;
  label: string;
}

export const menu: Array<MenuItem> = [
  {
    label: "Home",
    alt: "Homepagina",
    url: "/",
  },
  {
    label: "Loopbaanbegeleiding",
    alt: "Wat is loopbaanbegeleiding?",
    url: "/loopbaanbegeleiding",
  },
  {
    label: "Over GWN+",
    alt: "Over GWN+",
    url: "/over-gwen",
  },
  {
    label: "Blog",
    alt: "Blog",
    url: "/blog",
  },
  {
    label: "Contact",
    alt: "Contact",
    url: "/contact",
  },
];
