<template>
    <div class="box" v-if="props.isShow">
        <div class="massage">
            <button @click="clickAction(1)">确认</button>
            <button @click="clickAction(2)">取消</button>
        </div>
    </div>
</template>
<script lang='ts'  setup>

const props = defineProps({
    isShow:Boolean,
})
const emits = defineEmits(['click'])
const clickAction = (a:number)=>{
    if(a === 1){
        alert('添加成功')
    }else{
        alert('添加失败')
    }
    emits('click')
}
</script>
<style lang='scss'  scoped>
 .box{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000000;
    width: 100vw;
    height: 100vh;
    background-color: #c7c0c0 ;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    .massage{
        width: 200px;
        height: 200px;
        background-color: #fff;
    }
 }
</style>