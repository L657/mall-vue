<template>
 <div id="tab-bar">
     <slot></slot>
 </div>
   
 
  
</template>

<script>
export default {
    name: "Tabbar"

}
</script>


<style>
#tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;/*放到下面来*/
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}

body{
    margin: 0;
    padding: 0;
}

</style>