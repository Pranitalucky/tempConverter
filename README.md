<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="tempcalc" onsubmit="calctemp(); return false">
    <label for="temp">Please enter the temperature you want to convert.</label><br/>
    <input type="number" id="usertemp" name="usertemp">
    <select name="userscale" id="userscale">
        <option value="cel">Celcious</option>
        <option value="fah">Fahrenhit</option>
    </select> <br/>
    <input type="submit" name="temp"><br/><br/>
    <span id="resultcontainer"></span>

    </form>
    <script src="script.js"></script>
</body>
</html>
