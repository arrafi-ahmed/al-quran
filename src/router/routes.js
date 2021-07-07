const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      {
        path: '/juz',
        name: 'list-juz',
        component: () => import('pages/ListJuz.vue'),
      },
      {
        path: '/surah/:id',
        name: 'surah',
        props: true,
        component: () => import('pages/Surah.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
