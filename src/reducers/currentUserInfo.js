import ActionTypes from '../actions/actionTypes'

const currentUserInfo = (state, action) => {
    //XXX: Remove mock data
    if (!state) {
        return {
            ...state,
            currentUserInfo: {
                name: "1",
                currentConversation: "conv1",
                isSendingMessage: false,
                isLoadingMessage: false,
            },
        };
    } else {
        return state;
    }
};

export default currentUserInfo;
