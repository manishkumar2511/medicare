import { NavMenuItem } from "../interfaces/index";

export const SuperAdminSidebarMenuItems: NavMenuItem[] = [
  {
    href: "/dashboard",
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    position: "top",
  },
  {
    href: "/tenants",
    title: "Tenant Management",
    icon: "/icons/user-management.svg",
    position: "top",
  },
  {
    href: "/financials",
    title: "Financials & Payment",
    icon: "/icons/financials.svg",
    position: "top",
  },

  {
    href: "/audit-logs",
    title: "Audit Logs",
    icon: "/icons/audit-logs.svg",
    position: "top",
  },

  {
    href: "/user-profile",
    title: "Profile",
    icon: "/icons/profile.svg",
    position: "bottom",
  },
  {
    href: "/logout",
    title: "Logout",
    icon: "/icons/logout.svg",
    position: "bottom",
    clickEvent: "logout",
  },
];

export const AdminSidebarMenuItems: NavMenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "/icons/dashboard.svg",
    position: "top",
  },
  {
    title: "User Management",
    href: "/clients",
    icon: "/icons/user-management.svg",
    position: "top",
    subItems: [
      {
        title: "Clients",
        href: "/clients",
        icon: "/icons/clients.svg",
      },
      {
        title: "Inspectors",
        href: "/inspectors",
        icon: "/icons/inspectors.svg",
      },
      {
        title: "Contractors",
        href: "/contractor",
        icon: "/icons/contractors.svg",
      },
      {
        title: "External Contractor Approvals",
        href: "/external-contractor-approvals",
        icon: "/icons/contractors.svg",
      },
    ],
  },
  {
    title: "Schedules",
    href: "/schedules",
    icon: "/icons/calendar-sidebar.svg",
    position: "top",
  },
  {
    title: "Warehouses",
    href: "/warehouses",
    icon: "/icons/warehouse.svg",
    position: "top",
  },
  {
    title: "Inspection Management",
    href: "/inspections",
    icon: "/icons/inspection-management.svg",
    position: "top",
  },
  {
    title: "Repair Management",
    href: "/repair-management",
    icon: "/icons/repair-management.svg",
    position: "top",
  },
  {
    title: "QR Code Management",
    href: "/qr-report",
    icon: "/icons/qr-code.svg",
    position: "top",
  },
  {
    title: "Audit Logs",
    href: "/audit-logs",
    icon: "/icons/audit-logs.svg",
    position: "top",
  },

  //  bottom section
  {
    title: "Account Management",
    href: "/user-profile",
    icon: "/icons/profile.svg",
    position: "bottom",
  },
  {
    title: "Logout",
    href: "", // will handle with (click)
    icon: "/icons/logout.svg",
    position: "bottom",
    clickEvent: "logout",
  },
];

export const ClientSidebarMenuItems: NavMenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "/icons/dashboard.svg",
    position: "top",
  },
  {
    title: "Inspections",
    href: "/inspections",
    icon: "/icons/inspection-management.svg",
    position: "top",
  },
  {
    title: "Repairs",
    href: "/repairs",
    icon: "/icons/repair-management.svg",
    position: "top",
  },
  {
    title: "Warehouses",
    href: "/warehouses",
    icon: "/icons/warehouse.svg",
    position: "top",
  },
  {
    title: "Contractors",
    href: "/client-contractors",
    icon: "/icons/contractors.svg",
    position: "top",
  },

  {
    title: "Account Management",
    href: "/user-profile",
    icon: "/icons/profile.svg",
    position: "bottom",
  },
  {
    title: "Logout",
    href: "",
    icon: "/icons/logout.svg",
    position: "bottom",
    clickEvent: "logout",
  },
];

export const InspectorSidebarMenuItems: NavMenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "/icons/dashboard.svg",
    position: "top",
  },
  {
    title: "Clients",
    href: "/clients",
    icon: "/icons/clients.svg",
    position: "top",
  },
  {
    title: "Inspections",
    href: "/inspections",
    icon: "/icons/inspection-management.svg",
    position: "top",
  },
  {
    title: "Schedules",
    href: "/schedules",
    icon: "/icons/calendar-sidebar.svg",
    position: "top",
  },
  {
    title: "Account Management",
    href: "/user-profile",
    icon: "/icons/profile.svg",
    position: "bottom",
  },
  {
    title: "Logout",
    href: "",
    icon: "/icons/logout.svg",
    position: "bottom",
    clickEvent: "logout",
  },
];
