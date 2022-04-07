/*
 * @Author: 牧鱼
 * @Date: 2022-03-31 17:42:18
 * @LastEditTime: 2022-04-07 16:19:48
 * @LastEditors: 牧鱼
 * @Description:
 * @FilePath: \vue3-sp\.cz-config.js
 */
module.exports = {
  types: [
    { value: "feat", name: "feat:新功能" },
    { value: "fix", name: "fix:修复" },
    { value: "docs", name: "docs:文档变更" },
    { value: "style", name: "style:代码格式(不影响代码运行的变动)" },
    {
      value: "refactor",
      name: "refactor:重构(既不是增加feature，也不是修复bug)",
    },
    { value: "perf", name: "perf:性能优化" },
    { value: "test", name: "test:增加测试" },
    { value: "chore", name: "chore:构建过程或者辅助工具变动" },
    { value: "revert", name: "revert:回退" },
    { value: "build", name: "build:打包" },
  ],
  messages: {
    type: "请选择提交的类型:",
    customScope: "请输入修正的范围（可选）:",
    subject: "请简要描述提交（必填）:",
    body: "请输入详细描述（可选）:\n",
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer: "请输入要关闭的issue（可选）:\n",
    confirmCommit: "确认要使用以上信息提交？（y/n）",
  },
  // allowCustomScopes: true,
  // allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  // skipQuestions: ["body"],
  // limit subject length
  subjectLimit: 100,
};
