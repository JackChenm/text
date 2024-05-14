<template>
    <div class="account">
        <header>
            <div class="top">
                <h3>账号管理</h3>
                <span @click="back"><</span>
            </div>
            <div class="search">
                <input type="text" placeholder="请输入你要搜索的内容">
                <p>
                    <img src="/src/static/img/路径@1x.png" alt="">
                    <span>
                        筛选
                    </span>
                </p>
            </div>
        </header>
        <div class="left">
            <img src="../static/img/首页.png" @click="back">
            <span>首页</span>
        </div>
        <main>
            <ul>
                <li>
                <p class="name">广州汽车有限公司</p>
                <div class="middle">
                    <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                        <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                        <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                        <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                </div>
                    <div class="footer">
                        <button class="stop">
                            禁用
                        </button>
                        <button class="write">
                            编辑
                        </button>
                    </div>
                </li>
                <li>
                <p class="name">广州汽车有限公司</p>
                <div class="middle">
                    <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                        <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                        <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                        <section>
                            <h5>所属组织</h5>
                            <span>广州部门</span>
                        </section>
                </div>
                    <div class="footer">
                        <button class="stop">
                            禁用
                        </button>
                        <button class="write">
                            编辑
                        </button>
                    </div>
                </li>
            </ul>
            <div class="table">
                <div class="tableTop">
                <p>
                    <span>用户名</span>
                    <el-input 
                    v-model="value" 
                    style="width: 180px;" 
                    placeholder="请输入用户名"
                    > </el-input>
                </p>
                <p>
                    <span>岗位</span>
                    <el-input 
                    v-model="value" 
                    style="width: 180px;" 
                    placeholder="请输入岗位"
                    > </el-input>
                </p>
                <p>
                    <span>组织</span>
                    <el-input 
                    v-model="value" 
                    style="width: 180px;" 
                    placeholder="请输入组织"
                    > </el-input>
                </p>
                <p>
                    <span>手机号</span>
                    <el-input 
                    v-model="value" 
                    style="width: 180px;" 
                    placeholder="请输入手机号码"
                    > </el-input>
                </p>
                <P>
                    <el-input 
                    v-model="value" 
                    style="width: 200px;
                    font-size: 10px;
                    background-color: #FFD8D8;
                    " 
                    placeholder="请输入您要搜索的内容"
                    > </el-input>
                </P>
                <P>
                    <el-button style="border: 1px solid #FF312E;">搜索</el-button>
                    <el-button
                        style="background: linear-gradient(140deg, #FF8B37 14%, #FF2D2D 110%); color: #fff;"
                    >新增</el-button>
                </P>
                </div>
                <el-table
                    :data="tableData"
                    style="width: 100%;margin-top: 24px"
                >
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="210">
                </el-table-column>
                <el-table-column
                    prop="organization"
                    label="所属组织"
                    width="210">
                </el-table-column>
                <el-table-column
                    prop="superior"
                    label="上级"
                    width="210">
                </el-table-column>
                <el-table-column
                    prop="department"
                    label="岗位"
                    width="210">
                </el-table-column>
                <el-table-column
                    prop="tel"
                    label="手机号"
                    width="210">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="300">
                    <template  #default="scope" style="display: flex; justify-content:space-between;">
                        <span style="margin-right: 20px; color:#FF3F2F;font-size: 12px; cursor: pointer;" @click="clickAction">编辑</span>
                        <span style="margin-right: 20px; color: #FF3F2F;font-size: 12px; cursor: pointer;">权限设置</span>
                        <el-switch
                            v-model="scope.row.checked"
                            class="ml-2"
                            style="--el-switch-on-color: #DEDEDE; --el-switch-off-color: #ff4949"
                        />
                    </template>
                </el-table-column>
                </el-table>
                <div class="bottom">
                    <el-pagination
                        :page-sizes="[100, 200, 300, 400]"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400"
                        >
                    </el-pagination>
            </div>
            </div>
        </main>
        <footer>
            <button class="new" @click="clickAction">新增</button>
        </footer>
    </div>
    <massageBox :isShow="click" @click="clickAction"></massageBox>
</template>
<script lang='ts' setup>
import  { ref } from 'vue'
import router from '../router';
import massageBox from '../components/massageBox/massageBox.vue'
const click = ref(false)

 const back = ()=>{
    router.back()
 }

