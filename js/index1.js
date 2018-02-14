// 设置距离时间
var nowTime = new Date();
var chunjie = new Date("2018/3/2 00:00:00");
var dateDiff = chunjie - nowTime;
var tianshu = Math.floor(dateDiff / (24 * 3600 * 1000));
$('.item-7 i').text(tianshu);

function rad(d) {
  return d * Math.PI / 180.0;
}
//纬度，经度
function GetDistance(lat1, lng1, lat2, lng2) {
  var radLat1 = rad(lat1);
  var radLat2 = rad(lat2);
  var a = radLat1 - radLat2;
  var b = rad(lng1) - rad(lng2);
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
}

// 获取定位
var coords, dis;

function getLocation() {
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(108.95, 34.27);
  var geolocation = new BMap.Geolocation();
  try{
    geolocation.getCurrentPosition(function (r) {
      // console.log(r.point)
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          coords = r.point;
          dis = GetDistance(r.point.lat, r.point.lng, 26.427238, 112.401824);//经纬度(维度在前,经度在后)
          dis = Math.round(dis);
          $(".page-8 i").text(dis);
      }
    }, { enableHighAccuracy: true })
  }catch(e){
    alert(e);
  }
}

// 输入信息

$('#next').on('click', function(){
  if($('#name').val() == '' || $('#tel').val() == ''){
    alert('请填写信息');
    return;
  }
  if($('#tel').val().replace(/[^0-9]/, '').length !== 11 ){
    alert('请填写正确的电话');
    return;
  }
  location.href = location.origin + '/share.html#index';
})