function searchMoon() {
    var input = document.getElementById("moonInput").value.toLowerCase(); // Convert input to lowercase for case-insensitivity
    console.log("Input:", input); // Add this line for debugging
    var moonData = {
        "experimentation": { 
            "image": "moons/Experimentation.jpg",
            "alternateImage": "./images/moons/Experimentationinfo.jpg", 
            "description": "POPULATION: Abandoned.<br>CONDITIONS: Arid, Thick haze. Low habitability, worsened by industrial artifacts.<br>HISTORY: Not discovered for quite some time due to its close orbit around gas giant Big Grin. However it appears to have been used in secret.<br>FAUNA: Dominated by a few species."
        },
        "assurance": { 
            "image": "moons/assurance.jpg", 
            "alternateImage": "./images/moons/assuranceinfo.jpg", 
            "description": "POPULATION: Abandoned.<br>CONDITIONS:Similar to its twin moon, 41-Experimentation, featuring far more jagged and weathered terrain.<br>HISTORY: 220-Assurance is far younger than its counterpart. Discovered not long before 41-Experimentation.<br>FAUNA: Ecosystem supports territorial behavior."
        },
        "vow": { 
            "image": "moons/Vow.png", 
            "alternateImage": "./images/moons/vowinfo.png", 
            "description": "POPULATION: Abandoned.<br>CONDITIONS:Humid, Rough terrain. Teeming with plant life.<br>HISTORY:Vow appears to have been inhabited by several colonies across its continents, but there is now no sign of life, and they have become a mystery.<br>FAUNA:Diverse, teeming with plant-life. A competitive ecosystem supports aggressive lifeforms."
        },
        "offence": { 
            "image": "moons/Offense.jpg", 
            "alternateImage": "./images/moons/offenceinfo.png", 
            "description": "POPULATION: Abandoned.<br>CONDITIONS:HBelieved to have splintered off from its cousin 220-Assurance, Offense features similar jagged and dry conditions but differs in its ecosystem.<br>HISTORY:21-Offense is categorized as an asteroid moon and seems to have not existed on its own for more than several hundred years. The industrial artifacts here have suffered damage; its believed they were built long before 21-Offense was splintered off.<br>FAUNA:A competitive and toughened ecosystem supports aggressive lifeforms. Travelers to 21-Offense should know it's not for the faint of heart."
        },
        "march": { 
            "image": "moons/March.png", 
            "alternateImage": "./images/moons/marchinfo.png",
            "description": "POPULATION: Abandoned.<br>CONDITIONS:Humid, Rough terrain. Teeming with plant life.<br>HISTORY:Vow appears to have been inhabited by several colonies across its continents, but there is now no sign of life, and they have become a mystery.<br>FAUNA:Diverse, teeming with plant-life. A competitive ecosystem supports aggressive lifeforms."
        },
        "rend": { 
            "image": "moons/rend.jpg", 
            "alternateImage": "./images/moons/rendinfo.png",
            "description": "POPULATION: Abandoned.<br>CONDITIONS:Its planet orbits a white dwarf star, making for inhospitable, cold conditions. Constant blizzards decrease visibility.<br>HISTORY:Several famous travelers went missing here, giving it some reputation. Their bodies are unlikely to be found due to the planet's conditions.<br>FAUNA:It's highly unlikely for complex life to exist here."
        },
        "dine": { 
            "image": "moons/dine.jpg", 
            "alternateImage": "./images/moons/dineinfo.png",
            "description": "POPULATION: Abandoned.<br>CONDITIONS:Its planet orbits a white dwarf star, making for inhospitable, cold conditions. Constant blizzards decrease visibility.<br>HISTORY:Several famous travelers went missing here, giving it some reputation. Their bodies are unlikely to be found due to the planet's conditions.<br>FAUNA:It's highly unlikely for complex life to exist here."
        },
        "titan": { 
            "image": "moons/titan.jpg", 
            "alternateImage": "./images/moons/titaninfo.png",
            "description": "POPULATION: Abandoned.<br>CONDITIONS:Frozen, rocky. This moon was mined for resources. It's easy to get lost here.<br>HISTORY:It looks like this moon was mined for resources. It's easy to get lost within the giant industrial complex. There are many entrances to it littered about the landscape.<br>FAUNA:Dangerous entities have been rumored to take residence in the vast network of tunnels."
        }
    };
    console.log("Moon Data:", moonData); // Add this line for debugging

    var moonInfo = moonData[input];
    console.log("Moon Info:", moonInfo); // Add this line for debugging
    if (moonInfo) {
        document.getElementById("moonImage").src = "./images/" + moonInfo.image;
        document.getElementById("moonDescription").innerHTML = moonInfo.description;
        document.getElementById("moonImage2").src = "./" + moonInfo.alternateImage;
    } else {
        document.getElementById("moonImage").src = ""; // Clear image if moon not recognized
        document.getElementById("moonDescription").innerText = "Moon not recognized";
        document.getElementById("moonImage2").src = "";
    }
}
