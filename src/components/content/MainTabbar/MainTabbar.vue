<template>
<Tabbar>
    <TabbarItem path="/home">
        <div slot="icon" class="el-icon-s-home" style="font-size:24px;margin-top:3px; "></div>
        <div slot="icon-active" class="el-icon-s-home" style="font-size:24px;margin-top:3px; color:red; "></div>
        <div slot="text">首页</div>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="blue">
        <div slot="icon" class="el-icon-menu" style="font-size:24px;margin-top:3px; "></div>
        <div slot="icon-active" class="el-icon-menu" style="font-size:24px;margin-top:3px; color:red;"></div>
        <div slot="text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart">
        <div slot="icon" class="el-icon-shopping-cart-2" style="font-size:24px;margin-top:3px; "></div>
        <div slot="icon-active" class="el-icon-shopping-cart-full" style="font-size:24px;margin-top:3px; color:red;"></div>
        <div slot="text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile">
        <div slot="icon" class="el-icon-s-home" style="font-size:24px;margin-top:3px; "></div>
        <div slot="icon-active" class="el-icon-s-home" style="font-size:24px;margin-top:3px; color:red;"></div>
        <div slot="text">我的</div>
    </TabbarItem>
</Tabbar>
</template>

<script>
import Tabbar from '../../common/tabbar/Tabbar'
import TabbarItem from '../../common/tabbar/TabbarItem'

export default {

    components: {
        Tabbar,
        TabbarItem
    }
}
</script>

<style>

</style>
