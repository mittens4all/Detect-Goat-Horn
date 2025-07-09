# Detect Goat Horn

This behavior pack detects when a player uses a goat horn and assigns a boolean value to a scoreboard objective. You can use the scores target selector argument in your own commands.

## Installing the pack:

You may dowload the latest release from the [Releases Page](https://github.com/mittens4all/Detect-Goat-Horn/releases)

Add the Detect Goat Horn add-on to your behavior packs on your world. Behavior packs may disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail)

## How to Use

You can target players using the scores selector argument in your commands:

```yaml
# Target players who are using any goat horn
execute as @a[scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Ponder goat horn
execute as @a[hasitem={item=goat_horn, data=0, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Sing goat horn
execute as @a[hasitem={item=goat_horn, data=1, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Seek goat horn
execute as @a[hasitem={item=goat_horn, data=2, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Feel goat horn
execute as @a[hasitem={item=goat_horn, data=3, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Admire goat horn
execute as @a[hasitem={item=goat_horn, data=4, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Call goat horn
execute as @a[hasitem={item=goat_horn, data=5, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Yearn goat horn
execute as @a[hasitem={item=goat_horn, data=6, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

```yaml
# Target players who are using the Dream goat horn
execute as @a[hasitem={item=goat_horn, data=7, location=slot.weapon.mainhand}, scores={detect:goat_horn=1}] run <command>
```

## Author

- [@mittens4all](https://www.github.com/mittens4all) \\ Created pack, added scoreboard scripts, functions, right click
- [Youtube](https://www.youtube.com/@mittens4all)


```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```