// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

new Vue({
    el: '#app',
    data: {
        addText: '',
        // proList-任务列表 name-任务名 status-完成情况
        proList: [
            { name: '吃饭', status: false },
            { name: '睡觉', status: false },
            { name: '打豆豆', status: false }
        ],
        newList: [],
        beforeEditText: '',     // 用于记录要修改时的当前项
        curIndex: '',            // 当前的索引
        curType: 0              // 任务当前的类型（状态）
    },
    computed: {
        noend: function () { 
            return this.proList.filter(function (item) { 
                return !item.status
             }).length;
         }
    },
    methods: {
        // 添加任务，默认status=false，未完成
        addList() {
            this.proList.push({
                name: this.addText,
                status: false
            });
            // 添加任务后清空输入框
            this.addText = '';
        },
        // 任务筛选
        chooseList(type) {
            // type=1 选择所有目标
            // type=2 选择已完成
            // type=3 选择未完成
            this.curType = type;
            switch(type) {
                case 1:
                    this.newList = this.proList;
                    break;
                case 2:
                    this.newList = this.proList.filter(function (item) { 
                        return item.status;
                     });
                    break;
                case 3:
                    this.newList = this.proList.filter(function (item) { 
                        return !item.status;
                     });
                    break;
            }
        },
        // 改变任务的完成状态
        changeType(index) {
            this.newList[index].status = !this.newList[index].status;
            // 更新数据
            this.chooseList(this.curType);
        },
        // 删除任务
        deleteList(list) {
            var index = this.proList.indexOf(list);
            // 根据索引删除数组的某一项 splice()方法：删除从索引值开始的n个元素，直接将结果保存在原数组中
            this.proList.splice(index, 1);
            // 更新newList，newList可能通过this.proList.filter进行赋值，这样的话删除了proList不会影响到newList，需要手动更新newList
            // this.newList = this.proList;
            this.chooseList(this.curType);
        },
        // 修改任务前
        editBefore(name) {
            // 记录当前项
            this.beforeEditText = name;
        },
        // 修改完成后
        edited() {
            // 修改完后，设置curIndex=''，这样输入框会隐藏，其他元素会显示。因为在li中写了：:class="{'editing':curIndex===index}"
            // 当curIndex不为当前索引值的时候，editing的类名被清除了。
            this.curIndex = '';
        },
        // 取消修改
        cancelEdit(val) {
            val.name = this.beforeEditText;
            this.curIndex = '';
        },

        // 尝试绘制图表
        // drawChart() {
        //     // 基于准备好的dom，初始化echarts实例
        //     // var myChart = echarts.init(document.getElementsById('chart'));
        //     // Vue中用下面这个方式
        //     var myChart = this.$echarts.init(document.getElementById('chart'));
        //     // 指定图表的配置项和数据
        //     var option = {
        //         title: {
        //             text: 'Echarts入门实例'
        //         },
        //         tooltip: {},
        //         legend: {
        //             data: ['销量']
        //         },
        //         xAxis: {
        //             data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        //         },
        //         yAxis: {},
        //         series: [{
        //             name: '销量',
        //             type: 'bar',
        //             data: [5, 20, 36, 10, 10, 20]
        //         }]
        //     };
        //     myChart.setOption(option);
        // }

    },
    mounted() {
        // 初始化，把proList赋值给newList，默认显示所有任务
        this.newList = this.proList;
        // this.drawChart();
        
    }
})