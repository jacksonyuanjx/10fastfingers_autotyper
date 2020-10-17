// Not working yet...

javascript: ((e, s) => {
    e.src = s; e.onload = () => {
        jQuery.noConflict(); console.log('jQuery injected')
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');

const words = Array.from(document.querySelectorAll(".place span")).map(e => e.innerText);

let idx = 0;
let startTyping = () => {
    jQuery("input").val(words[idx]);
    const keyup = jQuery.Event("keyup");
    keyup.which = 32;
    jQuery("input").trigger(keyup);
    idx++;
    setTimeout("startTyping()", 1);
};
startTyping();