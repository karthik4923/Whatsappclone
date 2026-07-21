<script setup>
  import { ref, onMounted } from 'vue';
  import { calls } from './user.js';

  const apple = ref([]);

  onMounted(() => {

    const found = localStorage.getItem('called');
    if (found) {
      try {
        const parsed = JSON.parse(found);
        if (Array.isArray(parsed)) {
          apple.value.push(...parsed);
        } else {
          apple.value.push(parsed);
        }
      } catch (err) {
        console.error('Invalid JSON in localStorage:', err);
      }
    }

    

   
    localStorage.setItem('calls', JSON.stringify(apple.value));
  });
  console.log(calls)
</script>

<template>
  <div class="callsmiddle">

    <h3>Calls</h3>
    <div class="mid">
      <h3>Recent</h3>
      <div class="recent">
        <div class="rdata" v-for="(data,id) in apple" :key="id">
          <div class="sep">
            <img :src="data.image" />
            <div class="cnam">
              <p>{{data.name}}</p>
              <div class="cnam1">
                <div v-if="data.call==='in'">
                  <i class="bi bi-arrow-down-left" :class="data.lift?'ch1':'ch2'"></i>
                </div>
                <div v-if="data.call==='out'">
                  <i class="bi bi-arrow-up-right" :class="data.lift?'ch1':'ch2'"></i>
                </div>
                <p>{{data.status}}</p>
              </div>
            </div>

          </div>
          <div class="icc">
            <i v-if="data.type===1" class="bi bi-camera-video"></i>
            <i v-if="data.type===2" class="bi bi-telephone"></i>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .callsmiddle {
    margin-top: 100px;
    height: 400px;
    overflow-y: auto;
    margin-bottom: 10px;
  }

    .callsmiddle h3 {
      margin-left: 10px;
    }

  .mid {
    border-top: 1px solid #ccc;
  }

  .recent {
    box-shadow: 0px 2px 7px #ccc;
    margin-top: 10px;
  }

  .rdata {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

    .rdata img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

  .sep {
    display: flex;
  }

  .cnam {
    padding-left: 10px;
  }

    .cnam p {
      margin: 0px;
    }

  .cnam1 {
    display: flex;
  }

  .ch1 {
    color: forestgreen;
  }

  .ch2 {
    color: red;
  }

  .icc {
    font-size: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
</style>
