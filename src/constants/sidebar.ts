import {
  CalculatorIcon,
  FileIcon,
  HomeIcon,
  MailIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  SmileIcon,
  TruckIcon,
  UserIcon,
  UserPlusIcon,
  WarehouseIcon,
} from "lucide-react";
import { APP_ROUTES } from "./routes";

export const adminSidebarData = {
  teams: [
    {
      name: "Proximity",
      logo: SmileIcon,
      plan: "Proximity Admin",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: `${APP_ROUTES.Dashboard.Index}`,
      icon: HomeIcon,
    },
    {
      title: "Parcels",
      url: `${APP_ROUTES.Admin.Parcels.Index}`,
      icon: PackageIcon,
    },
    {
      title: "Customers",
      url: `${APP_ROUTES.Admin.Customers.Index}`,
      icon: UserIcon,
    },
    {
      title: "Delivery Requests",
      url: `${APP_ROUTES.Admin.DeliveryRequests.Index}`,
      icon: TruckIcon,
    },
    {
      title: "Orders",
      url: `${APP_ROUTES.Admin.Orders.Index}`,
      icon: ShoppingCartIcon,
    },
    {
      title: "Invoices",
      url: `${APP_ROUTES.Admin.Invoices.Index}`,
      icon: FileIcon,
    },
    {
      title: "Warehouse",
      url: `${APP_ROUTES.Admin.Warehouse.Index}`,
      icon: WarehouseIcon,
    },
    {
      title: "Newsletter",
      url: `${APP_ROUTES.Admin.Newsletter.Index}`,
      icon: MailIcon,
    },
    {
      title: "Settings",
      url: `${APP_ROUTES.Admin.Settings.Index}`,
      icon: SettingsIcon,
    },
    {
      title: "Users",
      url: `${APP_ROUTES.Admin.Users.Index}`,
      icon: UserIcon,
    },
  ],
  quickActions: [
    {
      name: "Create Order",
      url: `${APP_ROUTES.Admin.Orders.Create}`,
      icon: ShoppingCartIcon,
    },
    {
      name: "Create User",
      url: `${APP_ROUTES.Admin.Users.Create}`,
      icon: UserPlusIcon,
    },
    {
      name: "Create Delivery Request",
      url: `${APP_ROUTES.Admin.DeliveryRequests.Create}`,
      icon: TruckIcon,
    },
    {
      name: "Checkout",
      url: `${APP_ROUTES.Admin.Checkout.Index}`,
      icon: ShoppingCartIcon,
    },
  ],
};

export const employeeSidebarData = {
  teams: [
    {
      name: "Proximity Employee",
      logo: SmileIcon,
      plan: "Proximity",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: `${APP_ROUTES.Dashboard.Index}`,
      icon: HomeIcon,
    },
    {
      title: "Parcels",
      url: `${APP_ROUTES.Employee.Parcels.Index}`,
      icon: PackageIcon,
    },
    {
      title: "Customers",
      url: `${APP_ROUTES.Employee.Customers.Index}`,
      icon: UserIcon,
    },
    {
      title: "Delivery Requests",
      url: `${APP_ROUTES.Employee.DeliveryRequests.Index}`,
      icon: TruckIcon,
    },
    {
      title: "Orders",
      url: `${APP_ROUTES.Employee.Orders.Index}`,
      icon: ShoppingCartIcon,
    },
  ],
  navTools: [
    {
      name: "Cost Calculator",
      url: "/tools/cost-calculator",
      icon: CalculatorIcon,
    },
  ],
};
