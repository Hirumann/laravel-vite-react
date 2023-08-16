<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Силушка - Фитнес-клуб в Севастополе</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
		
		@viteReactRefresh
		@vite('resources/js/index.jsx')
    </head>
    <body class="antialiased bg-gray-950 text-gray-100">
		<div id="root"></div>
    </body>
</html>
