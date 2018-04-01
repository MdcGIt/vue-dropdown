<template>
  <div class="drop-Box">
    <div class="dropdown-box">
      <p @click="onMenu">{{dropList.title}}</p>
      <ul class="menu" :class="[isShow]">
        <li v-for="item in dropList.menu">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<style>
.drop-Box{
  width: 25%;
}
.dropdown-box{
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.dropdown-box p{
  height: 2.6rem;
  background: rgb(60, 208, 172);
  color: #fff;
  line-height: 2.6rem;
}
.hide{
  max-height: 0;
  transform: max-height .3s ease-out;
  overflow: hidden;
  transform-origin: 0 0;
  animation: dropHide .5s ease-out;
}
.show{
  max-height: 500px;
  transform: max-height .3s ease-out;
  animation: dropShow .2s ease-out;
  transform-origin: 0 0;
}
.menu li{
  height: 2.4rem;
  background: rgb(243, 243, 243);
  color: #ccc;
  line-height: 2.4rem;
  border-bottom: 1px solid #fff;
}
.menu li:last-child{
  border-bottom: none;
}
@keyframes dropShow {
  0%{transform: scale(1,0)}
  25%{transform: scale(1,0.25)}
  50%{transform: scale((1,0.5))}
  75%{transform: scale(1,0.75)}
  100%{transform: scale((1,1))}
}
@keyframes dropHide {
  0%{transform: scale(1,1)}
  25%{transform: scale(1,0.75)}
  50%{transform: scale((1,0.5))}
  75%{transform: scale(1,0.25)}
  100%{transform: scale((1,0))}
}
</style>

<script>
export default {
  name:'dropdown',
  data(){
    return {
      dropList:{
        title:'水果',
        menu:['百香果','牛油果','香蕉','芒果','苹果'],
      },
      isShow: 'hide',
    }
  },
  methods:{
    onMenu(e){
      console.log('点击');
      console.log(e);
      if(this.isShow=='hide'){
        this.isShow='show';
      }else{
        this.isShow='hide';
      }
    }
  }
}
</script>


