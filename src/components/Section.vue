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

                    <v-btn text="text" color="dark">입실:08:24</v-btn>
                    <v-btn text="text" color="dark">퇴실:21:22</v-btn>
                </v-card>
            </v-flex>

            <v-flex md10="md10" class="text-center" style="background:">
                <h1 color="primary">학생 출결 현황 그래프</h1>
                <div>
                    <column-chart width="800px" height="500px" :data="chartData" ></column-chart>
                    <bar-chart :data="[['Work', 1322], ['Play', 1492]]"></bar-chart>
                    <scatter-chart :data="[[174.0, 80.0], [176.5, 82.3], [180.3, 73.6]]"></scatter-chart>
                    <line-chart width="200px" height="500px" :data="chartData" :download="true"></line-chart>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

    export default {

        components: {},

        data() {
            return {
                chartData: [
                    [
                        'Jan', 44
                    ],
                    [
                        'Feb', 27
                    ],
                    [
                        'Mar', 60
                    ],
                    [
                        'Apr', 55
                    ],
                    [
                        'May', 37
                    ],
                    [
                        'Jun', 40
                    ],
                    [
                        'Jul', 69
                    ],
                    [
                        'Aug', 33
                    ],
                    [
                        'Sept', 76
                    ],
                    [
                        'Oct', 90
                    ],
                    [
                        'Nov', 34
                    ],
                    [
                        'Dec', 22
                    ]
                ]
            }
        }
    }
</script>

<style>
    .layout-container {
        display: flex;
    }
</style>