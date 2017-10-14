import { opl } from '@/sessionStorage/index'
export default {
    setOperateProblemList(state, data) {
        opl.remove()
        opl.set(data)
    }
}