import store from './index'

export default {
    updateSysMsgUnread (state, obj) {
        state.sysMsgUnread = Object.assign({}, obj)
    },
}