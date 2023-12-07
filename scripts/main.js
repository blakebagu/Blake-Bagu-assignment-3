$(document).ready(function() {
    const answers = [
        "Yes",
        "It is certain.",
        "Without a doubt.",
        "Yes, definitely.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Ask again later.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Very doubtful.",
        "No way.",
        "Maybe.",
        "I'm not sure.",
        "Follow your heart."
    ];

    $('#askButton').click(function() {
        const question = $('#userQuestion').val();
        if (question) {
            shakeEightBall();
            setTimeout(function() {
                const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                $('#answer').text(randomAnswer).hide();
                $('.answerBall').text(randomAnswer).fadeIn();
            }, 1000);
        } else {
            alert("Please ask a question.");
        }
    });

    function shakeEightBall() {
        $('#eightBall').addClass('shake');
        setTimeout(function() {
            $('#eightBall').removeClass('shake');
        }, 1000);
    }
});
