import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  constructor()
  {

  }
  ngOnInit(): void {

    var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

var option;

// let base = +new Date(2016, 9, 3);
// let oneDay = 24 * 3600 * 1000;
// let valueBase = Math.random() * 300;
// let valueBase2 = Math.random() * 50;
// let data = [];
// let data2 = [];
// for (var i = 1; i < 10; i++) {
//   var now = new Date((base += oneDay));
//   var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("-");
//   valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
//   valueBase <= 0 && (valueBase = Math.random() * 300);
//   data.push([dayStr, valueBase]);
//   valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
//   valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
//   data2.push([dayStr, valueBase2]);
// }
option = {

  // legend: {
  //   top: "bottom",
  //   data: ["Intention"]
  // },
  // tooltip: {
  //   triggerOn: "none",
  //   position: function (pt: any[]) {
  //     return [pt[0], 130];
  //   }
  // },
  // toolbox: {
  //   left: "center",
  //   itemSize: 25,
  //   top: 55,
  //   feature: {
  //     dataZoom: {
  //       yAxisIndex: "none"
  //     },
  //     restore: {}
  //   }
  // },
  xAxis: {
    type: "category",
    data: ['ديسمبر','نوفمبر','أكتوبر','سبتمبر','أغسطس', 'يوليو', 'مايو', 'أبريل', 'مارس', 'فبراير', 'يناير'],

    axisPointer: {
      value: "2016-10-7",
      snap: false,

      lineStyle: {
        color: "#7581BD",
        width: 2
      },

      label: {
        show: true,
        formatter: function (params: { value: unknown; }) {
          return echarts.format.formatTime("yyyy-MM-dd", params.value);
        },
        backgroundColor: "#7581BD"
      },

      ///to handle the v line
      handle: {
        show: true,
        color: "#7581BD"
      },

          //  boundaryGap: false,


    },
    splitLine: {
      show: false
    }
  },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true
      },
      splitLine: {
        show: true
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n"
      },

      z: 10
    },
  grid: {
    top: 50,
    left: 15,
    right: 15,
    height: 120
  },
//   xAxis: [
//   {
//     type: 'category',
//     boundaryGap: false,
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   }
// ],
// yAxis: [
//   {
//     type: 'value'
//   }
// ],


  series: [

    {
      name: "Fake Data",
      type: "line",
      smooth: true,
      stack: "a",
      symbol: "circle",
      symbolSize: 5,
      sampling: "average",
      itemStyle: {
        color: "#8A74F9"
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#8A74F9 "
          },
          {
            offset: 1,
            color: "white "
          }
        ])
      },
      data: [50, 150, 101, 134, 220, 100, 210,70,230,100,220]
    }
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}




      }

}
