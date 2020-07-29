/**
 * 后端会删你的路由表玩；注意修改路由的时候及时备份！！！！！！
 * 备份指令： node ./webpackScript/backupDevRouter.js 然后输入dev token
* */

const fs = require('fs');
const path = require('path');

const request = require('request-promise');
const inquirer = require('inquirer');

const url = 'http://192.168.133.151:28098';


const main = async ()=>{
    let param = await getParam()
    let token = param.token

    let res = await getOriginRouterData(token)

    let backupPath = path.resolve(__dirname, 'backuprouter.json');

    fs.writeFile(backupPath, JSON.stringify(res), (err)=> {
        console.log(err);
    })


}
const getParam = async ()=> {
    let questions = [
        {
            type: 'input',
            name: 'token',
            message: '请输入取数据的token',
            validate(val) {
                if (val !== '') {
                    return true
                } else {
                    return '请输入取数据token'
                }
            }
        },

    ]
    return await inquirer.prompt(questions)
}


async function getProductIds(host, Token) {
    let productData = await request({
        method: 'get',
        url: host + '/api/nledu-eusmgr-system/product?flag=false',
        headers: {
            Authorization: 'Bearer ' + Token
        }
    })
    productData = JSON.parse(productData);
    productData = productData.data
    return productData.map(p => p.id)
}

async function getOriginRouterData(token) {
    let productIds = await getProductIds(url, token)

    let tasks = productIds.map(id => {
        return request({
            url: url + '/api/nledu-eusmgr-system/function/' + id,
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            return JSON.parse(res).data
        })
    })
    let result = await Promise.all(tasks).then(res => {
        let result = {}
        for (let i = 0; i < res.length; i++) {
            let id = productIds[i]
            let r = res[i]
            result[id] = r
        }
        return result
    })
    return result
}



main()