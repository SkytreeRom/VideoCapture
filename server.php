<?php  
$img =$_POST['img'];  

list($type, $data) = explode(',', $img);  
  

$photo ="./tmp/video1/".time().rand(1,100).'.jpg';
  

file_put_contents($photo, base64_decode($data), true);  
  

//header('content-type:application/json;charset=utf-8');  
//$ret = array('img'=>$photo);  
//echo json_encode($ret);  
?>  