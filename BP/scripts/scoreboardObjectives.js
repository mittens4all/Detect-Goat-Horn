import { world } from "@minecraft/server";

world.scoreboard.getObjective("detect:goat_horn") ?? world.scoreboard.addObjective("detect:goat_horn");
