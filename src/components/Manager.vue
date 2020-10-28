<template>
    <v-container fluid style="margin:0px; padding: 0px;">
        <v-layout style="margin:0px; padding: 0px;">
            <v-flex md 2 style="align:center;">
                 <v-btn 
                        x-large=""
                        color="#000000"
                        dark 
                        @click="Dayoff()"
                        style="margin:5px;display:block;"
                    ><strong>공휴일 지정</strong></v-btn>
                    <v-btn 
                        x-large=""
                        color="#000000"
                        dark   
                        @click="TimeFix()"
                        style="margin:5px;display:block;"
                    ><strong>등하교 시간 조정</strong></v-btn>
                     <v-btn 
                        x-large=""
                        color="#000000"
                        dark   
                        @click="AttendanceProcessing()"
                        style="margin:5px;display:block;"
                    ><strong>공휴일 출결 처리</strong></v-btn>
            </v-flex>
        <v-flex md10>
            <v-flex class="d-inline-block pa-2 accent-4 white--text">
         <v-menu
            inline-block
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px">
        <v-date-picker day-format v-model="dates" range>  
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dates),update(dates)">OK</v-btn>
        </v-date-picker>

        <template v-slot:activator="{ on }" >

        <v-text-field 
          style="width:300px;"
          v-model="dateRangeText" 
          label="Data Search" 
          prepend-icon="event" 
          readonly v-on="on">
        </v-text-field>
        </template>
        </v-menu>
                </v-flex>
                    <v-flex class="d-inline pa-2 deep-purple accent-4 white--text">
                        Flex1
            
                </v-flex>
              </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState }  from "vuex"
import axios from 'axios'

export default {
    data(){
        return {
        dates: ["" ,""],
        menu:false,
        search: '',
        }
    },
      methods: {


      },
      
      computed: {
            dateRangeText () {
                return this.dates.join(' ~ ')
        },
        Dayoff(){
            
        },
        StudentCorrection(){

        },
        TimeFix(){
            
        },
        AttendanceProcessing(){

        }

    }

}
</script>

<style>
    

</style>