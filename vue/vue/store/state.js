export default {
    sysMsgUnread: {
        total: 0
    },
    // 会话列表
    sessionlist: [],
    sessionMap: {},
    // 当前会话ID（即当前聊天列表，只有单聊群聊采用，可用于判别）
    currSessionId: null,
    currSessionMsgs: [],
    // IM相关
    // NIM SDK 实例
    nim: null,
    // 登录账户ID
    userUID: null,
}