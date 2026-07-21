<script setup>
  import { userdatas as initialUserdatas, messages, stories } from './user.js'
  import { useRouter } from 'vue-router'
  import { ref, watch, reactive, computed, defineEmits } from 'vue'
  import tick from '../../assets/images/tick.png';
  import { calls } from './user.js';
  const userdatas = reactive([...initialUserdatas]) 
  const userdata = ref([...userdatas])
  const router = useRouter();
  const actid = ref(null)
  const imgact = ref(false)
  const lefter = ref(false)
  const dater = ref(null)
  const cont = ref({})
  const msg = ref('')
  const p = ref(null)
  const editedText = ref('')
  const enab = ref(null)
  const buttone = ref(1)
  const display = ref([])
  const searchterm=ref('')
  let n = messages.length;
  const filteredUsers = computed(() => {
    let filtered = [...userdatas];

    
    if (buttone.value === 2) {
      filtered = filtered.filter(t => t.type === 'solo');
    } else if (buttone.value === 3) {
      filtered = filtered.filter(t => t.favo === true);
    } else if (buttone.value === 4) {
      filtered = filtered.filter(t => t.type === 'group');
    }

 
    if (searchterm.value) {
      const term = searchterm.value.toLowerCase();
      filtered = filtered.filter(u => u.name.toLowerCase().includes(term));
    }

    return filtered;
  });
 
  function phoned(num) {
    const a = stories.indexOf(stories.find((t) => t.phone === num));
    localStorage.setItem('bb', JSON.stringify(a));
    router.push('update')
    console.log(a);
  }

  function favor(booll, originalIndex) {
    userdatas[originalIndex].favo = !booll
    buttone.value = 3;
  }

  function activated(originalIndex) {
    actid.value = originalIndex
    const a = userdatas[originalIndex]
    lefter.value = true
    const found = messages.find(t => t.phone === a.phone)
    if (found) {
      cont.value = {
        ...found,
        name: a.name,
        status: a.status,
        image: a.image,
      }
    } else {
      cont.value = { times: [], name: a.name, status: a.status, image: a.image }
    }
    p.value = null
    localStorage.setItem('chatdata', JSON.stringify(cont.value))
  }
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  
  const caller = ref(false);
  const vp = ref(null);
  const pa = ref([]);
  
  const tpp = ref(false);
  function calle() {
    caller.value = true;
  }
  function closeCall(pp) {
    
    console.log(pp);
    if (pp === 1) vp.value = false;
    if (pp === 2) vp.value = true;
    const a = {
      name: cont.value.name,
      image: cont.value.image,
      status: getCurrentTime(),
      type: tpp.value,
      call: 'out',
      lift: vp.value,
    }
    pa.value.push(a);
    pa.value.push(...calls);
    console.log(pa.value);

    localStorage.setItem('called', JSON.stringify(pa.value));
    caller.value = false;
  }
  
  function calling(i) {
    calle();
    tpp.value = i;
  }
  function imaged(data) {
    imgact.value = true
    dater.value = data
    pape.value = null;
  }

  function closer() {
    imgact.value = false
    dater.value = null
  }
  const emo = ref(false);
  
  function fun() {
    emo.value = !emo.value;
  }
  function addEmoji(emoji) {
    msg.value += emoji;
    emo.value = false;
  }
  
  function send() {

    if (!msg.value.trim()) return

    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const dateStr = now.toLocaleDateString()

    if (!cont.value.times) cont.value.times = []

    let dateGroup = cont.value.times.find(d => d.time === dateStr)

    if (!dateGroup) {
      dateGroup = {
        time: dateStr,
        data: [],
      }
      cont.value.times.push(dateGroup)
    }

    
    dateGroup.data.push({ sender: 'them', text: msg.value.trim() })
    /*const index = messages.findIndex(m => m.phone === cont.value.phone)
    if (index !== -1) {
      messages[index] = { ...cont.value }
    }
    */


    localStorage.setItem('chatdata', JSON.stringify(cont.value))

    msg.value = '';
    emo.value = false;
    
  }
  
  
  function upde(outerIdx, innerIdx) {
    p.value = `${outerIdx}+${innerIdx}`; 
  }
  
  function editor() {
    enab.value = p.value;
    const [outerIdx, innerIdx] = p.value.split('+').map(Number);
    editedText.value = cont.value.times[outerIdx].data[innerIdx].text;
   
    
  }
  function saveEdit() {
    if (!enab.value) return;
    const [outerIdx, innerIdx] = enab.value.split('+').map(Number);
    cont.value.times[outerIdx].data[innerIdx].text = editedText.value;
    localStorage.setItem('chatdata', JSON.stringify(cont.value));
    enab.value = null;
    p.value = null;
    editedText.value = '';
  }

  function cancelEdit() {
    enab.value = null;
    p.value = null;
    editedText.value = '';
  }

  function canceller() {
    enab.value = null;
    p.value = null;
    editedText.value = '';
  }
  function deletemsg() {
    if (!p.value) return;
    const [outerIdx, innerIdx] = p.value.split('+').map(Number);
    cont.value.times[outerIdx].data.splice(innerIdx, 1);
    if (cont.value.times[outerIdx].data.length === 0) {
      cont.value.times.splice(outerIdx, 1);
    }
    localStorage.setItem('chatdata', JSON.stringify(cont.value));
    p.value = null;
  }
  function getLastMessageSnippet(phone) {
    const userMessages = messages.filter(m => m.phone === phone);
    if (!userMessages.length) return '';

   
    const found = messages.find(m => m.phone === phone);
    if (!found || !found.times || !found.times.length) return '';

    
    const allMsgs = found.times.flatMap(day => day.data);
    if (!allMsgs.length) return '';

    const lastMsg = allMsgs[allMsgs.length - 1].text || '';

    
    const words = lastMsg.split(' ');
    if (words.length <= 4) return lastMsg;
    return words.slice(0, 4).join(' ') + '...';
  }
  const pape = ref(null);
  function funn(id) {
    pape.value = pape.value === id ? null : id;
  }
  function closepape() {
    pape.value = null;
   
  }
