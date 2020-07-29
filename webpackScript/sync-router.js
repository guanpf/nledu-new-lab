/*
* 同步路由工具
* 用途：从开发环境同步路由到其他环境
*
* */

const request = require('request-promise');
const inquirer = require('inquirer');

const ENVS = [
    {
        name: '开发环境151',
        value: 'http://192.168.133.151:28098',
    },
    {
        name: '测试环境92',
        value: 'http://192.168.133.92:28098',
    }, {
        name: '开发演示172',
        value: 'http://192.168.133.172:28098',
    },
]

async function getParams() {
    let questions = [
        {
            type: 'list',
            name: 'fromUrl',
            message: '请选择路由源',
            choices: ENVS,
            default: ENVS[0]
        },
        {
            type: 'input',
            name: 'fromToken',
            message: '请输入取数据的token',
            validate(val) {
                console.log(val);
                if (val !== '') {
                    return true
                } else {
                    return '请输入取数据token'
                }
            }
        },
        {
            type: 'list',
            name: 'toUrl',
            message: '请选择要同步的路由',
            choices: ENVS,
            default: ENVS[0]
        },
        {
            type: 'input',
            name: 'toToken',
            message: '请输入更新数据的token',
            validate(val) {
                console.log(val);
                if (val !== '') {
                    return true
                } else {
                    return '请输更新数据token'
                }
            }
        },

    ]
    return await inquirer.prompt(questions)
}

async function updateToRouterByProductId(pid, data, toUrl, Token) {
    let res = await request({
        method: "POST",
        url: toUrl + '/api/nledu-eusmgr-system/function/' + pid,
        body: data,
        json: true,
        headers: {
            Authorization: 'Bearer ' + Token
        }
    }).then(e => {
        console.log(e);
    })
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

async function getFromProductIds(fromUrl, fromToken) {
    return getProductIds(fromUrl, fromToken).catch(e=> {
        console.error('获取源productids 失败')
        throw new Error(e)
    })
}

async function getToProductIds(toUrl, toToken) {
    return getProductIds(toUrl, toToken).catch(e=> {
        console.error('获取待同步productids 失败')
        throw new Error(e)
    })
}

async function getOriginRouterData(fromUrl, fromToken) {
    let productIds = await getFromProductIds(fromUrl, fromToken)

    let tasks = productIds.map(id => {
        return request({
            url: fromUrl + '/api/nledu-eusmgr-system/function/' + id,
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + fromToken
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

async function main() {
    let params = await getParams()
    let {fromUrl, fromToken, toUrl, toToken} = params

    // fromToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzYyMDM1NTQsInVzZXJfbmFtZSI6IjM0YTg4YWUzZTg5NjQ0N2Q5MWFkNjJiYjBlMmQ3ZTViIiwianRpIjoiZmJlYmIyYjctYzczMi00OTYyLTkzZWMtZDUyMWFmYzZjNGRhIiwidmVuZG9yIjoiTkxFRFUtRkoiLCJjbGllbnRfaWQiOiJuZXdsYW5kZWR1Iiwic2NvcGUiOlsiYWxsIl19.OJIw-WuT9Zxoj251ypKnACXAq_A2K2n1vW3hDkNX9_N7KbpQ3du6uDfTAz5bdUYAWfPAT6IMcz970mMQP75PM-ctkXSnL6UXSnZ0C52lXtOG9s9f8qJsbHTiaG8xcYNzZdp5x4YQPWBDxpoWCEyzLPMLT-o5ZNKqSiq2xAsGLwAbG4roHZlOOPhixFdI0dk3cmQf1FcelNAlzWGrVYj26A9wDbhc9B7k78Y8LFxUGzipwkQXum8n1mg1uz_7blp4sYf9MLy-nWvSxn6ZBbt4PA-RHz1zWG5j15xP1q9FPmpz8uONabjeE73T1eXNPJWgf1F0CYGi_jDWoyoRvVr2xA'
    // toToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzYyMDM5NDUsInVzZXJfbmFtZSI6IjM0YTg4YWUzZTg5NjQ0N2Q5MWFkNjJiYjBlMmQ3ZTViIiwianRpIjoiNjZhZWMyNjEtZjZiMS00MTFjLTk0ZTAtNzczNWRmMjY4ZTM0IiwidmVuZG9yIjoiTkxFRFUtRkoiLCJjbGllbnRfaWQiOiJuZXdsYW5kZWR1Iiwic2NvcGUiOlsiYWxsIl19.Nr2EcMBrvQ8vzF7spW02Ct6ZIEeCaV273NRulFxSK6tbuLKjAyqtRSneWRErpZLngv3hL0en5bkzSxGZxU52LYtsRLDUtspze-abYtvDi1fruJU73ha7h5Cl5UvWn20x0IWOmB0wse-58mzpBaomFUAgpCeQlZLUBPEL7GddWxGlpe002f_BLkpr7xWvD9op58eWKJOYgz6yuWUA_PFEaKfDjoZ-uC5XChNT6-CY8fsN3QO6V3-8mo1pa_AKJX5Yt6ZIj6XE7_LVDnYNVcNZ4y4OK9IFBvgl_LQDS4IVKqqz6OmYC8nQB7zQ_Busii6AbX9UQ7kBh2VqNWj0sXefng'

    let originRoutersData = await getOriginRouterData(fromUrl, fromToken)

    let toPids = await getToProductIds(toUrl, toToken)

    let tasks = toPids.map(id => {
        return updateToRouterByProductId(id, originRoutersData[id], toUrl, toToken)
    })

    Promise.all(tasks).catch(e => {
        console.log(e);
        console.error('同步失败，请重试')
    })
}

main()