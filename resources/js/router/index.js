import {createRouter, createWebHistory} from 'vue-router'
import authMiddleware from "@/middleware/auth.ts";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/Frontend/Index.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/pages/Frontend/About.vue')
        },
        {
            path: '/all-services',
            name: 'Services',
            component: () => import('@/pages/Frontend/Services.vue')
        },
        {
            path: '/career',
            name: 'Career',
            component: () => import('@/pages/Frontend/Career.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('@/pages/Frontend/Contact.vue')
        },
        {
            path: '/work',
            name: 'Work',
            component: () => import('@/pages/Frontend/Work.vue')
        },
        {
            path: '/inside-work/:slug',
            name: 'InsideWork',
            component: () => import('@/pages/Frontend/InsideWork.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            children: [
                // Auth
                {
                    path: '/admin/login',
                    name: 'Login',
                    component: () => import('@/pages/Dashboard/Auth/Login.vue')
                },
                //dashboard
                {
                    path: '/admin/dashboard',
                    name: 'Dashboard',
                    component: () => import('@/pages/Dashboard/Index.vue')
                },
                //projects
                {
                    path: '/admin/projects',
                    name: 'AllProjects',
                    component: () => import('@/pages/Dashboard/Projects/Index.vue')
                },
                //projects
                {
                    path: '/admin/project-category',
                    name: 'Category',
                    component: () => import('@/pages/Dashboard/Projects/Category.vue')
                },
                {
                    path: '/admin/create-project',
                    name: 'CreateProject',
                    component: () => import('@/pages/Dashboard/Projects/Create.vue')
                },
                {
                    path: '/admin/edit-project',
                    name: 'Edit-Project',
                    component: () => import('@/pages/Dashboard/Projects/Edit.vue')
                },
                // CMS
                {
                    path: '/admin/clients',
                    name: 'AdminClients',
                    component: () => import('@/pages/Dashboard/Cms/Clients.vue')
                },
                {
                    path: '/admin/contacts',
                    name: 'AdminContacts',
                    component: () => import('@/pages/Dashboard/Cms/Contacts.vue')
                },
                {
                  path: '/admin/slider',
                  name: 'HeroSlider',
                  component: () => import('@/pages/Dashboard/Cms/HeroSlider.vue')
                },
                {
                  path: '/admin/team',
                  name: 'AdminTeam',
                  component: () => import('@/pages/Dashboard/Cms/Team.vue')
                },
                {
                  path: '/admin/pages',
                  name: 'AdminPages',
                  component: () => import('@/pages/Dashboard/Cms/Pages/Index.vue')
                },
                {
                  path: '/admin/create-page',
                  name: 'CreatePage',
                  component: () => import('@/pages/Dashboard/Cms/Pages/Create.vue')
                },
                {
                  path: '/admin/edit-page',
                  name: 'EditPages',
                  component: () => import('@/pages/Dashboard/Cms/Pages/Edit.vue')
                },{
                  path: '/admin/setting',
                  name: 'AdminSetting',
                  component: () => import('@/pages/Dashboard/Setting/Index.vue')
                },

            ]
        }
    ]
})

// router.beforeEach(authMiddleware)

export default router
