import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'
import { normalizeUnits } from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        setInfo:null,
        userInfo: null,
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        //로그인이 성공했을 때,
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },
        // 로그인이 실패했을 때,
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state){
            state.isLogin=false
            state.isLoginError=false
            state.userInfo = null
        }
        // 로그인이 실패했을 때,
    }, // state값을  로직을 변화 시킴
    actions: {
        //로그인 시도 성공했을 때 뮤테이션 성공을 실행

        login({ commit }, loginObj) {
            axios
                .post('http://192.168.0.6/web/login_check_web.php', loginObj)
                                                            //loginObj = {email,password}
            .then (res => {
            //서버에서 돌아오는 결과값
            let a = res.data
            console.log(a)
            if (res.data.std === true ){
                axios
                .post('http://192.168.0.6/web/student/student_main.php', a)
                .then (res => {
                    let b = res.data
                    console.log(b)
                    let userInfo = { 
                     std_name : res.data.basic_user_inf["0"].std_name,
                     std_num : res.data.basic_user_inf["0"].std_num,
                   in_time : res.data.today_in_out["0"].in_time,
                   out_time : res.data.today_in_out["0"].out_time,
                     attend : res.data.statistic_left["0"].attend,
                     absence : res.data.statistic_left["0"].absence,
                     late : res.data.statistic_left["0"].late,
                    early_leave : res.data.statistic_left["0"].early_leave,
                    }
                    let setInfo = res.data.basic_user_inf["0"].std_num
                    
                    commit('loginSuccess', userInfo,setInfo)
                    router.push({name : "mypage"})
                    
                    
                  
                })
            }else if (res.data.pfr === true){
                axios.post('http://192.168.0.6/web/professor/professor_main.php',loginObj)
                .then (res=>{
                    console.log(res)
                    commit('loginSuccess')
                    router.push({name : "professorpage"})
                })
            }else {
                commit("loginError")
                alert("이메일과 비밀번호를 확인하세요.")
                console.log(err)
            }
          
            }).catch(err => {
            })
            // let selectedUser = null

            // state.allUsers.forEach(user => { 
            //         if (user.email === loginObj.email) 
            //             selectedUser = user
            //     })
            // if (selectedUser === null || selectedUser.password !== loginObj.password) 
            //     commit("loginError")
            // else {
            //     commit("loginSuccess", selectedUser)
            //     router.push({name: "mypage"})
            // }
        },
        logout({commit}){
            commit("logout")
            router.push({name: "home"})
        },
        change({commit},changeObj){
          
        
            console.log(changeObj)
            if(changeObj.name==null||changeObj.name==""){
                alert("이름을 확인하세요.")
                console.log(1)
            }else if (changeObj.id==null||changeObj.id==""){
                alert("현재 학번을 확인 하세요.")
                console.log(2)
            }else if (changeObj.password==null||changeObj.password==""){
                alert("수정할 패스워드를 입력하세요.")
                console.log(3)
            }else{
            axios
            .post('http://192.168.0.6/web/student/student_main_modify.php',changeObj)
            .then(res => {
                console.log(res)
                if(res.data["0"]==false){
                    alert("이름또는 학번을 정확하게 입력하세요.")
                }else if(res.data["0"]==true){
                    alert("정상적으로 변경 되었습니다.")               
                }
                    commit("logout")
                    router.push({name: "home"})
            })
         }
        },
    }
})
