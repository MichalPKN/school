<?php

include("player.php");
include("enemy.php");

//create a singleton player hero
$hero = player::getInstance()->setHealth(10);
echo "player health: " . $hero->getHealth() . "\n";

//create an enemy zombie 
$zombie = new enemy(2);
echo "zombie health: " . $zombie->getHealth() . "\n";

//zombie deals damage to hero
$zombie->dealDamage($hero);
echo "player health after getting damaged: " .$hero->getHealth() . "\n";