import api from './../../api'
export default {
    getOperateProblemList({commit}) {
        api.get('custom/operateproblem/getOperateProblemList').then((e) => {
            console.log(e)
            if (e.status != '200'){
                console.log('接口数据获取异常'+e.msg)
                return ;
            }

            commit('setOperateProblemList',e.data)
          })
    }
}