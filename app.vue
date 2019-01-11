<template>
    <div>
        <!-- <div>Hello {{name}}</div>
        <v-title title="Vue组件"></v-title>
        <v-button @click="handleClick">点击按钮</v-button> -->
        <router-view></router-view>
    </div>
</template>
<script>
// import vTitle from "./title.vue";
// import vButton from "./button.vue";
export default {
    // components:{
    //     vTitle,
    //     vButton
    // },
    // data(){
    //     // return {
    //     //     name:'veu.js'
    //     // }
    // },
    // methods:{
    //     handleClick(e){
    //         console.log(e);
    //     }
    // }
}
</script>
<style scoped>
    div{
        color:#f60;
        font-size:24px;
    }
</style>


