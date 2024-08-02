// toán tử so sánh

// 1. toán tử so sánh bằng (==)
let hoTenA = "Tấn Phát";
let hoTenB = "Tấn Phát";
let ketQua = hoTenA == hoTenB; // true , false
console.log(ketQua);

// let diemToan = 8;
let diemVan = "8";
console.log(diemToan == diemVan);

// 2. so sánh bằng giá trị và kiểu (===)
console.log(diemToan === diemVan); //   false
console.log(hoTenA === hoTenB); //   true

// 3. so sánh khác (!=)
let hocSinhA = "Bảo Long";
let hocSinhB = "Văn Đạt";
console.log(hocSinhA != hocSinhB); //  true
console.log(diemToan != diemVan); //  false

// 4. so sánh khác giá trị hoặc kiểu (!==)
console.log(diemToan !== diemVan); //  true
console.log(hoTenA !== hoTenB); //  false

let ketQua1 = 25 * 11 - 10;
let ketQua2 = 98 - 50 * 3;
console.log(ketQua1 > ketQua2);

// toán tử phủ định (!)
let mayMan = true;
console.log(!mayMan); //  false

// toán tử và (&&)
// trường đại học C yêu cầu học sinh khi ứng tuyển phải có tổng điểm trên 20 và điểm toán phải đạt trên 8
let sinhVienA = "Phát";
let diemToanA = 8;
let diemVanA = 7;
let diemAnhA = 9;
let ketQua3 = diemToanA + diemVanA + diemVanA > 20 && diemToanA > 8;
console.log(ketQua3);

// toán tử hoặc (||)
// mẹ đưa 50k ra chợ mua đồ, nếu như 50k đủ mua 1 bịch muối thì mua 1 bịch muối còn không thì mua bó rau
let bichMuoi = 35000;
let boRau = 25000;
let ketQua4 = bichMuoi <= 50000 || boRau <= 50000;
console.log(ketQua4);

// cấu trúc điều kiện
// công ty thực hiện tính toán lương cho nhân viên nếu như trên 180h thì sẽ được tính lương còn nếu không đủ thì lương trả vào tháng sau
let thoiGianLam = 200;
let tienLuong = 0;
let soTienLuong = 100000;

if (thoiGianLam > 180) {
  // tất cả hành động xử lý khi điều kiện đúng
  tienLuong = thoiGianLam * soTienLuong;
}
console.log(tienLuong);

// ép kiểu dữ liệu từ chuỗi số thành số
//phương thức number
let number = "9" * 1;
let number1 = Number("9");
let number2 = "8";
console.log(typeof number1);
console.log(+number2);

// thực hiện tính toán kết quả lương của nhân viên khi họ bấm vào nút tính tiền lương. Nếu người dùng làm việc trên 150 tiếng thì lương được tính theo công thức = số tiền lương *số giờ làm *2, còn nếu không đủ 150 tiếng thì công thức = số tiền lương *số giờ làm. Tính toán xong thì thực hiện đưa dữ liệu lên thẻ div có class ketqua(tìm hiểu về cách  chuyển đổi số thành kiểu tiền tệ để hiển thị)
let tienLuongTheoGio = 150000;
document.querySelector(".btn-dark").onclick = function () {
  let thoiGian = document.getElementById("thoiGianLam").value * 1;
  console.log(thoiGian);
  if (thoiGian > 150) {
    tienLuong = tienLuongTheoGio * thoiGian * 2;
  } else {
    tienLuong = tienLuongTheoGio * thoiGian;
  }
  let tienTe = tienLuong.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(
    ".ketQua"
  ).innerHTML += `số tiền lương tháng này : ${tienTe}`;
};

// cấu trúc điều kiện if else
// quán ăn halikao mở tiệc ưu đãi khách hàng với hóa đơn trên 150k thì được giảm giá 30% còn nếu ít hơn hoặc bằng 150k thì sẽ giảm giá 10%
let soTienAn = 100000;
let giaUuDai = 0;
if (soTienAn > 150000) {
  // các hành động xử lý khi số tiền ăn lớn hơn 150000
  giaUuDai = 0.3;
} else {
  // nơi xử lý khi biểu thức điều kiện trả về false
  giaUuDai = 0.1;
}
let tienAnDaGiamGia = soTienAn - soTienAn * giaUuDai;
console.log(tienAnDaGiamGia);

// một nhà hàng lớn ở HCM mở khai trương, nhà hàng có 1 khuyến mãi là nếu như khách hàng đi trên 5 người và có số tiền ăn trên 3tr thì sẽ giảm giá 40% còn nếu đi trên 5 người mà số tiền ăn dưới 3tr thì giảm 30% nếu đi dưới 5 người và có hóa đơn trên 3tr thì giảm giá 20% còn nếu đi dưới 5 người và có hóa đơn dưới 3tr thì giảm 10%
document.querySelector(".btn-dark").onclick = function () {
  let soTienAn = document.getElementById("soTienAn").value * 1;
  let soNguoi = document.getElementById("soNguoi").value * 1;
  let giamGia = 0;
  if (soNguoi > 5) {
    if (soTienAn > 3000000) {
      giamGia = 0.4;
    } else {
      giamGia = 0.3;
    }
  } else {
    if (soTienAn > 3000000) {
      giamGia = 0.2;
    } else {
      giamGia = 0.1;
    }
  }
  let tienAnDaGiamGia = soTienAn - soTienAn * giamGia;
  document.querySelector(
    ".ketQua2"
  ).innerHTML += `Tiền ăn sau khi giảm giá : ${tienAnDaGiamGia}`;
};

