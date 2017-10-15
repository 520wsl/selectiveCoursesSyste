<template>
    <div>
        <div>
            <span>选课学期:</span>
            <Select v-model="params.term" style="width:200px">
                <Option v-for="item in termData" :value="item.id" :key="item.id">{{ item.txt }}</Option>
            </Select>
        </div>
        <h1>选中の课程
            <span style="font-size:16px;font-weight:initial;color:red;">(温馨提示：最多只能同时选择两门课程)</span>
        </h1>
        <Table :columns="columns2" :data="params.selectData"></Table>
        <div>
            <Button type="success" @click="postData">提交</Button>
        </div>
        <div>
            <span>搜索：</span>
            <Input v-model="getDataParams.keyword" placeholder="请输入..." style="width: 300px"></Input>
            <Button type="success" @click="getData">提交</Button>
            <Button type="primary" @click="newData">刷新</Button>
        </div>
        <div style="height:30px;"></div>
        <Table :loading="states.loading" border ref="selection" :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            states: {
                loading: false,
                isShowBtn: false,
                actionNum: 2,
            },
            data: [],
            columns: [
                {
                    title: 'id',
                    key: 'id'
                },
                {
                    title: '课程',
                    key: 'kcName'
                },
                {
                    title: '学分',
                    key: 'xuefen'
                },
                {
                    title: '类别',
                    key: 'leibie'
                },
                {
                    title: '任教老师',
                    key: 'teacher'
                },
                {
                    title: '限选',
                    key: 'xianxuan'
                },
                {
                    title: '已选',
                    key: 'yixuan'
                },
                {
                    title: '可选',
                    key: 'kexuan'
                },
                {
                    key: "action",
                    title: '操作',
                    render: (h, params) => {
                        if (this.states.isShowBtn) {
                            return;
                        }

                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'success',
                                },
                                on: {
                                    click: () => {
                                        this.getSelectData(params.index)
                                    }
                                }
                            }, '选择')
                        ]);
                    }
                },
            ],
            columns2: [
                {
                    title: 'id',
                    key: 'id'
                },
                {
                    title: '课程',
                    key: 'kcName'
                },
                {
                    title: '学分',
                    key: 'xuefen'
                },
                {
                    title: '类别',
                    key: 'leibie'
                },
                {
                    title: '任教老师',
                    key: 'teacher'
                },
                {
                    key: "action",
                    title: '操作',
                    render: (h, params) => {

                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                },
                                on: {
                                    click: () => {
                                        this.setCancelData(params.index)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                },
            ],
            termData: [
                {
                    id: 1,
                    txt: '2017 上学期'
                },
                {
                    id: 2,
                    txt: '2017 下学期'
                }
            ],
            params: {
                term: 1,
                selectData: [],
            },
            getDataParams: {
                keyword: ''
            }


        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            let keyword = this.getDataParams.keyword;
            let data = [{ "id": 1, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 2, "kcName": "语文课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "260", "yixuan": "200", "kexuan": "60" }, { "id": 3, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 4, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 5, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 6, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 7, "kcName": "测试课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 8, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 9, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 10, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 11, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 12, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 13, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 14, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 15, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 16, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 17, "kcName": "数学课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 18, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }];//接口获取数据
            let newData = [];
            /** 这里有问题  如果直接从数据库获取数据不用这些代码了 */
            if (keyword.length > 0) {
                this.data.map(function(e) {
                    if (e.kcName.indexOf(keyword) > -1) {
                        newData.push(e)
                    }
                })
                console.log('111')
            } else if (this.params.selectData.length > 0) {
                newData = this.data
                console.log('222')
            } else {
                newData = data;
                console.log('333')
            }

            this.data = newData;
            /** 这里有问题  如果直接从数据库获取数据不用这些代码了 */
        },
        newData() {
            this.getDataParams.keyword = '';
            this.getData();
        },
        getSelectData(e) {
            this.params.selectData.push(this.data[e])
            this.data.splice(e, 1)
            if (this.params.selectData.length >= this.states.actionNum) {
                this.states.isShowBtn = true;
            }
        },
        setCancelData(e) {
            this.data.push(this.params.selectData[e])
            this.params.selectData.splice(e, 1)
            if (this.params.selectData.length < this.states.actionNum) {
                this.states.isShowBtn = false;
            }
        },
        postData() {
            console.log(this.params)
            alert('提交成功！请查看控制台数据！   ')
        }
    }
};
</script>

<style scoped>

</style>

