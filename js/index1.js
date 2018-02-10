// 设置距离时间
var nowTime = new Date();
var chunjie = new Date("2018/2/17 00:00:00");
var dateDiff = chunjie - nowTime;
var tianshu = Math.floor(dateDiff / (24 * 3600 * 1000));
$('.item-7 i').text(tianshu);