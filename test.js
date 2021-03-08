let diem = prompt("Nhập điểm :");
let d = parseInt(diem);
(d >= 9) ? alert("XS") :
    (d >= 8) ? alert("Giỏi") :
        (d >= 7) ? alert("Khá") :
            (d >= 5) ? alert("TB") :
                alert("Yếu");