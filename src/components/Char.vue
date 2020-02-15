<template>
    <v-container fluid style="padding: 0px;">
        <v-layout>
           <v-flex style="margin-left:3px">
            <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataformat="dataFormat"
            :dataSource="dataSource"
            >
            </fusioncharts>
         
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
// Include Dependencies
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme,GammelTheme);
// Preparing the chart data

const dataSource = {
  chart: {
    xaxisname: "이름",
    yaxisname: "횟수",
    numbersuffix: "번",
    theme: "gammel",
    plottooltext:
    "<b>$dataValue</b> <b>$seriesname</b> in $label",
    drawcrossline: "1"
  },

categories: [{category: ["김원형","이승형","손형탁","박시연"]}],

dataset: [{seriesname: "출석", data: [{value: "30"},{value: "20"},{value: "10"},{value: "5"}]},
          {seriesname: "지각", data: [{value: "5"},{value: "10"},{value: "15"},{value: "20"}]},
          {seriesname: "결석", data: [{value: "1"},{value: "2"},{value: "3"},{value: "4"}]}] // dataset
};

export default {
  name: 'app',
  props:['categories'],
  data() {
    return {

      "type": "mscolumn2d",
      "renderAt": "chart-container",
      "width":"100%",
      "height":"820",
      "dataFormat": "json",
      dataSource
        
        }
    },
    methods: {
        
    },
}
</script>