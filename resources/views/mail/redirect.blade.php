<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="">
    <title>Bufflike</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
        a {
            text-decoration: none;
        }
        html {
            display: grid;
            min-height: 100%;
        }
        .feedback {
            display: grid;
            overflow: hidden;
            font-family: "Lato", sans-serif;
            text-transform: uppercase;
            text-align: center;
        }
        .my-container h1 {
            font-size: 20px;
            margin-top: 20px;
        }
        .my-container {
            position: relative;
            margin: auto;
            overflow: hidden;
            width: 700px;
            height: 500px;
        }
        #success-box {
            position: absolute;
            width: 70%;
            height: 100%;
            left: 12%;
            background: linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%);
            border-radius: 20px;
            box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
            perspective: 40px;
        }
        .my-container h3 {
            font-size: 0.9em;
            font-weight: 100;
            letter-spacing: 3px;
            padding-top: 10px;
            color: #fcfcfc;
            padding-bottom: 5px;
            text-transform: uppercase;
        }
        #error-box h3 {
            color: #e96075;
        }
        #error-box .button-box:hover h3 {
            color: #fcfcfc;
        }
        #error-box h1 {
            color: #e96075;
        }
        .green {
            color: #4ec07d;
        }
        .red {
            color: #e96075;
        }
        .alert {
            font-weight: 700;
            letter-spacing: 5px;
            font-size: 32px;
        }
        .my-container p {
            margin-top: -5px;
            font-size: 16px;
            font-weight: 100;
            color: #5e5e5e;
            letter-spacing: 1px;
        }
        button,
        .dot {
            cursor: pointer;
        }
        #error-box {
            position: absolute;
            height: 100%;
            right: 12%;
            background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
            border-radius: 20px;
            box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
            width: 70%;
            box-shadow: 5px 5px 20px rgba(203, 205, 211, 10);
            perspective: 40px;
        }
        #error-box .button-box:hover {
            background-color: #e96075;
        }
        #error-box .button-box:hover h1 {
            color: #fcfcfc;
        }
        .face {
            position: absolute;
            width: 22%;
            height: 22%;
            background: #fcfcfc;
            border-radius: 50%;
            border: 1px solid #777;
            top: 21%;
            left: 37.5%;
            z-index: 2;
            animation: bounce 1s ease-in infinite;
        }
        .face2 {
            position: absolute;
            width: 22%;
            height: 22%;
            background: #fcfcfc;
            border-radius: 50%;
            border: 1px solid #777;
            top: 21%;
            left: 37.5%;
            z-index: 2;
            animation: roll 3s ease-in-out infinite;
        }
        .eye {
            position: absolute;
            width: 5px;
            height: 5px;
            background: #777;
            border-radius: 50%;
            top: 40%;
            left: 20%;
        }
        .right {
            left: 68%;
        }
        .mouth {
            position: absolute;
            top: 43%;
            left: 41%;
            width: 7px;
            height: 7px;
            border-radius: 50%;
        }
        .happy {
            border: 2px solid;
            border-color: transparent #777 #777 transparent;
            transform: rotate(45deg);
        }
        .sad {
            top: 49%;
            border: 2px solid;
            border-color: #777 transparent transparent #777;
            transform: rotate(45deg);
        }
        .shadow {
            position: absolute;
            width: 21%;
            height: 3%;
            opacity: 0.5;
            background: #777;
            left: 40%;
            top: 43%;
            border-radius: 50%;
            z-index: 1;
        }
        .scale {
            animation: scale 1s ease-in infinite;
        }
        .move {
            animation: move 3s ease-in-out infinite;
        }
        .message {
            position: absolute;
            width: 100%;
            text-align: center;
            height: 40%;
            top: 47%;
        }
        .button-box {
            position: absolute;
            background: #fcfcfc;
            width: 45%;
            height: 12%;
            border-radius: 20px;
            top: 75%;
            left: 50%;
            transform: translateX(-50%);
            outline: 0;
            border: none;
            box-shadow: 2px 2px 10px rgba(119, 119, 119, 0.5);
            transition: all 0.5s ease-in-out;
        }
        .button-box:hover {
            background: #4ec07d;
            transition: all 0.3s ease-in-out;
        }
        .button-box:hover h1 {
            color: #fcfcfc;
        }
        @keyframes bounce {
            50% {
                transform: translateY(-10px);
            }
        }
        @keyframes scale {
            50% {
                transform: scale(0.9);
            }
        }
        @keyframes roll {
            0% {
                transform: rotate(0deg);
                left: 25%;
            }
            50% {
                left: 60%;
                transform: rotate(168deg);
            }
            100% {
                transform: rotate(0deg);
                left: 25%;
            }
        }
        @keyframes move {
            0% {
                left: 25%;
            }
            50% {
                left: 60%;
            }
            100% {
                left: 25%;
            }
        }
        footer {
            position: absolute;
            bottom: 0;
            right: 0;
            text-align: center;
            font-size: 1em;
            text-transform: uppercase;
            padding: 10px;
            font-family: "Lato", sans-serif;
        }
        footer p {
            color: #ef8d9c;
            letter-spacing: 2px;
        }
        footer a {
            color: #b0db7d;
            text-decoration: none;
        }
        footer a:hover {
            color: #ffc39e;
        }
        @media(max-width: 480px) {
            .my-container {
                width: 90%;
                height: 420px;
            }
            #success-box {
                width: 100%;
                left: 0;
            }
            .my-container p {
                font-size: 14px;
            }
            .button-box {
                top: 80%;
            }
            #error-box {
                width: 100%;
                right: 0;
            }
            .my-container h3 {
                margin-top: 5px;
            }
            .my-container .button-box h1 {
                font-size: 16px;
                margin-top: 15px;
            }
        }
        .verified {
            height: 95vh;
            background: #000000;
            text-align: center;
            color: #E0E0E0;
            font-family: 'Fira Mono', monospace;
        }
        .verified h1 {
            font-size: 2.5rem;
            font-family: 'Permanent Marker', cursive;
        }
        .verified div {
            transform-style: preserve-3d;
        }
        .verified svg {
            width: clamp(300px, 70%, 600px);
            height: 500px;
        }
        #rocket {
            transform: translateY(750px);
            animation: launch 2s ease-out forwards;
        }
        @keyframes launch {
            from {
                transform: translateY(750px);
            }
            to {
                perspective: 500px;
                transform: translateY(0px);
            }
        }
        #stars {
            animation: twinkling 2s linear;
        }
        @keyframes twinkling {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1);
            }
        }
        .text {
            opacity: 0;
            animation: appear 1s ease-in forwards;
            animation-delay: 1.8s;
        }
        @keyframes appear {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .verified a {
            color: #F66947;
            text-decoration: none;
        }
    </style>
    <link rel="stylesheet" href="mycss/style.css">
    </link>
</head>

<body>
    @yield('content')
</body>

</html>