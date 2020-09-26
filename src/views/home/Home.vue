<template>
<div id="home">
    <Navbar class="home-nav">
        <div slot="center">购物车</div>
    </Navbar>
    <Swiper :swiper1="swiper1" />
</div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Swiper from './swiper/swiper'
export default {
    name: 'Home',
    components: {
        Navbar,
        Swiper
    },
    data() {
        return {
            swiper1: [{
                    img: "http://yanxuan.nosdn.127.net/33a04714bc15a43d0ce87d71d1d9694a.jpg",
                    url: "http://www.baidu.com"
                },
                {
                    img: "http://yanxuan.nosdn.127.net/e0999e26962b6e88b05fdfe9ba8ff644.jpg",
                    url: "http://www.baidu.com"
                },
                {
                    img: "http://yanxuan.nosdn.127.net/dd2aff7f4edb26f5e0f691e94a51c66a.jpg",
                    url: "http://www.baidu.com"
                },
                {
                    img: "http://yanxuan.nosdn.127.net/78059fd78b649d395f8e5740ba8eb99e.jpg",
                    url: "http://www.baidu.com"
                }
            ]
        }
    },

}
</script>

<style>
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
}
</style>
