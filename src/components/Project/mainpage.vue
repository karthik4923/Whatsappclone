<script setup>
  import { ref, reactive, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  const activeTab = ref(1);
  const router = useRouter();
  const route = useRoute();
  function solve(id) {
    activeTab.value = id;
    if (id === 1) {
      router.push('/chat')
    }
    else if (id === 2) {
      router.push('/update')
    }
    else if (id === 3) {
      router.push('/commi')
    }
    else if (id === 4) {
      router.push('/call')
    }
  }
  watch(activeTab, (newValue, oldValue) => {
    console.log(`Tab changed from ${oldValue} to ${newValue}`)
  }, { immediate:true })
  watch(() => route.path, (newPath) => {
    if (newPath === '/chat') {
      activeTab.value = 1
    } else if (newPath === '/update') {
      activeTab.value = 2
    } else if (newPath === '/commi') {
      activeTab.value = 3
    } else if (newPath === '/call') {
      activeTab.value = 4
    }
  },
    { immediate: true } 
  )
  const drag = ref(false);
  function dragger() {
    drag.value = !drag.value
  }
</script>
<template>
  <div class="outercontainer" @click="drag=false">
    <header class="top">
      <div class="header">
        <h3>WhatsApp</h3>
      </div>
      <div class="icons">
        <i class="bi bi-qr-code-scan"></i>
        <i class="bi bi-camera"></i>
        <i class="bi bi-three-dots-vertical" @click.stop="dragger"></i>

      </div>
      <div class="drag" v-if="drag" @click.stop>
        <p><i class="bi bi-plus-circle"></i>New group</p>
        <p><i class="bi bi-person-add"></i>New community</p>
        <p><i class="bi bi-broadcast-pin"></i>New broadcast</p>
        <p><i class="bi bi-link-45deg"></i>Linked devices</p>
        <p><i class="bi bi-bookmark-star"></i>starred</p>
        <p><i class="bi bi-credit-card"></i>payments</p>
        <p><i class="bi bi-list-check"></i>Read all</p>
        <p><i class="bi bi-gear-wide-connected"></i>settings</p>
      </div>
    </header>
    <div class="content" :class="{disabled:drag===true}">
      <router-view ></router-view>
    </div>

    <footer class="bottom">
      <div class="bicon" @click="solve(1)" :class="{ act: activeTab === 1 }">
        <i :class="activeTab === 1 ? 'bi bi-chat-right-text-fill' : 'bi bi-chat-right-text'"></i>
        <p>Chats</p>
      </div>
      <div class="bicon" @click="solve(2)" :class="{ act: activeTab === 2 }">
        <i :class="activeTab === 2 ? 'bi bi-reply-all-fill' : 'bi bi-reply-all'"></i>
        <p>Updates</p>
      </div>
      <div class="bicon" @click="solve(3)" :class="{ act: activeTab === 3 }">
        <i :class="activeTab === 3 ? 'bi bi-people-fill' : 'bi bi-people'"></i>
        <p>Communities</p>
      </div>
      <div class="bicon" @click="solve(4)" :class="{ act: activeTab === 4 }">
        <i :class="activeTab === 4 ? 'bi bi-telephone-fill' : 'bi bi-telephone'"></i>
        <p>Calls</p>
      </div>
    </footer>

  </div>
</template>
<style scoped>
  .outercontainer{
    position:relative;
  }
  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 3px 7px #ccc;
  }

  .header{
    justify-items:center;
    align-items:center;
    margin-top:5px;
    padding:10px;
    color:#38c228;
  }
  .icons {
    padding:10px;
    gap:30px;
   
  }
  .icons i {
     padding: 10px;
     font-size: 30px;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px -1px 10px #ccc;
    z-index: 100;
  }

  .bicon{
      margin-top:5px;
      text-align:center;
   }
   .bottom .bicon i{
     font-size:20px;
   }
  .act {
    color: #38c228;
  }
  .content{
      box-sizing:border-box;
  }
  .content.disabled {
      pointer-events: none;
      user-select: none;
      
   }.drag{
      position:absolute;
      background-color:white;
      right:0;
      top:90px;
      padding:10px;
      box-shadow:0px 2px 5px #ccc;
      
  }
  .drag i{
      color: #38c228;
      font-size:17px;
      padding:5px;
      cursor:pointer;
  }
  .drag p{
      border-bottom:2px solid #ccc;
      margin:0;
      padding:10px;
      cursor:pointer;
  }
  .drag p:hover{
      transform:scale(1.03);
  }
  

</style>
