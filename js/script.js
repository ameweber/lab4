"use strict"

document.getElementById("submit").addEventListener("click", addText);

function addText() {
    let textarea = document.querySelector("#textarea").value;
    let fontText = document.querySelector("#fontText").value;
    let fontSize = document.querySelector("#fontSize").value;
    let fontWeight = document.querySelector("#fontWeight").value;
    let textAlign = document.querySelector(".textAlign:checked").value;
    let colorChange = document.querySelector(".colorChange:checked").value;

    let finalText = ` <div style="font-family: `+ fontText+`; font-size: `+fontSize+`px; font-weight: `+fontWeight+`" class="`+ textAlign +` `+ colorChange + ` resultItem container customShadow">`
        + (textarea ? textarea : '') + `</div>
        </div>`;
    document.querySelector('#finalText').innerHTML += finalText;


}