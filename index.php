<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var onSubmit = function(token) {
            console.log('success!');
        };

        var onloadCallback = function() {
            grecaptcha.render('submit', {
                'sitekey': 'your_site_key',
                'callback': onSubmit
            });
        };
    </script>
</head>

<body>
    <style>
        .addBlock {
            display: none;
        }
    </style>

    <!-- <input type="color" id="color">
	<button id="change">change</button> -->



    <button id="new">New</button>


    <div class="addBlock">
        <div>
            <input type="text" id="name">
        </div><br>

        <div>
            <input type="text" id="surname">
        </div><br>

        <div>
            <input type="text" id="age">
        </div><br>
        <input id='submit' type="submit" value="Submit"><br>
        <button id="add">Add</button>
    </div>
    <form action="?" method="POST"></form>




    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer>
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/script.js"></script>

</body>

</html>