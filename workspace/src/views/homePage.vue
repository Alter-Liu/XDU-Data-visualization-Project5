<template>
  <div>
    <header>
        <h1>大数据可视化实验五</h1>
        <section class="container">

            <section class="itemleft">
                <itemPage><itemOne/></itemPage>
                <itemPage><itemTwo/></itemPage>
            </section>

            <section class="itemcenter">2</section>

            <section class="itemright">
                <itemPage><itemThree/></itemPage>
                <itemPage><itemFour/></itemPage>
            </section>

        </section>
    </header>
  </div>
</template>

<script>
import { inject } from 'vue';
import ItemPage from '@/components/itemPage.vue';
import itemOne from "@/components/itemOne.vue"
import itemTwo from "@/components/itemTwo.vue"
import itemThree from "@/components/itemThree.vue"
import itemFour from "@/components/itemFour.vue"
export default {
  components: { ItemPage, itemOne, itemTwo, itemThree, itemFour },
  setup(){
    // let $echarts = inject("echarts")
    console.log($echarts)
    // let $http = inject("axios")
    console.log($http)
  }

}
</script>

<style lang="less">
    header{
        height: 2rem;
        width: 100%;

    
        h1{
            font-size: 1.8rem;
            color:#fff;
            text-align: center;
            line-height: 1rem;
            // margin-top: 4rem;
            padding: 3.7rem;
        }
    }

    .container{
        min-width: 1200px;
        max-width: 2148px;
        margin: 0 auto;
        padding: .5rem .5rem 0;
        height: 512px;
        display: flex;

        .itemleft, .itemright{
            flex: 3.5;
        }

        .itemcenter{
            flex: 5;
            border: 1px solid blue;
            padding: 0.5rem;
            margin: 0.5rem;
            height: 43.6rem;
        }
    }
</style>