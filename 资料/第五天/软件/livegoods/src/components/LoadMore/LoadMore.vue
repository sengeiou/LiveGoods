<template>
  <div ref="load">等待加载更多数据...</div>
</template>
<script>
export default {
    name:'LoadMore',
    data(){
        return{}
    },
    mounted() {
        let timer = null;
        const winHeight = document.documentElement.clientHeight;
        let loadDiv = this.$refs.load
        window.onscroll = () => {
            // console.log(winHeight,document.documentElement.scrollTop,loadDiv.offsetTop,loadDiv.getBoundingClientRect().top)
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                if (loadDiv) {
                    if (winHeight > loadDiv.getBoundingClientRect().top) {
                        this.$emit('getMoreData')
                    }
                }
            }, 300)
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>