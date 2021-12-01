
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/Andromia.vue'),
    children: [
      { path: '/main', component: () => import('src/pages/AndromiaMain.vue') },
      { name: 'index', path: '/', component: () => import('src/pages/Connexion.vue') },
      { path: '/creationCompte', component: () => import('src/pages/CreationCompte.vue') },
      { path: '/collectionMonstres', component: () => import('src/pages/CollectionDeMonstres.vue') },
      { name: 'detailMonster',path: '/detailsMonstre', component: () => import('src/pages/DetailsMonstre.vue') },
      { path: '/inventaireElements', component: () => import('src/pages/InventaireElements.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
