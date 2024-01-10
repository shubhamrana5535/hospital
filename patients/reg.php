<?php
include'config.php';
if(isset($_POST['submit'])){
	echo"<pre>";
	print_r($_POST);
	echo"</pre>";
	
	$name = $_POST['name'];
	$number = $_POST['number'];
	$address = $_POST['address'];
	$department = $_POST['department'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	

	
	$sql = "INSERT INTO doctor(name,number,address,department,email,password)
			VALUES('".$name."','".$number."','".$address."','".$department."','".$email."','".$password."')";
			
			if($conn->query($sql)===TRUE){
				
				?>
				
				<?php
				header("location:index.php");
				
			}else{
				echo"error:".$sql."<br>".$conn->error;
			}
			$conn->close();
}

?>
