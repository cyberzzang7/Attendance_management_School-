<template>
    <v-container fluid="fluid" style=" padding: 0px; ">
        <v-layout class="layout-container">
            <v-flex md2="md2" style="text-align:center; height:877px">
                <v-card style="height:877px; background:">
                    <!-- <h3>2020-01-12</h3> -->
                    <!-- <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                    :return-value.sync="date" transition="scale-transition" offset-y="offset-y"
                    min-width="290px"> <template v-slot:activator="{ on }"> <v-text-field
                    background-color="blue" v-model="date" readonly="readonly"
                    v-on="on"></v-text-field> </template> <v-date-picker v-model="date"
                    no-title="no-title" scrollable="scrollable"> <v-spacer></v-spacer> <v-btn
                    text="text" color="primary" @click="menu = false">Cancel</v-btn> <v-btn
                    text="text" color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker> </v-menu> -->
                    <v-col >
                        <v-text-field label="날짜를 입력해주세요" type="date" placeholder="Placeholder"></v-text-field>
                    </v-col>

                    <v-btn text="text" color="dark">입실 : {{userInfo.in_time}}</v-btn>
                    <v-btn text="text" color="dark">퇴실 : {{userInfo.out_time}}</v-btn>
                </v-card>
            </v-flex>

            <v-flex md10="md10" class="text-center" style="background:">

                <div>
                    <div class="chartLocal1">
                        <h2>출석 현황</h2>
                        <column-chart width="600px" height="600px" :data="[
                        ['출석', userInfo.attend], 
                        ['결석', userInfo.absence],
                        ['지각', userInfo.late],
                        ['조퇴', userInfo.early_leave]
                        ]"></column-chart>
                    </div>
                    <div class="chartLocal1">
                        <h2>등/하교 시간</h2>
                        <line-chart
                            width="600px"
                            height="600px"
                           timeline :data="lineData"></line-chart>
                    </div>
                    <div>
                        <v-text-field
                            label="언제부터"
                            type="date"
                            style="width:200px; display:inline-block"></v-text-field>
                        ~
                        <v-text-field
                            label="언제까지"
                            type="date"
                            style="width:200px; display:inline-block"></v-text-field>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapState }  from "vuex"

    export default {
        components: {},
        data() {
            return {
                lineData: [
                  
                ]

            }
        },computed:{
    ...mapState(["userInfo"])
        }
    }
</script>

<style>
    .layout-container {
        display: flex;
    }
    .chartLocal1 {
        margin: 20px;
        width: 700px;
        height: 700px;
        display: inline-block;

    }
</style>