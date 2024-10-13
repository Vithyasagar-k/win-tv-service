<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="{{ asset('/icon/tv-icon.svg') }}" type="image/x-icon" />
    <meta property="og:title" content="TV Service in Chennai" />
    <meta property="og:description" content="Best TV repair services in Chennai." />
    <link rel="canonical" href="{{ url()->current() }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- recaptcha -->
    <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY" async defer></script>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>