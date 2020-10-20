# Auto Typer for 10fastfingers.com
Speed up your typing with this bot 😃

## Bookmarklet Code (for 10ff competitions)
* create a bookmarklet with the following code and click on the bookmarklet on any 10fastfingers competition page

```javascript
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
```

## 10ff Multiplayer
* for 10fastfingers multiplayer, the following code simulates browser action using Puppeteer and will win every race against others
  * https://github.com/jacksonyuanjx/10fastfingers_autotyper/blob/master/multiplayerMock.js
