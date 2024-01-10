
<?php
include 'config.php';
session_start();
// print_r($_SESSION);

// if(empty($_SESSION)){

// 	header("Location:login.php");
// }
// echo "string";
// echo $user = $_SESSION['email'];
  $sql = "SELECT * FROM doctor";
  $result = mysqli_query($conn, $sql);

 
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
<button><a href="/hospital/index.php/.." class="nav-link text-light bg-info my-1">Logout</a></button> 
</li>  
</ul>
</div>
<table border="10" class="table table-boder p-5">
<thead class="text-white" style="background:#7D3C98">
<tr>
	<th>Id</th><th>Name</th><th>Number</th><th>Address</th><th>Department</th><th>Email</th><th>Password</th>
</tr>
</thead>

     <?php
           

             while($row=  mysqli_fetch_array($result)){
             
                 ?>
				 <tbody class="text-white" style="background:#FFA07A">
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['number']; ?></td>
                <td><?php echo $row['address']; ?></td>
                <td><?php echo $row['department']; ?></td>
                <td><?php echo $row['email']; ?></td>
                <td><?php echo $row['password'] ;?></td>
                
               
              <!-- <td> <a class="btn btn-success text-white" href="update.php?id<?php echo $row["id"]; ?>">Update</a></td> -->
                
               <!-- <td><a class="btn btn-danger text-white" href="delete.php?id=<?php echo $row["id"]; ?>">Delete</a> </td> -->
               
            </tr>
			</tbody>
            <?php
       }
             
             ?>
             </table>
            </div>
    <footer class="text-light text-center p-5" style="background:#40E0D0"><h1>Thank You</h1></footer>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" ></script>
</body>
</html>