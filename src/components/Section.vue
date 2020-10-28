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
              

                    <v-btn x-large="" text="text" color="dark">입실 : {{userInfo.in_time}} 11:11</v-btn>
                    <v-btn x-large="" text="text" color="dark">퇴실 : {{userInfo.out_time}}22:22</v-btn>
                </v-card>
            </v-flex>

            <v-flex md10="md10" class="text-center" style="background:">
                <template>
                     <v-data-table
                       :headers="headers"
                       :items="desserts"
                       :items-per-page="5"
                       hide-default-footer
                       class="elevation-1"
                     ></v-data-table>
                </template>
               

               <template>
                 <v-time-picker
                    v-model="picker"
                    :landscape="$vuetify.breakpoint.smAndUp"
                    ampm-in-title
                    
                    style="margin-top:200px;"
                ></v-time-picker>
                </template>
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
                headers: [
                    { text: '출석(총)', value: 'attendance',align:'center'},
                    { text: '지각', value: 'late',align:'center' },
                    { text: '결석', value: 'absend',align:'center' },
                ],

                desserts: [
                    {attendance: 159,late: 6.0,absend: 24,},
                ],
                picker: new Date(),
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