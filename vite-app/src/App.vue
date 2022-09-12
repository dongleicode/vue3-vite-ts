<template>
   <div class="wrap-all">
   <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
         <a-sub-menu key="sub1">
            <template #icon>
               <meh-outlined />
            </template>
            <template #title>基础</template>
            <a-menu-item @click="toPage('base')" key="1">base</a-menu-item>
            <a-menu-item @click="toPage('ref')" key="2">ref</a-menu-item>
            <a-menu-item @click="toPage('toref')" key="3">toRef</a-menu-item>
            <a-menu-item @click="toPage('computed')" key="4">computed</a-menu-item>
         </a-sub-menu>
         <a-menu-item @click="toPage('base')" key="8">
           <user-outlined />
           <span>base</span>
         </a-menu-item>
         <a-menu-item @click="toPage('base')" key="7">
           <video-camera-outlined />
           <span>ref</span>
         </a-menu-item>
         <a-menu-item @click="toPage('base')" key="9">
           <upload-outlined />
           <span>toRef</span>
         </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</div>

</template>
<script setup lang='ts'>
   // defineOptions({
   //      name: 'home'
   //  })

import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
// export default defineComponent({
//   components: {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//   },
//   setup() {
//     return {
//       selectedKeys: ref<string[]>(['1']),
//       collapsed: ref<boolean>(false),
//     };
//   },
// });


   let selectedKeys = ref<string[]>(['1']);
   let collapsed = ref<boolean>(true);

   const router = useRouter();
   const toPage = (page:string) => {
       router.push('/' + page)
   }

   // console.log(router.options.routes)

</script>
<style scoped>
   .navgation{
      position: fixed;
      top: 10px;
      left: 10px;
      display: none;
   }
   .nav{
      font-size: 18px;
      border: 1px solid lightblue;
      padding: 20px;
   }

   #components-layout-demo-custom-trigger .trigger {
   font-size: 18px;
   line-height: 64px;
   padding: 0 24px;
   cursor: pointer;
   transition: color 0.3s;
   }

   #components-layout-demo-custom-trigger .trigger:hover {
   color: #1890ff;
   }

   #components-layout-demo-custom-trigger .logo {
   height: 32px;
   background: rgba(255, 255, 255, 0.3);
   margin: 16px;
   }

   .site-layout .site-layout-background {
   background: #fff;
   }

   .wrap-all>section{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
   }
</style>