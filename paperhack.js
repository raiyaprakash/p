console.log(document.querySelector('td.unselectable>span.Mytd.unselectable').innerText + '\n\n' + document.querySelector('#response_text_display').innerText);

document.getElementById("next").addEventListener("click", function () {
    setTimeout(function () {
        console.log(document.querySelector("td.unselectable>span.Mytd.unselectable").innerText + '\n\n' + document.querySelector("#response_text_display").innerText), console.log(document.querySelector("td.unselectable>span.Mytd.unselectable").innerText.replace(/[^\u0000-\u007F]/g, '') + '\n\n' + document.querySelector("#response_text_display").innerText.replace(/[^\u0000-\u007F]/g, ''))
    }, 1e3)
});
document.body.style.zoom = "80%";






console.log(document.querySelector('td.unselectable>span.Mytd.unselectable').innerText);

console.log(document.querySelector('#response_text_display').innerText);

document.body.style.zoom = "80%";

document.getElementById("next").addEventListener("click", function () {
    setTimeout(function () {
	console.log(document.querySelector("td.unselectable>span.Mytd.unselectable").innerText), console.log(document.querySelector("#response_text_display").innerText),console.log(document.querySelector("td.unselectable>span.Mytd.unselectable").innerText.replace(/[^\u0000-\u007F]/g, '')), console.log(document.querySelector("#response_text_display").innerText.replace(/[^\u0000-\u007F]/g, ''))
    }, 2e3)
});



document.getElementById("next").addEventListener("click", function () {
    setTimeout(function () {
        console.log(document.querySelector("td.unselectable>span.Mytd.unselectable").innerText.replace(/[^\u0000-\u007F]/g, '')), console.log(document.querySelector("#response_text_display").innerText.replace(/[^\u0000-\u007F]/g, ''))
    }, 1e3)
});


var k=document.querySelector('td.unselectable>span.Mytd.unselectable').innerText+ '\n'+document.querySelector('#response_text_display').innerText;

string = k.replace(/[^\u0000-\u007F]/g, '');

console.log(string);