import Sockjs from "sockjs-client";
import Stomp from "stompjs";

const reconnectTime = 10;
let timer = null

/**
 * @class
 * @name nlSocket
 * @description 统一连接后端socket的工具函数，带发送心跳包，断线重连功能；在断线重连时stomp是一个新的实例，所以要重新订阅之前订阅的消息！
 * */
export default class nlSocket {
    constructor(
        url = "/wbskt/nledu-websocket/v1/endpointChat",
        opt = {debug: false}
    ) {
        let defaultOpt = {
            debug: false
        };
        this.url = url;
        this.opt = Object.assign(defaultOpt, opt);

        this._createStomp()
        this.subscribeQueue = [];
        this.header = null
    }

    _createStomp() {
        let socket = new Sockjs(this.url);
        let stomp = Stomp.over(socket);
        this.instance = stomp;

        stomp.debug = () => {
        };
        return stomp
    }

    connect(header) {
        this.header = header
        if (!this.instance) {
            this.instance = this._createStomp()
        }

        return new Promise((resolve, reject) => {
            let successCallback = () => {
                this.instance.subscribe("/user/queue/ping", message => {
                    this.opt.debug && console.log('收到心跳包' + new Date());
                });
                clearInterval(timer)
                timer = setInterval(() => {
                    this.opt.debug && console.log('发送心跳包' + new Date());
                    this.instance.send(
                        "/ws/v1/test/ping",
                        {},
                        JSON.stringify({id: "ping"})
                    );
                    if (!this.instance.connected) {
                        console.log('未连接', this.instance);
                    }
                }, 5000);
                resolve(this)
                // 重连是重新订阅之前订阅过的内容
                this.subscribeQueue.forEach(item => {
                    this.instance.subscribe(item.url, item.handler)
                })
            }
            let errorCallback = () => {
                console.log(`连接失败，${reconnectTime}秒后尝试重新连接`);

                setTimeout(() => {
                    reject('连接失败，请检查服务器设置')
                    this.reconnect()
                }, reconnectTime * 1000)
            }
            this.instance.connect(this.header, successCallback, errorCallback)

        })
    }

    reconnect() {
        this._createStomp()
        this.connect(this.header)
    }

    disconnect() {
        clearInterval(timer)
        this.instance.disconnect(() => {
            console.log('手动断开连接，不再重连');
        })
        this.instance = null
    }

    send(url, data) {
        this.instance.send(url, {}, JSON.stringify(data));
    }

    subscribe(url, handler) {
        this.subscribeQueue.push({
            url,
            handler
        })
        this.instance.subscribe(url, handler);
    }
}