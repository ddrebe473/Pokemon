let pokemon = {
    0: {
        "abilities": [
            {
                "name": "blaze"
            },
            {
                "name": "solar-power"
            }
        ],
        "base_experience": 62,
        "height": 6,
        "id": 4,
        "is_default": true,
        "name": "charmander",
        "order": 5,
        "stats": [
            {
                "base_stat": 39,
                "effort": 0,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 52,
                "effort": 0,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 43,
                "effort": 0,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 60,
                "effort": 0,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 50,
                "effort": 0,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "speed"
                }
            }
        ],
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "weight": 85
    },
    1: {
        "abilities": [
            {
                "name": "blaze"
            },
            {
                "name": "solar-power"
            }
        ],
        "base_experience": 142,
        "height": 11,
        "id": 5,
        "is_default": true,
        "name": "charmeleon",
        "order": 6,
        "stats": [
            {
                "base_stat": 58,
                "effort": 0,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 64,
                "effort": 0,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 58,
                "effort": 0,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 80,
                "effort": 1,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 80,
                "effort": 1,
                "stat": {
                    "name": "speed"
                }
            }
        ],
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            }
        ],
        "weight": 190
    },
    2: {
        "abilities": [
            {
                "name": "blaze"
            },
            {
                "name": "solar-power"
            }
        ],
        "base_experience": 240,
        "height": 17,
        "id": 6,
        "is_default": true,
        "name": "charizard",
        "order": 7,
        "stats": [
            {
                "base_stat": 78,
                "effort": 0,
                "stat": {
                    "name": "hp"
                }
            },
            {
                "base_stat": 84,
                "effort": 0,
                "stat": {
                    "name": "attack"
                }
            },
            {
                "base_stat": 78,
                "effort": 0,
                "stat": {
                    "name": "defense"
                }
            },
            {
                "base_stat": 109,
                "effort": 3,
                "stat": {
                    "name": "special-attack"
                }
            },
            {
                "base_stat": 85,
                "effort": 0,
                "stat": {
                    "name": "special-defense"
                }
            },
            {
                "base_stat": 100,
                "effort": 0,
                "stat": {
                    "name": "speed"
                }
            }
        ],
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying"
                }
            }
        ],
        "weight": 905
    },
}
let pos = 0
let EntriesLength = Object.keys(pokemon).length - 1

let pogemoners = []
let Main = document.getElementById("main")
let MainF = Main.cloneNode(true)
let Arrows = document.getElementsByClassName("arrow")
let Arrow = Arrows[0]
Main.remove()
//document.getElementById("main").remove()

function uppername(v) {
    return v.substr(0, 1).toUpperCase() + v.substr(1, v.length)
}

function makecard() {
    let PokemonChosen = pokemon[pos]
    let Main = MainF.cloneNode(true)
    let MainChildren = Main.children
    MainChildren[0].innerHTML = uppername(PokemonChosen.name) // name

    let MainHolder = MainChildren[1]
    let InfoFrame = MainHolder.children[1]
    let InfoChildren = InfoFrame.children

    MainHolder.children[0].src = "images/" + PokemonChosen.name + ".png"

    let AbilityFrame = InfoChildren[2]
    let AbilityTag = AbilityFrame.children[0]
    let AbilityName = AbilityTag.cloneNode(true)
    AbilityTag.remove()

    for (v of PokemonChosen.abilities) {
        let Ability = AbilityName.cloneNode(true)
        Ability.innerHTML = uppername(v.name)
        AbilityFrame.appendChild(Ability)
    }

    let MainStats = InfoChildren[5]
    let statFrame = MainStats.children[0]
    let statName = statFrame.cloneNode(true)
    statFrame.remove()

    for (t of PokemonChosen.stats) {
        let base = statName.cloneNode(true)
        base.children[0].innerHTML = uppername(t.stat.name) + ": " + t.base_stat
        base.children[1].innerHTML = "Effort: " + t.effort
        MainStats.appendChild(base)
    }

    let AltInfo = InfoChildren[3]
    let AltInfoChildren = AltInfo.children
    AltInfoChildren[2].innerHTML = "Base XP: " + PokemonChosen.base_experience
    AltInfoChildren[0].innerHTML = "Height: " + PokemonChosen.height
    AltInfoChildren[1].innerHTML = "Weight: " + PokemonChosen.weight
    AltInfoChildren[3].innerHTML = "Order: " + PokemonChosen.order

    document.body.insertBefore(Main, Arrow)
}

let canuse = true
let controlkeys = {
    "ArrowRight": 1,
    "ArrowLeft": -1,
    ".": 1,
    ",": -1,
    ">": 1,
    "<": -1,
}

function flippanel(key) {
    let dakey = controlkeys[key.key] !== undefined && controlkeys[key.key] || controlkeys[key] !== undefined && controlkeys[key] || undefined
    if (dakey !== undefined && canuse === true) {
        canuse = false
        let thecard = document.getElementById("main") || document.getElementById("NOESCAPE")
        thecard.style.transform = `rotateY(90deg)`
        pos += dakey
        if (pos > EntriesLength) {
            pos = 0
        } else if (pos < 0) { pos = EntriesLength }
        console.log(pos, EntriesLength)
        setTimeout(() => {
            thecard.remove()
            makecard()
            //let NewFrame = document.getElementById("main")
            //NewFrame.style.transform = `rotateY(0deg)`
            canuse = true
            //document.body.appendChild(NewCard)
        }, 500);
    }
}


document.addEventListener("keydown", flippanel)
for (v of Arrows) {
    let Text = v.textContent
    console.log(v.textContent)
    v.addEventListener("mousedown", () => {
        flippanel(Text)
    })
}







