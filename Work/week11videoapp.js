
////////////////////////Video1/////////////////////////////////////////

console.log($('body'));// This is the first video test.

let p=$('#test');
let div= $('.my-class');
let ul = $('ul');

console.log(p);
console.log(div);
console.log(ul);
//these will highlight the element if done properly//


//////////////////////////////Video 2/////////////////////////////////////Clear JS Above
console.log(p.text());
p.text('New Text')

$('input').val('New Value');
this changed Hello world to New text and input New Value in the text box

$('input').attr('placeholder','Placeholder Text');

div.prepend('<p>prepended paragrpah</p>');
div.append('<p> appended paragrpah</p>');
div.before('<p>paragraph that was added before the div</p>');
div.after('<p>paragraph that was added berfore the div</p>');

div.empty();
ul.remove();

$('input').hide();//hide element
setTimeout(()=>$('input').show(),2000);//delay showing by 2 seconds or 2000 milaseconds.

//////////////////////////////Video 3////////////////////////////////////////////Clear JS Above

$.get('https://reqres.in/api/users/2',(data)=>console.log(data));//Mock API for testing
$.post('https://reqres.in/api/users', {
    name:'Tommy',
    job: 'Front End Software Developer'
}, (data)=> console.log(data));