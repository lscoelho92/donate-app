export default [

  {
    path: "/",
    meta: { public: true },
    name: "Home",
    title: "Home",
    component: () => import(`@/views/Home`)
  },

];
