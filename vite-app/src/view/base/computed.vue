<template>
 <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Base"
        sub-title="This is toBase"
        @back="() => router.push('/base')"
    />
    <a-typography>
        <a-typography-title class="p-t-20" :level="3">computed</a-typography-title>
        <a-space direction="vertical">
            <a-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
                <a-form-item label="Form">
                <a-radio-group v-model:value="formState.layout">
                    <a-radio-button value="horizontal">Horizontal</a-radio-button>
                    <a-radio-button value="vertical">Vertical</a-radio-button>
                    <a-radio-button value="inline">Inline</a-radio-button>
                </a-radio-group>
                </a-form-item>
                <a-form-item label="Field A">
                <a-input v-model:value="formState.fieldA" placeholder="input placeholder" />
                </a-form-item>
                <a-form-item label="Field B">
                <a-input v-model:value="formState.fieldB" placeholder="input placeholder" />
                </a-form-item>
                <a-typography-text code>{{full}}</a-typography-text>

                <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
                <a-button type="primary">Submit</a-button>
                </a-form-item>
            </a-form>
        </a-space>
        <a-divider style="height: 2px; background-color: #7cb305" />
        <a-typography-title class="p-t-20" :level="3">购物车</a-typography-title>
        <a-table :dataSource="dataSource" :columns="columns" />
    </a-typography>
</template>
<script setup lang='ts'> 
    import { computed, defineComponent, reactive, UnwrapRef } from 'vue';

    interface FormState {
        layout: 'horizontal' | 'vertical' | 'inline';
        fieldA: string;
        fieldB: string;
    }
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 12, offset: 12 },
          }
        : {};
    });

    const full = computed({
        get(){
            return formState.fieldA + formState.fieldB
        },
        set(){
            formState.fieldA + formState.fieldB
        }
    })


        const dataSource = [
          {
            key: '1',
            name: '胡彦斌',
            goods: '裤子',
            price: 100,
          },
          {
            key: '2',
            name: '胡彦祖',
            goods: '短袖',
            price: 200,
          },
        ]

        const columns = [
          {
            title: '用户',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '商品',
            dataIndex: 'goods',
            key: 'goods',
          },
          {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: '总价',
            dataIndex: 'price',
            key: 'price',
          },
        ]
</script>
<style scoped>

</style>