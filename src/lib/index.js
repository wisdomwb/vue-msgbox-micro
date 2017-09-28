import MsgboxComponent from './vue-msgbox.vue'

let Msgbox = {}, instance;
Msgbox.install = function (Vue, options) {
    Vue.prototype.$msgbox = function (message, msgType, confirmCallback, cancelCallback) {
        //继承组件并new得到实例
        const MsgboxController = Vue.extend(MsgboxComponent);
        if (!instance) {
            instance = new MsgboxController().$mount(document.createElement("div"));
        }
        instance.visible = true;
        instance.message = message;
        instance.msgType = msgType;
        if (confirmCallback) {
            instance.confirmCallback = confirmCallback;
        }
        if (cancelCallback) {
            instance.cancelCallback = cancelCallback;
        }
        document.body.appendChild(instance.$el);
        //         document.body.removeChild(instance.$el)
    };

    Vue.prototype.$msgbox['showSuccess'] = function (message, callcack) {
        Vue.prototype.$msgbox(message, 'success', callcack);
    };
    Vue.prototype.$msgbox['showFailure'] = function (message, callcack) {
        Vue.prototype.$msgbox(message, 'failure', callcack);
    };
    Vue.prototype.$msgbox['showAlert'] = function (message, callcack) {
        Vue.prototype.$msgbox(message, 'alert', callcack);
    };
    Vue.prototype.$msgbox['showConfirm'] = function (message, confirmCallback, cancelCallback) {
        Vue.prototype.$msgbox(message, 'confirm', confirmCallback, cancelCallback);
    };
};
if (window.Vue) {
    Vue.use(Msgbox);
}

export default Msgbox;