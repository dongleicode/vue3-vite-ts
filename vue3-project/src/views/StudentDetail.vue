<template>
  <div class="about">
    <van-nav-bar
      :title="isRead ? '学生信息' : '学生信息编辑'"
      left-text=""
      right-text="编辑"
      left-arrow
      @click-left="Utils.goBack()"
      @click-right="changeStatus()"
    />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- 输入任意文本 -->
        <van-field
          placeholder="学号"
          v-model="id"
          type="digit"
          label="学号"
          readonly
          :rules="[{ required: true, message: '请填写学号' }]"
        />
        <van-field
          placeholder="姓名"
          v-model="name"
          label="姓名"
          :readonly="isRead" 
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <van-field
          placeholder="分数"
          v-model="score"
          type="number"
          label="分数"
          :readonly="isRead" 
          :rules="[{ required: true, message: '请填写分数' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block :type="isRead ? 'danger' : 'success'" native-type="submit">
          {{isRead ? '删除' : '确定'}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>
  <script>
import { onMounted, onUnmounted, ref } from "vue";
import { Form, Field, CellGroup } from "vant";
import { toRefs, reactive, computed, getCurrentInstance } from "vue";
import { useGetters, useActions } from "../store/hooks";
import { studentDetail, studentDelete, studentUpdate } from "../serve/students";
import { useRoute } from 'vue-router';

export default {
  name: "StudentDetail",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },
  props: {},
  setup() {
    const route = useRoute()
    const obj = reactive({
        id: '',
        name: '',
        score: ''
    })
    const isRead = ref(true)
    let actions = useActions(["hideNav", "showNav"], "app");
    const getStudentDetail = (id) => {
        studentDetail(id).then(data => {
            let student = data.data
            obj.name = student.name
            obj.id = student.id
            obj.score = student.score
        })
    }

    onMounted(() => {
      //用mapActions来触发
      actions.hideNav()
      getStudentDetail(route.query.id)
    });
    onUnmounted(() => {
      actions.showNav();
    });


    const onDelete = () => {
      studentDelete(obj.id).then((data) => {
        if (data.response.status === 200) {
          Van.Toast("删除成功");
          Utils.goPage('/students')
        }
      });
    };

    const changeStatus = () => {
        isRead.value = false
    }

    const onUpdate = () => {
        studentUpdate(obj).then(data => {
            if (data.response.status === 200) {
                Van.Toast("更新成功");
                Utils.goPage('/students')
            }
        })
    }

    const onSubmit = () => {
        if(isRead.value){
            onDelete();
        }else{
            onUpdate()
        }
    }

    return {
      ...toRefs(obj),
      onSubmit,
      Utils,
      changeStatus,
      isRead,
      onUpdate
    };
  },
};
</script>
      <style scoped>
</style>
      