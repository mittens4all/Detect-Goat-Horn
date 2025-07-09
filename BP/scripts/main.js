import { world, system } from "@minecraft/server";

let objGoatHorn = null;

function createScoreboardObjectives() {
  objGoatHorn = world.scoreboard.getObjective("detect:goat_horn") ?? world.scoreboard.addObjective("detect:goat_horn");
}

world.afterEvents.worldLoad.subscribe(createScoreboardObjectives);

world.afterEvents.itemStartUse.subscribe(({ source, itemStack }) => {
    if (source.typeId !== 'minecraft:player') return;
    if (itemStack.typeId === "minecraft:goat_horn") {
        objGoatHorn.setScore(source, 1);
    }
});

function detectGoatHorn() {
    for (const player of world.getPlayers()) {
        const currentGoatHornScore = objGoatHorn.getScore(player);
        if (currentGoatHornScore !== 0 ) {
            objGoatHorn.setScore(player, 0);
        }
    }
}
system.runInterval(detectGoatHorn, 1);