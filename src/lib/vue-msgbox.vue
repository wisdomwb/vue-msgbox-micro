<template>
    <section class="msgbox-container" v-if="visible">
        <div class="msgbox" v-bind:class="{'fade-in':visible}">
            <div class="top">
                <span class="close iconfont icon-close2" @click="close"></span>
            </div>
            <div class="content">
                <div class="img iconfont"
                     v-bind:class="{'icon-ff-success':msgType=='success', 'icon-error1':msgType=='failure', 'icon-alert1':msgType=='alert', 'icon-wenhao2':msgType=='confirm'}"></div>
                <div class="tips">{{message}}</div>
            </div>
            <div class="bottom">
                <button class="cancel" v-if="msgType=='confirm'" @click="cancel">取消</button>
                <button @click="confirm">确定</button>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: scale(0.7);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.7);
        }
    }

    .msgbox-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        background: rgba(0, 0, 0, .5);
        .msgbox {
            position: relative;
            width: 400px;
            height: 160px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            background: #fff;
            .top {
                flex: 0 0 30px;
                .close {
                    position: absolute;
                    right: 8px;
                    top: 5px;
                    opacity: .5;
                    cursor: pointer;
                    font-size: 20px;
                }

                .close:hover {
                    opacity: 1;
                }
            }

            .content {
                flex: auto;
                margin: 10px;
                display: flex;
                .img {
                    font-size: 50px;
                    color: #f00;
                    flex: 0 0 100px;
                    text-align: right;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
                .tips {
                    flex: auto;
                    display: flex;
                    align-items: center;
                    margin-left: 20px;
                }
            }

            .bottom {
                flex: 0 0 50px;
                text-align: center;
                line-height: 50px;
                button {
                    border: 0;
                    background: rgba(89, 164, 219, .8);
                    color: #fff;
                    padding: 4px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button.cancel {
                    margin-right: 10px;
                }
                button:hover {
                    background: rgba(89, 164, 219, 1);
                }
            }
        }

        .fade-in {
            animation-name: fade-in;
            animation-duration: 0.5s;
            animation-fill-mode: both;
        }

        .fade-out {
            animation-name: fade-out;
            animation-duration: 0.5s;
            animation-fill-mode: both;
        }
    }


</style>
<script>
    import './../assets/css/iconfont.css'

    export default {
        data() {
            return {
                visible: false,
                message: '',
                msgType: 'query'
            }
        },
        components: {},
        methods: {
            close() {
                this.visible = false;
            },
            cancel() {
                this.visible = false;
                if (this.cancelCallback) {
                    this.cancelCallback();
                }
            },
            confirm() {
                this.visible = false;
                if (this.confirmCallback) {
                    this.confirmCallback();
                }

            }
        }
    }
</script>