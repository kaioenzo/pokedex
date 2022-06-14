let types_data = {
    "grass": {
        "attack": {
            "double": ["ground", "rock", "water"],
            "half": ["flying", "poison", "bug", "steel", "fire", "grass", "dragon" ],
            "zero": []
        },
        "defense": {
            "half": ["ground", "water", "grass", "electric"],
            "double": ["flying", "poison", "bug", "fire", "ice"],
            "zero": []
        }
    },
    "poison": {
        "attack": {
            "double": ["grass", "fairy"],
            "half": ["poison", "ground", "rock", "fairy"],
            "zero": ["steel"]
        },
        "defense": {
            "half": ["figth", "poison", "bug", "grass", "fairy"],
            "double": ["ground", "psychic"],
            "zero": []
        }
    },
    "ice": {
        "attack": {
            "double": ["dragon", "flying", "grass", "ground"],
            "half": ["fire", "ice", "steel", "water"],
            "zero": []
        },
        "defense": {
            "half": ["ice"],
            "double": ["fire", "figth","rock","steel"],
            "zero": []
        }
    },
    "water": {
        "attack": {
            "double": ["fire", "ground", "rock"],
            "half": ["dragon", "grass", "water"],
            "zero": []
        },
        "defense": {
            "half": ["fire", "ice", "steel", "water"],
            "double": ["electric", "grass"],
            "zero": []
        }
    },
        "ground":{
            "attack":{
                "double":["eletrick", "fire", "poison","rock","steel"],
                "half":["bug","grass"],
                "zero":["flying"]
            },
            "defense": {
                "half": ["poison", "rock"],
                "double": ["grass", "ice", "water"],
                "zero": ["electric"]
        },
        "normal":{
            
        }
}
}
export default types_data