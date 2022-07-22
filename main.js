// Bài 1
// input: Nhập vào 3 số.
// handle:
// Tạo 3 biến lấy giá trị 3 số vừa nhập.
// Dùng if elseif để so ánh 3 giá trị vừa nhập theo từng trường hợp
// output: in số theo thứ thứ tự bé -> lớn
document.getElementById("b1-handle").onclick = function () {
  // B1 : Tạo biến lấy gái trị từ ip
  let b1NumberInput1 = +document.getElementById("b1NumberInput1").value;
  let b1NumberInput2 = +document.getElementById("b1NumberInput2").value;
  let b1NumberInput3 = +document.getElementById("b1NumberInput3").value;
  let b1Result = document.getElementById("result");

  // B2 : dùng if, elseif check từng case 1.
  if (b1NumberInput1 > b1NumberInput2 && b1NumberInput2 > b1NumberInput3) {
    b1Result.innerHTML =
      b1NumberInput1 + ">" + b1NumberInput2 + ">" + b1NumberInput3;
  } else if (
    b1NumberInput1 > b1NumberInput3 &&
    b1NumberInput3 > b1NumberInput2
  ) {
    b1Result.innerHTML =
      b1NumberInput1 + ">" + b1NumberInput3 + ">" + b1NumberInput2;
  } else if (
    b1NumberInput2 > b1NumberInput1 &&
    b1NumberInput1 > b1NumberInput3
  ) {
    b1Result.innerHTML =
      b1NumberInput2 + ">" + b1NumberInput1 + ">" + b1NumberInput3;
  } else if (
    b1NumberInput2 > b1NumberInput3 &&
    b1NumberInput3 > b1NumberInput1
  ) {
    b1Result.innerHTML =
      b1NumberInput2 + ">" + b1NumberInput3 + ">" + b1NumberInput1;
  } else if (
    b1NumberInput3 > b1NumberInput1 &&
    b1NumberInput1 > b1NumberInput2
  ) {
    // c > a > b
    console.log(b1NumberInput3 + ">" + b1NumberInput1 + ">" + b1NumberInput2);
    b1Result.innerHTML =
      b1NumberInput3 + ">" + b1NumberInput1 + ">" + b1NumberInput2;
  } else if (
    b1NumberInput3 > b1NumberInput2 &&
    b1NumberInput2 > b1NumberInput1
  ) {
    // c > b > a
    b1Result.innerHTML =
      b1NumberInput3 + ">" + b1NumberInput2 + ">" + b1NumberInput1;
  }
};

// ============================================================================
// Bài 2
// input: Chọn thành viên trong select.
// handle:
// Tạo biến lấy giá trị select từ drop down.
// Dùng switch case để check theo từng thành viên
// output: in lời chào + thành viên.
document.getElementById("b2-handle").onclick = function () {
  // b1: chọn thành viên
  let b2ChooseUser = document.getElementById("b2ChooseUser").value;
  let b2Result = document.getElementById("result");
  // b2: check theo case
  switch (b2ChooseUser) {
    case "B":
      b2Result.innerHTML = "Xin chào Bố!";
      break;
    case "M":
      b2Result.innerHTML = "Xin chào Mẹ!";
      break;
    case "A":
      b2Result.innerHTML = "Xin chào Anh trai!";
      break;
    case "E":
      b2Result.innerHTML = "Xin chào Em gái!";
      break;
    default:
      alert("không hop lệ!, xin chọn đúng thành viên");
      break;
  }
};

// ============================================================================
// Bài 3
// input: Nhập vào 3 số.
// handle:
// Tạo 3 biến lấy giá trị 3 số vừa nhập.
// Dùng if check trường hợp số chẳn
// Số lẻ lấy tổng số trừ cho số chẳn
// output: in tổng số chẳn & số lẻ
document.getElementById("b3-handle").onclick = function () {
  let b3NumberInput1 = +document.getElementById("b3NumberInput1").value;
  let b3NumberInput2 = +document.getElementById("b3NumberInput2").value;
  let b3NumberInput3 = +document.getElementById("b3NumberInput3").value;
  let b3Result = document.getElementById("result");
  let myCount = 0;
  if (b3NumberInput1 % 2 === 0) {
    myCount++;
  }

  if (b3NumberInput2 % 2 === 0) {
    myCount++;
  }

  if (b3NumberInput3 % 2 === 0) {
    myCount++;
  }
  b3Result.innerHTML =
    "Có: " + myCount + " Số chẳn " + (3 - myCount) + " Số lẻ";
};

