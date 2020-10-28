<template>
    <v-app>
        <v-container
            justify-center="justify-center"
            fill-height="fill-height"
            style="max-width:550px">
            <v-layout align-center="align-center" row="row" wrap="wrap">
                <v-flex xs12="xs12">
                    <v-alert class="mb-3" :value="isLoginError" type="error">
                        아이디와 비밀번호를 확인해 주세요.
                    </v-alert>
                    <v-alert :value="isLogin" type="success">
                        로그인이 완료되었습니다.
                    </v-alert>
                    <v-card>
                        <v-toolbar flat="flat" color="blue">
                            <v-toolbar-title class="white--text">로그인</v-toolbar-title>
                        </v-toolbar>
                        <div class="pa-3">
                            <v-text-field v-model="email" label="학번을 입력하세요"></v-text-field>
                            <v-text-field v-model="password" type="password" label="패스워드를 입력하세요"></v-text-field>

                            <div>
                                <v-btn
                                    color="primary"
                                    depressed="depressed"
                                    large="large"
                                    block="block"
                                    @click="login({email:email,password:password,year,month})">
                                    로그인
                                    <!--로그인한당-->
                                </v-btn>
                              

                            </div>
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import {mapState, mapActions} from "vuex"
    import axios from 'axios'
    export default {
        data() {
        
            return {email: null,
                    password: null,
                    year: new Date().getFullYear(), 
                    month: new Date().getMonth()+1,
                
                }    
        },
        computed: {
            ...mapState(["isLogin", "isLoginError"])
        },
        methods: {
            ...mapActions(["login"]),
      
        }
    }
    //그 유저의 비밀번호와 입력된 비밀번호를 비교한다. 둘다 true 가 되면 로그인 된다.
</script>