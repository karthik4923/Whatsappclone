<script setup>
  import { onMounted, onUnmounted, ref, watch, defineExpose } from 'vue';
  import { stories, userdatas,channels } from './user.js';
  
  const datas = ref([]);
  const perm = ref(null);
  const dd = ref(null);
  
  onMounted(() => {
    datas.value = stories.map(s => {
      const found = userdatas.find(u => u.phone === s.phone);
      return {
        ...found,
        story: s.story,
      };
    });
    const b = localStorage.getItem('bb');
    if (b) {
      const c = JSON.parse(b);
      //bigvid(c);
      if (c >= 0 && c < datas.value.length) {
        
        setTimeout(() => {
          bigvid(c);
          localStorage.removeItem('bb');
        }, 0);
      }
    }
  });
  function bigvid(id) {
    if (perm.value === id) {
      perm.value = null;
      dd.value = null;
    } else {
      perm.value = id;
      dd.value = datas.value[id];
    }
  }
  

  function onEsc(e) {
    if (e.key === 'Escape') {
      perm.value = null;
      dd.value = null;
    }
  }
  function closeModal() {
    perm.value = null;
    dd.value = null;
  }
  onMounted(() => {
    window.addEventListener('keydown', onEsc);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', onEsc);
  });
  
  
</script>

<template>

  <div class="updatesmiddle">
    <div class="inner">
      <h3>Status</h3>
      <div class="topslider">
        <div v-for="(data, index) in datas"
             :key="index"
             class="videor">
          <div class="users">
            <div class="bimg">
              <img :src="data.image" />
            </div>
            <p>{{ data.name }}</p>
          </div>
          <video @click="bigvid(index)">
            <source :src="data.story" type="video/mp4" />
          </video>
        </div>
      </div>
      <h3>Channels</h3>
      <div class="ch0">
        <div v-for="(data,index) in channels" :key="index"
             class="ch1">
          <img :src="data.image" />
          <div class="ch12">
            <div class="ch2">
              <h4>{{data.title}}</h4>
              <span>{{data.status}}</span>
            </div>
            <div class="ch3">
              <p>{{data.data}}</p>
              <button><i class="bi bi-bell"></i> Follow</button>
            </div>

          </div>
          
        </div>
        <button class="bb">Explore More</button>
      </div>
      
    </div>


    <div v-if="perm !== null && dd" class="modal" @click="closeModal">
      <video class="videdi"
             controls
             autoplay
             playsinline
             :key="dd.story"
              @ended="closeModal">
        <source :src="dd.story" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style scoped>
   .updatesmiddle {
    margin-top: 80px;
    margin-bottom: 50px;
  }

   .inner {
    height: 400px;
    overflow-y: auto;
  }

   .inner::-webkit-scrollbar {
      width: 0px;
    }

   .inner button {
      border: none;
      background-color: #8b5656;
      color: white;
    }

   .inner h3 {
      margin-top: 10px;
      margin-left: 10px;
    }

   .topslider {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 10px;
    position: relative;
    width: 100%;
    scroll-behavior: smooth;
  }

   .topslider::-webkit-scrollbar {
      height: 5px;
    }

   .topslider::-webkit-scrollbar-thumb {
      background-color: #c7c7c7;
      border-radius: 10px;
      border: 1px solid #808080;
    }

   .topslider::-webkit-scrollbar-track {
      background-color: #f5ecf6;
      border: 1px solid #f4d9f7;
    }

   .inner {
    padding: 10px;
  }

   .videor {
    padding: 10px;
    transition: all 0.2s ease-out;
    position: relative;
  }

   .videor:hover {
      transform: scale(1.03);
    }

   .videor video {
      height: 300px;
      width: 200px;
      border-radius: 10px;
      border: 1px solid #c7c7c7;
      transition: all 0.3s ease;
      cursor: pointer;
    }

   .users {
    position: absolute;
    padding: 10px;
    z-index: 50;
    display: flex;
    background: linear-gradient(45deg, #4d4c4c94 40%, #65656556 60%, transparent);
    width: 200px;
  }

   .users .bimg {
      border: 2.5px solid #38c228;
      border-radius: 50%;
      padding: 5px;
    }

   .users img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }

   .users p {
      color: white;
      padding: 10px;
    }

   .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

   .videdi {
    width: 80vw;
    max-width: 900px;
    height: auto;
    max-height: 80vh;
    border-radius: 15px;
    background-color: black;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  }
   .ch0{
       display:flex;
       flex-direction:column;
       gap:10px;
       
   }
  .ch1 {
    display:flex;
    width:100%;
    padding:10px;
    gap: 10px;
    border: 1px solid #c8c8c8;
    border-radius: 10px;
    box-shadow: 0px 2px 6px #ccc;
  }
  .ch12{
      width:100%;
  }
  .ch2 {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
   .ch2 span {
      color:forestgreen;
    }
  .ch3 {
    justify-content: space-between;
    display: flex;
    width: 100%;
  }
  .ch3 p{
      margin:0px;
      color:dimgrey;
      transition:all 0.3s ease;
      font-size:13px;
  }
  .ch3 button {
     background-color: #38c228;
     width:100px;
     border-radius:10px;
     border:1px solid forestgreen;
  }
  .ch3 button:hover{
      background-color:white;
      color:#38c228;
      border:1px solid #38c228;
  }
   .ch1 img{
       width:50px;
       height:50px;
       border-radius:50%;
       border:2px solid #38c228;
   }
   .ch0 .bb{
       color:#38c228;
       background-color:#f1ffe8;
       border:1px solid forestgreen;
       border-radius:10px;
       padding:5px;
       text-shadow:1px 2px 2px black;
   }
   .ch0 .bb:hover{
       background-color:forestgreen;
       color:#f1ffe8;
   }
   
</style>
