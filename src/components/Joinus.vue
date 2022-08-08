<template>
    <div class="joinus">
        <div class="joinus-title">
            <div class="joinus-title-cn">加入我们</div>
            <div class="joinus-title-en">Join us</div>
        </div>
        <div class="joinus-button">
            <el-button size="large" type="primary" @click="info"> 立即报名 </el-button>
        </div>
    </div>
</template>

<script>
export function info() {
    location.href = 'https://wenjuan.feishu.cn/m?t=sKu052UggPEi-lk8o';
}
export default {
    methods: {
        info,
    },
};
</script>

<style lang="scss">
.joinus {
    width: 50%;
    margin: 48px auto;
    text-align: center;

    &-title {
        margin: 0 auto;
        width: 8rem;
        padding-bottom: 14px;
        padding-top: 14px;
        border-top: 0.3rem solid #6cf;
        border-bottom: 0.3rem solid #6cf;
        &-cn,
        &-en {
            font-size: 1.3rem;
        }
    }
    &-button {
        margin-top: 40px;
        button {
            width: 100%;
        }
    }
}
</style>
