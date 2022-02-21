<?php

/**
 * Singleton player, only creatable using a method getInstance()
 *
 * @author Michal Pokorný
 */
class player{

    /**
    * @var null if no instance has been made
    * @var Player if an instance of Player already exists
    */
    private static $instance;

    private $health;

    /**
     * constructor, sets health
     */
    private function __construct($health = 5)
    {
        $this->setHealth($health);
    }

    /**
     * singleton function used for creating player
     */
    public static function getInstance(){
        if (self::$instance === null){
            self::$instance = new player();
        }
        return self::$instance;
    }
    
    /**
     * health setter
     */
    public function setHealth($health){
        $this->health = $health;
        return $this;
    }

    /**
     * health getter 
     */
    public function getHealth(){
        return $this->health;
    }

    /**
     * deals 1 damage to an enemy
     */
    public function dealDamage(enemy $enemy){
        $enemy->setHealth($enemy->getHealth()-1);
    }
}