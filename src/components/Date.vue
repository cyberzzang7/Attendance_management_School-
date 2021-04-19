<template>
  <v-container fluid="fluid" style="padding: 0px">
    <v-layout>
      <v-flex>
        <v-card style="margin-left: 1px">
          <v-card-title style="height: 80px">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <v-date-picker day-format v-model="dates" range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(dates), update(dates)"
                  >OK</v-btn
                >
              </v-date-picker>

              <template v-slot:activator="{ on }">
                <v-text-field
                  style="width: 0px"
                  v-model="dateRangeText"
                  label="Data Search"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                >
                </v-text-field>
              </template>
            </v-menu>

            <v-toolbar-title style="margin: 10px">출석 통계</v-toolbar-title>

            <v-text-field
              outlined
              v-model="search"
              append-icon="search"
              label="Search"
              single-line="single-line"
              hide-details="hide-details"
            >
            </v-text-field>

            <v-btn
              x-large=""
              color="#00E676"
              dark
              @click="onemonth()"
              style="margin-left: 10px"
              ><strong>1개월</strong></v-btn
            >

            <v-btn
              x-large=""
              color="#00E676"
              dark
              @click="twomonth()"
              style="margin-left: 5px"
              ><strong>2개월</strong></v-btn
            >

            <v-btn
              x-large=""
              color="#00E676"
              dark
              @click="threemonth()"
              style="margin-left: 5px"
              ><strong>3개월</strong></v-btn
            >
            <v-btn x-large="" color="#00E676" dark style="margin-left: 5px"
              ><strong>1년</strong></v-btn
            >
          </v-card-title>
          <v-data-table
            height="900"
            sort-by="late"
            sort-desc="true"
            :items="dessertesx.desserts"
            :headers="headers"
            :search="search"
            :items-per-page="50"
            hide-default-footer=""
            fixed-header
          >
            <template v-slot:item.late="{ item }">
              <v-chip :color="getColor(item.late)">{{ item.late }}</v-chip>
            </template>
            <template v-slot:item.name="{ item }">
              <strong>{{ item.name }}</strong>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import axios from "axios";

export default {
  props: ["dessertss"],
  data() {
    return {
      dates: ["", ""],
      menu: false,
      search: "",
      headers: [
        {
          text: "이름",
          align: "center",
          sortable: false,
          value: "name",
          width: "100",
          align: "center",
        },
        { text: "출석(총)", value: "attendance", width: "95", align: "center" },
        {
          text: "출석률",
          value: "attendanceRate",
          width: "95",
          align: "center",
        },
        { text: "지각", value: "late", width: "74", align: "center" },
        { text: "지각률", value: "lateRate", width: "90", align: "center" },
        { text: "결석", value: "absence", width: "74", align: "center" },
        { text: "결석률", value: "absenceRate", width: "90", align: "center" },
        { text: "조퇴", value: "early", width: "74", align: "center" },
        { text: "조퇴률", value: "earlyRate", width: "90", align: "center" },
      ],
      // { text:'입실시간',value:'in_time',width:'93'},
      // { text:'퇴실시간',value:'out_time', width:'93'}],
      dessertesx: "",

      today: this.$moment(new Date()).format("YYYY-MM-DD"),
      oneprevmonth: this.$moment(new Date())
        .add(-30, "days")
        .format("YYYY-MM-DD"),
      twoprevmonth: this.$moment(new Date())
        .add(-60, "days")
        .format("YYYY-MM-DD"),
      threeprevmonth: this.$moment(new Date())
        .add(-90, "days")
        .format("YYYY-MM-DD"),
    };
  },
  mounted() {
    this.to();
  },
  computed: {
    created() {
      this.to();
    },
    beforeMount() {
      this.to();
    },
    mounted() {
      this.update();
      this.to();
    },
  },
  methods: {
    created() {
      this.to();
    },
    beforeMount() {
      this.to();
    },
    mounted() {
      this.update();
      this.to();
    },
    getColor(late) {
      if (late > 15) return "red";
      else if (late > 7) return "orange";
      else return "white";
    },
    to() {
      axios
        .post(
          "http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_statistic.php"
        )
        .then((res) => {
          console.log(res.data);
          this.dessertesx = res.data;
        });
      console.log("흠 되고있나");
    },
    update(dates) {
      axios
        .post(
          "http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_statistic.php",
          dates
        )
        .then((res) => {
          console.log(res.data);
          this.dessertesx = res.data;
        });
    },
    onemonth() {
      axios
        .post(
          "http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_statistic.php",
          [this.today, this.oneprevmonth]
        )
        .then((res) => {
          console.log(res.data);
          this.dessertesx = res.data;
        });
    },
    twomonth() {
      axios
        .post(
          "http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_statistic.php",
          [this.today, this.twoprevmonth]
        )
        .then((res) => {
          console.log(res.data);
          this.dessertesx = res.data;
        });
    },
    threemonth() {
      axios
        .post(
          "http://ec2-13-209-70-126.ap-northeast-2.compute.amazonaws.com/web/professor/professor_statistic.php",
          [this.today, this.threeprevmonth]
        )
        .then((res) => {
          console.log(res.data);
          this.dessertesx = res.data;
        });
    },
    fourmonth() {},
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
};
</script>