<template>
  <el-header class="header">
    <div class="logo"></div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
  </el-header>
  <el-container>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item v-for="(route) in routes" :key="route.name" :index="route.path" @click="router.push(route.path)">
        <el-icon>
          <Document />
        </el-icon>
        <template #title>{{ route.name }}</template>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Document } from '@element-plus/icons-vue'

const router = useRouter()
//const route = useRoute()
const routes = router.options.routes

const isCollapse = ref(true)

</script>

<style>
.el-menu-vertical-demo {
  background-color: burlywood !important;
  height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100px;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #333;
}

.logo {
  width: 30px;
  /* 设定 Logo 的宽度 */
  height: 30px;
  /* 设定 Logo 的高度 */
  background-image: url('@/assets/logo.png');
  /* 设置 Logo 图片为背景图 */
  background-size: cover;
  /* 确保背景图覆盖整个元素 */
  background-position: center;
  /* 背景图居中 */
  margin-right: 20px;
  /* Logo 和标题之间的间距 */
}
</style>
