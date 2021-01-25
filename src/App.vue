
<template>

<!-- 컴포넌트 파일 이름은 카멜표현식(ToDoList)
엘리먼트는 하이픈(to-do-list) -->


<!-- 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함 -->
  <div id="app">
    <h1>To-do list</h1>
    <!-- 자식 컴포넌트에서 $emit으로 받은 todo-added에 이벤트 리스너를 달아준다. -->
      <to-do-form @todo-added="addTodo"></to-do-form>
    <ul aria-labelledby="list-summary" class="stack-large">
      <li v-for="item in ToDoItems" :key="item.id">
        <!-- lable 미 전달시 console에서 오류남 -->
        <!-- v-bind 속성전달 :attribute로 생략하여 사용가능 -->
        <to-do-item @todo-added="addTodo" :label="item.label" :done="item.done" :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template> 

<script>
// 애플리케이션 최상위 컴포넌트
// 화면에 표시되지 않는 모든 로직 포함

// vue 파일을 <script> 최상단에 import 시켜줌
import ToDoItem from './components/ToDoItem';
import uniqueId from 'lodash.uniqueid';

// Form import
import ToDoForm from './components/ToDoForm';

// 반드시 기본으로 export되는 JS 오브젝트가 있어야함!
// 로컬 컴포넌트 등록, 컴포넌트 인풋(props)정의, 로컬 상태 관리, 메서드 정의 등
// 빌드 단계에서 템플릿과 함께 render()함수를 통해 Vue 컴포넌트로 변환

export default {
  name: 'App',
  components: {
    // 여기 등록하면 로컬 컴포넌트, 상위 컴포넌트 내부에서만 사용가능, import해서 사용해야함
    ToDoItem,
    ToDoForm
  },
  // 항목 배열을 가져옴, Array in Field를 포함하는 data 속성 추가
  data(){
    return{
      // 배열의 이름
      ToDoItems:[
        { id:uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id:uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
        { id:uniqueId('todo-'), label: 'Have fun', done: true },
        { id:uniqueId('todo-'), label: 'Create a to-do list', done: false }
      ]
    };
  },
  methods:{
    // 실제로 데이터를 App.vue에서 선택하려면 addToDo()를 포함하는 메서드에
    // 매개변수를 추가해야함
    addTodo(toDoLabel){
      // 새로운 아이템을 배열에 저장
      this.ToDoItems.push({id:uniqueId('todo-'), label:toDoLabel, done:false});
    }
  }
}

// TypeScript를 사용하고 싶다면 <script lang="ts">를 사용
// Sass를 사용하고 싶다면 <script lang="scss">를 사용
</script>

<style>
  /* Global styles */
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__danger:focus {
  outline-color: #c82333;
}
.btn__primary {
  color: #fff;
  background-color: #000;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 auto;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
[class*="stack"] > * {
  margin-top: 0;
  margin-bottom: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
/* End global styles */
#app {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  #app {
    padding: 4rem;
  }
}
#app > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
#app > form {
  max-width: 100%;
}
#app h1 {
  display: block;
  min-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
</style>
