/**
 * *@2018-10-08
 * *@author trsoliu 
 * *@describe vue-cli 3.x配置文件
 */
const path = require('path');

module.exports = {
    //基本路径vue-cli3.3以下版本使用baseUrl;vue-cli3.3+新版本使用publicPath
    publicPath: process.env.NODE_ENV === 'production' ? '/TazMobileOA/api/' : '/',
     
};