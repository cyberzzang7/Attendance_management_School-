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
                            오늘의 출석률 86 %</h2>
                    </div>
                </v-flex>
                <v-flex md8="md8" style="text-align:center;padding-top:10px;">
                   <h1> <a v-on:click="onClickPrev(currentMonth)">◀</a>
                    {{currentYear}}년 {{currentMonth}}월
                    <a v-on:click="onClickNext(currentMonth)">▶</a>
                   </h1>
                </v-flex>

                <v-flex md1="md1" style="text-align:right;padding-top:8px;">
                    <v-btn text="text" class="#000000" style="margin:5px;">
                        <v-icon large="large" class="material-icons" color="red">
                            notifications
                        </v-icon>

                    </v-btn>
                </v-flex>
                <v-flex md1="md1" style="text-align:right;padding-top:8px;">
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
        :student_check="student_check"
        ></proSectionCom>
    </v-container>
</template>

<script>
    import proSectionCom from './proSection.vue'
    import {mapState} from "vuex"
   
    

    export default {
        components:{
            proSectionCom
        },
        data() {
            return {     
                currentYear: new Date().getFullYear(), 
                currentMonth: new Date().getMonth()+1,
                dayss: [],
                student_check: [],
            }
        },
        computed: {
            ...mapState(["userInfo"])
        },  
        mounted() {
         this.forr()
        },
        methods: {
             forr() {
                this.dayss = [];
                this.dayss.push(null)
                for (var i = 1;i <= (new Date(this.currentYear, this.currentMonth, 0).getDate());i++) {
                    this.dayss.push(i)
                }
                
                this.student_check = [];
                // this.student_check.push(this.student_name[this.num]); this.num++
                for (var i = 1;i <= (new Date(this.currentYear, this.currentMonth, 0).getDate());i++) {
                    this.student_check.push()
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