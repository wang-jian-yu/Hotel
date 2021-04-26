<template>
  <div class="login_container">
    <el-row>
      <el-col :span="18">
        <div class="login_backimg">
          <!-- 图片懒加载v-lazy -->
          <img v-lazy="beijingtu" alt />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="login_box">
		  <div class="login_logo_img" >
			  <img style="border-radius:70px;" v-lazy="logoimg" alt width="141px" height="140px" />
		  </div>
          <div class="login_p">
            <!-- <p class="pp">GGBond~欢迎登陆</p> -->
          </div>

          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginFormRules"
            class="login_form"
            :disabled="isVerificationShow2"
          >
            <el-form-item prop="username" label-width="0px">
              <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入账号"></el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
             <!-- class="login_radio" -->
            <el-form-item  class="from_item_radio">
              <el-radio-group v-model="radio" @change="ss">
                <el-row :gutter="10">
                  <el-col :span="20">
                     <el-radio :label="1">商家</el-radio>
                  </el-col>
                   <el-col :span="4">
                   
					<el-radio :label="2">管理员</el-radio>
                  </el-col>
                
                </el-row>
              </el-radio-group>
            </el-form-item>

            <el-form-item class="btns">
			  <!-- <el-button type="primary" v-if="this.islogins == true" :loading="true" round style="width:300px">登陆中...</el-button> -->
              <el-button type="primary" v-if="this.islogins == false" round style="width:300px" @click="Yz">登录</el-button>
            </el-form-item>

            <div class="btns">
				<!-- <el-link 
				  :disabled="resetPassword"
				  @click="toResetPassword"
				  type="primary"
				  :underline="false">
				  <span style="color:gray;margin-right: 20px;">忘记密码</span>
				</el-link> -->
				
              <el-link
                :disabled="isVerificationShow2"
                @click="toRegester"
                type="primary"
                :underline="false">
                <span style="color:gray">商家注册</span>
              </el-link>
			  
            </div>
          </el-form>
          <div class="puzzle-box">
            <PuzzleVerification
              v-model="isVerificationShow2"
              :puzzleImgList="puzzleImgList"
              blockType="puzzle"
              :onSuccess="handleSuccess"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import PuzzleVerification from '@/components/puzzleVerification'
export default {
  components: {
    PuzzleVerification
  },
  data() {
    return {
	  islogins:false,
      //滑块验证是否可见
      isVerificationShow2: false,
      puzzleImgList: [
        require('../../assets/imgYZM/011.jpg'),
        require('../../assets/imgYZM/022.jpg'),
        require('../../assets/imgYZM/033.jpg')
      ],
      //背景图片
      beijingtu:require('../../assets/welcome2.jpg'),
	  //logo图片
	  logoimg:require('../../assets/logo88.jpg'),
      //存储登录表单的数据
      loginForm: {
        // username: 'admin',
        // password: 'admina'
        username:'15812980822',
        password:'123456',
		// flag: '',
      },

      //登录者信息
      person: {},
      //表示身份
      radio:1,
      xuanxiang:1,
      
      //表单认证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        //验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //滑块验证成功
    handleSuccess() {
      this.logins()
      this.isVerificationShow2 = false
    },
    //滑块验证
    Yz() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        this.isVerificationShow2 = true
		this.islogins = true
      })
    },
    ss(val) {
      //console.log(val)
      this.xuanxiang = val
      //console.log(this.xuanxiang+'sss')
    },
    //点击重置表单
    resetLoginForm() {
      //console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    //去到注册页面
    toRegester() {
      this.$router.push('/register')
    },
	//去到修改密码
    toResetPassword() {
     this.$router.push('resetPassword')
    },

    async logins() {
      
	//   // this.loginForm.flag = this.xuanxiang

	//   var jsonAll =JSON.stringify(this.loginForm)
	//   //console.log(jsonAll)
	//   //console.log(this.loginForm.flag)
  //     const { data: res } = await this.$http.post(
  //             'hotel/login',
  //             // this.$qs.stringify(this.loginForm)
	// 		  jsonAll
  //           )
	//  //console.log(res)
	//  if (res.code != 200) return this.$message({  type: 'error',   message: res.msg });
	     
	//  //将请求得到的token放到session
	//  window.sessionStorage.setItem('token', res.data.token)
	//  //将users表id存起来
	//  window.sessionStorage.setItem('userId', res.data.id)
	 
	//  this.$message({  type: 'success',   message: res.msg });
	
  //    if (this.xuanxiang === 1) {
	// 	 window.sessionStorage.setItem('mId', res.data.merchantInfo.mId)
	// 	 window.sessionStorage.setItem('username', res.data.merchantInfo.mName)
  //       this.$router.push('/merchantshome')
  //    }
	//  if( this.xuanxiang ==2){
	//  	 this.$router.push('/adminhome')
	//  }
	//  // else if (this.xuanxiang === 2) {
	//  //    this.$router.push('/adminhome')
	//  // }
     this.$store.commit('LOGIN_IN',"vip")
     this.$router.replace('/')
    },
 
  }
}
</script>

<style lang="scss" >
.login_container {
  .login_backimg {
    img {
      width: 100%;
      height: 100%;
      min-height: 700px;
    }
  }
}

.login_box {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 3px;
  min-height: 612px;
}

.login_logo_img{
	margin-left: 30%;
	
}

.login_p {
  margin-left: 25%;
  .pp {
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 22px;
  }
}
.login_form {
  margin-top: 100px;
  bottom: 30%;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  //min-height: 688px;
}

// .login_radio {
//   display: flex;
//   justify-content: center;
// }
.from_item_radio{
	margin-left: 15%;
}
.el-radio {
  padding: 0 12px;
}

.btns {
  display: flex;
  justify-content: center;
}
//验证码滑块
.puzzle-box {
  position: absolute;
  top: 157px;
  //left: -10px;
  margin-left: 50px;
  
  z-index: 2;
}
</style>

