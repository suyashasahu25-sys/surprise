$(document).ready(function() {
    
    // Variables
    const envelope = $('#envelope');
    const btnOpen = $('#open');
    const btnReset = $('#reset');
    const letter = $('#clickable-letter');
    const mainScreen = $('#main-screen');
    const questionScreen = $('#question-screen');
    const successScreen = $('#success-screen');
    const btnYes = $('#yes-btn');
    const btnNo = $('#no-btn');
    
    // --- ENVELOPE INTERACTION ---

    btnOpen.click(function() {
        open();
    });
    
    btnReset.click(function() {
        close();
    });

    function open() {
        envelope.removeClass('close').addClass('open');
    }

    function close() {
        envelope.removeClass('open').addClass('close');
    }

    // --- NEW SCREEN INTERACTIONS ---

    // 1. Click Letter -> Show Question Screen
    letter.click(function() {
        // Only allow clicking if the envelope is open
        if(envelope.hasClass('open')){
            mainScreen.fadeOut(500, function() {
                questionScreen.removeClass('hidden').hide().fadeIn(500);
            });
        }
    });

    // 2. Click YES -> Show Success Screen
    btnYes.click(function() {
        questionScreen.fadeOut(500, function() {
            successScreen.removeClass('hidden').hide().fadeIn(500);
        });
    });

    // 3. Click NO -> Popup Alert
    btnNo.click(function() {
        alert("ABSOLUTELY INCORRECT ANSWER. I DO NOT ACCEPT THIS. 😡 DON'T TRY TO PLAY THE FOOL WITH ME NIGGESH.");
    });

});