var calc_field = document.getElementById("calc_field");
var hold_number;
var mode;
var length;

// Buttons: Numbers
//

document.getElementById('calc_zero').onclick = x => {
  calc_field.value += "0";
};

document.getElementById('calc_one').onclick = x => {
  calc_field.value += "1";
};

document.getElementById('calc_two').onclick = x => {
  calc_field.value += "2";
};

document.getElementById('calc_three').onclick = x => {
  calc_field.value += "3";
};

document.getElementById('calc_four').onclick = x => {
  calc_field.value += "4";
};

document.getElementById('calc_five').onclick = x => {
  calc_field.value += "5";
};

document.getElementById('calc_six').onclick = x => {
  calc_field.value += "6";
};

document.getElementById('calc_seven').onclick = x => {
  calc_field.value += "7";
};

document.getElementById('calc_eight').onclick = x => {
  calc_field.value += "8";
};

document.getElementById('calc_nine').onclick = x => {
  calc_field.value += "9";
};

// Buttons: Operations
//

document.getElementById('calc_plus').onclick = x => {
  hold_number = calc_field.value;
  calc_field.value += "+";
  length = calc_field.value.length;
  mode = 0;
};

document.getElementById('calc_minus').onclick = x => {
  hold_number = calc_field.value;
  calc_field.value += "-";
  length = calc_field.value.length;
  mode = 1;
};

document.getElementById('calc_multiply').onclick = x => {
  hold_number = calc_field.value;
  calc_field.value += "*";
  length = calc_field.value.length;
  mode = 2;
};

document.getElementById('calc_divide').onclick = x => {
  hold_number = calc_field.value;
  calc_field.value += "÷";
  length = calc_field.value.length;
  mode = 3;
};

document.getElementById('calc_ac').onclick = x => {
  calc_field.value = "";
  hold_number = "";
};

document.getElementById('calc_delete').onclick = x => {
  calc_field.value = calc_field.value.slice(0, -1);
};

document.getElementById('calc_decimal').onclick = x => {
  calc_field.value += ".";
};

document.getElementById('calc_equal').onclick = x => {
  var result = 0;
  switch(mode){
    case 0:
      result = parseFloat(hold_number) + parseFloat(calc_field.value.slice(length));
      break;
    case 1:
      result = parseFloat(hold_number) - parseFloat(calc_field.value.slice(length));
      break;
    case 2:
      result = parseFloat(hold_number) * parseFloat(calc_field.value.slice(length));
      break;
    case 3:
      result = parseFloat(hold_number) / parseFloat(calc_field.value.slice(length));
      break;
    default:
      break;
  }
  calc_field.value = result;
};
