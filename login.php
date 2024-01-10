
  <?php
  session_start();
  include 'config.php';

if (isset($_POST["submit"])) {
 
//print_r($_POST);
  
$user = $_POST['username'];
$pwd = $_POST['password'];
 $query ="SELECT * FROM admin WHERE email='$user' && password='$pwd'";


$data = mysqli_query($conn, $query);
$res = mysqli_num_rows($data);
   $row = mysqli_fetch_assoc($data);


 // print_r($row);
  if ($row['email'] === $user && $row['password'] === $pwd ) {
     //echo "Logged in!";

            echo   $_SESSION['email'] = $row['email'];
            echo   $_SESSION['password'] = $row['password'];
                header("Location:admin/admin.php");
    //             echo'<script>
    // alert("login successfully please click on ok");
    // window.open("admin/admin.php");
    // </script>';

                exit();
            
  }else{
      
    echo'<script>
    alert("wrong information");
    window.open("login.php");
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
  <a class = "nav-link text-light" href = "register.php"><b>Register</b> </a>  
  </li>  
  <li class = "nav-item">  
  <a class = "nav-link text-light " href = "about.php"><b> About Us</b></a>  
  </li>  
  </ul>
  </div>
  <div class="container p-5">
      <div class="row">
          <div class="col-md-4"><img src="uploads/ccc9f2f1b12eb9489b67b31c7bb60009.jpg" alt=""></div>
          <div class="col-md-4"></div>



<!-- <div id="id01" class="modal"> -->
  <!-- <form class="modal-content animate" action=" " method="post"> -->
  
  
<div class="col-md-4">
<form class="" action=" " method="post">
  <div class="input-group p-1">
      <label class="form-label mr-2" for="username"><b>Username</b></label><br>
      <input type="text" placeholder="Enter Username" class="form-control" name="username" required>
      </div>
      <div class="input-group p-1">
      <label for="password" class="form-label mr-2" ><b>Password</b></label><br>
      <input type="password" placeholder="Enter Password" class="form-control" name="password" required>
      </div>
      <div class="input-group p-1">
      <button type="submit" class="btn btn-success" name="submit">Login</button><br>
      </div>
      <div class="input-group p-1">
      <button type="cancel" class="btn btn-danger" name="cancel">Cancel</button>
      </div>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
</form>
    </div>
    </div>
    </div>
    

    <footer class="text-light text-center p-5" style="background:#40E0D0"><h1>Thank You</h1></footer>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>


</body>
</html>
