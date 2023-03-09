<?php
    $msg_box = ""; // viestin muuntaja
    $errors = array(); // virheiden kontti
    // tarkistetaan viestien sisältöä
	if($_POST['form_email'] == "")   $errors[] = "Sähköposti <span style='color: #666;'>Sähköpostisi</span> ei ole täytetty.";
    if($_POST['form_name'] == "")    $errors[] = "Nimi <span style='color: #666;'>Nimisi</span> ei ole täytetty.";
    if($_POST['form_message'] == "") $errors[] = "Viesti <span style='color: #666;'>Viestisi</span> ei ole kirjoitettu.";
 
    // jos virheitä ei ole löydetty
    if(empty($errors)){     
        // otetaan tiedot lomakkeesta.
        $message  = "Nimi: " . $_POST['form_name'] . "<br/>";
        $message .= "Sähköposti: " . $_POST['form_email'] . "<br/><br/>";
        $message .= "Viesti: " . $_POST['form_message'];      
        send_mail($message); // lähitetään 
        // viesti onnistuneesta lähettämisestä
        $msg_box = "<span style='color: green;font-size: 1.4em;'>Kiitos viestistasi! <br/> Vastaamme mahdollisimman pian!<br/></span><br/>";

    }else{
        // jos on virhe
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<style>.messages{margin-bottom: 20px;}</style><span style='color: red;font-size: 1.2em;'>$one_error</span><br/>";
        }
    }
 
    // vastataan brouseriin JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // lähettämisen funktio
    function send_mail($message){
        // postiosoitte minne kirje tulee
        $mail_to = "dovnarvladislav@gmail.com"; 
        // 
        $subject = "Liventer Group Oy, vastaus";
         
        // 
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // viestin koodaus
        $headers .= "From: Liventer Group Oy <no-reply@liventer.com>\r\n"; // keneltä viesti
         
        // lähitetään viestiä
        mail($mail_to, $subject, $message, $headers);
    }
     
?>