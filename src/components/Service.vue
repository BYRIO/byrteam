<template>
    <div class="service">
        <div class="service-title">
            <div class="slash">
                <div class="slash-item" />
                <div class="slash-item" />
            </div>
            <div class="service-title-content">
                <div class="service-title-content-cn">服务</div>
                <div class="service-title-content-en">Service</div>
            </div>
        </div>
        <div class="service-list">
            <div class="service-item" v-for="(service, index) in services" :key="index">
                <a target="_blank" :href="service.url">
                    <img :src="images['./image/' + service.img]" />
                    <div class="service-item-title">{{ service.title }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { services } from '../data/services.json';
import { images } from '../assets/image';

export default {
    setup() {
        return {
            images,
            services,
        };
    },
};
</script>

<style lang="less">
.service {
    margin-top: 64px;

    &-list {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        -webkit-box-direction: normal;
        width: 90%;
    }

    &-item {
        width: 72px;
        height: 72px;
        display: flex;
        a {
            width: 100%;
            text-decoration: none;
            font-size: 12px;
            color: #333;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 2.25rem;
            height: 2.25rem;
        }
    }

    &-title {
        margin-bottom: 1.7rem;
        display: flex;
        .slash {
            display: flex;

            &-item {
                width: 0.3rem;
                height: 2.7rem;
                background-color: #6cf;
                transform: skew(-20deg);
                margin-left: 0.3rem;
            }
        }

        &-content {
            text-align: left;
            margin-left: 0.7rem;
            &-cn {
                font-size: 1.2rem;
            }
            &-en {
                font-size: 0.7rem;
                color: #7f7f7f;
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .service {
        &-title {
            margin-left: 30px;
        }

        &-list {
            flex-wrap: wrap;
        }

        &-item {
            margin: auto 20px;
            div {
                margin-left: 0;
            }
        }
    }
}
</style>
