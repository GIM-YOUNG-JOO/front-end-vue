import { createStore } from 'vuex'
import counter from "./counter";
import axios from 'axios';
import axiosConfig from '@/apis/axiosConfig';

//Store 객체를 생성
const store = createStore({
  //루트 상태를 정의
  state: {
    userId: "",
    accessToken: ""
  },

  //루트 상태를 읽는 메소드 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },


    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },


  //루트 상태를 변경하는 메소드 정의(동기 방식)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },

    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },

  //루트 상태를 변경하는 메소드 정의(비동기 방식)
  actions: {
    loginAction(context, payload) {
      new Promise((resolve, reject) => {
        //서버와 통신 작업
        //...3초 소요
        if (true) {
          //로그인 성공
          resolve({ result: "success", userId: "summer" });
        } else {
          //로그인 실패
          reject({ result: "fail", reason: "password is wrong" });
        }
      }).then((data) => {
        //작업이 성공했을 경우
        //상태 변경 작성
        console.log("로그인 성공");
        context.commit("setUserId", data.userId);
      })
        .catch((error) => {
          //작업이 실패했을 경우
          console.log("로그인 실패");
        });
    },

    //브라우저가 재실행될떄 인증 정보를 전역상태로 복구
    loadAuth(context, payload) {
      context.commit("setUserId", localStorage.getItem("userId") || "");
      console.log("님 실행 됨?" + localStorage.getItem("userId"));

      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);
      //Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken !== "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },

    //로그인 성공했을 때 인증 정보를 전역 상태 및 로컬 스토리
    saveAuth(context, payload) {
      /*
      payload = {
        userId: "user",
        accessToken: "xxxx.yyyy.zzzz"
      }
      */
      //전역 상태값 변경
      context.commit("setUserId", payload.userId);
      context.commit("setAccessToken", payload.accessToken);
      //로컬 파일에 저장
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("accessToken", payload.accessToken);
      //Axios 요청 공통 헤더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
    },

    deleteAuth(context, payload) {
      context.commit("setUserId", "");
      context.commit("setAccessToken", "");
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      //Axios 요청 공통 헤더에 인증 정보 제거
      axiosConfig.removeAuthHeader();
    }
  },

  //루트 하위의 상태를 정의
  modules: {
    counter
  }
})

//Store 객체를 내보내기
export default store;