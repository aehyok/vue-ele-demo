<template>
  <div class="about">
    <h1>Hello in a new world</h1>
    <h1>{{ result }}</h1>
    <h1>{{ student.age }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

interface Student {
  name: string;
  class?: string;
  age: number;
}

const Component = defineComponent({
  data() {
    return {
      student: {
        name: "aehyok",
        class: "cls",
        age: 32
      } as Student
    };
  },
  setup() {
    const students: Student = reactive({ name: "aehyok", class: "cl", age: 32 });
    const year = ref("2020");
    const month = ref("9");

    month.value = "9"; // OK
    const result = year.value.split(""); // => Property 'split' does not exist on type 'number'
    return {
      result,
      students
    };
  }
});
export default Component;
</script>
