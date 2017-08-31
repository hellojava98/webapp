<?php
// 二维数组：
$data=array
  (
    "data"=>array
    (
        "slide"=>array
        (
            array
            (
            "name"=>"天天樱桃节",
            "url"=>"./public/images/banner1.jpg"
            ),
            array
            (
            "name"=>"囤货季",
            "url"=>"./public/images/banner2.jpg"
            ),
            array
            (
            "name"=>"买手机",
            "url"=>"./public/images/banner3.jpg"
            )
        )
    ),
    "menu"=>"none"
  );

echo json_encode($data);
?>










