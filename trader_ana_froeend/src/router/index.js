import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from '@/components/Views/DashboardView.vue'
import AnalysisView from '@/components/Views/AnalysisView.vue'
import DetailView from '@/components/Views/DetailView.vue'

const routes = [
  { path: '/', name:'概览', component: DashboardView },
  { path: '/AnalysisView', name:'分析', component: AnalysisView },
  { path: '/DetailView', name:'详情', component: DetailView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;