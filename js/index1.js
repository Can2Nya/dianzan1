// 设置距离时间
var nowTime = new Date();
var chunjie = new Date("2018/2/17 00:00:00");
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

var coords, dis;
// var flag;
function showJson(lat, lon, dis) {
  $.getJSON("http://api.map.baidu.com/geocoder/v2/?location=" + lat + "," + lon + "&callback=?&output=json&ak=I2KCehM1RiQrm4rB2QCnwidiTDDh5egh", function (data) {
      console.log(data.result.addressComponent.city + " " + dis);
      if (data.result.addressComponent.city){

      }
          // window.location.href = "addQuest.html" + "?dis=" + dis + "&city=" + encodeURI(data.result.addressComponent.city);
  });

}
// var time = 0;
// var clearLater = 400;
// var btn;
// var Tex;

function getLocation() {
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(108.95, 34.27);
  var geolocation = new BMap.Geolocation();
  try{
    geolocation.getCurrentPosition(function (r) {
      // console.log(r.point)
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          coords = r.point;
          dis = GetDistance(r.point.lat, r.point.lng, 26.07, 112.07);//经纬度(维度在前,经度在后)
          dis = Math.round(dis);
          console.log(dis);
          // Tex.innerHTML = "还有" + dis + "公里";
          // btn.innerText = "参与活动";
          // flag = true;
          // btn.innerText = "参与活动";
          $(".page-8 i").text(dis);
      }
    }, { enableHighAccuracy: true })
  }catch(e){
    alert(e);
  }
  
}
// function getdis() {
//   btn = document.getElementById("disBtn");
//   Tex = document.getElementById("disText");

//   if (btn.innerText == "获取我的位置") {
//       btn.innerText = "正在获取";
//       getLocation();
//   }
//   else if (btn.innerText == "参与活动") {
//       if (!flag)
//           window.location.href = "addQuest.html" + "?dis=" + 0 + "&city=" + encodeURI("位置获取失败");
//       else {
//           if (coords.latitude)
//               showJson(coords.latitude, coords.longitude, dis);
//           else
//               showJson(coords.lat, coords.lng, dis);
//       }
//   }
// }