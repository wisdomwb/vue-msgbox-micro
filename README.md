# Introduction
a msgbox plugin for vue.

## Useage
It's simple.
```

    //first import plugin

    import VueMsgbox from 'vue-msgbox-micro'

    //and register the plugin on vue.

    Vue.use(VueMsgbox)

    //last , you can call it .

    this.$Msgbox.showSuccess('提交成功', function(){
        console.log('提交成功');
    });

    this.$Msgbox.showFailure('提交失败');

    this.$Msgbox.showAlert('密码不能为空！');

    this.$Msgbox.showConfirm('确定提交吗', function(){
        console.log('确认提交');
    },function(){
        console.log('取消提交');
    });

```