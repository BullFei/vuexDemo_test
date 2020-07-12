<template>
  <div>
    <div class="box">
      <div class="tab">
        <div :class="{'active': tabindex==0}" @click="changeTabs(0)">渠道列表</div>
        <div :class="{'active': tabindex==1}" @click="changeTabs(1)">渠道池政策</div>
      </div>
      <div v-show="tabindex == 0">
        <div class="form">
          <div class="form-group">
            <label for>渠道名称</label>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="form-group">
            <label for>渠道名称</label>
            <input type="text" placeholder="请输入" />
          </div>
          <div class="form-group">
            <label for>渠道地址</label>
            <select name id>
              <option value>省份</option>
            </select>
            <span></span>
            <select name id>
              <option value>城市</option>
            </select>
          </div>
        </div>
        <div class = 'form form2'>
           <div class = 'form-group'>
            <label for>状态</label>
            <input type="text" placeholder="全部" />
            <label for>相似删选</label>
            <input type="text" placeholder="全部" />
          </div>
        </div>
      </div>
      <div v-show="tabindex == 1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      tabindex: 0
    };
  },
  methods: {
    changeTabs(e) {
      this.tabindex = e;
    }
  }
};
</script>

<style scoped lang="less">
.box {
  width: 1120px;
  height: 221px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 15px 1px rgba(0, 75, 234, 0.1);
  border-radius: 3px;
  .tab {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e0e5f0;

    div {
      line-height: 56px;
      width: 140px;
      text-align: center;
    }
    .active {
      width: 140px;
      height: 57px;
      background: rgba(0, 75, 234, 0.1);
      color: #2f6ed7;
      border-bottom: 3px solid #2f6ed7;
    }
  }
  .form {
    display: flex;
    justify-content: space-between;
    padding: 24px;
  }
  .form2{
    padding-top: 0px;
    label:nth-of-type(2){
      margin-left: 80px;
    }
  }
  .form-group {
    display: flex;
    align-items: center;
    span {
      width: 10px;
      height: 1px;
      background: rgba(197, 204, 216, 1);
      border-radius: 1px;
      display: inline-block;
      margin-right: 12px;
      margin-left: 12px;
    }
    select {
      width: 100px;
      height: 26px;
      background: rgba(255, 255, 255, 1);
      border-radius: 3px;
      border: 1px solid rgba(197, 204, 216, 1);
    }
    label {
      width: 56px;
      height: 20px;
      font-size: 14px;
      font-family: "PingFangSC-Regular", "PingFang SC";
      font-weight: 400;
      color: rgba(22, 23, 24, 1);
      line-height: 20px;
      margin-right: 12px;
    }
    input {
      width: 230px;
      height: 26px;
      border-radius: 3px;
      border: 1px solid rgba(197, 204, 216, 1);
      text-indent: 10px;
    }
  }
}
</style>