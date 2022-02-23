// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:

//input: string
//output string


// assign empty array to variable
//access body element
//conditional to check if element contains target class
// if so, push element into array
//for loop thru child nodes
//
//classList method
//return result


var getElementsByClassName = function(className
) {
  var result = [];
  var body = document.body();
  if (body.classList.contains(className)) {
    result.push(body);
  }
  for (var i = 0; i < body.childNodes.length; i++) {
    if (body.childNodes[i].classList.contains(className)) {
      result.push(body.childNodes[i])
    }
    var newResult = getElementsByClassName(body.childNodes[i])
    //join newResult to old result;
    result.concat(newResult);
  }

  return result;
};
