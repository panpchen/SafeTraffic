// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const TopicConfigs = [
    {
        id: 0,
        title: "随意过马路",
        answer: "wrong",
    },
    {
        id: 1,
        title: "随意翻越护栏",
        answer: "wrong",
    },
    {
        id: 2,
        title: "在路边玩滑板",
        answer: "wrong",
    },
    {
        id: 3,
        title: "路边嬉戏打闹",
        answer: "wrong",
    },
    {
        id: 4,
        title: "扒车、追车、抛物击车",
        answer: "wrong",
    },
    {
        id: 5,
        title: "时刻注意旁边指示牌",
        answer: "right",
    },
    {
        id: 6,
        title: "过马路要遵守信号灯",
        answer: "right",
    },
    {
        id: 7,
        title: "行人要走人行道",
        answer: "right",
    },
    {
        id: 8,
        title: "走路要集中注意力",
        answer: "right",
    },
    {
        id: 9,
        title: "过马路要走人行横道和过街设施",
        answer: "right",
    }
]

export class PicTopicConfig {
    static getConfigById(id) {
        return TopicConfigs[id];
    }

    static getConfigLength() {
        return TopicConfigs.length;
    }
}

