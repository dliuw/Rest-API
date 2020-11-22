<?php
// $personal = [
//   [
//     "nama" => "David Liuw",
//     "umur" => 22,
//     "pekerjaan" => "Web Developer"
//   ],
//   [
//     "nama" => "Jonathan Liuw",
//     "umur" => 22,
//     "pekerjaan" => "Mahasiswa"
//   ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=db_smkklabat', 'root', '');
$db = $dbh->prepare('SELECT * FROM tbl_user');
$db->execute();

$personal = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($personal);

var_dump($data);
