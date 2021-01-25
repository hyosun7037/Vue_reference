<template>
    <!-- 
        2. v-on은 @event="method"사용가능 
        3. submit 실행 시 새로고침을 발생시켜서 로컬 상태가 리셋되기 때문에 이벤트의 기본작업 중지 
        Event.preventDefault() 사용
    -->
    <form @submit.prevent="onSubmit">
        <label for="new-todo-input">
            What needs to be done?
        </label>
        <input 
            type="text"
            id="new-todo-input"
            name="new-todo"
            autocomplete="off"
            v-model.lazy.trim="label"
        />
        <button type="submit">
            Add
        </button>
    </form>
</template>

<script>
export default {
    methods:{
        onSubmit(){
            // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것
            // console.log(this.$emit("todo-added"), this.label);
            if(this.label === ""){
                return;
            }
            this.$emit('todo-added', this.label);
            // input값 업데이트시 input에 공백
            this.label = "";
        }
    },
    data(){
        return {
            label:""
        };
    }
}
</script>