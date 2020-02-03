<template>
  <v-app id="inspire">
    <v-app-bar dense color="dark" dark v-if="$route.name!=='mypage'">
      <v-toolbar-title>영진전문대학교 컴퓨터정보계열 출석프로그램</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-toolvar-items> -->
              <v-menu offset-y v-if="isLogin">
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
                text
              >
                Dropdown
              </v-btn>
            </template>

            <!-- <v-list>
              <v-list-item router :to="{name: 'home'}">
                <v-list-item-title>홈</v-list-item-title>
              </v-list-item>
              <v-list-item router :to="{name: 'mypage'}">
                <v-list-item-title>마이페이지</v-list-item-title>
              </v-list-item>
               <v-list-item @click="$store.dispatch('logout')">
                <v-list-item-title>로그아웃</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>정보수정</v-list-item-title>
              </v-list-item>
            </v-list> -->
          </v-menu>
      
        <v-btn v-else router :to="{name: 'login'}">Log In</v-btn>
      <!-- </v-toolvar-items> -->
    </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
  </v-app>
</template>

<script>
import { mapState }  from "vuex"

export default {
  data: () => ({
    drawer: null
  }),
  computed:{
    ...mapState(["isLogin"])
  },  
  props: {
    source: String
  }
}
</script>