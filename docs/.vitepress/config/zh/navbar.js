const navbar = [
    { text: "主页", link: "/" },
    {
        text: "兼容性列表",
        items: [
            { text: "硬件兼容性", link: "/list-hardwares" },
            { text: "转译兼容性", link: "/list-translation" },
            { text: "LibLoL 兼容性", link: "/list-liblol" },
        ],
    },
    {
        text: "更多文档",
        items: [
            { text: "硬件相关", link: "/hardwares/" },
            { text: "转译相关", link: "/translation/" },
            { text: "LibLoL 相关", link: "/liblol/" }
        ],
    },
    { text: "参与贡献", link: "/contribution/" }
]

export { navbar }