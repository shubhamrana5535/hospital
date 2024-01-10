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
  
      
        <img src="uploads/6c76d08350f15d632b791d48b069b242.jpg" width="10%" height="8%" alt="">
     
            
       
                <h2 class="nav-link text-white text-center">Welcome Guest</h2>
            
    </div>
    </nav>
    <div class="bg-light text-center p-3"><h2>Manage Details</h2></div>
    <div class="row">
        <div class="col-md-12 bg-secondary p-2 d-flex align-items-center">
            <div class="px-5">
                <a href=""><img src="../uploads/images.jpg" width="100px" height="100px" alt=""></a>
                <p class="text-light text-center">Admin Name</p>
            </div>
            <div class="button text-center ">
                <button class="my-2"><a href="doctors.php" class="nav-link text-light bg-info my-1">Insert Doctors</a></button>
                <button><a href="" class="nav-link text-light bg-info my-1">View Products</a></button>
                <button><a href="patient.php" class="nav-link text-light bg-info my-1">Insert Patient</a></button>
                <button><a href="" class="nav-link text-light bg-info my-1">View Catagories</a></button>
                <button><a href="" class="nav-link text-light bg-info my-1">Logout</a></button>
            </div>
        </div>
    </div>
    </div>
   <div class="container m-5">
    <?php
    if(isset($_GET['insert_cat'])){
        include'InsertCat.php';
    }
    if(isset($_GET['insert_brands'])){
        include'insert_brands.php';
    }
    ?>
   </div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
</body>
</html>