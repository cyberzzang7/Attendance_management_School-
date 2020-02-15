<template>
    <v-container fluid="fluid" style=" padding: 0px;">
        <v-card style="background:#CFD8DC;">
            <v-layout style="margin-bottom:5px;">
                <v-flex md1="md1" style="display:inline-block;">
                    <h3 style="margin:0px; text-align:center; padding-top:7px;">
                        <strong>정영철 교수</strong>님
                        <v-spacer></v-spacer>환영합니다.</h3>
                </v-flex>
                <v-flex md1="md1">
                    <div style="text-align:center;">
                        <h2>
                            오늘의 출석률 {{Average}}%</h2> 
                    </div>
                </v-flex>
                <v-flex md8="md8" style="text-align:center;padding-top:10px;">
                   <h1> <a v-on:click="onClickPrev(currentMonth)">◀</a>
                    {{currentYear}}년 {{currentMonth}}월
                    <a v-on:click="onClickNext(currentMonth)">▶</a>
                   
                   </h1>
                </v-flex>

                <v-flex md1="md1" style="text-align:right;padding-top:10px;">
                    <v-btn text="text" class="#000000" style="margin:5px;"
                    @click="test()">
                        <v-icon large="large" class="material-icons" color="red">
                            notifications
                        </v-icon>

                    </v-btn>
                </v-flex>
                <v-flex md1="md1" style="text-align:right;padding-top:10px;">
                    <v-btn text="text" class="#000000" style="margin:5px;">
                        <v-icon large="large" class="material-icons" color="red">
                            notifications
                        </v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>
        <proSectionCom 
        :currentYear="currentYear"
        :currentMonth="currentMonth"
        :dayss="dayss"
        :student_checknull="student_checknull"
        :dataSource="dataSource"
        :std_check_day="std_check_day"
        :datalist="datalist"
        ></proSectionCom>
        
    </v-container>
</template>

<script>
    import proSectionCom from './proSection.vue'
    import {mapState} from "vuex"
    import axios from 'axios'
    
const dataSource = 
{categories: [{category: ["김원형","이승형","손형탁"]}],
    dataset: [{data: ["2","2","2","2","2","2"]},
            {data: ["2"]},
            {data: ["2"]},
            {data: ["2"]},
            {data: ["3"]}] // dataset
};


    export default {
        components:{
            proSectionCom
        },
        data() {
            return {     
                currentYear: new Date().getFullYear(), 
                currentMonth: new Date().getMonth()+1,
                datalist:'',
                dayss: [],
                student_checknull:[],
                std_check_day:[],
                dataSource,
                Attendance:0,                                
                Average:0,
            }
        },
        computed: {
            ...mapState(["userInfo"])
        },  
        created(){
            this.data()
        },
        mounted() {
         this.forr()
  
        },
        methods: {
           data(){
                axios
                .post('http://192.168.0.6/web/professor/professor_main.php')
                .then(res => {
                    console.log(res)
                    this.datalist= res.data
                    for(var stdCount=0; stdCount<this.datalist.categories.category.length; stdCount++){
                      if(this.datalist.dataset[stdCount].data[new Date().getDate()-1]==0){
                            this.Attendance += 1;
                      }
                    }
                            this.Average=Math.floor(this.Attendance/this.datalist.categories.category.length*100);
                })
            },

             forr() {
                this.dayss = [];
                this.dayss.push(null)
                for (var i = 1;i <= (new Date(this.currentYear, this.currentMonth, 0).getDate());i++) {
                    this.dayss.push(i)
                }
                this.std_check_day=[]
                for (var k=0;k<(new Date().getDate());k++){
                    this.std_check_day.push(k)
                }
        
                this.student_checknull=[]
                 for (var i = new Date().getDate();i <(new Date(this.currentYear, this.currentMonth, 0).getDate());i++) {
                    this.student_checknull.push(null)
                }
                
            },
            onClickPrev: function (month) {
                month--;
                if (month <= 0) {
                    this.currentMonth = 12;
                    this.currentYear -= 1;
                } else {
                    this.currentMonth -= 1;
                }
                 this.forr()
            },
            onClickNext: function (month) {
                month++;
                if (month > 12) {
                    this.currentMonth = 1;
                    this.currentYear += 1;
                } else {
                    this.currentMonth += 1;
                }
                 this.forr()
            }

        }
    }
</script>