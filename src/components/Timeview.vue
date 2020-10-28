<template>
    <v-container fluid style="margin:0px; padding: 0px;"> 
         
           
     <v-data-table
     height=980
    fixed-header
    :headers="headers"
    :items="arr"
    :items-per-page="50"
    hide-default-footer=""
    class="elevation-1"
    ></v-data-table>
    </v-container>
</template>

<script>
// Include Dependencies
import Vue from 'vue';
import axios from 'axios';


export default {
  data() {
    return {
        headers: [
          {text: ' 이름',align: 'start',value:'name',align:'center',width:'200'},
          {text: '입실시간', value: 'in_time',align:'center', },
          {text: '퇴실시간', value: 'out_time',align:'center', },
        ],
        desserts: [
        {name: 'Frozen Yogurt',calories: 123,fat: 6.0},
        {name: 'Ice cream sandwich',calories: 237,fat: 9.0},
        {name: 'Eclair',calories: 262,fat: 16.0},
        {name: 'Cupcake',calories: 305,fat: 3.7},
        {name: 'Gingerbread',calories: 356,fat: 16.0},
        {name: 'Jelly bean',calories: 375,fat: 0.0},
        ],
         arr: [],
        // arr2: [],
        // arr3: [],
        
      }
    },
    created(){
          axios
                .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/studentTime.php')
                .then(res => {
                   console.log(res.data)
                   this.intime=res.data.desserts[0].in_time
                   this.outtime=res.data.desserts[0].out_time
                   this.arr=res.data.desserts
                //    for(var i=0;i < 31;i++){
                //          this.arr2+=res.data.desserts[i].in_time+' , '
                //          this.arr3+=res.data.desserts[0].out_time+' , '
                //    }
                })
    },
    mounted() {
         this.time()
         
        },
    methods: {
        time(){
        
          
        }
    },
}
</script>