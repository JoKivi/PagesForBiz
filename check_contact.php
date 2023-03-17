<?php
session_start();
unset($_SESSION['user_name']);
unset($_SESSION['email']);
unset($_SESSION['subject']);
unset($_SESSION['message']);
unset($_SESSION['error_name']);
unset($_SESSION['error_from']);
unset($_SESSION['error_subject']);

$user_name = htmlspecialchars(trim($_POST['user_name']));
$from = htmlspecialchars(trim($_POST['email']));
$subject = htmlspecialchars(trim($_POST['subject']));
$message = htmlspecialchars(trim($_POST['message']));

function redirect()
{
    header('Location: /contact.php');
    exit;
}
;

$_SESSION['user_name'] = $user_name;
$_SESSION['email'] = $from;
$_SESSION['subject'] = $subject;
$_SESSION['message'] = $message;

if (strlen($user_name) < 2) {
    $_SESSION['error_name'] = 'Anna oikea nimi...';
    redirect();
} else if (strlen($from) < 5 || strpos($from, '@') == false || strpos($from, '.') == false) {
    $_SESSION['error_from'] = 'Kirjoita oikea sähköpostiosoite...';
    redirect();
} else if (strlen($subject) < 3) {
    $_SESSION['error_subject'] = 'Aihe on liian lyhyt...';
    redirect();
} else {
    $to = 'samppa@liventer.fi';
    $headers = 'From: ' . $from . "\r\n" .
        'Reply-To: ' . $from . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        $_SESSION['succees'] = 'Kiitos yhteydenotosta!<br> Vastaamme mahdollisimman pian.';
        header('Location: /success.php');
        exit;
    } else {
        $_SESSION['succees'] = 'SMTP palvelussa on virhe, ota yhteyttä soittamalla!';
        header('Location: /success.php');
        exit;
    }
    ;
}
?>