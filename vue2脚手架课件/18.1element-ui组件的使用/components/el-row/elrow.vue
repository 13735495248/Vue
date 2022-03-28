<template>
    <div>
        <!-- 
            layout布局将宽分成了24份,
            el-row表示一行
            el-col表示一列
            span表示列占的份数
            gutter表示列之间的距离
        -->
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="col1">
                    111
                </div>

                <div class="col3">
                    333
                </div>
            </el-col>
            <el-col :span="16">
                <div class="col2">
                    222
                </div>
                <div class="col4">
                    444
                </div>

            </el-col>
        </el-row>
    </div>
</template>

<style lang="less">
    .col1{
        background: red;
        height: 200px;
        border-radius: 5px;
    }
    .col2{
        background: red;
        height: 250px;
        border-radius: 5px;
    }

    .col3{
        background: red;
        height: 250px;
        border-radius: 5px;
        margin-top: 20px;
    }

    .col4{
        background: red;
        height: 200px;
        border-radius: 5px;
        margin-top: 20px;
    }
</style>