const Admin = () => import("../pages/admin");
const AdminA = () => import("../pages/admin/a/a");
const AdminB = () => import("../pages/admin/b/b");

const Merchants = () => import("../pages/merchants");
const MerchantsA = () => import("../pages/Merchants/a/a");
const MerchantsB = () => import("../pages/Merchants/b/b");

const dynanicRoutes = [
  {
    path: "/admin",
    comments: Admin,
    name: "admin",
    meta: {
      name: "管理员",
      icon: "",
    },
    children: [
      {
        path: "/adminA",
        comments: AdminA,
        name: "adminA",
        meta: {
          name: "管理员A",
          icon: "",
        },
      },
      {
        path: "/adminB",
        comments: AdminB,
        name: "adminB",
        meta: {
          name: "管理员B",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/merchants",
    comments: Merchants,
    name: "merchants",
    meta: {
      name: "商家",
      icon: "",
    },
    children: [
      {
        path: "/merchantsA",
        comments: MerchantsA,
        name: "merchantsA",
        meta: {
          name: "商家A",
          icon: "",
        },
      },
      {
        path: "/merchantsB",
        comments: MerchantsB,
        name: "merchantsB",
        meta: {
          name: "商家B",
          icon: "",
        },
      },
    ],
  },
];
  export default dynanicRoutes