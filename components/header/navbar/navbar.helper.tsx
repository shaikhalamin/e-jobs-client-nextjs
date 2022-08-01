export interface NavLinksItem {
  text: string;
  href: string;
  role: string;
}

export const navLinksGeneral: NavLinksItem[] = [
  
  {
    text: "Search Jobs",
    href: "/job-search",
    role: "nav-search-role",
  },
  {
    text: "My CV",
    href: "/account/settings/cv",
    role: "nav-cv-role",
  },
  {
    text: "Applications",
    href: "/account/settings/applications",
    role: "nav-applications-role",
  },
  {
    text: "Career Advise",
    href: "/account/settings/applications",
    role: "nav-applications-role",
  },
];

export const navLinksOffCanvas: NavLinksItem[] = navLinksGeneral;


export type CompanyLinksType = NavLinksItem & {
  target?: string;
};

export const companyLinks: CompanyLinksType[] = [
  {
    text: "Comapnies",
    href: "/companies",
    role: "e-jobs-company-role",
    target: "_blank",
  },
  {
    text: "Terms & Conditions",
    href: "/terms-of-use",
    role: "terms-of-service-role",
  },
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
    role: "privacy-policy-role",
  },
];

export const filteredLinks = (
  linksItem: NavLinksItem[],
  role?: string,
  isLoggedIn?: boolean | undefined
) => {
  if (!isLoggedIn && role) {
    return linksItem.filter((element) => element?.role != role);
  }

  return linksItem;
};

export interface UserProps {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isLoggedIn?: boolean;
}

export const isEmpty = (object: UserProps): boolean => {
  return !Object.values(object).some((x) => Boolean(x));
};
