<template>
    <v-container fluid="fluid" style=" padding: 0px; ">
        <v-layout class="layout-container">
            <v-flex md1="md1" style="text-align:center; height:877px">
                <v-card style="height:877px; background:">

                    <v-btn
                        class="btn_color"
                        outlined="outlined"
                        color="black"
                        large="large"
                        text="text">월별 출석부</v-btn>
                    <v-btn
                        class="btn_color"
                        outlined="outlined"
                        color="black"
                        large="large"
                        text="text">출석 통계</v-btn>

                </v-card>
            </v-flex>

            <v-flex md11="md11" class="text-center" style="background:">
                <v-simple-table class="table_color" > 
                    <thead >
                        <tr>
                            <td v-for="days in dayss" :key="days" class="table_thead_td" style="padding:0;margin:0"> 
                            <v-btn text x-small class="btn_f" font-size="10px" color="red" width="25px" style="height:30px;padding:0">{{days}}</v-btn></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student_names in userInfo.student_name" :key="student_names">
                            <td class="table_thead_td">{{ student_names }}</td>
                            <td v-for="student_checks in student_check" :key="student_checks" class="table_thead_td"> 
                                {{student_checks}}
                            </td>
                        </tr>
                        

                    </tbody>
                   
                </v-simple-table>
                <h1> <a v-on:click="onClickPrev(currentMonth)">◀</a>
                         {{currentYear}}년 {{currentMonth}}월
                    <a v-on:click="onClickNext(currentMonth)">▶</a>
                </h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import {mapState} from "vuex"
   

    export default {
        components: {
      
        },
        data() {
            return {
                currentYear: new Date().getFullYear(), 
                currentMonth: new Date().getMonth()+1,
                dayss:[],
                student_name:['김원형','박시연','이승형','손형탁','김정원'],
                student_check:[],
                num:0
               
            }
        },
        mounted() {
            this.forr()
          
        },
        methods: {
            forr(){
                this.dayss=[];
                this.dayss.push(null)
                 for(var i = 1; i<=(new Date(this.currentYear,this.currentMonth,0).getDate()); i++){
                    this.dayss.push(i)
                } 
                this.student_check=[];
                // this.student_check.push(this.student_name[this.num]);
                // this.num++
                for (var i=1; i<=(new Date(this.currentYear,this.currentMonth,0).getDate()); i++){
                this.student_check.push(null)
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
              this.forr();
            },
            onClickNext: function (month) {
                month++;
                if (month > 12) {
                    this.currentMonth = 1;
                    this.currentYear += 1;
                } else {
                    this.currentMonth += 1;
                }
             this.forr();
            }
        },
        computed:{
         ...mapState(["userInfo"])
        }
    }
</script>

<style>

    .btn_color {
        margin: 5px;
        background: blanchedalmond;
        width: 80%;
    }
    .table_color{
        border: solid 5px red;
        
    }
    .table_thead_td{
        border:solid 1px black;
        
    }
    .v-data-table table{
        border-spacing:1px; 
    }
    .v-data-table td {
        height:45px;
    }
   
    
</style>