// ============================================================================
// Bài 4
// input: Nhập vào 3 cạnh tam giác
// handle:
// Tạo 3 biến lấy giá trị 3 canh tam giac
// Dùng if check co phải là tam giác
// dùng if, else if check loại tam giác
// output: in loại tan giác

document.getElementById("b4-handle").onclick = function () {
  let b4Edge1 = +document.getElementById("b4Edge1").value;
  let b4Edge2 = +document.getElementById("b4Edge2").value;
  let b4Edge3 = +document.getElementById("b4Edge3").value;
  let b4Result = document.getElementById("result");

  if (
    b4Edge1 < b4Edge2 + b4Edge3 &&
    b4Edge2 < b4Edge1 + b4Edge3 &&
    b4Edge3 < b4Edge2 + b4Edge1
  ) {
    if (b4Edge1 === b4Edge2 && b4Edge1 === b4Edge3 && b4Edge2 === b4Edge3)
      b4Result.innerHTML = "tam giác đều";
    else if (b4Edge1 === b4Edge2 || b4Edge1 === b4Edge3 || b4Edge2 === b4Edge3)
      b4Result.innerHTML = "tam giác cân";
    else if (
      Math.pow(b4Edge3, 2) === Math.pow(b4Edge1, 2) + Math.pow(b4Edge2, 2) ||
      Math.pow(b4Edge2, 2) === Math.pow(b4Edge1, 2) + Math.pow(b4Edge3, 2) ||
      Math.pow(b4Edge1, 2) === Math.pow(b4Edge2, 2) + Math.pow(b4Edge3, 2)
    )
      b4Result.innerHTML = "tam giác vuông";
    else b4Result.innerHTML = "tam giác tù hoặc nhọn";
  } else b4Result.innerHTML = "không đủ điều kiện là 1 tam giác";
};

// ============================================================================
// Bài 5
// input: Nhập vào ngày tháng năm
// handle:
// Tạo 3 biến lấy giá trị 3 ngày tháng năm
// Dùng if elseif check theo từng ngày tháng năm
// output: in ngày hôm trước và ngày mai

document.getElementById("b5-handle2").onclick = function () {
  let b5Day = +document.getElementById("b5Day").value;
  let b5Month = +document.getElementById("b5Month").value;
  let b5Year = +document.getElementById("b5Year").value;
  let b5Result = document.getElementById("result");
  let nextDay = b5Day;
  let nextMonth = b5Month;
  let nextYear = b5Year;

  function dayInMonth(paramMonth, paramYear) {
    switch (paramMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        return 31;
      }
      case 2: {
        return 28;
      }
      case 4:
      case 6:
      case 9:
      case 11: {
        return 30;
      }
    }
  }

  if (
    b5Year > 0 &&
    b5Month > 0 &&
    b5Month < 13 &&
    b5Day > 0 &&
    b5Day <= dayInMonth(b5Month, b5Year)
  ) {
    nextDay = b5Day + 1;
    if (b5Month != 12 && b5Day == dayInMonth(b5Month, b5Year)) {
      nextDay = 1;
      nextMonth = b5Month + 1;
    } else if (b5Month == 12 && b5Day == dayInMonth(b5Month, b5Year)) {
      nextDay = 1;
      nextYear = b5Year + 1;
      nextMonth = 1;
    }
  }
  console.log(nextDay, nextMonth, nextYear);
  b5Result.innerHTML = (nextDay + "/" + nextMonth + "/" + nextYear)
};

document.getElementById("b5-handle").onclick = function () {
  let b5Day = +document.getElementById("b5Day").value;
  let b5Month = +document.getElementById("b5Month").value;
  let b5Year = +document.getElementById("b5Year").value;
  let b5Result = document.getElementById("result");

  let preDay = b5Day - 1;
  let preMonth = b5Month;
  let preYear = b5Year;

  function dayInMonth(paramMonth, paramYear) {
    switch (paramMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        return 31;
      }
      case 2: {
        return 28;
      }
      case 4:
      case 6:
      case 9:
      case 11: {
        return 30;
      }
    }
  }

  if (
    b5Year > 0 &&
    b5Month > 0 &&
    b5Month < 13 &&
    b5Day > 0 &&
    b5Day <= dayInMonth(b5Month, b5Year)
  ) {
    preDay=b5Day-1;
    if(b5Month!=1&&b5Day==1)
    {
      if(b5Month == 2 || b5Month == 4 || b5Month == 6 || b5Month == 8 || b5Month == 9 || b5Month == 11){
        preDay = 31;
        preMonth = b5Month -1;
      }
      if(b5Month == 3){
        preDay = 28;
      }
      if(b5Month == 5 || b5Month == 7 || b5Month == 10 || b5Month == 12){
        preDay = 30;
        preMonth = b5Month - 1;
      }
    }
    else if(b5Month==1&&b5Day==1)
    {
      preDay=31;
      preYear=b5Year - 1;
      preMonth=12;
    }
  }
  b5Result.innerHTML = (preDay + "/" + preMonth + "/" + preYear)
};

