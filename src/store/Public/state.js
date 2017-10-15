import { opl } from '@/sessionStorage/index'
export default {
    test: '测试数据，调用缓存里静态变量',
    operateProblemList:opl.get() || {list:[]},
}