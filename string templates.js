const name = 'itamar';
const age = 42;
const job = 'developer';
const city = 'kfar saba';
let html;

//Without template strings
html = '<ul><li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
  '</ul>';

  function hello(){
    return 'hello';
  }
//with templare string (es6)
html = `<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30? 'Over 30':'Under 30'}</li>
</ul>'
`;
document.body.innerHTML = html;