// Tìm số lớn nhất trong 2 số
document.querySelector(".btn-danger").onclick = function () {
  // đầu vào - lấy value từ người dùng
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;

  // xử lý
  // let soLonNhat = soThuNhat;
  // if (soLonNhat < soThuHai) {
  //   soLonNhat = soThuHai;
  // }
  const soLonNhat = soThuNhat > soThuHai ? soThuNhat : soThuHai;
  // đầu ra
  const result =
    "<div class='alert alert-success'>SLN la:" + soLonNhat + "</div>";
  document.querySelector(".ketQua3").innerHTML += result;
};

// toán tử 3 ngôi
// điều kiện ? "đúng":"sai"
/*const today = 2;
if (today === 2) {
  console.log("di hoc");
} else {
  console.log("đi chơi");
}*/

// today === 2 ? console.log("di hoc") : console.log("di choi");

// dạy bé đọc số
const TXT_NUMBER = 3;
if (TXT_NUMBER === 1) {
  console.log("day la so 1");
} else if (TXT_NUMBER === 2) {
  console.log("day la so 2");
} else if (TXT_NUMBER === 3) {
  console.log("day la so 3");
} else {
  console.log("khong biet doc");
}

document.getElementById("tinhTien").onclick = function () {
  const name = document.getElementById("name").value;
  const soLuong = document.getElementById("soLuong").value * 1;
  const donGia = document.getElementById("donGia").value * 1;
  const KM_1 = 0.08;
  const KM_2 = 0.12;

  let soTien = 0;
  if (soLuong >= 50 && soLuong <= 100) {
    soTien = 49 * donGia + (soLuong - 49) * donGia * (1 - KM_1);
  } else if (soLuong > 100) {
    soTien =
      49 * donGia +
      51 * donGia * (1 - KM_1) +
      (soLuong - 100) * donGia * (1 - KM_2);
  } else {
    soTien = soLuong * donGia;
  }

  document.querySelector(".ketQua4").innerHTML += `Mặt hàng: ${name} 
  <br> Số tiền : ${soTien} <br>`;
};

document.getElementById("tinhDiem").onclick = function () {
  // đầu vào
  const hoTen = document.getElementById("hoTen").value;
  const diemToan = document.getElementById("diemToan").value * 1;
  const diemLy = document.getElementById("diemLy").value * 1;
  const diemHoa = document.getElementById("diemHoa").value * 1;
  // xử lý
  const TBC = (diemToan + diemLy + diemHoa) / 3;
  let loai = "";
  if (TBC >= 8.5) {
    loai = "Giỏi";
  } else if (6.5 <= TBC && TBC < 8.5) {
    loai = "Khá";
  } else if (5 <= TBC && TBC < 6.5) {
    loai = "Trung bình";
  } else {
    loai = "Yếu";
  }
  // đầu ra
  // STRING TEMPLATE
  document.getElementById("TBC").innerHTML += `
        Họ tên: ${hoTen} <br> 
        Điểm trung bình:${TBC.toPrecision(3)} <br> 
        Xếp loại: ${loai}`;
};

// cấu trúc điều kiện switch case
let nguoiDung = "chú";
// kiểm tra dữ liệu đang có trong biến người dùng, nếu kiểm tra người dùng là Ba thì thông báo cho phép sử dụng, còn nếu là mẹ hoặc chị thì không cho phép
switch (nguoiDung) {
  case "Ba":
    {
      // case là các trường hợp có thể xảy ra từ biến người dùng
      console.log("cho phép sử dụng máy tính");
    }
    break;
  case "Mẹ":
    {
      console.log("Không cho phép sử dụng");
    }
    break;
  case "chị":
    {
      console.log("Không cho phép sử dụng");
    }
    break;
  // default sẽ xử lý các trường hợp xảy ra khi không thuộc bất kỳ case nào
  default: {
    console.log("who ?");
  }
}

// Một nhà hàng mở quán ăn và yêu cầu viết cho họ 1 chương trình tính số tiền ăn của mỗi khách hàng biết rằng ở đây cung cấp 3 giá trị số người, số tiền, số phần trăm giảm giá. Hãy tính toán với 3 dữ kiện được cung cấp và trả kết quả cho người dùng biết về số tiền thanh toán
// yêu cầu có sử dụng cấu trúc điều kiện switch case
// nếu như số lượng khách đủ 3 người thì sẽ bonus giảm thêm 400k còn nếu đủ 5 người thì sẽ bonus giảm thêm 1 tr
document.getElementById("cost").onclick = function () {
  let soNguoiAn = document.getElementById("soNguoiAn").value * 1;
  let soTienAn2 = document.getElementById("soTienAn2").value * 1;
  let soTienGiamGia = document.getElementById("soTienGiamGia").value * 1;
  let tongTienSauKhiGiamGia = soTienAn2 * (1 - soTienGiamGia / 100);
  let bonus = 0;
  switch (soNguoiAn) {
    case 3:
      bonus = 400000;
      break;
    case 5:
      bonus = 1000000;
      break;
  }
  let ketQuaBaiTap = (tongTienSauKhiGiamGia - bonus) / soNguoiAn;

  document.getElementById("ketQuaBaiTap").innerHTML += `
  <p>Tiền ăn mỗi người sau khi giảm : ${ketQuaBaiTap} </p> 
  `;
};
