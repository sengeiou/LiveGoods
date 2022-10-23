import base from "./base"
import qs from "querystring"
import axios from 'axios'


const api = {
    /**
     * 轮播图图片的接口
     */
    getBanner(){
        return axios.get(base.baseUrl+base.banner)
    },
    /**
     * hotProduct 的接口
     */

    hotProduct(params){ // { city:'beijing' }
        return axios.get(base.baseUrl+base.hotProduct+"?city="+params.city);
    },
    /**
     * recommendation 的接口
     */

    recommendation(params){ // { city:'beijing' }
        return axios.get(base.baseUrl+base.recommendation+"?city="+params.city);
    },

    /**
     * 搜索接口
     */
    getSearch(params){
        return axios.get(base.baseUrl+base.search+"?"+qs.stringify(params));
    },
    /**
     * 详情页
     */
    getDetails(params){
        return axios.get(base.baseUrl+base.details+"?"+qs.stringify(params));
    },
    /**
     * 评价接口
     */
    getComment(params){
        return axios.get(base.baseUrl+base.comment+"?"+qs.stringify(params));
    },
    /**
     * 订单接口
     */
    getOrder(params){
        return axios.get(base.baseUrl+base.order+"?"+qs.stringify(params));
    },
    /**
     * 评价反馈
     */
    getFeelback(params){
        console.log(params)
        return axios.post(base.baseUrl+base.feelback,params);
    },
    /**
     * 登录接口
     */
    login(params){
        return axios.post(base.baseUrl+base.login,params);
    },
    /**
     * 预订倒计时
     */
    buytime(params){
        return axios.get(base.baseUrl+base.buytime+'?id='+params.id);
    },

    /**
     * 是否预订成功
     */
    buyaction(params){
        return axios.get(base.baseUrl+base.buyaction+"?"+qs.stringify(params));
    },

    // 发送验证码
    sendyzm(params){
        return axios.post(base.baseUrl+base.sendyzm,params)
    }
}

export default api;