<template>
    <section id="group">
        <ul class="groups">
            <li class="group" v-for="(group, index) in groups" :key="index">
                <div class="group-info">
                    <h3>{{ group.name }}</h3>
                    <h4>{{ group.name_en }}</h4>
                    <p class="group-info-desc" v-html="'<p>' + group.intro.replace(/\<br\>/g, '</p><p>') + '</p>'" />
                    <div class="group-info-tags" v-for="(link, index) in group.links" :key="index">
                        <a :href="link.url" target="_blank">
                            <el-tag size="large">{{ link.title }}</el-tag>
                        </a>
                    </div>
                </div>
                <div class="group-slide">
                    <el-carousel v-if="group.slides.length > 1" height="280px">
                        <el-carousel-item v-for="(slide, index) in group.slides" :key="index">
                            <div class="group-slide-item">
                                <div v-html="'<p>' + slide.text.replace(/\<br\>/g, '</p><p>') + '</p>'" />
                                <img v-if="slide.img" :src="images['./image/' + slide.img]" />
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <div v-if="group.slides.length === 1">
                        <div class="group-slide-item">
                            <div v-html="'<p>' + group.slides[0].text.replace(/\<br\>/g, '</p><p>') + '</p>'" />
                            <img :src="images['./image/' + group.slides[0].img]" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import { groups } from '../data/groups.json';
import { images } from '../assets/image';

export default {
    setup() {
        return {
            images,
            groups,
        };
    },
};
</script>

<style lang="less">
#group {
    margin-top: 200px;
    width: 100%;
}

.groups {
    width: 80%;
    //   position: relative;

    .group {
        list-style-type: none;
        position: relative;
        margin: 48px 0;
        height: 400px;

        &:nth-of-type(2n) {
            .group {
                &-info {
                    padding: 30px 360px 0 0;
                    text-align: right;
                    p {
                        padding-right: 0;
                        padding-left: 70px;
                        text-align-last: right;
                    }
                }
                &-slide {
                    left: auto;
                    right: -60px;
                    top: 0;
                    text-align: left;
                    &::before {
                        left: auto;
                        right: -100px;
                        top: -120px;
                    }
                }
            }
        }

        &-info {
            text-align: left;
            padding: 30px 0 0 360px;
            h3,
            h4 {
                font-weight: normal;
            }
            h3 {
                font-size: 20px;
                margin: 0;
            }
            h4 {
                margin: 0.4em 0;
                font-size: 14px;
                color: #7d7d7d;
            }
            p {
                margin: 20px 0;
            }
            &-tags {
                display: inline-block;
                margin-left: 14px;
            }
        }

        &-slide {
            width: 300px;
            position: absolute;
            left: -60px;
            top: 0;
            text-align: right;

            p {
                margin-top: 0;
            }

            &::before {
                z-index: -100;
                content: ' ';
                display: block;
                position: absolute;
                left: -100px;
                top: -140px;
                width: 500px;
                height: 500px;
                background-image: url('../assets/image/box.png');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        &-slide-item {
            img {
                max-height: 150px;
                border-radius: 3px;
                margin: 10px 0;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .groups {
        padding-left: 20px;
        .group,
        .group:nth-of-type(2n) {
            height: auto;
            padding-bottom: 200px;
            margin-left: 30px;
            margin-right: 30px;

            .group-info {
                padding: 0;
                text-align: left;

                p {
                    padding-left: 0;
                    text-align-last: left;
                }
                &-tags {
                    margin-bottom: 18px;
                }
            }

            .group-slide {
                left: auto;
                right: auto;
                text-align: left;
                position: relative;
                margin: 10px auto;
                &::before {
                    width: 350px;
                    height: 350px;
                    left: -40px;
                    right: -10px;
                    top: -70px;
                }
            }
        }
    }
}
</style>
