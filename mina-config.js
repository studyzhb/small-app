const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')

module.exports = {
    "json": {
        "pages": [
            "pages/index/index",
            "pages/focusCharacter/focusCharacter",
            "pages/focusHouse/focusHouse",
            "pages/user/user",
            "pages/deal/deal",
            "pages/shopping/shopping"
        ],
        "tabBar": {
            "selectedColor": '#5AACA5',
            "color": "#565656",
            "list": [
                {
                    "iconPath": "static/home.png",
                    "selectedIconPath": "static/home-selected.png",
                    "pagePath": "pages/index/index",
                    "text": "家族脸谱"
                },
                {
                    "iconPath": "static/shopping.png",
                    "selectedIconPath": "static/shopping-selected.png",
                    "pagePath": "pages/shopping/shopping",
                    "text": "冰火周边"
                },
                {
                    "iconPath": "static/user.png",
                    "selectedIconPath": "static/user-selected.png",
                    "pagePath": "pages/user/user",
                    "text": "我的账户"
                }
            ]
        },
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#fff",
            "navigationBarTitleText": "权利的游戏",
            "navigationBarTextStyle": "black"
        },
        "style":{url:r('./style/base.sass'),lang:'sass'}
    },
    assetsPath: assetsPath,
    "app": r('./app.js')
}