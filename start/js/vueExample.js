// 我们的数据对象
var data = {
    a: 1
};

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    data: data
});

// 获得这个实例上的属性
// 返回源数据中对应的字段
console.log(vm.a === data.a);

// 设置属性也会影响到原始数据
vm.a = 2;
console.log(data.a);

// ……反之亦然
data.a = 3;
console.log(vm.a);

// 使用 Object.freeze()， 这会阻止修改现有的属性， 也意味着响应系统无法再追踪变化。
var obj = {
    foo: 'bar'
};

Object.freeze(obj);

var app = new Vue({
    el: '#app',
    data: obj
});

var data1 = {
    a: 1
};
var app1 = new Vue({
    el: '#app-1',
    data: data1
});

app1.$data === data1;
app1.$el === document.getElementById('app-1');
app1.$watch('a', function (newValue, oldValue) {
    console.log("app1的元素内容变为:" + app1.$data.a);
});

//TODO Learn实例生命周期钩子