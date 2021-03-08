let diem = prompt("Nhập điểm :");
let d = parseInt(diem);
if ((d >= 0) && (d <= 10)) {
(d >= 9) ? alert("XS") :
    (d >= 8) ? alert("Giỏi") :
        (d >= 7) ? alert("Khá") :
            (d >= 5) ? alert("TB") :
                alert("Yếu");
} else alert("Error")