<template>
    <div>
      <h2>图表三</h2>
      <div id="chartDom3" class="chart">
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

                let myChart = $echarts.init(document.getElementById("chartDom3"));
                myChart.setOption({
                    title: {
                        text:'司机评分分布图',
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
                        dimensions: ['score', 'count'],
                        source: [
                            {score: '1', 'count': 1357},
                            {score: '2', 'count': 1104},
                            {score: '3', 'count': 370},
                            {score: '4', 'count': 50},
                            {score: '5', 'count': 2}
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