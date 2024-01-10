<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hospital</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" >
   <link  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css">
    <link  rel="stylesheet" href="style.css">
</head>
<body style="background:#808080" >
<div class="conainter-fluid" style="background:#40E0D0">

<nav class = "navbar  navbar-expand-sm navbar-center  ">  
  <img src="uploads/6c76d08350f15d632b791d48b069b242.jpg" width="10%" height="8%" alt="">
<ul class ="navbar-nav">  
<li class = "nav-item">  
<a class = "nav-link text-light" href = "index.php"><b>Home</b> </a>  
</li>  


<li class = "nav-item">  
<a class = "nav-link text-light" href = "register.php"><b>Register</b></a>  
</li>  

<li class = "nav-item">  
<a class = "nav-link text-light " href = "about.php"><b> About Us</b></a>  
</li>  
</ul>
</div>
<div class="container p-5">
    <div class="row">
        <div class="col-md-3 text-white"><h5>General Information</h5> 
                       <p>5200 Harry Hines Blvd.</p> 
                       <p>Dallas, Texas 75235</p> 
                       <p> 214-590-8000</p>

                        <h5>Get Directions</h5> 

                        <p>General questions? Compliments?</p> 
                        <p>Please send us compliments and general questions by contacting us online.</p> 
                        <p>To find someone in the hospital, please call the general information line at 214-590-8000.</p>
                        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
            <ul class="navbar-nav m-auto">
            <li class="nav-item bg-info">
                <a href="contact.php?contact_us" class="nav-link text-white text-center"><h4>Contact us Online</h4></a>
            </li><br>
            
            <?php
    if(isset($_GET['contact_us'])){
        include'onlinecontact.php';
    }
    ?><br>
    <img src="uploads/debbde29e8bfdc61bc072353060c94ee.jpg" alt="">
        </div>
    </div>
</div>
<footer class="text-light text-center p-5" style="background:#40E0D0"><h1>Thank You</h1></footer>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
</body>
</html