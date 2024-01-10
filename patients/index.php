
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
<button><a href="admin.php" class="nav-link text-light bg-info my-1">Back</a></button> 
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

<div class="col-md-4" style="background:#40E0D0">
<form name="" method="POST" action="reg.php" enctype="multipart-form/data">
<label><h3 class="text-dark text-center">Add Doctor</h3></label><br><br>
<div class="form-group">

<input type="text" value="" name="name" class="form-control" placeholder = "Doctor's name" require>
</div>
<div class="form-group">

<input type="text" value="" name="number" class="form-control" placeholder = "Doctor's number" require>
</div>
<div class="form-group">

<input type="text" value="" name="address" class="form-control" placeholder = "Doctor's address" require>
</div>
<div class="form-group">

<input type="text" value="" name="department" class="form-control" placeholder = "Doctor's deparment" require>
</div>
<div class="form-group">

<input type="text" value="" name="email" class="form-control" placeholder = "Doctor's email" require>
</div>
<div class="form-group">

<input type="text" value="" name="password" class="form-control" placeholder = "Doctor's password" require>
</div>
<input class="btn btn-success mb-3" type="submit" value="Insert Doctor" name="submit">


</form>

</div>
</div>
</div>
<footer class=" p-5 text-center text-dark p-3 m-3" style="background:#40E0D0">
    <h2>
      Thanks to you
    </h2>
  </footer>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
	
</body>
</html>
