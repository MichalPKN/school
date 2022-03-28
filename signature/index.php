<?php
$publicK = openssl_get_publickey(file_get_contents("http://payway.bubileg.cz/data/keys/payway-public-key.pub"));
date_default_timezone_set("Europe/Prague");
$postdata = array("merchantId" => "65c9d812", "dttm" => date("YmdHis"), "signature" => "");
$signaturedata = $postdata["merchantId"] . "|" . $postdata["dttm"];
openssl_sign($signaturedata, $signature, openssl_get_privatekey(file_get_contents("65c9d812-private-key.key")));
$postdata["signature"] = base64_encode($signature);

echo "sending data to payway, signed with private key: ";
var_dump($postdata);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "http://payway.bubileg.cz/api/echo");
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($postdata, JSON_UNESCAPED_UNICODE));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo "<br>data recieved: <br>" . $result . "<br><br>";


$json = json_decode($result, true);
$signature = base64_decode($json["signature"]);
$data = $json["resultCode"] . "|" . $json["resultMessage"] . "|" . $json["dttm"];
if (openssl_verify($data, $signature, $publicK)) {
    echo "recieved data verified with public key";
}else{
    echo "could not verify recieved data with public key";
};