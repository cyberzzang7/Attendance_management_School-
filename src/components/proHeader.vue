<template>
    <v-container fluid="fluid" style=" padding: 0px;">
        <v-card style="background:#CFD8DC;">
            <v-layout style="margin:5px;">
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
    </v-container>
</template>

<script>
    import {mapState} from "vuex"
    let moment = require('moment');

    export default {
        data() {
            return {
                moment: moment().format("YYYY-MM"),
              
                currentYear: new Date().getFullYear(), 
                currentMonth: new Date().getMonth()+1,
            }
        },
        computed: {
            ...mapState(["userInfo"])
        },
        methods: {
            onClickPrev: function (month) {
                month--;
                if (month <= 0) {
                    this.currentMonth = 12;
                    this.currentYear -= 1;
                } else {
                    this.currentMonth -= 1;
                }
              
            },
            onClickNext: function (month) {
                month++;
                if (month > 12) {
                    this.currentMonth = 1;
                    this.currentYear += 1;
                } else {
                    this.currentMonth += 1;
                }
             
            }

        }
    }
</script>