</script>

<template>
  <div class="outer" @click="closepape">
    <div class="left">
      <div class="ltop">
        <div class="searcher">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Ask Meta AI or Search" v-model="searchterm" />
        </div>
        <div class="taker">
          <button @click="buttone=1" :class="{ acshow: buttone === 1 }">All</button>
          <button @click="buttone=2" :class="{ acshow: buttone === 2 }">Unread</button>
          <button @click="buttone=3" :class="{ acshow: buttone === 3 }">Favourites</button>
          <button @click="buttone=4" :class="{ acshow: buttone === 4 }">Groups</button>
        </div>
      </div>
      <div class="linside">
        <div class="lmiddle"
             v-for="data in filteredUsers"
             :key="data.phone"
             @click="activated(userdatas.findIndex(u => u.phone === data.phone))"
             :class="{ act: actid === userdatas.findIndex(u => u.phone === data.phone) }">
          <div class="imager" v-if="data.story===true">
            <img :src="data.image" @click.stop="funn(data.phone)" />
            <div v-if="pape===data.phone" class="statuss">
              <p @click.stop="imaged(data)" style="margin:0px;border-right:1px solid #ccc;padding-right:10px;">Profile</p>
              <p style="margin:0px" @click="phoned(data.phone)">Status</p>
            </div>
          </div>
          <div v-else><img :src="data.image" @click.stop="imaged(data)" style="width:60px;height:60px;" /> </div>

          <div class="spaner1">
            <p>{{ data.name }}</p>
            <p class="last-message-snippet" style="font-size: smaller; color: gray;">
              {{ getLastMessageSnippet(data.phone) }}
            </p>
            <p v-if="data.status === 'online'" style="font-size: small; color: #38c228;">
              {{ data.status }}
            </p>
            <p v-else style="font-size: small; color: #808080;">{{ data.status }}</p>
          </div>
          <p v-if="data.favo === true"
             style="color: red;"
             @click.stop="favor(true, userdatas.findIndex(u => u.phone === data.phone))">
            <i class="bi bi-heart-fill"></i>
          </p>
          <p v-else
             @click.stop="favor(false, userdatas.findIndex(u => u.phone === data.phone))">
            <i class="bi bi-heart"></i>
          </p>

        </div>
      </div>
    </div>

    <div class="right">
      <div class="rcontainer" v-if="lefter">
        <div class="rtop">
          <div class="rtleft">
            <img :src="cont.image" />
            <div class="namer">
              <p style="font-size:large;font-weight:500;">{{cont.name}}</p>
              <p style="font-size:15px; font-weight:400;">{{cont.status}}</p>
            </div>

          </div>
          <div class="rtright">
            <i @click="calling(1)" class="bi bi-camera-video"></i>
            <i @click="calling(2)" class="bi bi-telephone"></i>
          </div>


        </div>
        <div class="rmiddle">
          <div class="middle1">
            <div v-for="(data,index) in cont.times"
                 :key="index"
                 class="rmdata">
              <p class="dater">{{data.time}}</p>
              <div v-for="(message, idx) in data.data" :key="idx" class="rmmsg">
                <p v-if="message.sender === 'me'"
                   class="sender">
                  {{ message.text }}
                </p>
                <div v-else-if="message.sender === 'them'"
                     class="receiver"
                     @click="upde(index,idx)">
                  <div v-if="p===`${index}+${idx}`" class="changer">
                    <button @click="editor"><i class="bi bi-pencil-square"></i></button>
                    <button @click.stop="deletemsg"><i class="bi bi-trash3-fill"></i></button>
                    <button @click.stop="canceller">X</button>
                  </div>
                  <div v-if="enab===`${index}+${idx}`" class="saver">
                    <input type="text" v-model="editedText" />
                    <div class="iconer">
                      <button @click.stop="saveEdit"><i class="bi bi-floppy2-fill"></i></button>
                      <button @click.stop="cancelEdit"><i class="bi bi-x-octagon"></i></button>
                    </div>

                  </div>
                  <div v-else class="tickker">
                    {{ message.text }}
                    <i class="bi bi-chevron-double-right"></i>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div class="messager">
            <div class="msg1">
              <i class="bi bi-emoji-smile" @click="fun"></i>
              <div class="emoji" v-if="emo">
                <i class="bi bi-emoji-angry" @click="addEmoji('😠')"></i>
                <i class="bi bi-emoji-astonished" @click="addEmoji('😲')"></i>
                <i class="bi bi-emoji-expressionless" @click="addEmoji('😑')"></i>
                <i class="bi bi-emoji-grin" @click="addEmoji('😁')"></i>
                <i class="bi bi-emoji-heart-eyes" @click="addEmoji('😍')"></i>
                <i class="bi bi-emoji-kiss" @click="addEmoji('😘')"></i>
                <i class="bi bi-emoji-smile" @click="addEmoji('😊')"></i>
              </div>
              <input type="text" v-model="msg" placeholder="Enter Message" @keydown.enter.prevent="send" />
              <i class="bi bi-paperclip" @click="handleFile"></i>
            </div>
            <div class="msg2">
              <i class="bi bi-send-fill" @click="send"></i>
            </div>

          </div>
        </div>
      </div>


    </div>
    <div v-if="caller" class="forcalls">
      <div class="f1">
        <p>{{ cont.name }} is calling...</p>
        <button @click.stop="closeCall(1)" class="b1">
          <i class="bi bi-telephone-x"></i> End
        </button>

        <button @click.stop="closeCall(2)">
          <i class="bi bi-telephone"></i> Answer
        </button>
      </div>
    </div>
    <div v-if="imgact" class="clickimg" @click="closer">
      <div class="clickdata">
        <p>{{dater.name}}</p>
        <img :src="dater.image" />
        <div class="icons">
          <i class="bi bi-chat-right-text"></i>
          <i class="bi bi-telephone"></i>
          <i class="bi bi-camera-video"></i>
          <i class="bi bi-info-circle"></i>
        </div>
      </div>
    </div>

  </div>

