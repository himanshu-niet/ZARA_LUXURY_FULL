
import AddProduct from "views/AddProduct";
import Dashboard from "views/Dashboard.js";
import Orders from "views/Orders";
import PendingOrder from "views/PendingOrders";
import Products from "views/Products";
import Users from "views/Users";


const dashboardRoutes = [

 

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/addProduct",
    name: "Add Product",
    icon: "nc-icon nc-notes",
    component: AddProduct,
    layout: "/admin"
  },

  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-paper-2",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-paper-2",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/pendingOrders",
    name: "Pending Orders",
    icon: "nc-icon nc-paper-2",
    component: PendingOrder,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: Users,
    layout: "/admin"
  },
];

export default dashboardRoutes;
