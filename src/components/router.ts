import { createRouter,createWebHistory } from 'vue-router'
import calls from './Project/calls.vue'
import updates from './Project/updates.vue'
import chats from './Project/chat.vue'
import commi from './Project/communities.vue'
import mainpage from './Project/mainpage.vue'
const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: mainpage,
    children: [
      { path: '', redirect: '/chat' },
      { path: 'chat', name: 'chats', component: chats },
      { path: 'update', name: 'updates', component: updates },
      { path: 'commi', name: 'communities', component: commi },
      { path: 'call', name: 'calls', component: calls},
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
