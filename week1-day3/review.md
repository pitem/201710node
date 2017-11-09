## vue第二天复习
- v-model(如果checkbox,select多选是数组，提供一个value属性)(radio checkbox分组靠的是v-model),checked selected不存在
- 修饰符 .number.lazy
- 按键修饰符 .enter.ctrl.keyCode
- 事件
    - @事件.stop
    ```
    stopPropagation,cancelBubble=true;
    ```
    - @事件.capture
    ```
    xxx.addEventListener('click',fn,true)
    ```
    - @事件.prevent
    ```
     preventDefault,returnValue=false
    ```
    - @事件.once
    ```
    on('click') off('click')
    ```
    - @事件.self
    ```
    e.srcElement&&e.target 判断事件源绑定事件
    ```

## filters实例上可以用
```
{{'123' | my(1,2,3)}}
filters:{
    my(data,param1,param2,param3){

    }
}
```

## computed计算“属性” 不是方法
- 方法不会有缓存，computed会根据依赖(归vue管理的数据，可以响应式变化的)的属性进行缓存
- 两部分组成有get和set(不能只写set) 一般情况下 通过js赋值影响其他人或者表单元素设置值的时侯会调用set方法


