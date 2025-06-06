<?php
header("Content-Type: application/json");

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';

if ($name && $email) {
    echo json_encode([
        "status" => "success",
        "message" => "QR code generated for $name"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid input"
    ]);
}
?>
