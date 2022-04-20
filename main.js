let c = {
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
}
let c2 = {
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
}
let c3 = {
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
}

let AbilityFrame = document.getElementById("abilities")
let AbilityTag = AbilityFrame.children[0]
let AbilityName = AbilityTag.cloneNode()
AbilityTag.remove()

for(v of c.abilities){
    let Ability = AbilityName.cloneNode()
    Ability.innerHTML = v.name
    AbilityFrame.appendChild(Ability)
}

let MainStats = document.getElementById("stats")
let statFrame = document.getElementById("stat type")
let statName = statFrame.cloneNode(true)
statFrame.remove()

for(t of c.stats){
    let base = statName.cloneNode(true)
    base.children[0].innerHTML = t.stat.name+": "+t.base_stat
    base.children[1].innerHTML = "effort: "+t.effort
    MainStats.appendChild(base)
}

let baseExp=document.getElementById('altinfo')
baseExp.children[2].innerHTML = "Base XP: "+c.base_experience

let height=document.getElementById('altinfo')
height.children[0].innerHTML = "Height: "+c.height

let weight=document.getElementById('altinfo')
weight.children[1].innerHTML = "Weight: "+c.weight

let order=document.getElementById('altinfo')
order.children[3].innerHTML = "Order: "+c.order
