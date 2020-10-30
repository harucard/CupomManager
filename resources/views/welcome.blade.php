<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>CupomManager</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
      
    </head>
    <body>
    <nav class="navbar mt-0 navbar-dark bg-danger fixed-top mb-5">
    <span class="navbar-text font-weight-bold text-white ">
   CupomManager
  </span>
</nav>
      <div id="app" style=" width: 100vw;
        height: 100vh;         
        display: flex;
        flex-direction: row;
        justify-content: center;         
        align-items: center
"></div>
<p>challenge-02</p>
<script src="{{ asset('js/app.js') }}" ></script>
       </div>
    </body>
</html>
