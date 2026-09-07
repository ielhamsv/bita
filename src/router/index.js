import { createRouter, createWebHashHistory } from 'vue-router'

import page1 from '../views/page1.vue'
import page2 from '../views/page2.vue'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'page1',
            component: page1
        },
        {
            path: '/page2',
            name: 'page2',
            component: page2
        },
        {
            path: '/page3',
            name: 'page3',
            component: page3
        },
        {
            path: '/page4',
            name: 'page4',
            component: page4
        }
    ]
})


export default router