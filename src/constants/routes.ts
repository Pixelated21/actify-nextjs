export const APP_ROUTES = {
  Root: "/",

  Dashboard: {
    Index: "/dashboard",
  },

  Admin: {
    Users: {
      Index: "/users",
      Create: "/users/create",
    },
    Customers: {
      Index: "/customers",
      Create: "/customers/create",
    },
    DeliveryRequests: {
      Index: "/delivery-requests",
      Create: "/delivery-requests/create",
    },
    Parcels: {
      Index: "/parcels",
      Create: "/parcels/create",
    },
    Warehouse: {
      Index: "/warehouse",
      Parcels: "/warehouse/parcels",
    },
    Orders: {
      Index: "/orders",
      Create: "/orders/create",
    },
    Settings: {
      Index: "/settings",
      Profile: "/settings/profile",
    },
    Invoices: {
      Index: "/invoices",
      Create: "/invoices/create",
    },
    Newsletter: {
      Index: "/newsletter",
      Create: "/newsletter/create",
    },
    Checkout: {
      Index: "/checkout",
    },
  },
  Employee: {
    Dashboard: {
      Index: "/dashboard",
    },
    DeliveryRequests: {
      Index: "/delivery-requests",
    },
    Parcels: {
      Index: "/parcels",
    },
    Orders: {
      Index: "/orders",
    },
    Customers: {
      Index: "/customers",
    },
  },

  Auth: {
    Index: "/auth",
    Login: "/auth/login",
    Register: "/auth/register",
    Logout: "/auth/logout",
    VerifyEmail: "/auth/verify-email",
    ForgotPassword: "/auth/forgot-password",
    Onboarding: "/onboarding",
    Error: "/auth/error",
    ChangeEmail: "/auth/change-email",
    SignOut: "/auth/signout",
  },

  Settings: {
    Profile: "/settings/profile",
  },
};

export const SERVER_ROUTES = {
  Authentication: {
    Login: "/auth/login",
    Register: "/auth/register",
  },
  Dashboard: {
    ParcelStats: "/dashboard/parcel-stats",
    RecentParcels: "/dashboard/recent-parcels",
    ReferralStats: "/dashboard/referral-stats",
    PromotionStats: "/dashboard/promotion-stats",
  },
  Users: {
    Index: "/users",
    Create: "/users/create",
  },
  Customers: {
    Index: "/customers",
    Create: "/customers/create",
    Checkout: "/customers/checkout",
  },
  Invoices: {
    Index: "/invoices",
    Create: "/invoices/create",
  },
  Checkout: {
    Index: "/checkout",
  },
  Orders: {
    Index: "/orders",
  },
  Parcels: {
    Index: "/parcels",
    CreatePreAlert: "/parcels/pre-alert",
    AvailableForDelivery: "/parcels/available-for-delivery",
    AvailableForAuthorizedUser: "/parcels/available-for-authorized-user",
  },
  AuthorizedUsers: {
    Index: "/authorized-users",
    AddAuthorizedPersonnel: "/authorized-users/add-authorized-personnel",
  },
  DeliveryRequests: {
    Index: "/delivery-requests",
    Create: "/delivery-requests/create-delivery-request",
    History: "/delivery-requests/history",
  },
  Referrals: {
    Index: "/referrals",
  },
  Promotions: {
    Index: "/promotions",
  },
  Settings: {
    Index: "/settings",
  },
};
