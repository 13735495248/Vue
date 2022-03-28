<template>
  <div>
    <div class="mc">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="性别:">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>

        <el-form-item label="单身贵族:">
          <el-switch
            v-model="form.single"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-form-item>

        <el-form-item label='出生日期'>
          <el-date-picker value-format="yyyy-MM-dd"  v-model="form.date" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click.prevent='register' class="register" type="primary" plain>注册</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "无名氏",
        sex: "男",
        single: true,
        date:'2021-12-18'
      },
    };
  },

  methods:{
      register(){
          this.$confirm(`
          您注册的姓名:${this.form.name},性别:${this.form.sex},
          单身情况:${this.form.single?'万年单身狗':'心有所属'},出生日期:
          ${this.form.date},是否确定注册?
          `, 
          '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '注册成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注册'
          });          
        });
      }
  }
};
</script>

<style scoped>
.el-form {
  width: 500px;
  margin-top: 10px;
  margin-left: 10px;
}
.register{
    margin-left: 50px;
}
</style>