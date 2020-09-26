<template>
  <div class="tab-bar-item" @click="clickItem">
     
     <div v-if="isActive"><slot name="icon-active"></slot></div>
     <div v-else><slot name="icon" > </slot></div>
     <div :style="activeStyle"><slot name="text"></slot></div>
       </div>
</template>

<script>
export default {
  name :'TabbarItem',
  props:{
    path:String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} :{}
    }
  },

  methods: {
    clickItem(){
      this.$router.replace(this.path).catch(err =>{
        console.log(err)
      })
    }
    
  }
  

}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center; 
    height: 49px;

}

</style>