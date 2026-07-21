<template>
  <div class="commimiddle">
    <div class="outermiddle">
      <h3>Communities</h3>
      <div class="ctop">
        <div class="iconer">
          <span class="d1">
            <i class="bi bi-people"></i>
          </span>
          <div class="d2">
            <p>+</p>
          </div>
        </div>
        <h3>New Community</h3>
      </div>
      <div class="cmiddle">
        <div class="cmtop">
          <i class="bi bi-people-fill"></i>
          <h3>ALL Jobs Notify( All Kind Of Jobs )</h3>
        </div>
        <div class="can">
          <i class="bi bi-megaphone-fill"></i>
          <h5>Announcements</h5>
          <p>Pls send pics</p>
        </div>
      </div>
      
    </div>
  </div>

</template>
<style scoped>
  .commimiddle {
    margin-top: 100px;
  }
  .outermiddle{
      padding:10px;
  }
  .outermiddle h3{
      margin-left:10px;
  }
  .ctop{
      display:flex;
      padding:20px;
      gap:10px;
      box-shadow:0px 2px 5px #ccc;
      border-radius:10px;
      cursor:pointer;
  }
  .d1{
      border:1px solid #808080;
      position:relative;
      padding:10px;
      font-size:20px;
      border-radius:10px;
      background-color:#dedede;
  }
  .d2 {
    z-index: 200;
    border: 1px solid black;
    position: absolute;
    height:25px;
    width:25px;
    padding: 10px;
    background-color: #38c228;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    transform: translate(100%,-30%);
  }
  .d2 p{
      font-size: 25px;
      position:absolute;
      transform:translateY(12%);
     
  }
  .cmiddle{
      box-shadow:0px 2px 5px #ccc;
      padding:10px;
  }
  .cmtop{
      margin-top:10px;
      display:flex;
      padding-bottom:10px;
      border-bottom:1px solid #ccc;
  }
  .cmtop i{
      font-size:25px;
      color:dodgerblue;
      background-color:#c9f0f7;
      padding:10px;
      border:1px solid blue;
      border-radius:10px;
      border-radius:10px;

  }
  .can{
      margin-top:10px;
      display:flex;
      gap:10px;
  }
  .can i{
      font-size:25px;
      color:#38c228;
      background-color:#dffcdb;
      padding:5px;
      border:1px solid forestgreen;
      border-radius:10px;
  }
  .can p{
      position:absolute;
      transform:translate(60%,100%);
      font-size:15px;
      color:dimgrey;
  }
</style>
