<?php

 header('Content-Type: application/json');

 include "secondoDatabase.php";

 echo json_encode($graphs);
