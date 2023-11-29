<template>
  <router-view/>
</template>

<style>
  body{
    background: url("assets/background.jpeg") top center no-repeat;
    background-size: 100%;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>

<script>
import { provide } from 'vue';
import * as echarts from "echarts"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:8888/"
export default {
  setup(){
    provide("echarts", echarts)
    provide("axios", axios)
  },
}
</script>