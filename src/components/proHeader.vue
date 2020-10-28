<template>
    <v-container fluid="fluid" style=" padding: 0px;">
        <v-card style="background:#CFD8DC;">
            <v-layout style="margin-bottom:1px;">
                <v-flex md1="md1" style="display:inline-block;">
                    <h3 style="margin:0px; text-align:center; padding-top:7px;">
                        <strong>정영철 교수</strong>님
                        <v-spacer></v-spacer>환영합니다.</h3>
                </v-flex>

                <v-flex md1="md1">
                    <div style="text-align:center;padding-top:7px;">
                        <h3>오늘의출석률{{Average}}%</h3> 
                           <h3> {{ Attendance }}  / {{ datalist.dataset.length }}명 중</h3> 
                    </div>
                </v-flex>

                <v-flex md1="md1">
                    <div style="text-align:center;padding-top:7px;">
                        
                    </div>
                </v-flex>
                <v-flex md6="md6" style="text-align:center;padding-top:10px;">
                   <h1> <a v-on:click="onClickPrev(currentYear,currentMonth)">◀</a>
                    {{currentYear}}년 {{currentMonth}}월
                    <a v-on:click="onClickNext(currentYear,currentMonth)">▶</a>
             
                   </h1>
                </v-flex>
                <v-flex md1="md2" style="text-align:right;padding-top:6px;">
                   <template>
                            <div class="text-center">
                                <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-width="250"
                                offset-y
                                >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                    x-large=""
                                    color="red"
                                    text
                                    v-on="on"
                                    >
                                    <strong>공휴일/시간 설정</strong>
                                    </v-btn>
                                </template>
                                    <v-card>
                                    <v-btn @click="holidayAdd()" style="margin:15px">공휴일 설정    </v-btn>
                                    <v-btn @click="holidayDelete()" >공휴일 해제</v-btn>
                                    <v-btn @click="TimeSet()" style="margin:15px" >시간 설정</v-btn>
                                    <v-menu
                                    ref="menu3"
                                    v-model="menu3"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px">
                                    <v-date-picker day-format v-model="dates" range>  
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu3.save(dates)">OK</v-btn>
                                    </v-date-picker>
                                    <template v-slot:activator="{ on }" >
                                    <v-text-field 
                                    v-show="holidayset"
                                    style="width:250px;"
                                    v-model="dateRangeText" 
                                    label="공휴일 설정 기간" 
                                    prepend-icon="event" 
                                    readonly
                                    v-on="on"
                                   >
                                    </v-text-field>
                                     <v-text-field 
                                    v-show="holidayrel"
                                    style="width:250px;"
                                    v-model="dateRangeText" 
                                    label="공휴일 해제 기간" 
                                    prepend-icon="event" 
                                    readonly
                                    v-on="on"
                                   >
                                    </v-text-field>
                                    <div>
                                    <vue-timepicker 
                                    v-show="timepicker"
                                    :format="yourFormat"
                                    v-model="yourData"
                                    label="입실 시간"
                                    style="margin-left:15px;"
                                    ></vue-timepicker>
                                    <v-btn v-show="timeset" v-bind:style="mystyle" @click="Entrance()" style="margin:15px">입실 </v-btn>
                                    <v-btn v-show="timeset" @click="Leaving()">퇴실</v-btn>
                                    </div>
                                    <v-text-field 
                                    v-show="timeset"
                                    style="width:250px;"
                                    v-model="dateRangeText" 
                                    label="시간 설정 기간" 
                                    prepend-icon="event" 
                                    readonly
                                    v-on="on"
                                   >
                                    </v-text-field>
                                    
                                    </template>
                                    </v-menu>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn  @click="menu2=false">Cancel</v-btn>
                                    <v-btn color=primary  @click="$refs.menu3.save(dates),update(dates)">OK</v-btn>
                                    </v-card-actions>

                                </v-card>
                                </v-menu>
                            </div>
                        </template>
                </v-flex>
                <v-flex md1="md1" style="text-align:right;padding-top:6px;">
                  <template>
                            <div class="text-center">
                                <v-menu
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-width="150"
                                offset-y
                                >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                    x-large=""
                                    color="red"
                                    text
                                    v-on="on"
                                    >
                                <strong>학생 명부 수정</strong>
                                    </v-btn>
                                </template>
                            <v-card>
                                    <v-btn @click="StudentAdd()" style="margin:15px">추가</v-btn>
                                    <v-btn @click="StudentChange()" >수정</v-btn>
                                    <v-btn @click="StudentDelete()" style="margin:15px">삭제</v-btn>
                                    <v-list>
                                    <v-list-item  v-show="add">
                                    <v-text-field v-model="Sadd" label="추가할 이름"></v-text-field>
                                    </v-list-item>
                                    <v-list-item v-show="change">
                                    <v-text-field style="margin-right:10px" v-model="nowname" label="수정할 현재 이름"></v-text-field>
                                    <v-text-field v-model="fixname" label="수정할 이름"></v-text-field>
                                    </v-list-item>
                                    <v-list-item v-show="Sdelete">
                                    <v-text-field v-model="Sdelet" label="삭제할 이름"></v-text-field>
                                    </v-list-item>
                                        <div class="col-sm-9">
            <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
          </div>
    
                                    </v-list>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn  @click="menu=false">Cancel</v-btn>
                                    <v-btn color="primary" @click="change2({Sadd:Sadd,nowname:nowname,fixname:fixname,Sdelet:Sdelet})">OK</v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-menu>
                            </div>
                        </template>
                </v-flex>
                <v-flex md0.5="md0.5" style="text-align:center;padding-top:6px;">
                    <v-btn 
                        x-large=""
                        color="red"
                        dark   
                        text
                        @click.stop="hover =! hover"
                        style="margin:0px;padding:0px"
                    ><strong>메뉴 </strong></v-btn>
                </v-flex>
               
            </v-layout>
        </v-card>
        <proSectionCom 
        :currentYear="currentYear"
        :currentMonth="currentMonth"
        :student_checknull="student_checknull"
        :dataSource="dataSource"
        :std_check_day="std_check_day"
        :datalist="datalist"
        :hover="hover"
        ></proSectionCom>

    </v-container>
