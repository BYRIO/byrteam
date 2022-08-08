<template>
    <section class="article">
        <div style="text-align: center">或者阅读更多</div>
        <div class="article-list">
            <div
                class="article-item"
                v-for="(article, index) in articles"
                :key="index"
                :style="{
                    backgroundImage: 'url(' + images['./image/' + article.img] + ')',
                }"
            >
                <a target="_blank" :href="article.url">
                    <h3>{{ article.title }}</h3>
                    <h4>{{ article.desc }}</h4>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { articles } from '../data/article.json';
import { images } from '../assets/image';
export default {
    setup() {
        return { images, articles };
    },
};
</script>

<style lang="less">
.article {
    margin: 16px 0 0;
    font-size: 14px;
    color: #999;

    &-list {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
    }

    &-item {
        width: 50%;
        background-size: cover;
        background-position: center;
        position: relative;

        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            transition: background-color linear 0.3s;
        }

        &:hover::before {
            background: rgba(0, 0, 0, 0.26);
        }

        a {
            position: relative;
            display: flex;
            height: 200px;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            text-shadow: #999;
            color: #fff;
            z-index: 1;
            h4 {
                font-weight: normal;
            }
        }
    }
}
</style>
