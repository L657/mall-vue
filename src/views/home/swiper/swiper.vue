<template>
<el-carousel :interval="5000" height="150px" change="carousel">
    <el-carousel-item v-for="item in swiper1" :key="item.index">
        <a :href="item.url">
            <img :src="item.img" class="img-wh">
        </a>
    </el-carousel-item>
</el-carousel>
</template>

<script>
export default {
    name: "swiper",
    props: {
        swiper1: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style>
.img-wh {
    width: 100%;
    height: 150px;
}
</style>
