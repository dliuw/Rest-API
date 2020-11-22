<?php
$data = file_get_contents('test.json');
$personal = json_decode($data, true);

var_dump($personal);
