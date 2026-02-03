const pokemones = [
        {
        "baby_trigger_item": null,
        "chain": {
            "evolution_details": [],
            "evolves_to": 
            [
                {
                    "evolution_details": 
                    [
                        {
                                "base_form_id": null,
                                "gender": null,
                                "held_item": null,
                                "item": null,
                                "known_move": null,
                                "known_move_type": null,
                                "location": null,
                                "min_affection": null,
                                "min_beauty": null,
                                "min_happiness": null,
                                "min_level": 16,
                                "needs_overworld_rain": false,
                                "party_species": null,
                                "party_type": null,
                                "region_id": null,
                                "relative_physical_stats": null,
                                "time_of_day": "",
                                "trade_species": null,
                                "trigger": {
                                "name": "level-up",
                                "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
                                },
                            "turn_upside_down": false
                        }
                    ],
                "evolves_to": [
                {
                    "evolution_details": [
                    {
                        "base_form_id": null,
                        "gender": null,
                        "held_item": null,
                        "item": null,
                        "known_move": null,
                        "known_move_type": null,
                        "location": null,
                        "min_affection": null,
                        "min_beauty": null,
                        "min_happiness": null,
                        "min_level": 32,
                        "needs_overworld_rain": false,
                        "party_species": null,
                        "party_type": null,
                        "region_id": null,
                        "relative_physical_stats": null,
                        "time_of_day": "",
                        "trade_species": null,
                        "trigger": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
                        },
                        "turn_upside_down": false
                    }
                    ],
                    "evolves_to": [],
                    "is_baby": false,
                    "species": {
                    "name": "venusaur",
                    "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
                    }
                }
                ],
                "is_baby": false,
                "species": {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
                }
            }
            ],
            "is_baby": false,
            "species": {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
                }
        },
        "id": 1
        },
{
  "baby_trigger_item": null,
  "chain": {
    "evolution_details": [],
    "evolves_to": [
      {
        "evolution_details": [
          {
            "base_form_id": null,
            "gender": null,
            "held_item": null,
            "item": null,
            "known_move": null,
            "known_move_type": null,
            "location": null,
            "min_affection": null,
            "min_beauty": null,
            "min_happiness": null,
            "min_level": 7,
            "needs_overworld_rain": false,
            "party_species": null,
            "party_type": null,
            "region_id": null,
            "relative_physical_stats": null,
            "time_of_day": "",
            "trade_species": null,
            "trigger": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
            },
            "turn_upside_down": false
          }
        ],
        "evolves_to": [
          {
            "evolution_details": [
              {
                "base_form_id": null,
                "gender": null,
                "held_item": null,
                "item": null,
                "known_move": null,
                "known_move_type": null,
                "location": null,
                "min_affection": null,
                "min_beauty": null,
                "min_happiness": null,
                "min_level": 10,
                "needs_overworld_rain": false,
                "party_species": null,
                "party_type": null,
                "region_id": null,
                "relative_physical_stats": null,
                "time_of_day": "",
                "trade_species": null,
                "trigger": {
                  "name": "level-up",
                  "url": "https://pokeapi.co/api/v2/evolution-trigger/1/"
                },
                "turn_upside_down": false
              }
            ],
            "evolves_to": [],
            "is_baby": false,
            "species": {
              "name": "beedrill",
              "url": "https://pokeapi.co/api/v2/pokemon-species/15/"
            }
          }
        ],
        "is_baby": false,
        "species": {
          "name": "kakuna",
          "url": "https://pokeapi.co/api/v2/pokemon-species/14/"
        }
      }
    ],
    "is_baby": false,
    "species": {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon-species/13/"
    }
  },
  "id": 5
}
]


let chains = pokemones.map( (el) => el.chain )



function getEvolutionChain(chain) {


    if ( chain.evolves_to.length == 0 ) return `${chain.species.name}`

    let evolution = chain.species.name

    return `${evolution} - ${getEvolutionChain(chain.evolves_to[0])} `
    


}



let evolutions = chains.map(getEvolutionChain)

console.log(evolutions)
