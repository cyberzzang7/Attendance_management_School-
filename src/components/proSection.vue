<template>
    <v-container fluid="fluid" style="padding:0px;">
        <v-layout class="layout-container">

            <v-flex v-if="hover==true"  md1="md1" style="text-align:center; height:1000px">
                <v-card style="height:1000px;">
                    <v-btn
                        class="btn_color"
                        outlined="outlined"
                        color="black"
                        large="large"
                        text="text"
                        @click="toggleOnOff" >월별 출석부</v-btn>
                    <v-btn
                        class="btn_color"
                        outlined="outlined"
                        color="black"
                        large="large"
                        text="text"
                        @click="statistic()"
                        >출석 통계
                        </v-btn>
                           <v-btn
                        class="btn_color"
                        outlined="outlined"
                        color="black"
                        large="large"
                        text="text"
                        @click="page3"
                        >시간 통계
                        </v-btn>
                </v-card>
            </v-flex>

            <v-flex>
                <v-simple-table 
                 
                 dense fixed-header :height="height" v-if="isStatusOn"  >
                    <template v-slot:default >
                    <thead >
                        <tr>
                            <th style="padding:0;margin:0; text-align:center">
                                <strong>이름</strong>
                            </th>
                                <th 
                                v-for="(days,indexss) in datalist.days.length"
                                :key="indexss"
                                style="padding:0;margin:0; text-align:center">
                                <v-btn
                                    text="text"
                                    x-small
                                    class="btn_f"
                                    width="25px"
                                    style="height:30px;padding:0;">
                                    <v-chip style="margin:0px;" small label
                                     :color="daycolor(datalist.days[indexss])">{{days}}</v-chip></v-btn>
                            </th>
                        </tr>
                    </thead>
                   
                    <tbody >
                        <tr  v-for="(student_names,indexs) in datalist.categories.category" :key="indexs" >
                            <td 
                            :v-model="student_names"
                            class="table_thead_td" style="padding:5px;" 
                            @click="TimeSet(student_names)"
                            >
                              <strong>{{student_names}}</strong>
                            </td>
                            <td  v-for="(sta,index) in std_check_day" :key="index" class="table_thead_td"
                                style="padding:0px;margin:0px;" >
                                <v-chip else small
                                    :color="checkback(datalist.dataset[indexs].data[index])" 
                                    :text-color="checktext(datalist.dataset[indexs].data[index])" 
                                    style="width:15px">
                                        {{datalist.dataset[indexs].data[index]}}
                                </v-chip>
                            </td>
                            
                            <td 
                                v-for="student_checknulls in student_checknull" :key="student_checknulls"
                                class="table_thead_td" >
                                {{student_checknulls}}
                            </td>
                        </tr>
                    </tbody>
                    
                    </template>
                </v-simple-table>

                <Date v-if="isStatus2"
                :dessertss="dessertss"
                ></Date>

                <Timeview v-if="isStatus3">
                </Timeview>
        
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Manager from './Manager.vue'
import Char from './Char.vue'
import proheadercom from './proHeader.vue'
import {mapState} from "vuex"
import axios from 'axios'
import Date from './Date.vue'
import Timeview from './Timeview.vue'



    export default {
        
        components: {
            proheadercom,Char,Date,Manager,Timeview
          
        },
        props:['hover','datalist','std_check_day','dataSource','student_checknull','currentYear','currentMonth'],
        data(){
            return {
                
                dates: ["" ,"" ],
                menu:false,
                height: 980,
                info:[],
                isStatusOn:true,
                isStatus2:false,
                isStatus3:false,
                dessertss:'',
    
           

              
            }
        },
        mutations(){
            this.info.currentYear=this.currentYear
            this.info.currentMonth=this.currentMonth  
             
           
        },
        mounted(){
             
        },
     
        methods: {
            statistic(){
                this.isStatus2 = true;
                this.isStatusOn = false;
                this.isStatus3 = false;
                axios
                .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_statistic.php')
                .then(res => {
                   console.log(res.data)
                    this.dessertss=res.data
                })
            },
            toggleOnOff: function() {
                 this.isStatusOn = true;
                 this.isStatus2 = false;
                 this.isStatus3 = false;
            },
            
            page3: function() {
                this.isStatus2 = false;
                this.isStatusOn = false;
                this.isStatus3 = true;
            },
           checkback(late){
               if (late == 2) return '#FF5252'
               else if (late == 1) return '#FFB74D'
               else if (late == 0 ) return 'green'
               else return 'transparent'
                
            },
            checktext(late){
                if (late == 2) return '#FF5252'
                else if (late == 1) return '#FFB74D'
                else if (late == 0 ) return 'green'
                else return 'transparent'
            },
            daycolor(redday){
                if(redday==1) return 'red'
                else if(redday==2) return 'green'
                else return 'white'
            },
        classObject(){
                
        },    
        StudentAdd(){
            this.add=true
            this.change=false
            this.Sdelete=false

        },
        StudentChange(){
            this.add=false
            this.change=true
            this.Sdelete=false
        },
        StudentDelete(){
            this.add=false
            this.change=false
            this.Sdelete=true
        },
        change(changeObj){
            menu2=true
             axios
                .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_main.php',changeObj)
                .then(res => {
                   console.log(res.data)
                    this.dessertss=res.data
                })
            }
            ,change2(){
                
                this.menu2=false
                console.log("안녕")
            },
            TimeSet(stdname){
                console.log(stdname)
                
            }
        },
        computed: {
            ...mapState(["userInfo"]),
           
                dateRangeText () {
                return this.dates.join(' ~ ')
             },
        }
    }
</script>

<style>

    .btn_color {
        margin: 5px;
        background: blanchedalmond;
        width: 80%;
    }
    .table_color {
        margin:0px;
        padding:0px;
        
    }
    .table_thead_td {
        text-align: center;
    }
    .v-data-table table {
        border-spacing: 1px;
    }
     
</style>

<style module>
.class{
     border: solid 1px red;
}
</style>