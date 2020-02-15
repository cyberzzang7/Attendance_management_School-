<template>
    <v-container fluid="fluid" style=" padding:0px;">
        <v-layout class="layout-container" >
            
            <v-flex md1="md1" style="text-align:center; height:877px">
                <v-card 
              
               
                style="height:877px;">

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
                        >출석 통계</v-btn>
                        
                </v-card>
            </v-flex>
          
            <v-flex>
                <v-simple-table dense fixed-header :height="height" v-if="isStatusOn" >
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th 
                                v-for="days in dayss"
                                :key="days"
                                class="table_thead_td"
                                style="padding:0;margin:0; text-align:center">
                                <v-btn
                                    text="text"
                                    x-small="x-small"
                                    class="btn_f"
                                    
                                    color="red"
                                    width="25px"
                                    style="height:30px;padding:0;">{{days}}</v-btn>
                            </th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr  v-for="(student_names,indexs) in datalist.categories.category" :key="indexs" >
                            <td class="table_thead_td" style="padding:5px;">
                            <strong >{{student_names}}</strong>
                            </td>
                          
                                          
                            <td  v-for="(sta,index) in std_check_day" :key="index" class="table_thead_td"
                                style="padding:0px;margin:0px;" >
                                <v-chip small
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
                <h3></h3>
                <Date v-if="isStatus2"
                :dessertss="dessertss"
                ></Date>
               
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Char from './Char.vue'
import proheadercom from './proHeader.vue'
import {mapState} from "vuex"
import axios from 'axios'
import Date from './Date.vue'


    export default {
        
        components: {
            proheadercom,Char,Date
          
        },
        props:['datalist','std_check_day','dataSource','student_checknull','currentYear','currentMonth','dayss'],
        data(){
            return {
                height: 852,
                info:[],
                isStatusOn:true,
                isStatus2:false,
                dessertss:'',
                 
            }
        },
        mutations(){
            this.info.currentYear=this.currentYear
            this.info.currentMonth=this.currentMonth   
           
        },
        mounted(){
            this.say()
        },
     
        methods: {
        
            statistic(){
                this.isStatus2 = true;
                this.isStatusOn = false;
                axios
                .post('http://192.168.0.6/web/professor/professor_statistic.php')
                .then(res => {
                   console.log(res.data)
                    this.dessertss=res.data
                })
            },
            toggleOnOff: function() {
                 this.isStatusOn = true;
                 this.isStatus2 = false;
            },
           // page2: function() {
           //     this.isStatus2 = true;
           //     this.isStatusOn = false;
           // },
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
            }
        }, say(){
                
        },
        computed: {
            ...mapState(["userInfo"]),
        
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

