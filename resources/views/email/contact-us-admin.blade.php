<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New User Registration</title>
</head>
<body>
    <h1>New User Registration</h1>
    <p>A new user has registered with the following details:</p>
    <ul>
        <li>Name: {{ $data['name'] }}</li>
        <li>Mobile Number: {{ $data['mobil_number'] }}</li>
        <li>Email Address: {{ $data['email_address'] }}</li>
    </ul>
</body>
</html>