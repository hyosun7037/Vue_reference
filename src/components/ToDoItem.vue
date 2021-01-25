
<template>
<!-- Vue2의 템플릿은 단일 루트 엘리멘트만을 허용 -->
    <div>
        <!-- {{  }} Vue의 특수 템플릿 구문, 값과 메서드를 포함하여 템플릿 내에서
        정의된 JavaScript 표현식의 결과 인쇄 가능, {{  }} 내부의 값은 TEXT-->
        <input type="checkbox" :id="id" :checked="isDone"/>
        <!-- v-bind : attribute ="expression" 
        JavaScript 표현식을 HTML요소 및 구성 요소에 바인딩하는 특수구문
        바이딩하려는 속성 / props를 접두사로 지정 v-bind -->

        <!-- {{ mustaches 구문 }}은 HTML이 아닌 텍스트로 데이터를 해석
        v-html 디렉티브를 사용해서 HTML 출력 가능 (vss 취약 왠만하면 사용X)
        Mustaches는 HTML 속성에서 사용X, 대신 v-bind 디렉티브 사용-->
        <label :for="id">{{label}}</label>
    </div>


    <!-- 디렉티브 
        v- 접두사가 있는 특수 속성
    -->


</template>

<script>
import uniqueId from 'lodash.uniqueid';
// props를 등록하는 방법 2가지
// 1. Array 
// 2. Objecct
export default {
    props:{
        label:{required:true, type:String},
        done:{default:false, type:Boolean}
    },
    data(){
        return{
            isDone:this.done,
            // uniqueId() 지정된 접두사 반환
            id:uniqueId('todo-')
        }
    }
}
</script>
