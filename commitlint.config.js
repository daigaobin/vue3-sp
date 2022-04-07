/*
 * @Author: 牧鱼
 * @Date: 2022-04-07 16:00:16
 * @LastEditTime: 2022-04-07 16:25:00
 * @LastEditors: 牧鱼
 * @Description:
 * @FilePath: \vue3-sp\commitlint.config.js
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // "body-leading-blank": [2, "always"], // body换行
    // "header-max-length": [2, "never", 72], // header 最长72
    "type-enum": [
      2,
      "always",
      [
        "feat", //新功能 feature
        "fix", //修复Bug
        "docs", //文档变更
        "style", //代码格式
        "refactor", //重构
        "perf", //性能优化
        "test", //增加测试
        "chore", //构建过程或者辅助工具变动
        "revert", //回退
        "build", //打包
      ],
    ],
    "subject-case": [0],
  },
};
