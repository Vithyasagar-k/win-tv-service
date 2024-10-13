<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Confirmation</title>
</head>
<body>
    <h1>Welcome, {{ $data['name'] }}!</h1>
    <p>Your registration is successful! Here are your details:</p>
    <ul>
        <li>Name: {{ $data['name'] }}</li>
        <li>Mobile Number: {{ $data['mobil_number'] }}</li>
        <li>Email Address: {{ $data['email_address'] }}</li>
    </ul>
</body>
</html>