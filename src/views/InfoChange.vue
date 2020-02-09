<template>
    <v-app>
        <v-container
            justify-center="justify-center"
            fill-height="fill-height"
            style="max-width:550px">
            <v-layout align-center="align-center" row="row" wrap="wrap">
                <v-flex xs12="xs12">

                    <v-card>
                        <v-toolbar flat="flat" color="blue">
                            <v-toolbar-title class="white--text">정보수정</v-toolbar-title>
                        </v-toolbar>

                        <div class="pa-3">
                           
                            <v-text-field v-model="name" label="수정할 이름을 입력하세요"></v-text-field>
                            <v-text-field v-model="id" label="현재 학번을 입력하세요"></v-text-field>
                            <v-text-field v-model="changeid" label="수정할 학번을 입력하세요"></v-text-field>
                            <v-text-field v-model="password" type="password" label="수정할 패스워드를 입력하세요"></v-text-field>
                            <div>
                                <v-btn color="primary" depressed="depressed" large="large" block="block"
                                 @click="change({name:name,id:id,changeid:changeid,password:password})">
                                 수정완료   

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
            return {
            name: null,
            id: null,
            password: null,
            changeid:null
            }
        },
        methods: {
            ...mapActions(["change"]),
        }
}
</script>