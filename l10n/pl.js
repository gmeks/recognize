OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Rozpoznaj",
    "Smart media tagging for Nextcloud" : "Inteligentne etykietowanie multimediów dla Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Aplikacja ta przegląda Twoją kolekcję multimediów i dodaje pasujące etykiety, automatycznie klasyfikując Twoje zdjęcia i muzykę.\n\n* 📷 👪 Rozpoznaje twarze ze zdjęć kontaktowych\n* 📷 🏔 Rozpoznaje zwierzęta, krajobrazy, jedzenie, pojazdy, budynki i inne obiekty\n* 📷 🗼 Rozpoznaje punkty orientacyjne i zabytki\n* 👂 🎵 Rozpoznaje gatunki muzyczne\n* ⚡ Etykietowanie działa z etykietami współpracującymi z Nextcloud, umożliwiając dostęp z dowolnej aplikacji\n  * 👂 słuchaj swojej oznaczonej muzyki za pomocą aplikacji odtwarzacza audio\n  * 📷 przeglądaj swoje oznaczone zdjęcia za pomocą aplikacji do zdjęć\n\nPo instalacji możesz włączyć etykietowanie w ustawieniach administratora.\n\nWymagania:\n- PHP 7.4 i nowsze\n- Włączone \"etykiety współpracy\" w aplikacji\n- Dla prędkości natywnej:\n  - Procesor: x86 64bit (z obsługą instrukcji AVX)\n  - System z glibc (zwykle norma w Linuksie; linux Alpine i FreeBSD *nie* są takimi systemami)\n- Dla prędkości podrzędnej (przy użyciu trybu JavaScript)\n  - Procesor: x86 64bit, arm64, armv7l (nie wymaga AVX)\n  - System z glibc lub musl (w tym Alpine linux)\n- ~4 GB wolnej pamięci RAM (jeśli zamierzasz ją ograniczyć, upewnij się, że masz dostęp do wymiany)\n\nAplikacja nie wysyła żadnych wrażliwych danych do dostawców chmury ani podobnych usług. Całe przetwarzanie odbywa się na Twojej maszynie Nextcloud, przy użyciu Tensorflow.js działającego w Node.js, który jest dostarczany w pakiecie z tą aplikacją.",
    "Status" : "Status",
    "Image tagging" : "Etykietowanie obrazu",
    "Audio tagging" : "Etykietowanie audio",
    "Video tagging" : "Etykietowanie wideo",
    "Reset" : "Resetuj",
    "CPU cores" : "Rdzenie procesora",
    "Tensorflow plain mode" : "Tryb zwykły Tensorflow",
    "Node.js path" : "Ścieżka do Node.js",
    "Failed to load settings" : "Nie udało się wczytać ustawień",
    "Failed to save settings" : "Nie udało się zapisać ustawień",
    "Cat" : "Kot",
    "Animal" : "Zwierzę",
    "Wildlife" : "Dzika przyroda",
    "Nature" : "Natura",
    "Puma" : "Puma",
    "Leopard" : "Lampart",
    "Lion" : "Lew",
    "Wild cat" : "Dziki kot",
    "Cheetah" : "Gepard",
    "Seashore" : "Wybrzeże",
    "Beach" : "Plaża",
    "Water" : "Woda",
    "Lakeside" : "Brzeg jeziora",
    "Flower" : "Kwiat",
    "Plant" : "Roślina",
    "Window" : "Okno",
    "Architecture" : "Architektura",
    "Stairs" : "Schody",
    "Building" : "Budynek",
    "Field" : "Pole",
    "Farm" : "Gospodarstwo rolne",
    "Landscape" : "Krajobraz",
    "Portrait" : "Portret",
    "People" : "Osoby",
    "Fashion" : "Moda",
    "Ship" : "Statek",
    "Vehicle" : "Pojazd",
    "Grasshopper" : "Konik polny",
    "Insect" : "Owad",
    "Fish" : "Ryba",
    "Shark" : "Rekin",
    "Chicken" : "Kurczak",
    "Bird" : "Ptak",
    "Ostrich" : "Struś",
    "Owl" : "Sowa",
    "Salamander" : "Salamandra",
    "Frog" : "Żaba",
    "Turtle" : "Żółw",
    "Reptile" : "Gad",
    "Lizard" : "Jaszczurka",
    "Chameleon" : "Kameleon",
    "Crocodile" : "Krokodyl",
    "Alligator" : "Aligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Pająk",
    "Duck" : "Kaczka",
    "Worm" : "Robak",
    "Shell" : "Muszla",
    "Snail" : "Ślimak",
    "Crab" : "Krab",
    "Lobster" : "Homar",
    "Cooking" : "Gotowanie",
    "Penguin" : "Pingwin",
    "Whale" : "Wieloryb",
    "Dog" : "Pies",
    "Wolf" : "Wilk",
    "Fox" : "Lis",
    "Bear" : "Niedźwiedź",
    "Beetle" : "Chrząszcz",
    "Butterfly" : "Motyl",
    "Rabbit" : "Królik",
    "Hippo" : "Hipopotam",
    "Cow" : "Krowa",
    "Buffalo" : "Bawół",
    "Sheep" : "Owca",
    "Ape" : "Małpa",
    "Monkey" : "Małpiszon",
    "Lemur" : "Lemur",
    "Elephant" : "Słoń",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Muzyka",
    "Aircraft" : "Samolot",
    "Airport" : "Lotnisko",
    "Tractor" : "Traktor",
    "Weapon" : "Broń",
    "Backpack" : "Plecak",
    "Shop" : "Sklep",
    "Office" : "Biuro",
    "Outdoor" : "Plener",
    "Living" : "Środki utrzymania",
    "Tower" : "Wieża",
    "Drinks" : "Napoje",
    "Beverage" : "Napój",
    "Food" : "Jedzenie",
    "Shelter" : "Schron",
    "Furniture" : "Meble",
    "Book" : "Książka",
    "Train" : "Pociąg",
    "Butcher" : "Rzeźnik",
    "Car" : "Samochód",
    "Historic" : "Zabytkowe",
    "Boat" : "Łódź",
    "Electronics" : "Elektronika",
    "Indoor" : "Wnętrze domowe",
    "Church" : "Kościół",
    "Shoe" : "But",
    "Candle" : "Świeca",
    "Coffee" : "Kawa",
    "Keyboard" : "Klawiatura",
    "Computer" : "Komputer",
    "Helmet" : "Kask",
    "Wall" : "Ściana",
    "Clock" : "Zegar",
    "Dining" : "Jedzenie",
    "Kitchen" : "Kuchnia",
    "Snow" : "Śnieg",
    "Dome" : "Kopuła",
    "Screen" : "Ekran",
    "Flag" : "Flaga",
    "Truck" : "Ciężarówka",
    "Store" : "Sklep",
    "Tool" : "Narzędzie",
    "Pumpkin" : "Dynia",
    "Vegetables" : "Warzywa",
    "Photography" : "Fotografia",
    "Library" : "Biblioteka",
    "Display" : "Wygląd",
    "Bag" : "Torba",
    "Cup" : "Filiżanka",
    "Rocks" : "Skały",
    "Bus" : "Autobus",
    "Bowl" : "Miska",
    "Monitor" : "Monitor",
    "Bike" : "Rower",
    "Scooter" : "Skuter",
    "Camping" : "Kemping",
    "Cart" : "Wózek",
    "Piggy bank" : "Świnka skarbonka",
    "Bottle" : "Butelka",
    "Plate" : "Talerz",
    "Camera" : "Kamera",
    "Camper" : "Obozowicz",
    "Barbecue" : "Grill",
    "Basket" : "Kosz",
    "Diving" : "Nurkowanie",
    "Snowmobile" : "Skuter śnieżny",
    "Bridge" : "Most",
    "Couch" : "Kanapa",
    "Theater" : "Teatr",
    "Spoon" : "Łyżka",
    "Comic" : "Komik",
    "Soup" : "Zupa",
    "Dessert" : "Deser",
    "Bakery" : "Piekarnia",
    "Fruit" : "Owoc",
    "Pasta" : "Makaron",
    "Meat" : "Mięso",
    "Pizza" : "Pizza",
    "Wine" : "Wino",
    "Alpine" : "Alpejskie",
    "Mountains" : "Góry",
    "Sand" : "Piasek",
    "Wool" : "Wełna",
    "Glass" : "Szkło",
    "Moment" : "Moment",
    "Info" : "Informacje",
    "Document" : "Dokument",
    "Puzzle" : "Puzzle",
    "Heritage" : "Dziedzictwo",
    "Safe" : "Sejf",
    "Bucket" : "Kosz",
    "Baby" : "Małe dziecko",
    "Cradle" : "Łóżeczko",
    "Patio" : "Taras",
    "Mountain" : "Góra",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Park rozrywki",
    "Festival" : "Festiwal",
    "Event" : "Wydarzenie",
    "Monument" : "Pomnik",
    "Balloon" : "Balon",
    "Crib" : "Kołyska",
    "Fan" : "Miłośnik",
    "Gas station" : "Stacja paliw",
    "Wood" : "Drewno",
    "Bench" : "Ławka",
    "Parking" : "Parking",
    "Traffic" : "Ruch drogowy",
    "Public transport" : "Transport publiczny",
    "Umbrella" : "Parasol",
    "Stage" : "Scena",
    "Toy" : "Zabawka",
    "Vase" : "Wazon",
    "Mailbox" : "Skrzynka pocztowa",
    "Sign" : "Podpisz",
    "Gallery" : "Galeria",
    "Park" : "Park"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
