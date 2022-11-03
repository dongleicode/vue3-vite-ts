<template>
  <div class="about">
    <van-nav-bar
      title="新增学生"
      left-text=""
      left-arrow
      @click-left="Utils.goBack()"
    />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          placeholder="学号"
          v-model="studentId"
          type="digit"
          label="学号"
          :rules="[{ required: true, message: '请填写学号' }]"
        />
        <van-field
          placeholder="姓名"
          v-model="name"
          label="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <van-field
          placeholder="分数"
          v-model="score"
          type="number"
          label="分数"
          :rules="[{ required: true, message: '请填写分数' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          保存
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
import { studentCreate } from "../serve/students";
export default {
  name: "",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },
  props: {},
  setup() {
    const name = ref("");
    const studentId = ref("");
    const score = ref("");
    let actions = useActions(["hideNav", "showNav"], "app");
    onMounted(() => {
      //用mapActions来触发
      actions.hideNav();
    });
    onUnmounted(() => {
      actions.showNav();
    });
    const onSubmit = () => {
      let options = {
        id: studentId.value,
        name: name.value,
        score: score.value,
      };
      studentCreate(options).then((data) => {
        if (data.response.status === 200) {
          Van.Toast("添加成功");
          Utils.goPage('/students')
        }
      });
    };
    return {
      name,
      studentId,
      score,
      onSubmit,
      Utils,
    };
  },
};
</script>
    <style scoped>
</style>
    