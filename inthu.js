function vietthu() {
let to = document.getElementById("to"). value;
let add = document.getElementById("add"). value;
let date = document.getElementById("date"). value;
let hang1 = to + "thương nhớ!,";
debugger;
let hang2 = "Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn."
let hang3 = "Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.";
let hang4 = "Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.";
let hang5 = add + "," + date;
let thu = hang1+ "<br>"+ hang2 + "<br>" + hang3 + "<br>"+ hang4 + "<br>" + hang5;
document.getElementById("thu1").innerHTML= thu
}
