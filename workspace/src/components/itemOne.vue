<template>
    <div>
      <h2>图表一</h2>
      <div id="chartDom1" class="chart">
          <!-- 图表放置位 -->
      </div>
    </div>
  </template>
  
  <script>
  import { inject, onMounted, reactive } from 'vue';
  export default {
    setup(){
        let $echarts = inject("echarts")
        // let $http = inject("axios")
        let data = reactive({})
        let xdata = reactive([])
        let ydata = reactive([])

        async function getState(){
            // data = await $http({url:"http://localhost:8888/one/data"})
            // console.log(data)
        }

        function setData(){
            // console.log("data", data)
            // xdata = data.data.chartdataone.chartdata.map(v=>v.title)
            // ydata = data.data.chartdataone.chartdata.map(v=>v.num)
            // console.log("x", xdata)
            // console.log("y", ydata)
        }

        onMounted(()=>{

            getState().then(()=>{
                setData()

                let myChart = $echarts.init(document.getElementById("chartDom1"));
                myChart.setOption({
                    title: {
                    text: '不同车型违规比较',
                    left: 'center',
                    textStyle:{
                            color :'white'
                        }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: ['小型车辆', '卡车', '厢式货车、面包车', '客车'],
                    textStyle:{
                            color :'white'
                        }
                },
                series: [
                    {
                        name: '半径模式',
                        type: 'pie',
                        radius: [20, 110],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: [
                            {value: 87, name: '小型车辆'},
                            {value: 13, name: '卡车'},
                            {value: 5, name: '厢式货车、面包车'},
                            {value: 19, name: '客车'}
                        ]
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