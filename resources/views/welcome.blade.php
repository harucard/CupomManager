<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
    <nav class="navbar mt-0 navbar-dark bg-danger fixed-top mb-5">
    <span class="navbar-text font-weight-bold text-white ">
   CupomManager
  </span>
</nav>
      <div id="app"></div>
<script src="{{ asset('js/app.js') }}" ></script>
       </div>
    </body>
</html>