</template>
<style scoped>
  .outer {
    margin-top: 100px;
    display: flex;
  }
  .last-message-snippet {
    position:absolute;
    max-width: 150px;
    transform:translateY(150%);
  }
  .forcalls {
    position: fixed;
    top: 0;
    left: 0;
    height:200px;
    width: 100%;
    z-index: 2000;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    background:#79767659;
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    
  }
  .f1{
      box-shadow:0px 2px 5px white;
      border:1px solid white;
      padding:10px;
      display:flex;
      border-radius:20px;
      align-items:center;
  }
  .forcalls p {
    margin: 0;
    font-weight: bold;
    flex-grow: 1;
  }
  .forcalls button {
    width: 100px;
    padding: 5px;
    border: none;
    gap: 10px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    
  }
  .forcalls .b1{
      background-color:red;
      color: white;
      font-weight:bold;
  }
  .forcalls button:last-child{
    background-color:forestgreen;
    color: white;
    font-weight:bold;
}
  .statuss {
    position: absolute;
    background-color: white;
    left: 50px;
    box-shadow: 0px 2px 5px #ccc;
    border: 1px solid gray;
    z-index: 1000;
    transform: translateY(-50%);
    display: flex;
    border-radius: 10px;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
  }
  .statuss p:hover{
      transform:scale(1.03);
      font-weight:bold;
  }
  .linside {
    padding: 10px;
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
  }
    .linside::-webkit-scrollbar {
      width: 0px;
    }
  .left {
    flex: 1;
  }
  .right {
    flex: 1.5;
  }
  .ltop {
    padding-bottom: 10px;
  }
  .searcher {
    border: 2px solid #ccc;
    margin: 15px;
    border-radius: 20px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #f2f2f2;
    box-sizing: border-box;
  }
    .searcher i {
      font-size: 20px;
    }
    .searcher input {
      border: none;
      padding: 10px;
      margin-left: 10px;
      outline: none;
      width: 80%;
      background: transparent;
    }
  .taker {
    display: flex;
    margin-left: 20px;
    box-sizing: border-box;
    transition:all 0.3s ease;
  }
    .taker button {
      border: 1px solid #ccc;
      border-radius: 10px;
      margin-right: 10px;
      transition: all 0.3s ease;
    }
  .taker button:hover{
      border:1px solid forestgreen ;
      background-color:#e8fadd;
  }
  .taker button.acshow {
    background-color: #f0fbe9;
    border: 1px solid forestgreen;
  }
  .lmiddle {
    padding: 5px;
    width: 100%;
    display: flex;
    border-bottom: 2px solid #ccc;
    transition: all 0.2s linear;
    gap: 10px;
    position:relative;
  }
    .lmiddle img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }

    .lmiddle:hover {
      background-color: #f2f2f2;
    }
  .imager {
    border: 2px solid #38c228;
    padding: 5px;
    border-radius: 50%;
  }

  .act {
    background-color: aliceblue;
    font-size: 17px;
    font-weight: bold;
  }

  .spaner1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .clickimg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    padding: 20px;
    box-sizing: border-box;
  }

  .clickdata {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    max-width: 400px;
    width: 100%;
    color: white;
    text-align: center;
    user-select: none;
  }

    .clickdata p {
      margin: 0 0 15px 0;
      font-size: 22px;
      font-weight: 600;
      text-shadow: 0 0 5px rgba(0,0,0,0.7);
    }

  .clickimg img {
    max-width: 100%;
    max-height: 60vh;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    margin-bottom: 15px;
    object-fit: contain;
    cursor: pointer;
  }

  .icons {
    display: flex;
    justify-content: space-around;
    color: #38c228;
    font-size: 28px;
  }

    .icons i {
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .icons i:hover {
        color: #2a9b1f;
     }

  .rcontainer {
    box-shadow: -2px 1px 2px #ccc;
    height: 450px;
  }

  .rtop {
    width: 100%;
    background-color: white;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
  }

  .rtleft {
    display: flex;
  }

  .namer {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

    .namer p {
      margin: 0px;
    }

  .rtop img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .rtright {
    display: flex;
    gap: 10px;
    padding: 10px;
  }

    .rtright i {
      font-size: 25px;
    }

  .rmiddle {
    padding: 10px;
    background-image: url('../../assets/images/whatsapp.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .middle1 {
    height: 270px;
    overflow-y: auto;
  }

    .middle1::-webkit-scrollbar {
      width: 0px;
    }

  .rmdata .dater {
    background-color: lightyellow;
    padding: 5px;
    margin: 15px auto;
    text-align: center;
    font-weight: bold;
    font-size:smaller;
    width: fit-content;
    border-radius: 10px;
    border: 0.3px solid #bec42a;
  }

  .messager {
    display: flex;
    gap: 20px;
    width: 100%;
    border-top: 2px solid #ccc;
    padding: 5px;
    margin: 0px;
  }

  .msg1 {
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
    display: flex;
    width: 90%
  }

    .msg1 input {
      padding: 3px;
      background: transparent;
      width: 90%;
      outline: none;
      border: none;
    }

    .msg1 i {
      font-size: 20px;
      margin: 5px;
    }

  .msg2 {
    justify-content: center;
    align-items: center;
    display: flex;
  }

    .msg2 i {
      background-color: forestgreen;
      font-size: 20px;
      color: white;
      border-radius: 50%;
      padding: 5px;
    }

  .rmmsg {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    font-size: 14px;
  }

    .rmmsg p {
      margin: 0px;
    }

  .sender {
    max-width: 60%;
    background-color: white;
    border: 0.5px solid #ccc;
    color: #000;
    padding: 10px;
    border-radius: 15px;
    align-self: flex-start;
    word-wrap: break-word;
    cursor: pointer;
  }

  .receiver {
    max-width: 60%;
    background-color: #329f26;
    color: white;
    padding: 10px;
    border-radius: 15px;
    align-self: flex-end;
    word-wrap: break-word;
    cursor: pointer;
    position:relative;
    padding-right:20px;
   
  }
  .changer {
    position: absolute;
    border: 1px solid black;
    gap: 10px;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    transform: translate(-50%,-100%);
    z-index: 1000;
    right: 0;
  }

    .changer button {
      border: none;
      background: none;
      cursor: pointer;
    }

      .changer button:nth-child(1) i {
        color: deepskyblue;
      }

      .changer button:nth-child(2) i {
        color: red;
      }

      .changer button:nth-child(3) i {
        color: black;
      }

  .saver {
    display: flex;
  }

    .saver input {
      width: 100px;
      border-radius: 10px;
      background: transparent;
      color: white;
      border: none;
    }

    .saver button {
      border: none;
      border-radius: 20px;
    }

  .iconer {
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
    gap: 10px;
    display:flex;
  }
  .iconer button:nth-child(1) i {
      color: dodgerblue;
    }

    .iconer button:nth-child(2) i {
      color: red;
    }
  .receiver .tickker i{
      position:absolute;
      right:0px;
      font-size:16px;
      color:#04c9ff;
      text-shadow:2px 2px 4px rgba(0, 0, 0, 0.5);
      transform:translateX(-50%);
     
  }
  
  .emoji{
      position:absolute;
      border:1px solid black;
      border-radius:10px;
      bottom:100px;
      background-color:antiquewhite;
  }
  .emoji i:hover{
      transform:scale(1.4);
  }
  @media (max-width: 768px) {
    .left,
    .right {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;
    }
  }
</style>
