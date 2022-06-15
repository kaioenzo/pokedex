let types_data = {
    "grass": {
        "attack": {
            "double": ["ground", "rock", "water"],
            "half": ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
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
            "half": ["fighting", "poison", "bug", "grass", "fairy"],
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
            "double": ["fire", "fighting", "rock", "steel"],
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
    "ground": {
        "attack": {
            "double": ["electric", "fire", "poison", "rock", "steel"],
            "half": ["bug", "grass"],
            "zero": ["flying"]
        },
        "defense": {
            "half": ["poison", "rock"],
            "double": ["grass", "ice", "water"],
            "zero": ["electric"]
        }
    },
    "normal": {
        "attack": {
            "double": [],
            "half": ["rock", "steel"],
            "zero": ["ghost"]
        },
        "defense": {
            "half": [],
            "double": ["fighting"],
            "zero": ["ghost"]
        }
    },
    "rock": {
        "attack": {
            "double": ["bug", "fire", "flying", "ice"],
            "half": ["fighting", "ground", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["fire", "flying", "normal", "poison"],
            "double": ["fighting", "grass", "ground", "steel", "water"],
            "zero": []
        }
    },
    "bug": {
        "attack": {
            "double": ["dark", "grass", "psychic"],
            "half": ["fairy", "fighting", "fire", "flying", "ghost", "poison", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["grass", "fighting", "ground"],
            "double": ["fire", "flying", "rock"],
            "zero": []
        }
    },
    "dark": {
        "attack": {
            "double": ["ghost", "psychic"],
            "half": ["fairy", "fighting", "dark"],
            "zero": []
        },
        "defense": {
            "half": ["dark", "ghost"],
            "double": ["bug", "fairy", "fighting"],
            "zero": ["psychic"]
        }
    },
    "psychic": {
        "attack": {
            "double": ["fighting", "poison"],
            "half": ["psychic", "steel"],
            "zero": ["dark"]
        },
        "defense": {
            "half": ["fighting", "psychic"],
            "double": ["bug", "dark", "ghost"],
            "zero": []
        }
    },
    "fighting": {
        "attack": {
            "double": ["dark", "ice", "normal", "rock", "steel"],
            "half": ["bug", "flying", "poison", "psychic"],
            "zero": ["ghost"]
        },
        "defense": {
            "half": ["bug", "dark", "rock"],
            "double": ["fairy", "flying", "psychic"],
            "zero": []
        }
    },
    "steel": {
        "attack": {
            "double": ["fairy","ice","rock"],
            "half": ["electric", "fire", "steel", "water"],
            "zero": []
        },
        "defense": {
            "half": ["bug", "dragon", "fairy","flying","grass","ice","normal","psychic","rock","steel"],
            "double": ["fighting", "fire", "ground"],
            "zero": ["poison"]
        }
    },
    "fairy": {
        "attack": {
            "double": ["dark","dragon","fighting"],
            "half": ["poison", "fire", "steel"],
            "zero": []
        },
        "defense": {
            "half": ["bug","dark","fighting"],
            "double": ["poison", "steel"],
            "zero": ["dragon"]
        }
    },
    "dragon": {
        "attack": {
            "double": ["dragon"],
            "half": ["steel"],
            "zero": ["fairy"]
        },
        "defense": {
            "half": ["electric","fire","grass","water"],
            "double": ["dragon", "fairy", "steel"],
            "zero": []
        }
    },
    "electric": {
        "attack": {
            "double": ["water","flying"],
            "half": ["dragon","electric","grass"],
            "zero": ["ground"]
        },
        "defense": {
            "half": ["electric","flying","steel"],
            "double": ["ground"],
            "zero": []
        }
    },
    "fire": {
        "attack": {
            "double": ["bug","grass","ice","steel"],
            "half": ["dragon","fire","rock","water"],
            "zero": []
        },
        "defense": {
            "half": ["bug","fairy","fire","grass","ice","steel"],
            "double": ["ground","rock","water"],
            "zero": []
        }
    },
    "flying": {
        "attack": {
            "double": ["bug","grass","fighting"],
            "half": ["electric","rock","steel"],
            "zero": []
        },
        "defense": {
            "half": ["bug","grass","fighting"],
            "double": ["electric","rock","ice"],
            "zero": ["ground"]
        }
    },
    "ghost": {
        "attack": {
            "double": ["ghost","psychic"],
            "half": ["dark"],
            "zero": ["normal"]
        },
        "defense": {
            "half": ["bug","poison"],
            "double": ["dark","ghost"],
            "zero": ["normal","fighting"]
        }
    },

}
export default types_data