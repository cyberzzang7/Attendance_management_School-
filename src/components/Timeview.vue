<template>
  <v-container fluid style="margin: 0px; padding: 0px; background-color: white">
    <v-flex style="text-align: center">
      <h1>
        <a v-on:click="onClickPrev(currentY, currentM, currentD)">◀</a>
        {{ currentY }}년 {{ currentM }}월 {{ currentD }}일
        <a v-on:click="onClickNext(currentY, currentM, currentD)">▶</a>
      </h1>
    </v-flex>
    <v-data-table
      height="980"
      fixed-header
      sort-by="in_time"
      sort-desc="true"
      :headers="headers"
      :items="arr"
      :items-per-page="50"
      hide-default-footer=""
      class="elevation-1"
    >
      <template v-slot:item.in_time="{ item }">
        <v-chip
          :color="getColor(item.in_time)"
          :text-color="getTextColor(item.in_time)"
          ><strong>{{ item.in_time }}</strong></v-chip
        >
      </template>
      <template v-slot:item.out_time="{ item }">
        <v-chip
          :color="getColor2(item.out_time)"
          :text-color="getTextColor2(item.out_time)"
          ><strong>{{ item.out_time }}</strong></v-chip
        >
      </template>
      <template v-slot:item.name="{ item }">
        <strong>{{ item.name }}</strong>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
// Include Dependencies
import Vue from "vue";
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      currentnow: new Date(),
      currentY: new Date().getFullYear(),
      currentM: new Date().getMonth() + 1,
      currentD: new Date().getDate(),
      dayInf: 0,
      times: [],
      headers: [
        {
          text: " 이름",
          align: "start",
          value: "name",
          align: "center",
          width: "200",
        },
        { text: "입실시간", value: "in_time", align: "center" },
        { text: "퇴실시간", value: "out_time", align: "center" },
      ],
      desserts: [
        { name: "Frozen Yogurt", calories: 123, fat: 6.0 },
        { name: "Ice cream sandwich", calories: 237, fat: 9.0 },
        { name: "Eclair", calories: 262, fat: 16.0 },
        { name: "Cupcake", calories: 305, fat: 3.7 },
        { name: "Gingerbread", calories: 356, fat: 16.0 },
        { name: "Jelly bean", calories: 375, fat: 0.0 },
      ],
      arr: [],
      // arr2: [],
      // arr3: [],
    };
  },
  created() {
    this.currentnow.setDate(this.currentnow.getDate());
    console.log(this.currentnow.getMonth() + 1);
    console.log(this.currentnow.getDate());
    this.currentY = this.currentnow.getFullYear();
    this.currentM = this.currentnow.getMonth() + 1;
    this.currentD = this.currentnow.getDate();
    const currentDD = this.currentD;
    const date = this.currentY + "-" + this.currentM + "-" + currentDD;
    console.log(date);
    axios
      .post("http://13.209.70.126/web/professor/date_time.php", {
        date: date,
      })
      .then((res) => {
        console.log(res.data);
        this.intime = res.data.desserts[0].in_time;
        this.outtime = res.data.desserts[0].out_time;
        this.arr = res.data.desserts;
        this.dayInf = res.data.dayInf;
        this.times = res.data.times;
        //    for(var i=0;i < 31;i++){
        //          this.arr2+=res.data.desserts[i].in_time+' , '
        //          this.arr3+=res.data.desserts[0].out_time+' , '
        //    }
      });
  },
  mounted() {
    this.time();
  },
  methods: {
    time() {},
    toHHMMSS(time01) {
      var myNum = parseInt(time01, 10);
      var hours = Math.floor(myNum / 3600);
      var minutes = Math.floor((myNum - hours * 3600) / 60);
      var seconds = myNum - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    },
    getColor(in_time) {
      console.log(moment(in_time)._i);
      console.log(this.toHHMMSS(32400));
      if (this.dayInf != 0 && this.dayInf != 6) {
        if (moment(in_time)._i > this.times[0]) return "#F44336";
        else return "white";
      } else {
        return "white";
      }
    },
    getColor2(out_time) {
      if (this.dayInf != 0 && this.dayInf != 6) {
        if (moment(out_time)._i < this.times[1]) return "#F44336";
        else return "white";
      } else {
        return "white";
      }
    },
    getTextColor(in_time) {
      if (this.dayInf != 0 && this.dayInf != 6) {
        if (moment(in_time)._i > this.times[0]) return "white";
        else return "black";
      } else {
        return "black";
      }
    },
    getTextColor2(out_time) {
      if (this.dayInf != 0 && this.dayInf != 6) {
        if (moment(out_time)._i < this.times[1]) return "white";
        else return "black";
      } else {
        return "black";
      }
    },
    onClickPrev: function (currentY, currentM, currentD) {
      this.currentnow.setDate(this.currentnow.getDate() - 1);
      console.log(this.currentnow.getMonth() + 1);
      console.log(this.currentnow.getDate());
      this.currentY = this.currentnow.getFullYear();
      this.currentM = this.currentnow.getMonth() + 1;
      this.currentD = this.currentnow.getDate();
      const currentDD = currentD - 1;
      const date = currentY + "-" + currentM + "-" + currentDD;
      console.log(date);
      axios
        .post("http://13.209.70.126/web/professor/date_time.php", {
          date: date,
        })
        .then((res) => {
          console.log(res.data);
          this.intime = res.data.desserts[0].in_time;
          this.outtime = res.data.desserts[0].out_time;
          this.arr = res.data.desserts;
          this.dayInf = res.data.dayInf;
          this.times = res.data.times;
          //    for(var i=0;i < 31;i++){
          //          this.arr2+=res.data.desserts[i].in_time+' , '
          //          this.arr3+=res.data.desserts[0].out_time+' , '
          //    }
        });
    },
    onClickNext: function (currentY, currentM, currentD) {
      this.currentnow.setDate(this.currentnow.getDate() + 1);
      console.log(this.currentnow.getMonth() + 1);
      console.log(this.currentnow.getDate());
      this.currentY = this.currentnow.getFullYear();
      this.currentM = this.currentnow.getMonth() + 1;
      this.currentD = this.currentnow.getDate();
      const currentDD = currentD + 1;
      const date = currentY + "-" + currentM + "-" + currentDD;
      console.log(date);
      axios
        .post("http://13.209.70.126/web/professor/date_time.php", {
          date: date,
        })
        .then((res) => {
          console.log(res.data);
          this.intime = res.data.desserts[0].in_time;
          this.outtime = res.data.desserts[0].out_time;
          this.arr = res.data.desserts;
          this.dayInf = res.data.dayInf;
          this.times = res.data.times;
          //    for(var i=0;i < 31;i++){
          //          this.arr2+=res.data.desserts[i].in_time+' , '
          //          this.arr3+=res.data.desserts[0].out_time+' , '
          //    }
        });
    },
  },
};
</script>