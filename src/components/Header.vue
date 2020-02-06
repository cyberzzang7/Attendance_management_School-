<template>
    <v-container fluid style=" padding: 0px;">
        <v-card style="background:#CFD8DC;">
        <v-layout style="margin:2px; padding: 10px;">
            <v-flex md2.5 style="display:inline-block;">
                <div class="txdiv">
                <p style="margin:0px;" class="pline">{{userInfo.std_name}}{{name}}</p>
                <p style="margin:0px;">학번 : {{userInfo.std_num}}</p>
                </div>

                <div class="btdiv" style=" float: right;">
                <v-btn class="btn1" x-small rounded color="primary"
                 @click="$store.dispatch('logout')">로그아웃</v-btn>
                <v-btn class="btn1" x-small rounded color="primary"
                 router :to="{name: 'infochange'}" >정보수정</v-btn>
                </div>
            </v-flex>
            
            <v-flex md7 style="text-align:center;">
                <h1>{{title}}</h1>
            </v-flex>

            <v-flex md2.5 style="text-align:right;"> 
                <v-btn text  class="#000000"  style="margin:5px;" >
                    <v-icon large class="material-icons" color="red">
                    notifications
                    </v-icon>
                   
                </v-btn>
                <v-btn text  style="margin:5px;">
                     <v-icon large class="material-icons" color="red">
                        insert_comment
                    </v-icon>
                </v-btn>
            </v-flex>

        </v-layout>
        </v-card>
    </v-container>
</template>

<script>
import { mapState }  from "vuex"

export default {
    data(){
        return {
            title:'NFC 학생용 웹',
            name:"님 안녕하세요"
        }
    },computed:{
    ...mapState(["userInfo"])
  }, 
}
</script>

<style>
    p{
        display: block;
  
        width:180px;
    }

    .pline{
         border-bottom: #1c98e0  2px solid;
    }
   .txdiv{
      display:inline-block;
       width:180px;
   }
   .btdiv{
      display:inline-block;
      width:110px;
      
   }


    

</style>