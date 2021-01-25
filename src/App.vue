
<template>
<!-- 컴포넌트의 모든 마크업 구조와 디스플레이 로직을 포함 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// 애플리케이션 최상위 컴포넌트
// 화면에 표시되지 않는 모든 로직 포함
import HelloWorld from './components/HelloWorld.vue'

// 반드시 기본으로 export되는 JS 오브젝트가 있어야함!
// 로컬 컴포넌트 등록, 컴포넌트 인풋(props)정의, 로컬 상태 관리, 메서드 정의 등
// 빌드 단계에서 템플릿과 함께 render()함수를 통해 Vue 컴포넌트로 변환
export default {
  name: 'App',
  components: {
    // 여기 등록하면 로컬 컴포넌트, 상위 컴포넌트 내부에서만 사용가능, import해서 사용해야함
    HelloWorld
  }
}

// 만약 TypeScript를 사용하고 싶다면 <script lang="ts">를 사용
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
