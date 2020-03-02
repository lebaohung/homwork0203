// Viết hàm đầu vào là một năm, trả lại thế kỷ của nó.
// Thế kỷ thứ nhất kéo dài từ năm 1 đến năm 100,
// năm thứ hai - từ năm 101 đến và kể cả năm 200,

function searchCentury(year) {
    if (year % 100 === 0) return "The ky " + year /100;
    else return "The ky " + (parseInt(year/100) + 1);
}