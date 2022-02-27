const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

const enemyName = "Weirdo";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function() {
    window.alert("Welcome to Robot Brawl!")

    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    
        
    )
        //This is shorter, faster option. USE BACK TICKS
        //console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`)
        playerHealth = playerHealth - enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`)
};

fight();