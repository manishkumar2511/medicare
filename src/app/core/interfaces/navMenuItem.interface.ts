export interface NavMenuItem {
  title: string;
  href: string;
  icon?: string;
  url?: string;
  //active?: boolean;
  subItems?: NavMenuItem[];
  disabled?: boolean;
  divider?: boolean;
  roles?: string[];
  permissions?: string[];
  position?: "top" | "bottom";
  clickEvent?: string; // Added for custom click events
}
