<?php  
$img =$_POST['img'];
$id =$_POST['id'];
$time=$_POST['time'];
$integer=floor($time);
$floor=$time-$integer;
list($type, $data) = explode(',', $img);  
$photo ="./tmp/video1/".$id.'_'.$integer.'_'.$floor.'.jpg';
file_put_contents($photo, base64_decode($data), true);
?>  