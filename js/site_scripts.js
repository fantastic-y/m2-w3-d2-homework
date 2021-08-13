var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";
partnerNames = ["bustour","cabinrental","campingadv","collegetours","rentalbike","tourgroup"];

for (var i=0; i<6; i++) {
    fileNames.push("partner-"+partnerNames[i]);
    photos.push("<img src='partners/"+fileNames[i]+".png'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList.join(" ");