let clipboard = new ClipboardJS('.colr');

clipboard.on('success', function(e) {
    
     e.trigger.textContent = "Copied";

     let textChange = () => {

        e.trigger.textContent = e.text;
        clearInterval(interval);
     }

     let interval = setInterval(textChange, 1000);

});







  
