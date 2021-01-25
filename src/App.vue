
<template>

<!-- 컴포넌트 파일 이름은 카멜표현식(ToDoList)
엘리먼트는 하이픈(to-do-list) -->


<!-- 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함 -->
  <div id="app">
    <h1>To-do list</h1>
    <ul>
      <li>
        <!-- lable 미 전달시 console에서 오류남 -->
        <!-- v-bind 속성전달 :attribute로 생략하여 사용가능 -->
        <to-do-item label="My Todo Item" :done="true"></to-do-item>
      </li>
    </ul>
  </div>
</template> 

<script>
// 애플리케이션 최상위 컴포넌트
// 화면에 표시되지 않는 모든 로직 포함

// vue 파일을 <script> 최상단에 import 시켜줌
import ToDoItem from './components/ToDoItem';

// 반드시 기본으로 export되는 JS 오브젝트가 있어야함!
// 로컬 컴포넌트 등록, 컴포넌트 인풋(props)정의, 로컬 상태 관리, 메서드 정의 등
// 빌드 단계에서 템플릿과 함께 render()함수를 통해 Vue 컴포넌트로 변환
export default {
  name: 'App',
  components: {
    // 여기 등록하면 로컬 컴포넌트, 상위 컴포넌트 내부에서만 사용가능, import해서 사용해야함
    ToDoItem
  }
}

// TypeScript를 사용하고 싶다면 <script lang="ts">를 사용
// Sass를 사용하고 싶다면 <script lang="scss">를 사용
</script>

<style>
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 
</style>
