import {createRouter,createWebHistory} from 'vue-router';

// ------- Pages
import Home from "@/pages/Home.vue";
import Ranking from "@/pages/Ranking.vue";
import Artists from "@/pages/Artists.vue";
import Songs from "@/pages/Songs.vue";
import Voting from "@/pages/Voting.vue";


// ------ Config of routes
const routes=[
    {
        path:'/home',
        name:'home',
        component: Home
    },
    {
        path:'/artists',
        name:'artists',
        component: Artists
    },
    {
        path:'/ranking',
        name:'ranking',
        component: Ranking
    },
    {
        path:'/songs',
        name:'songs',
        component: Songs
    },
    {
        path:'/voting',
        name:'voting',
        component: Voting
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
})