// ============================================================================
// Bài 6
// input: Nhập vào tháng năm
// handle:
// Tạo 2 biến lấy giá trị 2 tháng năm
// Dùng switch case check theo từng ngày tháng năm
// dùng if check năm nhuận
// output: in ngày của tháng theo năm

document.getElementById("b6-handle").onclick = function () {
  let b6Month = +document.getElementById("b6Month").value;
  let b6Year = +document.getElementById("b6Year").value;
  let b6Result = document.getElementById("result");
  switch (b6Month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      b6Result.innerHTML = "31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      b6Result.innerHTML = "30 ngày";
      break;
    case 2:
      if ((b6Year % 4 == 0 && b6Year % 100 != 0) || b6Year % 400 == 0) {
        b6Result.innerHTML = "29 ngày";
      }
      b6Result.innerHTML = "28 ngày";
    default:
      break;
  }
};

// ============================================================================
// Bài 7
// input: Nhập vào số nguyên có 3 chữ số
// handle:
// Tạo 1 biến lấy giá trị số nguyên
// Tạo 3 biến lưu hàng đơn vị, hàng chục, hàng trăm
// Dùng switch case check hàng đơn vị, hàng chục, hàng trăm
// Dùng if check trường hợp có chữ lẻ
// output: In ra cách đọc số nguyên

document.getElementById("b7-handle").onclick = function () {
  let b7NumberInput = +document.getElementById("b7Number").value;
  let b7Result = document.getElementById("result");
  let unitNumberInput = b7NumberInput % 10;
  let dozensNumberInput = Math.floor((b7NumberInput / 10) % 10);
  let hundredsNumberInput = Math.floor(b7NumberInput / 100);

  switch (hundredsNumberInput) {
    case 1:
      b7Result.innerHTML += "Một trăm ";
      break;
    case 2:
      b7Result.innerHTML += "Hai trăm ";
      break;
    case 3:
      b7Result.innerHTML += "Ba trăm ";
      break;
    case 4:
      b7Result.innerHTML += "Bốn trăm ";
      break;
    case 5:
      b7Result.innerHTML += "Năm trăm ";
      break;
    case 6:
      b7Result.innerHTML += "Sáu trăm ";
      break;
    case 7:
      b7Result.innerHTML += "Bảy trăm ";
      break;
    case 8:
      b7Result.innerHTML += "Tám trăm ";
      break;
    case 9:
      b7Result.innerHTML += "Chín trăm ";
      break;
  }

  if (dozensNumberInput % 10 === 0 && unitNumberInput !== 0) {
    b7Result.innerHTML += "lẻ";
  }

  switch (dozensNumberInput) {
    case 1:
      b7Result.innerHTML += "Mười ";
      break;
    case 2:
      b7Result.innerHTML += "Hai mươi ";
      break;
    case 3:
      b7Result.innerHTML += "Ba mươi ";
      break;
    case 4:
      b7Result.innerHTML += "Bốn mươi ";
      break;
    case 5:
      b7Result.innerHTML += "Năm mươi ";
      break;
    case 6:
      b7Result.innerHTML += "sáu mươi ";
      break;
    case 7:
      b7Result.innerHTML += "Bảy mươi ";
      break;
    case 8:
      b7Result.innerHTML += "Tám mươi ";
      break;
    case 9:
      b7Result.innerHTML += "Chín mươi ";
      break;
  }

  switch (unitNumberInput) {
    case 1:
      b7Result.innerHTML += "Một ";
      break;
    case 2:
      b7Result.innerHTML += "Hai ";
      break;
    case 3:
      b7Result.innerHTML += "Ba ";
      break;
    case 4:
      b7Result.innerHTML += "Bốn ";
      break;
    case 5:
      b7Result.innerHTML += "Năm ";
      break;
    case 6:
      b7Result.innerHTML += "Sáu ";
      break;
    case 7:
      b7Result.innerHTML += "Bảy ";
      break;
    case 8:
      b7Result.innerHTML += "Tám ";
      break;
    case 9:
      b7Result.innerHTML += "Chín ";
      break;
  }
};