const clickAction = ()=>{
    click.value = !click.value
}
 const value = ref('')
const tableData = [
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,
    },
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,
    },
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,

    },    
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,

    },    
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,

    },    
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,

    },    
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,

    },    
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,
    },
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,
    },
    {
        name:'李大名',
        organization:'销售部门',
        department:'销售',
        superior:'部门主管',
        tel:'13608067590',
        checked:false,
    },
]

</script>
<style lang='scss' scoped>
/* 公共样式 */
.account {
    display: flex;
    height: 100%;
}

.left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88px;
    height: 100%;
    box-shadow: 0px 16px 36px 0px rgba(223, 113, 113, 0.13);
    font-size: 12px;
}

.left img {
    margin: 20px 0 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

main {
    flex: 1;
    background-color: #f0eeeeb2;
    overflow: auto;
    &::-webkit-scrollbar {
    display: none;
}
}

 @media only screen and (min-width: 750px) {
    .account{
        height: 91%;
        padding-top: 62px;
    }
    header{
        display: none;
    }
    main{
        padding: 15px;
        ul{
            display: none;
        }
        .table{
            width: 98%;
            height: 95%;
            background-color: #fff;
            padding: 20px;
            .tableTop{
                display: flex;
                justify-content: space-between;
                p{
                    display: flex;
                    align-items: center;
                    span{
                        margin-right: 10px;
                    }
                }
            }
            .bottom{
                margin-top: 10px;
                display: flex;
                flex-direction: row-reverse;
            }
        }
    }
    footer{
        display: none;
    }
 }
 @media only screen and (max-width: 750px) {
    .left{
        display: none;
    }
    .account{
        flex-direction: column;
    }
    header{
        width: 100%;
        height: 118px;
        padding-top: 52px;
        display: flex;
        flex-direction: column;
        background: linear-gradient(142deg, #FF8B37 12%, #FF2D2D 111%);
    .top{
        width: 100%;
        text-align: center;
        color: #fff;

        font-size: 16px;
        font-weight: 500;
        span{
            position: absolute;
            width: 20px;
            height: 20px;
            display: block;
            top: 54px;
            left: 16px;
        }
    }
    .search{
        margin-top: 30px;
        padding-left:  16px;
        padding-right: 21px;
        display: flex;
        justify-content: space-between;
        input{
            height: 44px;
            flex: 1;
            border-radius: 20px;
            border: 1px solid #fff;
            outline-color: #fff;
            padding-left: 16px;
        }
        p{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 20px;
            img{
                width: 16px;
                height: 16px;
            }
            span{
                margin-top: 3px;
                font-size: 10px;
                color: #fff;
            }
        }
    }
    }
    main{
        ul{
        padding: 16px;
        display: flex;
        flex-direction: column;
        list-style: none;
        li{
            width: 93%;
            height: 230px;
            padding: 12px;
            margin-bottom: 12px;
            border-radius: 12px;
            background-color: #fff;
            .name{
                font-size: 16px;
                font-weight: 350;
            }
            .middle{
                background-color: #F6F6F6;
                margin-top: 12px;
                display: flex;
                flex-wrap: wrap;
                padding: 12px;
                padding-bottom: 0;
                justify-content: space-between;
                section{
                    width: 45%;
                    margin-top: 5px;
                    margin-bottom: 10px;
                    padding-left: 5px;
                    h5{
                        font-size: 12px;
                        font-weight: 500;
                        color:#9F9F9F;
                        margin-bottom: 10px;
                    }
                    span{
                        color:#474747;
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 18px;
                    }
                }
            }
            .footer{
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 16px;
                button{
                    width: 48%;
                    height: 38px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 500;
                }
                .stop{
                    background-color: #fff;
                    border: 2px solid #9c9797;
                    color: #535353;
                }
                .write{
                    background-color: #FFE3E3;
                    border: 2px solid #FF2D2D;
                    color: #FF2D2D;
                }
            }
        }
        }
    }
    footer{
        height: 38px;
        padding-top: 2px;
        padding-right: 12px;
        padding-bottom: 37px;
        padding-left: 16px;
        .new{
            width: 100%;
            height: 43px;
            border-radius: 12px;
            opacity: 1;
            background: linear-gradient(157deg, #FF8B37 41%, #FF2D2D 82%);
            border: 1px solid #fff;
            color:#fff;
        }
    }
    .table{
        display: none;
    }
 }
</style>