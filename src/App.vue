<template>
    <div id="app">
        <div class="page">
            <Header />
            <Intro />
            <Service />
            <QuoteBYRBBS />
            <Joinus />
            <Group-intro />
        </div>
        <Footer />
        <FooterArticle />
    </div>
</template>

<script>
import Footer from './components/Footer.vue';
import FooterArticle from './components/FooterArticle.vue';
import GroupIntro from './components/GroupIntro.vue';
import Header from './components/Header.vue';
import Intro from './components/Intro.vue';
import Joinus from './components/Joinus.vue';
import QuoteBYRBBS from './components/QuoteBYRBBS.vue';
import Service from './components/Service.vue';

export default {
    name: 'App',
    components: {
        Header,
        Intro,
        Service,
        QuoteBYRBBS,
        Joinus,
        GroupIntro,
        Footer,
        FooterArticle,
    },
};
</script>

<style>
body {
    margin: 0;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 14px;
    color: #2c3e50;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
.page {
    max-width: 960px;
    margin: 0 auto;
}
a {
    text-decoration: none;
}
</style>
