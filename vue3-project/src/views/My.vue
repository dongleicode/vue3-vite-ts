<template>
  <div class="about">
    <van-nav-bar
      title="我的"
      left-text=""
      left-arrow
      @click-left="Utils.goPage('/home', {})"
    />
    <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      set-default-label="设为默认联系人"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { ContactEdit } from "vant"
export default {
  name: "my",
  components: {
    [ContactEdit.name]: ContactEdit,
  },
  setup() {
    const editingContact = ref({
      tel: "",
      name: "",
    });
    const onSave = (contactInfo) => Van.Toast("保存");
    const onDelete = (contactInfo) => Van.Toast("删除");
    return {
      onSave,
      onDelete,
      editingContact,
      Utils,
      Van
    };
  },
};
</script>
  