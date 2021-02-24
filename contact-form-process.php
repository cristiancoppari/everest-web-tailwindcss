<?php
if (isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "homes@everestandorra.com";
    $email_to_test = "cristian.coppari@gmail.com";
    $email_subject = "Nuevo contacto de Everest Andorra";

    function problem($error)
    {
        echo "Disculpas, pero hubo algún / algunos errores al completar el formulario. ";
        echo "Estos errores aparecen aquí: <br><br>";
        echo $error . "<br><br>";
        echo "Por favor intente denuevo arreglando estos errores.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['last-name']) ||
        !isset($_POST['email'])
    ) {
        problem('Disculpas, pero parece haber un error al querer enviar el formulario (campos).');
    }

    $name = $_POST['name']; // required
    $lastName = $_POST['last-name']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'El email parece invalido. Por favor ingresa un email correcto.<br>';
    }

    // $string_exp = "/^[A-Za-z .'-]+$/";

    if (strlen($name) < 2) {
        $error_message .= 'El nombre que ingresaste no parece válido. Por favor ingresa uno válido.<br>';
    }

    if (strlen($lastName) < 2) {
        $error_message .= 'El apellido que ingresaste no parece válido. Por favor ingresa uno válido.<br>';
    }

    if (strlen($phone) < 2) {
        $error_message .= 'Por favor ingresa un número de teléfono válido.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Por favor ingresa un mensaje válido.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Detalles del formulario a continuación: \n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Nombre: " . clean_string($name) . "\n";
    $email_message .= "Apellido: " . clean_string($lastName) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Teléfono: " . clean_string($phone) . "\n";
    $email_message .= "Mensaje: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to_test, $email_subject, $email_message, $headers);
}

    Gracias por contactarse con nosotros. Un miembro de nuestro equipo se contactará con usted a la brevedad.

/* header("Location: https://google.com/");
die(); */

?>