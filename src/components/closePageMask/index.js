import Vue from 'vue'

const closePageMask = {
  name: 'closePageMask',
  data(){
    return {
      msg: '',
      btnText: '关闭'
    }
  },
  methods: {
    closePage() {
      if (this.onClose && typeof this.onClose === 'function') {
        this.onClose()
      }else{
        window.opener = null;
        window.open("about:blank", '_self', '').close()
      }
    }
  },
  render() {
    return (
      <div style="width:100vw;height: 100vh;position:fixed;top:0;left:0;background: rgba(0,0,0,0.5);z-index:9999;text-align:center">
        <p style="font-size:30px;color:#fff;text-align:center;margin-top:30vh"> {this.msg} </p>
        <nlButton type="primary" onClick={this.closePage} style="margin-top: 30px">{this.btnText || '关闭'}</nlButton>
      </div>
    )
  }
}

const LoadingConstructor = Vue.extend(closePageMask);

const service = function (options) {
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  })
  document.body.appendChild(instance.$el);
}

export default service;
