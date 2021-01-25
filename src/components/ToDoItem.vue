
<template>
<!-- Vue2의 템플릿은 단일 루트 엘리멘트만을 허용 -->
    <div class="custom-checkbox">
        <!-- {{  }} Vue의 특수 템플릿 구문, 값과 메서드를 포함하여 템플릿 내에서
        정의된 JavaScript 표현식의 결과 인쇄 가능, {{  }} 내부의 값은 TEXT-->
        <input class="checkbox" type="checkbox" :id="id" :checked="isDone"/>
        <!-- v-bind : attribute ="expression" 
        JavaScript 표현식을 HTML요소 및 구성 요소에 바인딩하는 특수구문
        바이딩하려는 속성 / props를 접두사로 지정 v-bind -->

        <!-- {{ mustaches 구문 }}은 HTML이 아닌 텍스트로 데이터를 해석
        v-html 디렉티브를 사용해서 HTML 출력 가능 (vss 취약 왠만하면 사용X)
        Mustaches는 HTML 속성에서 사용X, 대신 v-bind 디렉티브 사용-->
        <label class="checkbox-label" :for="id">{{label}}</label>

    </div>


    <!-- 디렉티브 
        v- 접두사가 있는 특수 속성-->

</template>
 
<script>
// import uniqueId from 'lodash.uniqueid';
// props를 등록하는 방법 2가지
// 1. Array 
// 2. Objecct
export default {
    props:{
        label:{required:true, type:String},
        done:{default:false, type:Boolean},
        // 고유한 항목을 만들기 위해 id 생성
        id:{required:true, type:String}
    },
    data(){
        return{
            isDone:this.done,
            // uniqueId() 지정된 접두사 반환
            // id:uniqueId('todo-')
        }
    }
}
</script>

<!-- scoped : 현재 컴포넌트의 엘리먼트에만 적용 -->
<style scoped>
  .custom-checkbox > .checkbox-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
.custom-checkbox > .checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  height: 2.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-checkbox > input:focus {
  outline: 3px dashed #fd0;
  outline-offset: 0;
  box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
}
.custom-checkbox > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}
.custom-checkbox > .checkbox-label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.custom-checkbox > label::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.custom-checkbox > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.custom-checkbox > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
@media only screen and (min-width: 40rem) {
  label,
  input,
  .custom-checkbox {
    font-size: 19px;
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
</style>