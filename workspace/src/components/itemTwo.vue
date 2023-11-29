<template>
    <div>
      <h2>图表二</h2>
      <div id="chartDom2" class="chart">
          <!-- 图表放置位 -->
      </div>
    </div>
  </template>
  
  <script>
  import { inject, onMounted, reactive } from 'vue';
  export default {
    setup(){
        let $echarts = inject("echarts")
        let $http = inject("axios")
        let data = reactive({})
        let xdata = reactive([])
        let ydata = reactive([])

        async function getState(){
            data = await $http.get("http://localhost:8080/data2.json")
            console.log(data)
        }
        function setData(){
            console.log("data", data)
            xdata = data.data.chartdata.map(v=>v.title)
            ydata = data.data.chartdata.map(v=>v.num)
            console.log("x", xdata)
            console.log("y", ydata)
        }

        onMounted(()=>{

            getState().then(()=>{
                setData()

                let myChart = $echarts.init(document.getElementById("chartDom2"));
                myChart.setOption({
                    title: {
                        text:'车辆平均速度分布图',
                        left: 'center',
                        textStyle:{
                            color :'white'
                        }
                    },
                    // legend: {
                    //     left: 'center',
                    //     top: 'bottom',
                    //     textStyle:{
                    //         color :'white'
                    //     }
                    // },
                    tooltip: {},
                    dataset: {
                        dimensions: ['speed', 'count'],
                        source: [
                            {speed: '0-2.5', 'count': 1500},
                            {speed: '2.5-5', 'count': 752},
                            {speed: '5-7.5', 'count': 945},
                            {speed: '7.5-10', 'count': 918},
                            {speed: '10-12.5', 'count': 720},
                            {speed: '12.5-15', 'count': 387},
                            {speed: '15-17.5', 'count': 132},
                            {speed: '17.5-20', 'count': 19},
                            {speed: '20-22.5', 'count': 3},
                            {speed: '22.5+', 'count': 1}
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {type: 'bar'}
                    ]                  
                })

                window.onresize = function(){
                myChart.resize();
                }

            })

            

            
            
        })

        return {
            getState, data, xdata, ydata, setData
        }
    }
  }
  </script>
  
  <style scoped>
      h2{
          margin: .5rem;
          height: 1rem;
          font-size: 1rem;
          color: #fff;
          line-height: 1rem;
          text-align: center;
      }
  
      .chart{
          margin: .7rem;
          height: 18.5rem;
          /* background-color: gray; */
      }
  </style>