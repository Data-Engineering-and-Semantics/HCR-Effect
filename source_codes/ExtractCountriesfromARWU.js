list = document.querySelectorAll("img")
output = []
for(var i = 0; i < list.length; i++) {
         output.push(list[i].title);
       }
output.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }

  return acc;
}, {});
