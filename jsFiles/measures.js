// Create a JavaScript object
function calculate(){
  var fromCollect = document.getElementById("from").options;
  var fromIndex = document.getElementById("from").selectedIndex;
  var startVal = document.getElementById("start").value;
  var toCollect = document.getElementById("to").options;
  var toIndex = document.getElementById("to").selectedIndex;
  var endVal = document.getElementById("result");

  var items = new Object();
  items.convert = function(){
    // before conversion
    if("ounces" == fromCollect[fromIndex].innerHTML){
      this.ounces = startVal;
      this.quarts = startVal * (1/32);
      this.lbs = startVal * (1/16);
      this.l_thigh = "many many ounces";
      this.m_body = "too small to quantify";
    }
    if("quarts" == fromCollect[fromIndex].innerHTML){
      this.ounces = startVal * 32;
      this.quarts = startVal;
      this.lbs = startVal * 16;
      this.l_thigh = "many quarts";
      this.m_body = "too small to quantify";
    }
    if("lbs" == fromCollect[fromIndex].innerHTML){
      this.ounces = startVal * 16;
      this.quarts = startVal * (1/2);
      this.lbs = startVal;
      var thigh_estimate = startVal * (1/25);
      this.l_thigh = "roughly " + thigh_estimate + " thighs";
      this.m_body = "too small to quantify";
    }
    // after conversion
    if("ounces" == toCollect[toIndex].innerHTML)
      endVal.value = this.ounces;
    if("quarts" == toCollect[toIndex].innerHTML)
      endVal.value = this.quarts;
    if("lbs" == toCollect[toIndex].innerHTML)
      endVal.value = this.lbs;
    if("Louie's thigh" == toCollect[toIndex].innerHTML)
      endVal.value = this.l_thigh;
    if("Mer's entire body" == toCollect[toIndex].innerHTML)
      endVal.value = this.m_body;
  }
  items.convert();
}
