<template>
  <div>
    <div v-for="(item, index) in columnList" :key="index">
      <component :is="item.type + 'View'" :column="item" :data="formData[item.name]" />
    </div>
  </div>
</template>
<script>
import textView from "@/components/input/item/textView";
import textareaView from "@/components/input/item/textareaView";
import numberView from "@/components/input/item/numberView";
import dateView from "@/components/input/item/dateView";
import switchView from "@/components/input/item/switchView";
import radioView from "@/components/input/item/radioView";
import checkboxView from "@/components/input/item/checkboxView";
import daterangeView from "@/components/input/item/daterangeView";
import selectView from "@/components/input/item/selectView";
import imageView from "@/components/input/item/imageView";

export default {
  components: {
    textView,
    textareaView,
    numberView,
    dateView,
    daterangeView,
    switchView,
    radioView,
    checkboxView,
    selectView,
    imageView
  },
  props: {
    columnList: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {
        console.log("1");
      }
    }
  },
  created() {
    console.log(this, "this.formView");
  },
  data() {
    return {
      formListItem: []
    };
  }
};
</script>
<style scoped></style>
