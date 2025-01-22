<?php
// Header für CORS und JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// E-Mail-Konfiguration
$to = "philipp.reiter91@gmail.com"; // Ihre E-Mail-Adresse
$subject = "New Contact Form Submission";

// JSON-Daten auslesen
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input."]);
    exit;
}

// Daten validieren
$name = htmlspecialchars($input['name'] ?? '');
$email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars($input['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required."]);
    exit;
}

// E-Mail-Nachricht formatieren
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message:\n$message\n";

// E-Mail senden
if (mail($to, $subject, $body)) {
    http_response_code(200);
    echo json_encode(["message" => "Email sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email."]);
}