<template>

    <div class="custom-loading" v-if="show">
        <div class="custom-loading-Mask"></div>
        <div class="custom-loading-box">
            <div class="custom-loading-content">
                <sync-outlined spin :style="{fontSize: '66px', color: '#ccc'}" />
            </div>
            <span class="dialog-text">{{text}}</span>
        </div>
    </div>

</template>
<script setup lang="ts">
    import { ref } from 'vue'
    // export interface Props {
    //     show?: boolean,
    //     text?: string
    // }
	// const props = withDefaults(defineProps<Props>(), {
    //     show: false,
    //     text: '加载中...'
    // })

	let text:string = '加载中...'
	const show = ref(false)
	const open = (cont:string) => {
		alert(cont)
		text = cont
		show.value = true
	}
	const hide = () => {
		show.value = false
	}
  
    defineExpose({
		show,
		open,
		hide
	})

</script>
<style scoped>
.custom-loading{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999999999;
	display: flex;
	justify-content: center;
	align-items: center;
}
.custom-loading-Mask {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.4);
}
.custom-loading-box{
	width: 138px;
	height: 138px;
	border-radius: 6px;
	background: #fff;
	position: relative;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
}
.custom-loading-content{
	width: 106px;
    height: 106px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-content:center;
	flex-wrap: wrap;
	border: 3px solid #eee;
	position: relative;
}
.custom-loading-content:after{
}
@-webkit-keyframes motion{
	0%{-webkit-transform:rotate(0deg);}
	25%{-webkit-transform:rotate(90deg);}
	50%{-webkit-transform:rotate(180deg);}
	75%{-webkit-transform:rotate(270deg);}
	100%{-webkit-transform:rotate(360deg);}
}

.dialog-text{
    width: 138px;
    text-align: center;
    position: absolute;
    bottom: -25px;
    left: 0;
    color: #fff;
}

</style>