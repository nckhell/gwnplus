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
    label: "Over Gwen",
    alt: "Over Gwen",
    url: "/over-gwen",
  },
  {
    label: "Contact",
    alt: "Contact",
    url: "/contact",
  },
];
