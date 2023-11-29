<template>
    <div>
      <h2>图表四</h2>
      <div id="chartDom4" class="chart">
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

                let myChart = $echarts.init(document.getElementById("chartDom4"));
                myChart.setOption({
                    title: {
                    text: '司机急转弯次数图',
                    left : 'center',
                    textStyle:{
                            color :'white'
                        }
                },
                legend: {
                    data: ['次数']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7+']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '急转弯次数',
                        type: 'line',
                        data: [24, 12, 15, 9, 4, 5, 0],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        }
                    }
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