</template>

<script>
import proSectionCom from './proSection.vue'
import {mapState} from "vuex"
import axios from 'axios'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

const dataSource = 
{categories: [{category: ["김원형","이승형","손형탁"]}],
    dataset: [{data: ["2","2","2","2","2","2"]},
            {data: ["2"]},
            {data: ["2"]},
            {data: ["2"]},
            {data: ["3"]}] // dataset
};

    export default {
        components:{
            proSectionCom,
            VueTimepicker 
        },
        data() {
            return {    
                dates:["",""],
                yourFormat:'HH:mm',
                yourData:['00','00'],
                timepicker:false,
                timeset:false,
                holidayset:false,
                holidayrel:false,
                menu3:false,
                menu2:false, 
                menu: false,
                message: false,
                hints: true,
                Sadd:null,
                nowname:null,
                fixname:null,
                Sdelet:null,
                add:false,
                change:false,
                Sdelete:false,
                currentYear: new Date().getFullYear(), 
                currentMonth: new Date().getMonth()+1,
                datalist:'',
                student_checknull:[],
                std_check_day:[],
                dataSource,
                Attendance:0,                                
                Average:0,
                hover:null,
                now:0,
                sum:0,
                set:0,
                rel:0,
                time:0,
                entrance:0,
                leaving:0,
                year: new Date().getFullYear(), 
                month: new Date().getMonth()+1,
                std_count:0
            }
        },
        computed: {
            ...mapState(["userInfo"]),
             dateRangeText () {
                return this.dates.join(' ~ ')
             },
        },  
        created(){
            this.data()
        },
        mounted() {
         this.forr()
         
        },
        methods: {
         update(dates){
                this.menu=false
                this.menu2=false 
                 axios
                .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/CRUD/HolidayCRUD.php',[this.dates,this.set,this.rel,this.time,this.yourData,this.entrance,this.leaving])
                .then(res => {
                    this.datalist= res.data
                    console.log(res)
                })
         },
        data(){
                axios
                .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_main.php',{year:this.year,month:this.month})
                .then(res => {
                    this.datalist= res.data
                    console.log(res.data)
                    console.log("이 php 호출")
                    for(var stdCount=0; stdCount<this.datalist.categories.category.length; stdCount++){
                      if(this.datalist.dataset[stdCount].data[new Date().getDate()-1]==0){
                            this.Attendance += 1;
                      }
                    }
                    console.log(this.Attendance)
                            this.Average=Math.floor(this.Attendance/this.datalist.categories.category.length*100);
                    
                
                })
        },
        forr() {
            this.std_check_day=[]
            for (var k=0;k<(new Date(this.currentYear, this.currentMonth, 0).getDate());k++){
                    this.std_check_day.push(k)
            }

            
           // this.student_checknull=[]
           //  for (var i = new Date().getDate();i <(new Date(this.currentYear, this.currentMonth, 0).getDate());i++) {
           //     this.student_checknull.push(null)
           //
        },
        onClickPrev: function (year,month) {
            month--;
            if (month < 1) {
                this.currentMonth = 12;
                this.currentYear -= 1;
                month=12;
                year--;
            } else {
                this.currentMonth -= 1;
            }
           
            axios
            .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_main.php',{year,month})
            .then(res => {
                
                this.datalist='',
                this.datalist= res.data
                console.log(res)
                this.forr()
                
            })
        },
        onClickNext: function (year,month) {
            month++;
            if (month > 12) {
                this.currentMonth = 1;
                this.currentYear += 1;
                year++;
                month=1;
            } else {
                this.currentMonth += 1;
            }
           
            axios
            .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_main.php',{year,month})
            .then(res => {
                this.datalist='',
                this.datalist= res.data
                console.log(res.data)
                this.forr()
            })
        },
        holidayAdd(){
            this.timepicker=false
            this.timeset=false
            this.holidayset=true
            this.holidayrel=false
            this.set=1
            this.rel=0
            this.time=0
        },
        holidayDelete(){
            this.timepicker=false
            this.timeset=false
            this.holidayset=false
            this.holidayrel=true
            this.set=0
            this.rel=1
            this.time=0
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
        change2(namelist){
            this.menu=false
            this.menu2=false
              axios
                .post('http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/CRUD/StudentCRUD.php',namelist)
                .then(res => {
                    this.datalist= res.data
                })
        },
        TimeSet(){
       
            this.timeset=true
            this.holidayset=false
            this.holidayrel=false
            this.set=0
            this.rel=0
            this.time=1
    
        },
        Entrance(){
            this.entrance=1
            this.leaving=0
            this.timepicker=true
        },
        Leaving(){
            this.entrance=0
            this.leaving=1
            this.timepicker=true
        }
    }
}
    
</script>