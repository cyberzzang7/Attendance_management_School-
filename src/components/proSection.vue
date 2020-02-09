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

            <v-flex md11="md11" class="text-center" style="background:">
                <v-simple-table class="table_color" v-if="isStatusOn">
                    <thead >
                        <tr>
                            <td
                                v-for="days in dayss"
                                :key="days"
                                class="table_thead_td"
                                style="padding:0;margin:0">
                                <v-btn
                                    text="text"
                                    x-small="x-small"
                                    class="btn_f"
                                    font-size="10px"
                                    color="red"
                                    width="25px"
                                    style="height:30px;padding:0">{{days}}</v-btn>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student_names in student_name" :key="student_names">
                            <td class="table_thead_td">
                                {{student_names}}
                            </td>
                            <td
                                v-for="student_checks in student_check" :key="student_checks"
                                class="table_thead_td">
                                {{student_checks}}
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>

                <h1 v-if="isStatus2"> 출석 통계
                <Char v-if="isStatus2"></Char>
                </h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Char from './Char.vue'
import proheadercom from './proHeader.vue'
import {mapState} from "vuex"
import axios from 'axios'


    export default {
        components: {
            proheadercom,Char
          
        },
        props:['currentYear','currentMonth','student_check','dayss'],
        data() {
            return {
                student_name:['김광일','권소현','김민혁'],
                info:[],
                isStatusOn:true,
                isStatus2:false,
          
            }
        },
        created(){
            this.info.currentYear=this.currentYear
            this.info.currentMonth=this.currentMonth   
 
        },
        mounted() {
        
       
        },
        methods: {
            statistic(){
                this.isStatus2 = true;
                this.isStatusOn = false;
                axios
                .post('http://192.168.0.6/web/professor/professor_statistic.php')
                .then(res => {
                    console.log(res.data)
                    
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
          
        },
        computed: {
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
    .table_color {
        border: solid 3px red;

    }
    .table_thead_td {
        border: solid 1px black;

    }
    .v-data-table table {
        border-spacing: 1px;
    }
    .v-data-table td {
        height: 45px;
    }
</style>

