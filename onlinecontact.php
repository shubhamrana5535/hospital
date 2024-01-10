<?php
include('config.php');
if(isset($_POST['contact_us'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $massege = $_POST['massege'];


    
    $insert_query="insert into contactus(fname,lname,email,number,massege) values('$fname','$lname','$email','$number','$massege')";
    $result = mysqli_query($conn, $insert_query);
    if($result){
        echo'<script>
        alert("Thanks for contacting with us");
        </script>';
    }
}

?>

<form action="" method="POST" class="mb-2">
<div class = "input-group">  

<input type = "text" class = "form-control" name="fname" placeholder = "First name">  
</div><br>
<div class = "input-group">  

<input type = "text" class = "form-control" name="lname" placeholder = "Last name" require>  
</div><br>
<div class = "input-group">  

<input type = "text" class = "form-control" name="email" placeholder = "your email" require>  
</div><br>
<div class = "input-group">  

<input type = "text" class = "form-control" name="number" placeholder = "your number" require>  
</div><br>
<div class = "input-group">  

<textarea name="massege" id="" cols="30" rows="10"></textarea> 
</div><br>
<div class = "input-group p-1">  

<button class="bg-info"><input type = "submit" class = "form-control bg-info " name="contact_us" value="Submit" > </button>   

</div>
<div class = "input-group p-1">  
    <button class="p-1 btn btn-info"><a href="contact.php" class="p-1 btn btn-danger">Cancel</a></button>
</div>
</form>