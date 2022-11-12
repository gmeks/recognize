OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Erkennen",
    "Smart media tagging for Nextcloud" : "Intelligentes Media-Tagging für Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Diese App durchsucht deine Mediensammlung und fügt passende Tags hinzu, wodurch deine Fotos und Musik automatisch kategorisiert werden.\n\n* 📷 👪 Erkennt Gesichter aus Kontaktfotos\n* 📷 🏔 Erkennt Tiere, Landschaften, Lebensmittel, Fahrzeuge, Gebäude und andere Objekte\n* 📷 🗼 Erkennt Sehenswürdigkeiten und Denkmäler\n* 👂 🎵 Erkennt Musikgenres\n* ⚡ Tagging funktioniert über die Collaborative Tags von Nextcloud und ermöglicht den Zugriff durch jede deiner Apps\n* 👂 Höre deine markierte Musik mit der Audioplayer-App\n* 📷 Schau dir deine markierten Fotos mit der Foto-App an\n\nNach der Installation kannst du das Tagging in den Admin-Einstellungen aktivieren.\n\nAnforderungen:\n- PHP 7.4 und höher\n- App \"kollaborative Tags\" aktiviert\n- Für native Geschwindigkeit:\n - Prozessor: x86 64bit (mit Unterstützung für AVX-Anweisungen)\n - System mit glibc (normalerweise die Norm unter Linux; Alpine Linux und FreeBSD sind *keine* solchen Systeme)\n- Für subnative Geschwindigkeit (unter Verwendung des JavaScript-Modus)\n - Prozessor: x86 64bit, arm64, armv7l (kein AVX erforderlich)\n - System mit glibc oder musl (inkl. Alpine Linux)\n- ~4 GB freier RAM (wenn du ihn knapp hältst, stelle sicher, dass etwas Swap zur Verfügung steht)\n\nDie App sendet keine sensiblen Daten an Cloud-Anbieter oder ähnliche Dienste. Die gesamte Verarbeitung erfolgt auf deiner Nextcloud-Instanz mit Tensorflow.js, das in Node.js ausgeführt wird, das mit dieser App gebündelt ist.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "Die Modelle für maschinelles Lernen wurden erfolgreich heruntergeladen.",
    "The machine learning models still need to be downloaded." : "Die Modelle für maschinelles Lernen müssen noch heruntergeladen werden.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Die Node.js-Bibliothek konnte nicht ausgeführt werden. Möglicherweise musst du den Pfad zu einer funktionierenden Bibliothek manuell festlegen.",
    "The app is installed and will automatically classify files in background processes." : "Die App ist installiert und klassifiziert Dateien automatisch in Hintergrundprozessen.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Keine der folgenden Tagging-Optionen ist derzeit ausgewählt. Die App wird derzeit nichts tun.",
    "Image tagging" : "Bild-Markierung",
    "Face recognition is working. " : "Gesichtserkennung funktionsfähig.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Es ist ein Fehler bei der Gesichtserkennung aufgetreten, bitte überprüfe die Nextcloud-Protokolle.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Gesichtserkennung. Wenn diese Meldung länger als 15 Minuten anhält, überprüfe bitte die Nextcloud-Protokolle.",
    "Face recognition:" : "Gesichtserkennung:",
    "Queued files" : "Dateien in der Warteschlange:",
    "Last classification: " : "Letzte Klassifikation:",
    "Object recognition is working." : "Objekterkennung funktionsfähig.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Es ist ein Fehler bei der Objekterkennung aufgetreten, bitte überprüfe die Nextcloud-Protokolle.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Gesichtserkennung. Wenn diese Meldung länger als 15 Minuten anhält, überprüfe bitte die Nextcloud-Protokolle.",
    "Object recognition:" : "Objekterkennung:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Gesichtserkennung aktivieren (gruppiert Bilder nach Personen, die in der Foto-App darin erscheinen)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Die Anzahl der zu verarbeitenden Dateien pro Aufgabenlauf (ein Job wird alle 5 Minuten eingeplant; für den normalen Betrieb ~500 oder mehr, im WASM-Modus wird ~50 empfohlen)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Objekterkennung aktivieren (z. B. Lebensmittel, Fahrzeuge, Landschaften)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Die Anzahl der zu verarbeitenden Dateien pro Aufgabenlauf (ein Job wird alle 5 Minuten eingeplant; für den normalen Betrieb ~100 oder mehr, im WASM-Modus wird ~20 empfohlen)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Wahrzeichenerkennung aktivieren (z. B. Eiffelturm, Golden Gate Bridge)",
    "Audio tagging" : "Audio-Markierung",
    "Audio recognition is working." : "Videoerkennung funktionsfähig.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Es ist ein Fehler bei der Audioerkennung aufgetreten, bitte überprüfe die Nextcloud-Protokolle.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Videoerkennung. Wenn diese Meldung länger als 15 Minuten anhält, überprüfe bitte die Nextcloud-Protokolle.",
    "Music genre recognition:" : "Erkennung des Musikgenres:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Musikgenre-Erkennung aktivieren (z. B. Pop, Rock, Folk, Metal, New Age)",
    "Video tagging" : "Video-Markierung",
    "Video recognition is working." : "Videoerkennung funktionsfähig.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Es ist ein Fehler bei der Videoerkennung aufgetreten, bitte überprüfe die Nextcloud-Protokolle.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Warten auf Statusberichte zur Videoerkennung. Wenn diese Meldung länger als 15 Minuten anhält, überprüfe bitte die Nextcloud-Protokolle.",
    "Video recognition:" : "Videoerkennung:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Erkennung menschlicher Aktionen (z. B. Armdrücken, Dribbeln beim Basketball, Hula-Hoop) aktivieren",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Die Anzahl der zu verarbeitenden Dateien pro Aufgabenlauf (ein Job wird alle 5 Minuten eingeplant; für den normalen Betrieb ~20 oder mehr, im WASM-Modus wird ~5 empfohlen)",
    "Reset" : "Zurücksetzen",
    "Click the button below to remove all tags from all files that have been classified so far." : "Klicke unten auf die Schaltfläche, um alle Tags von allen bisher klassifizierten Dateien zu entfernen.",
    "Reset tags for classified files" : "Schlagworte für klassifizierte Dateien zurücksetzen",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Klicke unten auf die Schaltfläche, um alle Tags von allen bisher klassifizierten Dateien zu entfernen.",
    "Reset faces for classified files" : "Gesichter für klassifizierte Dateien zurücksetzen",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Klicke unten auf die Schaltfläche, um alle Dateien in dieser Instanz erneut zu scannen und sie den Warteschlangen zur Klassifizierung hinzuzufügen.",
    "Rescan all files" : "Alle Dateien erneut scannen",
    "Terminal commands" : "Befehle im Server-Terminal",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Um einen vollständigen Klassifizierungslauf manuell auszulösen, führe den folgenden Befehl im Server-Terminal aus.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Um alle Modelle vor der Ausführung der Klassifizierungs-Aufgaben herunterzuladen, führe den folgenden Befehl im Server-Terminal aus.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Mit dem folgenden Befehl kannst du die Tags aller Dateien zurücksetzen, die zuvor von der App Recognize klassifiziert wurden:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Mit dem folgenden Befehl kannst du alle Tags löschen, denen keine Dateien mehr zugeordnet sind:",
    "CPU cores" : "CPU-Kerne",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "Standardmäßig werden alle verfügbaren CPU-Kerne verwendet, was dein System erheblich belasten kann. Um dies zu vermeiden, kannst du die Anzahl der verwendeten CPU-Kerne begrenzen.",
    "Number of CPU Cores (0 for no limit)" : "Anzahl der CPU-Kerne (0 für unbegrenzt)",
    "Tensorflow WASM mode" : "Tensorflow WASM-Modus",
    "Checking CPU" : "CPU wird überprüft",
    "Could not check whether your machine supports native TensorFlow operation." : "Es konnte nicht überprüft werden, ob dein Computer den nativen TensorFlow-Betrieb unterstützt.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Dein Server unterstützt den nativen TensorFlow-Betrieb, du benötigst den WASM-Modus nicht.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Der WASM-Modus wurde automatisch aktiviert, da dein Server den nativen TensorFlow-Betrieb nicht unterstützt:",
    "Enable WASM mode" : "WASM-Modus aktivieren",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Überprüfung von Node.js",
    "Node.js {version} binary was installed successfully." : "Node.js {Version} Bibliothek wurde erfolgreich installiert.",
    "Checking libtensorflow" : "Überprüfen von libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "libtensorflow konnte nicht in Node.js geladen werden. Du kannst versuchen, libtensorflow manuell zu installieren oder im WASM-Modus auszuführen.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow wurde erfolgreich in Node.js geladen.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Wenn die mitgelieferte Node.js-Binärdatei aus irgendeinem Grund auf deinem System nicht funktioniert, kannst du den Pfad zu einer benutzerdefinierte node.js-Binärdatei festlegen. Derzeit werden Node v14.17 und neuere v14-Releases unterstützt.",
    "Your server does not support AVX instructions" : "Dein Server unterstützt keine AVX-Anweisungen",
    "Your server does not have an x86 64-bit CPU" : "Dein Server hat keine x86 64-Bit-CPU",
    "Your server uses musl libc" : "Dein Server verwendet musl-libc",
    "Failed to load settings" : "Einstellungen konnten nicht geladen werden",
    "Failed to save settings" : "Einstellungen konnten nicht gespeichert werden",
    "never" : "nie",
    "{time} ago" : "{time} her",
    "Cat" : "Katze",
    "Animal" : "Tier",
    "Wildlife" : "Tierwelt",
    "Nature" : "Natur",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Löwe",
    "Wild cat" : "Wildkatze",
    "Cheetah" : "Gepard",
    "Seashore" : "Küste",
    "Beach" : "Strand",
    "Water" : "Wasser",
    "Lakeside" : "Seeufer",
    "Flower" : "Blume",
    "Plant" : "Pflanze",
    "Window" : "Fenster",
    "Architecture" : "Architektur",
    "Stairs" : "Treppen",
    "Building" : "Gebäude",
    "Field" : "Feld",
    "Farm" : "Bauernhof",
    "Landscape" : "Landschaft",
    "Portrait" : "Porträt",
    "People" : "Personen",
    "Fashion" : "Mode",
    "Ship" : "Schiff",
    "Vehicle" : "Fahrzeug",
    "Grasshopper" : "Heuschrecke",
    "Insect" : "Insekt",
    "Fish" : "Fisch",
    "Shark" : "Hai",
    "Chicken" : "Huhn",
    "Bird" : "Vogel",
    "Ostrich" : "Strauß",
    "Owl" : "Eule",
    "Salamander" : "Salamander",
    "Frog" : "Frosch",
    "Turtle" : "Schildkröte",
    "Reptile" : "Rptil",
    "Lizard" : "Eidechse",
    "Chameleon" : "Chamelion",
    "Crocodile" : "Krokodil",
    "Alligator" : "Aligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Spinne",
    "Duck" : "Ente",
    "Worm" : "Wurm",
    "Shell" : "Muschel",
    "Snail" : "Schlange",
    "Crab" : "Krabbe",
    "Lobster" : "Hummer",
    "Cooking" : "Kochen",
    "Penguin" : "Pinguin",
    "Whale" : "Wal",
    "Dog" : "Hund",
    "Wolf" : "Wolf",
    "Fox" : "Fuchs",
    "Bear" : "Bär",
    "Beetle" : "Käfer",
    "Butterfly" : "Schmetterling",
    "Rabbit" : "Kanninchen",
    "Hippo" : "Nilpferd",
    "Cow" : "Kuh",
    "Buffalo" : "Büffel",
    "Sheep" : "Schaaf",
    "Ape" : "Affe",
    "Monkey" : "Affe",
    "Lemur" : "Lemure",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musik",
    "Aircraft" : "Flugzeug",
    "Airport" : "Flughafen",
    "Tractor" : "Traktor",
    "Weapon" : "Waffe",
    "Backpack" : "Rucksack",
    "Shop" : "Geschäft",
    "Office" : "Office",
    "Outdoor" : "Draußen",
    "Living" : "Leben",
    "Tower" : "Turm",
    "Drinks" : "Getränke",
    "Beverage" : "Getränke",
    "Food" : "Essen",
    "Shelter" : "Obdach",
    "Furniture" : "Möbel",
    "Book" : "Buch",
    "Train" : "Zug",
    "Butcher" : "Schlachter",
    "Car" : "Auto",
    "Historic" : "Historisch",
    "Boat" : "Boot",
    "Electronics" : "Elektronik",
    "Indoor" : "Innen",
    "Church" : "Kirche",
    "Shoe" : "Schuh",
    "Candle" : "Kerze",
    "Coffee" : "Kaffee",
    "Keyboard" : "Tastatur",
    "Computer" : "Computer",
    "Helmet" : "Helm",
    "Wall" : "Mauer",
    "Clock" : "Uhr",
    "Dining" : "Speisen",
    "Kitchen" : "Küche",
    "Snow" : "Schnee",
    "Dome" : "Kuppel",
    "Screen" : "Bildschirm",
    "Flag" : "Fahne",
    "Truck" : "LKW",
    "Store" : "Geschäft",
    "Tool" : "Werkzeug",
    "Pumpkin" : "Kürbis",
    "Vegetables" : "Gemüse",
    "Photography" : "Fotografie",
    "Library" : "Bibliothek",
    "Display" : "Anzeige",
    "Bag" : "Tasche",
    "Cup" : "Tasse",
    "Rocks" : "Felsen",
    "Bus" : "Bus",
    "Bowl" : "Schüssel",
    "Monitor" : "Monitor",
    "Bike" : "Fahrrad",
    "Scooter" : "Roller",
    "Camping" : "Camping",
    "Cart" : "Wagen",
    "Piggy bank" : "Sparschwein",
    "Bottle" : "Flasche",
    "Plate" : "Teller",
    "Camera" : "Kamera",
    "Camper" : "Wohnmobil",
    "Barbecue" : "Grillen",
    "Basket" : "Korb",
    "Diving" : "Tauchen",
    "Snowmobile" : "Schneemobil",
    "Bridge" : "Brücke",
    "Couch" : "Couch",
    "Theater" : "Theater",
    "Spoon" : "Löffel",
    "Comic" : "Comic",
    "Soup" : "Suppe",
    "Dessert" : "Nachtisch",
    "Bakery" : "Bäckerei",
    "Fruit" : "Frucht",
    "Pasta" : "Pasta",
    "Meat" : "Fleisch",
    "Pizza" : "Pizza",
    "Wine" : "Wein",
    "Alpine" : "Alpin",
    "Mountains" : "Berge",
    "Sand" : "Sand",
    "Wool" : "Wolle",
    "Glass" : "Glas",
    "Moment" : "Moment",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Puzzle",
    "Heritage" : "Erbe",
    "Safe" : "Safe",
    "Bucket" : "Bucket",
    "Baby" : "Baby",
    "Cradle" : "Wiege",
    "Patio" : "Terrasse",
    "Mountain" : "Berg",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Themenpark",
    "Festival" : "Festival",
    "Event" : "Ereignis",
    "Monument" : "Denkmal",
    "Balloon" : "Ballon",
    "Crib" : "Krippe",
    "Fan" : "Ventilator",
    "Gas station" : "Tankstelle",
    "Wood" : "Holf",
    "Bench" : "Bank",
    "Parking" : "Parken",
    "Traffic" : "Verkehr",
    "Public transport" : "Öffentlicher Verkehr",
    "Umbrella" : "Regenschirm",
    "Stage" : "Bühne",
    "Toy" : "Spielzeug",
    "Vase" : "Vase",
    "Mailbox" : "Briefkasten",
    "Sign" : "Signieren",
    "Gallery" : "Galerie",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
