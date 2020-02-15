<template>
    <v-container fluid="fluid" style="padding: 0px;">
        <v-layout>
            <v-flex>
                <v-card  style="margin:0px;">
                    <v-card-title style="height:81px;">
                      <v-toolbar-title>출석 통계</v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                         ></v-divider>
                        <v-text-field
                            outlined
                            v-model="search"
                            append-icon="search"
                            label="Search"
                            single-line="single-line"
                            hide-details="hide-details"
                           >
                            </v-text-field>
                         </v-card-title>
                    <v-data-table 
                    calculate-widths='true'
                    :items="desserts" 
                    :headers="headers" 
                    :search="search"
                    :items-per-page="15"
                    hide-default-footer
                    >
                    
                    <template v-slot:item.late="{ item }">
                         <v-chip :color="getColor(item.late)" >{{ item.late }}</v-chip>
                    </template>
                   <template v-slot:item.name="{ item }">
                        <strong >{{ item.name }}</strong>
                    </template>
                      
                    </v-data-table>
                </v-card>
            
            </v-flex>
               <v-flex>
                <v-card  style="margin:0x;">
                    <v-card-title >
                     
                
                         </v-card-title>
                    <v-data-table 
                    calculate-widths='true'
                    :items="dessertsx" 
                    :headers="headers" 
                    :search="search"
                    :items-per-page="16"
                         hide-default-footer
                    >
                    
                    <template v-slot:item.late="{ item }">
                         <v-chip :color="getColor(item.late)" >{{ item.late }}</v-chip>
                    </template>
                 <template v-slot:item.name="{ item }">
                        <strong >{{ item.name }}</strong>
                    </template>
                    </v-data-table>
                </v-card>
            
            </v-flex>
             <v-flex>
                <v-card  style="margin:0px;">
                    <v-card-title >
                     
                
                         </v-card-title>
                    <v-data-table 
                    calculate-widths='true'
                    :items="dessertsy" 
                    :headers="headers" 
                    :search="search"
                    :items-per-page="11"
                    hide-default-footer
                    >
                    
                    <template v-slot:item.late="{ item }">
                         <v-chip :color="getColor(item.late)" >{{ item.late }}</v-chip>
                    </template>
                    <template v-slot:item.name="{ item }">
                        <strong >{{ item.name }}</strong>
                    </template>
                    </v-data-table>
                </v-card>
            
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
  export default {
    props:['dessertss'],
    data () {
      return {
        search: '',
        headers: [{ text:'이름',align:'center',sortable: false,value: 'name',width:'100',},
                  { text:'출석(총)',value:'attendance',width:'95'},
                  { text:'지각',value:'late',width:'74'},
                  { text:'결석',value:'absend',width:'74'},
                  { text:'입실시간',value:'start',width:'93'},
                  { text:'퇴실시간',value:'end', width:'93'}],

        desserts: [{name: '김광일',attendance: 140+"/"+150,late: 1,early:1,absend:24,start: 14+":"+15,end:20+":"+15},
                   {name: '김민혁',attendance: 140+"/"+150,late: 2,early:1,absend: 37,start: 8+":"+15,end:22+":"+15},
                   {name: '김범수',attendance: 140+"/"+150,late: 3,early:1,absend: 23,start: 7+":"+15,end:19+":"+35},
                   {name: '김성훈',attendance: 140+"/"+150,late: 3,early:1,absend: 67,start: 12+":"+15,end:23+":"+18},
                   {name: '정민교',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 8+":"+15,end:22+":"+58},
                   {name: '김원형',attendance: 140+"/"+150,late: 9,early:1,absend: 37,start: 8+":"+15,end:22+":"+58},
                   {name: '김재경',attendance: 140+"/"+150,late: 25,early:1,absend: 23,start: 8+":"+15,end:22+":"+58},
                   {name: '김정원',attendance: 140+"/"+150,late: 8,early:1,absend: 24,start: 8+":"+15,end:22+":"+58},
                   {name: '김지민',attendance: 140+"/"+150,late: 9,early:1,absend: 37,start: 8+":"+15,end:22+":"+58},
                   {name: '권소현',attendance: 140+"/"+150,late: 3,early:1,absend: 23},
                   {name: '김창한',attendance: 140+"/"+150,late: 2,early:1,absend: 24},
                   {name: '김한얼',attendance: 140+"/"+150,late: 9,early:1,absend: 37},
                   {name: '이승형',attendance: 140+"/"+150,late: 16,early:1,absend: 23},
                   {name: '김희수',attendance: 140+"/"+150,late: 16,early:1,absend: 23},
                   {name: '이재원',attendance: 140+"/"+150,late: 9,early:1,absend: 37},],

        dessertsx: [{name: '문성진',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 14+":"+15,end:20+":"+15},
                   {name: '박시연',attendance: 140+"/"+150,late: 9,early:1,absend: 37,start: 14+":"+15,end:20+":"+15},
                   {name: '박유라',attendance: 140+"/"+150,late: 16,early:1,absend: 23,start: 14+":"+15,end:20+":"+15},
                   {name: '박중규',attendance: 140+"/"+150,late: 3,early:1,absend: 67,start: 14+":"+15,end:20+":"+15},
                   {name: '백범환',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 14+":"+15,end:20+":"+15},
                   {name: '변희주',attendance: 140+"/"+150,late: 9,early:1,absend: 37,start: 14+":"+15,end:20+":"+15},
                   {name: '성기현',attendance: 140+"/"+150,late: 20,early:1,absend: 23},
                   {name: '손형탁',attendance: 140+"/"+150,late: 6,early:1,absend: 24},
                   {name: '신동협',attendance: 140+"/"+150,late: 9,early:1,absend: 37},
                   {name: '신천은',attendance: 140+"/"+150,late: 16,early:1,absend: 23,start: 14+":"+15,end:20+":"+15},
                   {name: '위동현',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 14+":"+15,end:20+":"+15},
                   {name: '유시온',attendance: 140+"/"+150,late: 3,early:1,absend: 67,start: 14+":"+15,end:20+":"+15},
                   {name: '이구슬',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 14+":"+15,end:20+":"+15},
                   {name: '이유택',attendance: 140+"/"+150,late: 9,early:1,absend: 37},
                   {name: '이인준',attendance: 140+"/"+150,late: 16,early:1,absend: 23,start: 14+":"+15,end:20+":"+15},
                   {name: '이주용',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 14+":"+15,end:20+":"+15},],

        dessertsy: [{name: '장주영',attendance: 140+"/"+150,late: 1,early:1,absend:24,start: 14+":"+15,end:20+":"+15},
                   {name: '정경숙',attendance: 140+"/"+150,late: 2,early:1,absend: 37,start: 8+":"+15,end:22+":"+15},
                   {name: '정연성',attendance: 140+"/"+150,late: 3,early:1,absend: 23,start: 7+":"+15,end:19+":"+35},
                   {name: '정에준',attendance: 140+"/"+150,late: 3,early:1,absend: 67,start: 12+":"+15,end:23+":"+18},
                   {name: '정재순',attendance: 140+"/"+150,late: 6,early:1,absend: 24,start: 8+":"+15,end:22+":"+58},
                   {name: '조미향',attendance: 140+"/"+150,late: 9,early:1,absend: 37,start: 8+":"+15,end:22+":"+58},
                   {name: '조승현',attendance: 140+"/"+150,late: 25,early:1,absend: 23,start: 8+":"+15,end:22+":"+58},
                   {name: '조원찬',attendance: 140+"/"+150,late: 8,early:1,absend: 24,start: 8+":"+15,end:22+":"+58},
                   {name: '허효선',attendance: 140+"/"+150,late: 9,early:1,absend: 37,start: 8+":"+15,end:22+":"+58},
                   {name: '황용주',attendance: 140+"/"+150,late: 3,early:1,absend: 23},
                   {name: '황원조',attendance: 140+"/"+150,late: 2,early:1,absend: 24},]

     }
      
    },   
   methods: {
      getColor (late) {
        if (late > 15) return 'red'
        else  if (late > 7) return 'orange'
       
        else return 'white'
      },
    },
  }

</script>