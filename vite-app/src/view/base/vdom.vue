<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Base"
        sub-title="This is toBase"
        @back="() => router.push('/base')"
    />
    vdom:
    {{Vdom}}
    <div id="vdom"></div>
</template>
<script setup lang='ts'>
    import { createApp, h, defineComponent, createVNode } from 'vue'
    const handler = () => {
        alert('vdom')
    }
    const Vdom = defineComponent({
        render(){
            return h('div', {class: 'vdom'}, [
                createVNode("h1", {class: 'h1'}, 'HelloWorld')
            ]
            )
        }
    })

    const vdom2 = defineComponent({
        render() {
            const props = { style: { color: "red" } };
            return h("h2", props, "123456789");
        },
    });

</script>
<style scoped>

</style>