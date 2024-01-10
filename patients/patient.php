<?php
include('config.php');
if(isset($_POST['insert_patient'])){
    $paname = $_POST['paname'];
    $number = $_POST['number'];
    $address = $_POST['address'];
    $department = $_POST['department'];
    $refernce = $_POST['refernce'];

$sql = "INSERT INTO patient(paname,number,address,department,refernce)
			VALUES('".$paname."','".$number."','".$address."','".$department."','".$refernce."')";
			
			if($conn->query($sql)===TRUE){
				echo'<script>
         alert("Inserted succesfully");
         window.open("patient.php");
         </script>';
				
				//header("location:patient.php");
				
			}else{
				echo"error:".$sql."<br>".$conn->error;
			}
			$conn->close();
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
<li class = "nav-item p-2">  
<button><a href="../admin.php" class="nav-link text-light bg-info my-1">Back</a></button> 
</li>  

<li class = "nav-item p-2">  
<button><a href="../index.php" class="nav-link text-light bg-info my-1">Logout</a></button> 
</li>  
</ul>
</div>
<div class="container p-5">
    <div class="row">
        <div class="col-md-4"><img src="uploads/ccc9f2f1b12eb9489b67b31c7bb60009.jpg" alt=""></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"><form action="" method="POST" class="mb-2">
<div class = "input-group">
<input type = "text" class = "form-control" name="paname" value="" placeholder = "Patient's name">  
</div><br>
<div class = "input-group">
<input type = "text" class = "form-control" name="number" value="" placeholder = "Patient's number">  
</div><br>
<div class = "input-group">
<input type = "text" class = "form-control" name="address" value="" placeholder = "Patient's address">  
</div><br>
<div class = "input-group">
<input type = "text" class = "form-control" name="department" value="" placeholder = "Patient's departmanet">  
</div><br>
<div class = "input-group">
<input type = "text" class = "form-control" name="refernce" value="" placeholder = "Which docter referd you">  
</div><br>
<div class = "input-group p-1"> 

<button class="bg-info"><input type = "submit" class = "form-control bg-info " name="insert_patient" value="Insert Patients" class="">  </button>
</div>
</form></div>
    </div>
</div>
<footer class="text-light text-center p-5" style="background:#40E0D0"><h1>Thank You</h1></footer>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
</body>
</html>