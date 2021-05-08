<template>
  <el-container class="layout-containt">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../../assets/logo.png" />
        <span>电商后天管理系统</span>
      </div>
      <i class="el-icon-switch-button" @click="logout"></i>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'" >
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409BEF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index=" '/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <i class="el-icon-menu"></i>
              <span>{{ subItem.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体内容 -->
      <el-main>
            <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //左侧菜单数据
      menuList: [],
      iconsObj: {
        125: "iconfont icon-user",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
      },
      //是否折叠菜单
      isCollapse: false,
      //被激活的链接地址
      activePath: "",
    };
  },
  created() {
    this.getMuenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    //获取所有菜单
    async getMuenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
    },
    //点击按钮隐藏/显示菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    logout() {
      // window.sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scope>
.layout-containt {
  height: 100%;
}
.el-header {
  .el-icon-switch-button {
    cursor: pointer;
  }
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}
.iconfont {
  margin-right: 10px;
}
.el-aside {
  background-color: #333744;

  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
