//引入shelljs
require('shelljs/global')
const webpack = require('webpack')
const fs = require('fs')
const _ = require('lodash')
const {resolve} = require('path')


const r=url=>resolve(process.cwd(),url)
const webpackConf = require('./webpack.conf')
const config = require(r('./mina-config'))
const assetsPath=r('./mina')

rm('-rf',assetsPath)
mkdir(assetsPath)

let renderConf=webpackConf

let entry=()=>_.reduce(config.json.pages,(en,i)=>{
    en[i]=resolve(__dirname,'../',`${i}.mina`)
    return en
},{})

renderConf.output={
    path:config.assetsPath,
    filename:'[name].js'
}

renderConf.entry=entry()
renderConf.entry.app=config.app

let compiler=webpack(renderConf)

fs.writeFileSync(resolve(config.assetsPath,'./app.json'),JSON.stringify(config.json),'utf8')

compiler.watch({},(err,stats)=>{
    if(err) process.stdout.write(err)
    console.log('[webpack:build]',stats.toString({
        chunks:false,
        colors:true
    }))
})





