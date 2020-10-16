// Load jQuery
javascript: ((e, s) => {
    e.src = s; e.onload = () => {
        jQuery.noConflict(); console.log('jQuery injected')
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');

let idx = 0;
const startTyping = () => {
    $("#inputfield").val(words[idx]);
    const keyup = $.Event("keyup");
    keyup.which = 32;
    $("#inputfield").trigger(keyup);
    idx++;
    setTimeout("startTyping()", 1);
};
startTyping();

// Types all words immediately but lowers the score...
// words.forEach(w => {
//     $("#inputfield").val(w);
//     const keyup = $.Event("keyup");
//     keyup.which = 32;
//     $("#inputfield").trigger(keyup);
// });

// `words` array is already declared
// const words = Array.from(document.querySelectorAll("#row1 span")).map(e => e.innerText);
