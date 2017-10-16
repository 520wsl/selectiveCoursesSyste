<template>
    <div>
        <div class="top">
            <div class="left">
                <el-radio-group v-model="isCollapse">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                欢迎管理员管理员
            </div>
            <div class="right">退出</div>
        </div>
        <div>
            <el-menu router default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="">
                    <template slot="title">
                        <i class="el-icon-message"></i>
                        <span slot="title">需求管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="ue">需求任务大厅</el-menu-item>
                        <el-menu-item index="1-2">部门需求管理</el-menu-item>
                        <el-menu-item index="1-3">我的需求管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">雇佣管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">部门雇佣管理</el-menu-item>
                        <el-menu-item index="2-2">我的雇主</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统配置</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">门派配置</el-menu-item>
                        <el-menu-item index="3-2">类目配置</el-menu-item>
                        <el-menu-item index="3-2">banner配置</el-menu-item>
                        <el-menu-item index="3-2">友情链接管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="id" width="180">
                </el-table-column>
                <el-table-column prop="kcName" label="课程" width="180">
                </el-table-column>
                <el-table-column prop="xuefen" label="学分">
                </el-table-column>
                <el-table-column prop="leibie" label="类别">
                </el-table-column>
                <el-table-column prop="teacher" label="任教老师">
                </el-table-column>
                <el-table-column prop="xianxuan" label="限选">
                </el-table-column>
                <el-table-column prop="yixuan" label="已选">
                </el-table-column>
                <el-table-column prop="kexuan" label="可选">
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            isCollapse: true,
            tableData: [{ "id": 1, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 2, "kcName": "语文课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "260", "yixuan": "200", "kexuan": "60" }, { "id": 3, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 4, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 5, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 6, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 7, "kcName": "测试课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 8, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 9, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 10, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 11, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 12, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 13, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 14, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 15, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 16, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 17, "kcName": "数学课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }, { "id": 18, "kcName": "体育课", "xuefen": 2, "leibie": "公共课", "teacher": "王红", "xianxuan": "240", "yixuan": "200", "kexuan": "40" }],//接口获取数据
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>

<style scoped>
.top {
    overflow: hidden;
    width: 100%;
    background-color: #464c5b;
    color: #fff;
    padding: 10px 15px;
}

.top .left {
    float: left;
}

.top .right {
    float: right;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
