<template>
    <section class="intro">
        <el-carousel height="450px" :interval="3000" indicator-position="none">
            <el-carousel-item v-for="(intro, index) in intros" :key="index" class="intro-slide">
                <div class="intro-left">
                    <div class="intro-left-title">
                        {{ intro.title }}
                    </div>
                    <div
                        class="intro-left-desc"
                        v-html="'<p>' + intro.content.replace(/<br>/g, '</p><p>') + '</p>'"
                    ></div>
                </div>
                <div class="intro-right">
                    <img :src="images['./image/' + intro.img]" />
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="intro-button">
            <el-button size="large" type="primary" @click="info">立即报名</el-button>
            <el-button size="large" @click="showGroup">加群咨询</el-button>
        </div>
    </section>
</template>

<script>
import { images } from '../assets/image';
import { intros } from '../data/intro.json';
import { info } from './Joinus.vue';
export default {
    setup() {
        const showGroup = () => {
            location.href = 'https://jq.qq.com/?_wv=1027&k=0KS0oyRH';
            return;
            let input = document.createElement('input');
            input.setAttribute('value', this.group);
            document.body.appendChild(input);
            input.select();
            if (document.execCommand('copy')) {
                window.alert('迎新咨询 QQ 群 925670326 ,帮你复制啦 ');
            } else {
                window.alert('迎新咨询 QQ 群 925670326 ,请手动复制 ');
            }
            document.body.removeChild(input);
        };

        return { images, info, intros, group: '925670326', showGroup };
    },
};
</script>

<style lang="less">
.intro {
    position: relative;
    &-slide {
        display: flex;
    }
    &-left {
        display: block;
        width: 27rem;
        margin-top: 7rem;
        text-align: left;
        padding-right: 16px;
        &-title {
            font-size: 1.9rem;
        }
        &-desc {
            width: 80%;
            margin-top: 16px;
            color: #7d7d7d;
        }
    }
    &-right {
        height: 100%;
        flex: 1;
        img {
            height: 380px;
            width: 100%;
            margin-right: 0;
            object-fit: cover;
            border-radius: 70% 30% 70% 30%;
        }
    }

    &-button {
        position: absolute;
        z-index: 5;
        bottom: 20px;
        left: 10px;
    }
}

@media screen and(max-width:600px) {
    .intro {
        &-slide {
            flex-direction: column-reverse;
            width: 95%;
        }
        &-left {
            margin-top: 10px;
            padding-left: 1.7rem;
            width: auto;
            &-title {
                font-size: 1.7rem;
            }
            &-desc {
                width: 100%;
            }
        }
        &-right {
            height: fit-content;
            img {
                height: 200px;
                border-radius: 0;
                object-position: center;
            }
        }
        &-button {
            position: relative;
            margin-top: 16px;
            bottom: 0;
            left: 0;
        }
    }
}
</style>
