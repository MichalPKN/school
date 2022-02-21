<?php

/**
 * Singleton player, only creatable using a method getInstance()
 *
 * @author  Michal Pokorný
 */
class player{

    /**
    * @var null if no instance has been made
    * @var Player if an instance of Player already exists
    */
    private static $instance;
    private $health;

    private function __construct($health = 5)
    {
        $this->setHealth($health);
    }

    public static function getInstance(){
        if (self::$instance === null){
            self::$instance = new player();
        }
        return self::$instance;
    }
    
    public function setHealth($health){
        $this->health = $health;
        return $this;
    }

    public function getHealth(){
        return $this->health;
    }

    public function dealDamage(enemy $enemy){
        $enemy->setHealth($enemy->getHealth()-1);
    }
}