<template>
    <div class="home" v-loading="loading">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <el-button @click="visible = !visible">弹框</el-button>
        <br />
        <br />
        <br />
        <input type="text" v-model="message" />
        <br />
        <br />
        <br />
        {{message}}
        <br />
        <br />
        <br />
        {{visible}}
        <el-dialog title="提示" :visible.sync="visible" width="30%" center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取 消</el-button>
                <el-button type="primary" @click="visible = false">确 定</el-button>
            </span>
        </el-dialog>
        <br />
        <br />
        <br />
        <el-button @click="addTableItem">新增</el-button>
        <el-button @click="removeItem">删除</el-button>
        <el-button @click="getData">更换数据</el-button>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" min-width="150"></el-table-column>
            <el-table-column prop="name" label="姓名" min-width="120"></el-table-column>
            <el-table-column prop="province" label="省份" min-width="120"></el-table-column>
            <el-table-column prop="city" label="市区" min-width="120"></el-table-column>
            <el-table-column prop="address" label="地址" min-width="300"></el-table-column>
            <el-table-column prop="zip" label="邮编" min-width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" min-width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    },
    data() {
        return {
            message: "hello vue",
            visible: false,
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                }
            ],
            loading: false
        };
    },
    methods: {
        addTableItem() {
            this.tableData.push({
                date: "2016-05-02",
                name: "王小虎" + parseInt(Math.random() * 10),
                province: "上海",
                city: "普陀区",
                address: "上海市普陀区金沙江路 1518 弄",
                zip: 200333
            });
        },
        removeItem() {
            this.tableData.pop();
        },
        getData() {
            this.loading = true;
            var that = this;
            setTimeout(function() {
                that.loading = false;
                that.tableData = [
                    {
                        date: "2016-05-02",
                        name: "王小虎" + parseInt(Math.random() * 10),
                        province: "上海",
                        city: "普陀区",
                        address: "上海市普陀区金沙江路 1518 弄",
                        zip: 200333
                    }
                ];
            }, 1000);
        }
    }
};
</script>
