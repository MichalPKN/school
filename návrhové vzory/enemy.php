<?php

class enemy
{
    private $health;

    /**
     * constructor, sets health
     */
    public function __construct(int $health = 5)
    {
        $this->setHealth($health);
        return $this;
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
     * deals 1 damage to a player
     */
    public function dealDamage(Player $p){
        $p->setHealth($p->getHealth()-1);
    }
}
