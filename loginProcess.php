<?php


session_start();

require "model/Connection.php";


if (isset($_POST["email"]) && isset($_POST["password"])) {

    $email = $_POST["email"];
    $password = $_POST["password"];

    if (empty($email)) {
        echo "Email nopt found";
    } else if (empty($password)) {
        echo "Password not found";
    } else {

        $resultset = Database::search("SELECT * FROM `user` WHERE `email` ='" . $email . "' AND `password` ='" . $password . "'");
        $row = $resultset->num_rows;
        if ($row > 0) {

            $user = $resultset->fetch_assoc();
            $_SESSION["user"] = $user;
            echo "Scccess";
        } else {
            echo "Invalid credential";
        }
    }
}
