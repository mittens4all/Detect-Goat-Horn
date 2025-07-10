import { world, system } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    import("./scoreboardObjectives.js");
});

world.afterEvents.itemStartUse.subscribe(({ source, itemStack }) => {
    if (source.typeId !== 'minecraft:player') return;
    if (itemStack.typeId === "minecraft:goat_horn") {
        world.scoreboard.getObjective("detect:goat_horn").setScore(source, 1);
    }
    system.runTimeout(() => {
        world.scoreboard.getObjective("detect:goat_horn").setScore(source, 0);
    }, 1);
});
