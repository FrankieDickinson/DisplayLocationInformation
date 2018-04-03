<?php
    $town = $_GET['q'];
   ini_set('display_errors', 1);

   // create curl resource
   $ch = curl_init(''); 

   curl_setopt($ch, CURLOPT_URL, 'http://maps.googleapis.com/maps/api/geocode/json?address='. $town .'NZ');

   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

   curl_setopt($ch, CURLOPT_HEADER, 0);

   $output = curl_exec($ch);

   if ($output === FALSE){
    echo "cURL error " . curl_error($ch);
   }

   curl_close($ch);

   $result = json_decode($output, true);

   echo $result['results'][0]['geometry']['location']['lat'];
   echo '_';
   echo $result['results'][0]['geometry']['location']['lng'];

?>