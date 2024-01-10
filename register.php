<?php
include('config.php');
if(isset($_POST['insert_patient'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $insert_query=  "insert into admin(email,password) values('$email','$password')";
    $result = mysqli_query($conn, $insert_query);
    if($result){
        echo'<script>
        alert("Inserted succesfully");
        </script>';
    }
}

?>



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
<a class = "nav-link text-light" href = "contact.php"><b>Contact Us </b></a>  
</li>  

<li class = "nav-item">  
<a class = "nav-link text-light " href = "about.php"><b> About Us</b></a>  
</li>  
</ul>
</div><br></br>
<div class="container bg-light p-5">
    <div class="row">
        <div class="col-md-4"><img src="uploads/ccc9f2f1b12eb9489b67b31c7bb60009.jpg" alt=""></div>
        <div class="col-md-4"></div>
        <div class="col-md-4 bg-warning p-3"><form action="" method="POST" class="mb-2">
<div class = "input-group">
<input type = "text" class = "form-control" name="email" value="" placeholder = "Enter Email" require>  
</div><br>
<div class = "input-group">
<input type = "text" class = "form-control" name="password" value="" placeholder = "Enter Password" require>  
</div><br>

<div class = "input-group p-1"> 

<button class="bg-info"><input type = "submit" class = "form-control bg-info " name="insert_patient" value="Register" class="">  </button>
</div><p>Already have an account?</p>
<div class = "input-group p-1"> 

<a href="login.php" class="btn btn-success">Login Here</a>
</form></div>
    </div>
</div>
</div>
<br></br>
<footer class="text-light text-center p-5" style="background:#40E0D0"><h1>Thank You</h1></footer>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
</body>
</html>