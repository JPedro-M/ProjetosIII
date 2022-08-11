<?php
    session_start();

    require_once 'db_connect.php';

    function clear($input) {
        global $connect;
        $var = mysqli_escape_string($connect, $input);
        $var = htmlspecialchars($var);
        return $var;
    }