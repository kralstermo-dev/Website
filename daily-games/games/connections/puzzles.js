// ============================================================
// CONNECTIONS - puzzle data
// Each puzzle has 4 categories of 4 words, ordered easiest -> trickiest
// (this controls which color banner a category gets when solved).
// No word should appear in more than one category within the same
// puzzle. Add more puzzles any time - the game picks one deterministically
// based on today's date, so everyone gets the same puzzle on the same day.
// ============================================================

const PUZZLES = [
  {
    categories: [
      { name: "KITCHEN APPLIANCES", words: ["TOASTER", "BLENDER", "KETTLE", "MIXER"] },
      { name: "___ BALL", words: ["BASKET", "FOOT", "BASE", "SNOW"] },
      { name: "SHADES OF BLUE", words: ["NAVY", "TEAL", "COBALT", "AZURE"] },
      { name: "TYPES OF DANCE", words: ["TANGO", "SALSA", "WALTZ", "BALLET"] },
    ],
  },
  {
    categories: [
      { name: "BODIES OF WATER", words: ["OCEAN", "LAKE", "RIVER", "POND"] },
      { name: "___ HOUSE", words: ["TREE", "GREEN", "DOG", "LIGHT"] },
      { name: "CHESS PIECES", words: ["KNIGHT", "BISHOP", "ROOK", "PAWN"] },
      { name: "WAYS TO COOK AN EGG", words: ["POACH", "SCRAMBLE", "BOIL", "FRY"] },
    ],
  },
  {
    categories: [
      { name: "PLANETS", words: ["MARS", "VENUS", "EARTH", "SATURN"] },
      { name: "___ CAKE", words: ["CUP", "PAN", "FRUIT", "SPONGE"] },
      { name: "MARTIAL ARTS", words: ["KARATE", "JUDO", "TAEKWONDO", "AIKIDO"] },
      { name: "TOOLS", words: ["HAMMER", "WRENCH", "CHISEL", "PLIERS"] },
    ],
  },
  {
    categories: [
      { name: "CARD GAME TERMS", words: ["SHUFFLE", "DEAL", "TRUMP", "BLUFF"] },
      { name: "___ STORM", words: ["BRAIN", "SAND", "THUNDER", "FIRE"] },
      { name: "TYPES OF BOATS", words: ["CANOE", "KAYAK", "YACHT", "FERRY"] },
      { name: "COFFEE ORDERS", words: ["LATTE", "MOCHA", "ESPRESSO", "CAPPUCCINO"] },
    ],
  },
  {
    categories: [
      { name: "INSECTS", words: ["BEETLE", "CRICKET", "MANTIS", "WASP"] },
      { name: "___ LIGHT", words: ["SPOT", "MOON", "DAY", "FLASH"] },
      { name: "CURRENCIES", words: ["PESO", "YEN", "EURO", "RUPEE"] },
      { name: "SHAPES", words: ["HEXAGON", "RHOMBUS", "PENTAGON", "TRAPEZOID"] },
    ],
  },
  {
    categories: [
      { name: "DOG BREEDS", words: ["POODLE", "BEAGLE", "BOXER", "HUSKY"] },
      { name: "___ FALL", words: ["WATER", "RAIN", "NIGHT", "PIT"] },
      { name: "PASTA SHAPES", words: ["PENNE", "FUSILLI", "LINGUINE", "RAVIOLI"] },
      { name: "GEMSTONES", words: ["RUBY", "OPAL", "TOPAZ", "GARNET"] },
    ],
  },
  {
    categories: [
      { name: "KEYBOARD KEYS", words: ["SHIFT", "TAB", "SPACE", "ENTER"] },
      { name: "___ BOARD", words: ["KEY", "SURF", "CARD", "CHALK"] },
      { name: "SEASONINGS", words: ["PAPRIKA", "CUMIN", "THYME", "SAGE"] },
      { name: "OLYMPIC SPORTS", words: ["FENCING", "ROWING", "DIVING", "ARCHERY"] },
    ],
  },
  {
    categories: [
      { name: "BIRDS", words: ["SPARROW", "FALCON", "TOUCAN", "HERON"] },
      { name: "___ SICK", words: ["HOME", "CAR", "SEA", "LOVE"] },
      { name: "DESSERTS", words: ["TRIFLE", "MOUSSE", "SORBET", "TIRAMISU"] },
      { name: "KNOTS", words: ["BOWLINE", "CLOVE", "SQUARE", "GRANNY"] },
    ],
  },
  {
    categories: [
      { name: "MOUNTAIN RANGES", words: ["ANDES", "ALPS", "ROCKIES", "HIMALAYAS"] },
      { name: "___ CUT", words: ["HAIR", "SHORT", "PAPER", "UNDER"] },
      { name: "HERBS", words: ["BASIL", "MINT", "DILL", "CHIVE"] },
      { name: "BOARD GAMES", words: ["CLUEDO", "RISK", "SORRY", "CHESS"] },
    ],
  },
  {
    categories: [
      { name: "TREES", words: ["OAK", "MAPLE", "BIRCH", "WILLOW"] },
      { name: "___ PRINT", words: ["FOOT", "FINGER", "BLUE", "NEWS"] },
      { name: "SUSHI TERMS", words: ["NIGIRI", "SASHIMI", "WASABI", "TEMPURA"] },
      { name: "CONSTELLATIONS", words: ["ORION", "LYRA", "DRACO", "PERSEUS"] },
    ],
  },
  {
    categories: [
      { name: "MUSICAL INSTRUMENTS", words: ["CELLO", "OBOE", "TUBA", "HARP"] },
      { name: "___ BOW", words: ["RAIN", "EL", "LONG", "CROSS"] },
      { name: "DESERTS", words: ["SAHARA", "GOBI", "MOJAVE", "ATACAMA"] },
      { name: "KNIGHTS' GEAR", words: ["SHIELD", "ARMOR", "LANCE", "HELMET"] },
    ],
  },
  {
    categories: [
      { name: "FRUITS", words: ["MANGO", "PAPAYA", "GUAVA", "LYCHEE"] },
      { name: "___ LINE", words: ["TIME", "BASE", "DEAD", "PUNCH"] },
      { name: "TYPES OF CLOUDS", words: ["CIRRUS", "CUMULUS", "STRATUS", "NIMBUS"] },
      { name: "SHOE PARTS", words: ["SOLE", "LACE", "HEEL", "TONGUE"] },
    ],
  },
  {
    categories: [
      { name: "SEA CREATURES", words: ["OCTOPUS", "STARFISH", "URCHIN", "ANEMONE"] },
      { name: "___ STONE", words: ["MILE", "LIME", "CORNER", "GEM"] },
      { name: "YOGA POSES", words: ["COBRA", "LOTUS", "WARRIOR", "BRIDGE"] },
      { name: "PUNCTUATION MARKS", words: ["COMMA", "COLON", "HYPHEN", "TILDE"] },
    ],
  },
  {
    categories: [
      { name: "WINTER SPORTS", words: ["LUGE", "CURLING", "SKIING", "SLEDDING"] },
      { name: "___ CAP", words: ["NIGHT", "KNEE", "HUB", "ICE"] },
      { name: "CHEESES", words: ["BRIE", "GOUDA", "FETA", "RICOTTA"] },
      { name: "RIVER FEATURES", words: ["DELTA", "RAPID", "BASIN", "ESTUARY"] },
    ],
  },
  {
    categories: [
      { name: "SANDWICHES", words: ["REUBEN", "GYRO", "BLT", "PANINI"] },
      { name: "___ HORN", words: ["FOG", "LONG", "SHOE", "GREEN"] },
      { name: "TYPES OF LAUGHTER", words: ["GIGGLE", "CHUCKLE", "SNICKER", "CACKLE"] },
      { name: "GARDEN TOOLS", words: ["TROWEL", "RAKE", "SPADE", "SHEARS"] },
    ],
  },
  {
    categories: [
      { name: "REPTILES", words: ["IGUANA", "GECKO", "PYTHON", "TURTLE"] },
      { name: "___ PAPER", words: ["WALL", "NEWS", "TOWEL", "TISSUE"] },
      { name: "BAR TERMS", words: ["TAP", "DRAFT", "SPIRIT", "SHOT"] },
      { name: "TYPES OF CLOCKS", words: ["SUNDIAL", "CUCKOO", "PENDULUM", "ATOMIC"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF BEANS", words: ["PINTO", "KIDNEY", "LIMA", "SOY"] },
      { name: "___ CARD", words: ["CREDIT", "POST", "GIFT", "WILD"] },
      { name: "FOOTWEAR", words: ["LOAFER", "BOOT", "SANDAL", "SNEAKER"] },
      { name: "TYPES OF ANGLE", words: ["ACUTE", "OBTUSE", "REFLEX", "STRAIGHT"] },
    ],
  },
  {
    categories: [
      { name: "BAKERY ITEMS", words: ["MUFFIN", "SCONE", "CROISSANT", "DONUT"] },
      { name: "___ DOG", words: ["HOT", "CORN", "BULL", "GUIDE"] },
      { name: "METEOROLOGY INSTRUMENTS", words: ["BAROMETER", "RADAR", "ANEMOMETER", "VANE"] },
      { name: "TYPES OF SHIPS", words: ["GALLEON", "FRIGATE", "CRUISER", "CORVETTE"] },
    ],
  },
  {
    categories: [
      { name: "CITRUS FRUITS", words: ["LIME", "LEMON", "ORANGE", "POMELO"] },
      { name: "___ FLY", words: ["DRAGON", "FIRE", "BUTTER", "HOUSE"] },
      { name: "THEATER SEATING", words: ["BOX", "BALCONY", "STALLS", "LOGE"] },
      { name: "TYPES OF ENERGY", words: ["KINETIC", "THERMAL", "NUCLEAR", "SOLAR"] },
    ],
  },
  {
    categories: [
      { name: "FARM VEHICLES", words: ["TRACTOR", "BALER", "PLOW", "HARVESTER"] },
      { name: "___ DAY", words: ["PAY", "BIRTH", "WORK", "HOLI"] },
      { name: "TYPES OF CHEESE", words: ["CHEDDAR", "SWISS", "PROVOLONE", "COLBY"] },
      { name: "LITERARY DEVICES", words: ["SIMILE", "METAPHOR", "ALLITERATION", "IRONY"] },
    ],
  },
  {
    categories: [
      { name: "HOT BEVERAGES", words: ["COFFEE", "TEA", "COCOA", "MATCHA"] },
      { name: "___ CAKE", words: ["PAN", "CUP", "SHORT", "CHEESE"] },
      { name: "TYPES OF SOILS", words: ["CLAY", "SILT", "LOAM", "SAND"] },
      { name: "PIANO PARTS", words: ["PEDAL", "KEY", "HAMMER", "DAMPER"] },
    ],
  },
  {
    categories: [
      { name: "CARPET TYPES", words: ["RUG", "MAT", "RUNNER", "SHAG"] },
      { name: "___ WAY", words: ["SUB", "HIGH", "HALL", "RUN"] },
      { name: "MEASUREMENT UNITS", words: ["GRAM", "LITER", "METER", "SECOND"] },
      { name: "GEOMETRIC SOLIDS", words: ["SPHERE", "CYLINDER", "CONE", "PRISM"] },
    ],
  },
  {
    categories: [
      { name: "DESK ACCESSORIES", words: ["STAPLER", "BLOTTER", "TAPE", "FOLDER"] },
      { name: "___ EYE", words: ["BULLS", "CAT", "FISH", "BIRD"] },
      { name: "TYPES OF POETRY", words: ["HAIKU", "SONNET", "BALLAD", "LIMERICK"] },
      { name: "CAMERA PARTS", words: ["LENS", "SHUTTER", "SENSOR", "APERTURE"] },
    ],
  },
  {
    categories: [
      { name: "SEAFOOD", words: ["SHRIMP", "CRAB", "LOBSTER", "CLAM"] },
      { name: "___ WORK", words: ["FIRE", "FRAME", "HOME", "CLOCK"] },
      { name: "TYPES OF MAPS", words: ["TOPOGRAPHIC", "ROAD", "CLIMATE", "POLITICAL"] },
      { name: "PHYSICS UNITS", words: ["JOULE", "WATT", "NEWTON", "PASCAL"] },
    ],
  },
  {
    categories: [
      { name: "DENTAL HYGIENE", words: ["BRUSH", "FLOSS", "RINSE", "PASTE"] },
      { name: "___ BOAT", words: ["ROW", "MOTOR", "TUG", "LIFE"] },
      { name: "TYPES OF WOOD", words: ["CEDAR", "PINES", "TEAK", "MAHOGANY"] },
      { name: "ARCHAEOLOGY TERMS", words: ["FOSSIL", "ARTIFACT", "STRATA", "RUIN"] },
    ],
  },
  {
    categories: [
      { name: "VEGETABLES", words: ["CARROT", "BROCCOLI", "SPINACH", "ZUCCHINI"] },
      { name: "___ RING", words: ["EAR", "KEY", "ONION", "BOXING"] },
      { name: "COIN DENOMINATIONS", words: ["PENNY", "NICKEL", "DIME", "QUARTER"] },
      { name: "TYPES OF FABRIC", words: ["SILK", "DENIM", "VELVET", "FLANNEL"] },
    ],
  },
  {
    categories: [
      { name: "EXERCISE MOVEMENTS", words: ["SQUAT", "LUNGE", "PLANK", "PUSHUP"] },
      { name: "___ BALL", words: ["DISCO", "MEAT", "CRYSTAL", "GOLF"] },
      { name: "GENRES OF MUSIC", words: ["JAZZ", "REGGAE", "FUNK", "TECHNO"] },
      { name: "CAR PARTS", words: ["ENGINE", "BRAKE", "CLUTCH", "PISTON"] },
    ],
  },
  {
    categories: [
      { name: "BEVERAGES", words: ["CIDER", "SODA", "JUICE", "MILK"] },
      { name: "___ MARK", words: ["WATER", "BENCH", "TRADE", "QUESTION"] },
      { name: "CAMPING GEAR", words: ["TENT", "LANTERN", "COMPASS", "CANTEEN"] },
      { name: "PARTS OF A BOOK", words: ["COVER", "SPINE", "INDEX", "PREFACE"] },
    ],
  },
  {
    categories: [
      { name: "FARM ANIMALS", words: ["LAMA", "DONKEY", "ROOSTER", "ALPACA"] },
      { name: "___ GLASS", words: ["HOUR", "WINE", "LOOKING", "MAGNIFYING"] },
      { name: "BREAD TYPES", words: ["BRIOCHE", "BAGUETTE", "CIABATTA", "PITA"] },
      { name: "WEATHER PHENOMENA", words: ["HAIL", "HAZE", "SLEET", "SQUALL"] },
    ],
  },
  {
    categories: [
      { name: "BATHROOM FIXTURES", words: ["SINK", "SHOWER", "TOILET", "TUB"] },
      { name: "___ ROOM", words: ["REST", "BALL", "CLASS", "WAITING"] },
      { name: "FLOWERS", words: ["ORCHID", "TULIP", "DAHLIA", "PEONY"] },
      { name: "ASTRONOMICAL BODIES", words: ["COMET", "PULSAR", "METEOR", "QUASAR"] },
    ],
  },
  {
    categories: [
      { name: "CLOTHING ITEMS", words: ["JACKET", "SKIRT", "SWEATER", "SHORTS"] },
      { name: "___ FISH", words: ["GOLD", "CAT", "CLOWN", "JELLY"] },
      { name: "TYPES OF PAINTS", words: ["ACRYLIC", "OIL", "TEMPERA", "GOUACHE"] },
      { name: "METALS", words: ["COPPER", "BRONZE", "NICKEL", "TITANIUM"] },
    ],
  },
  {
    categories: [
      { name: "SOUP TYPES", words: ["RAMEN", "GUMBO", "BISQUE", "CHOWDER"] },
      { name: "___ SHIFT", words: ["NIGHT", "STICK", "SHAPE", "GEAR"] },
      { name: "PROXIMITY MEASURES", words: ["INCH", "YARD", "FOOT", "MILE"] },
      { name: "CASTLE FEATURES", words: ["MOAT", "KEEP", "TURRET", "DRAWBRIDGE"] },
    ],
  },
  {
    categories: [
      { name: "SCHOOL SUPPLIES", words: ["BINDER", "FOLDER", "ERASER", "RULER"] },
      { name: "___ PIPE", words: ["WATER", "DRAIN", "BAG", "PEACE"] },
      { name: "TYPES OF TRIANGLES", words: ["ISOSCELES", "EQUILATERAL", "SCALENE", "RIGHT"] },
      { name: "THEATER TERMS", words: ["PROMPT", "PROPS", "CUE", "ENCORE"] },
    ],
  },
  {
    categories: [
      { name: "BREAKFAST FOODS", words: ["WAFFLE", "PANCAKE", "BACON", "OATMEAL"] },
      { name: "___ BIRD", words: ["LADY", "BLACK", "EARLY", "SONG"] },
      { name: "DENTAL TERMS", words: ["MOLAR", "CROWN", "PLAQUE", "ENAMEL"] },
      { name: "TYPES OF WIND", words: ["BREEZE", "GUST", "GALE", "ZEPHYR"] },
    ],
  },
  {
    categories: [
      { name: "OFFICE FURNITURE", words: ["DESK", "CHAIR", "CABINET", "SHELF"] },
      { name: "___ DUST", words: ["GOLD", "SAW", "STAR", "FAIRY"] },
      { name: "COCKTAIL GARNISHES", words: ["OLIVE", "TWIST", "CHERRY", "WEDGE"] },
      { name: "VOLCANO TERMS", words: ["MAGMA", "CRATER", "CALDERA", "ASH"] },
    ],
  },
  {
    categories: [
      { name: "FAST FOOD CHAINS", words: ["WENDYS", "SUBWAY", "SONIC", "ARBYS"] },
      { name: "___ RAIN", words: ["ACID", "HEAVY", "FREEZING", "FOREST"] },
      { name: "COCKTAILS", words: ["MARTINI", "MOJITO", "PALOMA", "NEGRONI"] },
      { name: "TYPES OF WHISKEY", words: ["BOURBON", "SCOTCH", "RYE", "IRISH"] },
    ],
  },
  {
    categories: [
      { name: "BEVERAGE CONTAINERS", words: ["BOTTLE", "CAN", "FLASK", "THERMOS"] },
      { name: "___ DANCE", words: ["TAP", "LAP", "POLE", "SQUARE"] },
      { name: "BARBERSHOP TOOLS", words: ["RAZOR", "SHEARS", "COMB", "TRIMMER"] },
      { name: "GREEK LETTERS", words: ["ALPHA", "DELTA", "OMEGA", "THETA"] },
    ],
  },
  {
    categories: [
      { name: "BREAD TYPES", words: ["RYE", "SORDOUGH", "BAGEL", "CHALLAH"] },
      { name: "___ TOWN", words: ["DOWN", "GHOST", "HOME", "BOOM"] },
      { name: "ASTRONOMICAL INSTRUMENTS", words: ["TELESCOPE", "SEXTANT", "SUNDIAL", "RADAR"] },
      { name: "MUSICAL TEMPOS", words: ["ALLEGRO", "PRESTO", "LENTO", "ADAGIO"] },
    ],
  },
  {
    categories: [
      { name: "CIRCUS ACTS", words: ["JUGGLER", "ACROBAT", "CLOWN", "TRAPEZE"] },
      { name: "___ COAT", words: ["RAIN", "OVER", "TOP", "TRENCH"] },
      { name: "TYPES OF BEER", words: ["LAGER", "STOUT", "PORTER", "PILSNER"] },
      { name: "FENCING TERMS", words: ["FOIL", "EPEE", "SABRE", "PARRY"] },
    ],
  },
  {
    categories: [
      { name: "COOKING METHODS", words: ["ROAST", "STEAM", "SAUTE", "GRILL"] },
      { name: "___ SHOT", words: ["HEAD", "SLAP", "SNAP", "MUG"] },
      { name: "COFFEE BREWING METHODS", words: ["DRIP", "FRENCH", "POUR", "SIPHON"] },
      { name: "TYPES OF BRIDGES", words: ["ARCH", "SUSPENSION", "TRUSS", "CABLE"] },
    ],
  },
  {
    categories: [
      { name: "DENTAL TOOLS", words: ["MIRROR", "SCALER", "DRILL", "PICK"] },
      { name: "___ BELL", words: ["DOOR", "LIBERTY", "TACO", "COW"] },
      { name: "TYPES OF PLASTICS", words: ["ACRYLIC", "NYLON", "VINYL", "TEFLON"] },
      { name: "POKER HANDS", words: ["FLUSH", "STRAIGHT", "PAIR", "FULL"] },
    ],
  },
  {
    categories: [
      { name: "FLOWERS", words: ["ROSE", "LILY", "DAISY", "VIOLET"] },
      { name: "___ COLD", words: ["ICE", "STONE", "BITTER", "FREEZING"] },
      { name: "MONOPOLY SPACES", words: ["JAIL", "GO", "CHANCE", "PARK"] },
      { name: "TYPES OF GALAXIES", words: ["SPIRAL", "ELLIPTICAL", "LENTICULAR", "IRREGULAR"] },
    ],
  },
  {
    categories: [
      { name: "KITCHEN CUTLERY", words: ["FORK", "SPOON", "KNIFE", "LADLE"] },
      { name: "___ BAND", words: ["BOY", "RUBBER", "HAIR", "HEAD"] },
      { name: "TYPES OF NUTS", words: ["ALMOND", "WALNUT", "PECAN", "CASHEW"] },
      { name: "SATELLITES OF JUPITER", words: ["IO", "EUROPA", "GANYMEDE", "CALLISTO"] },
    ],
  },
  {
    categories: [
      { name: "OFFICE SUPPLIES", words: ["PENS", "PENCIL", "MARKER", "STAPLES"] },
      { name: "___ FISH", words: ["BLOW", "STAR", "JELLY", "MONK"] },
      { name: "TYPES OF PASTRIES", words: ["ECLAIR", "DANISH", "CANOLI", "TARTE"] },
      { name: "ELEMENTS OF DESIGN", words: ["LINE", "SHAPE", "TEXTURE", "COLOR"] },
    ],
  },
  {
    categories: [
      { name: "PET ANIMALS", words: ["DOG", "CAT", "HAMSTER", "FERRET"] },
      { name: "___ PARK", words: ["THEME", "NATIONAL", "SKATE", "BALL"] },
      { name: "TYPES OF SOUPS", words: ["MISO", "MINESTRONE", "PHO", "BORTSCH"] },
      { name: "TYPES OF ANGLES", words: ["RIGHT", "ACUTE", "OBTUSE", "REFLEX"] },
    ],
  },
  {
    categories: [
      { name: "CAMPING ITEMS", words: ["TENT", "MAT", "STOVE", "TARP"] },
      { name: "___ SEA", words: ["RED", "BLACK", "DEAD", "CORAL"] },
      { name: "TYPES OF APPLES", words: ["FUJI", "GALA", "HONEYCRISP", "MCINTOSH"] },
      { name: "GEOLOGICAL ERAS", words: ["PALEOZOIC", "MESOZOIC", "CENOZOIC", "PRECAMBRIAN"] },
    ],
  },
  {
    categories: [
      { name: "TOYS", words: ["DOLL", "BLOCKS", "PUZZLE", "YOYO"] },
      { name: "___ TANK", words: ["FISH", "THINK", "GAS", "SHARK"] },
      { name: "TYPES OF TEA", words: ["GREEN", "BLACK", "OOLONG", "WHITE"] },
      { name: "TYPES OF VOLCANOES", words: ["SHIELD", "CINDER", "COMPOSITE", "FISSURE"] },
    ],
  },
  {
    categories: [
      { name: "WINTER CLOTHING", words: ["COAT", "SCARF", "GLOVES", "BEANIE"] },
      { name: "___ RING", words: ["KEY", "EAR", "DIAMOND", "BOXING"] },
      { name: "TYPES OF MUSHROOMS", words: ["MOREL", "SHIITAKE", "PORCINI", "TRUFFLE"] },
      { name: "PARTS OF A CELL", words: ["NUCLEUS", "RIBOSOME", "VACUOLE", "MEMBRANE"] },
    ],
  },
  {
    categories: [
      { name: "BEDROOM FURNITURE", words: ["BED", "DRESSER", "NIGHTSTAND", "MIRROR"] },
      { name: "___ WOOD", words: ["HOLLY", "DRIFT", "PLY", "HARD"] },
      { name: "TYPES OF NOODLES", words: ["SOBA", "UDON", "RAMEN", "SOMEN"] },
      { name: "LAYERS OF ATMOSPHERE", words: ["TROPOSPHERE", "STRATOSPHERE", "MESOSPHERE", "THERMOSPHERE"] },
    ],
  },
  {
    categories: [
      { name: "GARDEN PLANTS", words: ["FERN", "HOSTA", "IVY", "BAMBOO"] },
      { name: "___ STONE", words: ["GEM", "SAND", "LIME", "KEY"] },
      { name: "TYPES OF WINE", words: ["MERLOT", "SHIRAZ", "PINOT", "CHARDONNAY"] },
      { name: "TYPES OF LOGIC GATES", words: ["AND", "NAND", "XOR", "NOR"] },
    ],
  },
  {
    categories: [
      { name: "BATHROOM ITEMS", words: ["TOWEL", "SOAP", "SHAMPOO", "SPONGE"] },
      { name: "___ WAY", words: ["ONE", "SUB", "HALF", "HIGH"] },
      { name: "TYPES OF MEAT", words: ["BEEF", "PORK", "LAMB", "VEAL"] },
      { name: "TYPES OF SYMMETRY", words: ["BILATERAL", "RADIAL", "ROTATIONAL", "SPHERICAL"] },
    ],
  },
  {
    categories: [
      { name: "SPORTS EQUIPMENT", words: ["BALL", "BAT", "NET", "GOAL"] },
      { name: "___ ROCK", words: ["HARD", "PUNK", "BED", "MOON"] },
      { name: "TYPES OF SALADS", words: ["CAESAR", "COBB", "GREEK", "WALDORF"] },
      { name: "PARTS OF AN ATOM", words: ["PROTON", "NEUTRON", "ELECTRON", "QUARK"] },
    ],
  },
  {
    categories: [
      { name: "KITCHEN CUTTING TOOLS", words: ["SLICER", "PEELER", "GRATER", "CLEAVER"] },
      { name: "___ ROOM", words: ["REST", "BED", "LIVING", "BALL"] },
      { name: "TYPES OF COFFEE", words: ["LATTE", "MOCHA", "AMERICANO", "MACCHIATO"] },
      { name: "TYPES OF ROCKS", words: ["IGNEOUS", "SEDIMENTARY", "METAMORPHIC", "VOLCANIC"] },
    ],
  },
  {
    categories: [
      { name: "FARM CROPS", words: ["CORN", "WHEAT", "SOY", "BARLEY"] },
      { name: "___ SHINE", words: ["SUN", "MOON", "SHOE", "STAR"] },
      { name: "TYPES OF PASTA", words: ["RIGATONI", "FARFALLE", "ORZO", "MACARONI"] },
      { name: "TYPES OF ECLIPSES", words: ["SOLAR", "LUNAR", "TOTAL", "ANNULAR"] },
    ],
  },
  {
    categories: [
      { name: "CARD GAMES", words: ["POKER", "BRIDGE", "RUMMY", "SOLITAIRE"] },
      { name: "___ TRAP", words: ["MOUSE", "BEAR", "SAND", "FLY"] },
      { name: "TYPES OF PIZZA", words: ["NEAPOLITAN", "CHICAGO", "DETROIT", "SICILIAN"] },
      { name: "TYPES OF MUSCLES", words: ["SKELETAL", "CARDIAC", "SMOOTH", "DELTOID"] },
    ],
  },
  {
    categories: [
      { name: "SHOES", words: ["BOOT", "SANDAL", "LOAFER", "SNEAKER"] },
      { name: "___ STAR", words: ["ROCK", "MOVIE", "NORTH", "POLE"] },
      { name: "TYPES OF SAUCES", words: ["PESTO", "MARINARA", "ALFREDO", "HOLLANDAISE"] },
      { name: "TYPES OF NEURONS", words: ["SENSORY", "MOTOR", "INTERNEURON", "BIPOLAR"] },
    ],
  },
  {
    categories: [
      { name: "MUSICAL GENRES", words: ["ROCK", "JAZZ", "POP", "BLUES"] },
      { name: "___ BIRD", words: ["SONG", "BLUE", "BLACK", "HUMMING"] },
      { name: "TYPES OF OILS", words: ["OLIVE", "CANOLA", "SESAME", "AVOCADO"] },
      { name: "TYPES OF TIDES", words: ["HIGH", "LOW", "NEAP", "SPRING"] },
    ],
  },
  {
    categories: [
      { name: "BEACH ITEMS", words: ["TOWEL", "UMBRELLA", "SAND", "SHELL"] },
      { name: "___ LINE", words: ["BASE", "DEAD", "AIR", "MAIN"] },
      { name: "TYPES OF NUTS", words: ["HAZELNUT", "PISTACHIO", "MACADAMIA", "CHESTNUT"] },
      { name: "TYPES OF FAULTS", words: ["NORMAL", "REVERSE", "STRIKE", "TRANSFORM"] },
    ],
  },
  {
    categories: [
      { name: "SCHOOL SUBJECTS", words: ["MATH", "SCIENCE", "HISTORY", "ART"] },
      { name: "___ SIDE", words: ["OUT", "IN", "UP", "DOWN"] },
      { name: "TYPES OF VINEGAR", words: ["BALSAMIC", "CIDER", "RICE", "WINE"] },
      { name: "TYPES OF WAVES", words: ["RADIO", "MICRO", "INFRARED", "GAMMA"] },
    ],
  },
  {
    categories: [
      { name: "FURNITURE", words: ["SOFA", "TABLE", "DESK", "BED"] },
      { name: "___ DROP", words: ["RAIN", "TEAR", "EARDROP", "GUM"] },
      { name: "TYPES OF SPICES", words: ["CINNAMON", "NUTMEG", "CLOVE", "ALLSPICE"] },
      { name: "TYPES OF CELLS", words: ["STEM", "BLOOD", "NERVE", "SKIN"] },
    ],
  },
  {
    categories: [
      { name: "JEWELRY", words: ["RING", "NECKLACE", "BRACELET", "BROOCH"] },
      { name: "___ COIN", words: ["BIT", "GOLD", "FLIP", "SILVER"] },
      { name: "TYPES OF SPREADS", words: ["JAM", "BUTTER", "HUMMUS", "NUTELLA"] },
      { name: "TYPES OF RADIATION", words: ["ALPHA", "BETA", "GAMMA", "XRAY"] },
    ],
  },
  {
    categories: [
      { name: "TOOLS", words: ["DRILL", "SAW", "HAMMER", "PLIERS"] },
      { name: "___ BOARD", words: ["SURF", "CHALK", "KEY", "SKATE"] },
      { name: "TYPES OF BERRIES", words: ["STRAW", "BLUE", "RASP", "BLACK"] },
      { name: "TYPES OF TISSUES", words: ["EPITHELIAL", "CONNECTIVE", "MUSCLE", "NERVOUS"] },
    ],
  },
  {
    categories: [
      { name: "WEAPONS", words: ["SWORD", "SPEAR", "BOW", "DAGGER"] },
      { name: "___ MASK", words: ["GAS", "FACE", "SKI", "PARTY"] },
      { name: "TYPES OF MILK", words: ["WHOLE", "SKIM", "OAT", "ALMOND"] },
      { name: "TYPES OF JOINTS", words: ["BALL", "HINGE", "PIVOT", "SADDLE"] },
    ],
  },
  {
    categories: [
      { name: "BAGS", words: ["PURSE", "BACKPACK", "DUFFEL", "TOTE"] },
      { name: "___ BOAT", words: ["SAIL", "SPEED", "LIFE", "ROW"] },
      { name: "TYPES OF SQUASH", words: ["ACORN", "BUTTERNUT", "ZUCCHINI", "PUMPKIN"] },
      { name: "TYPES OF BONDS", words: ["COVALENT", "IONIC", "METALLIC", "HYDROGEN"] },
    ],
  },
  {
    categories: [
      { name: "HEADWEAR", words: ["CAP", "HAT", "HELMET", "BERET"] },
      { name: "___ CARD", words: ["GIFT", "POST", "DEBIT", "WILD"] },
      { name: "TYPES OF CITRUS", words: ["GRAPEFRUIT", "MANDARIN", "TANGERINE", "KUMQUAT"] },
      { name: "TYPES OF LEVERS", words: ["FIRST", "SECOND", "THIRD", "BALANCED"] },
    ],
  },
  {
    categories: [
      { name: "WEATHER", words: ["RAIN", "SNOW", "HAIL", "SUN"] },
      { name: "___ LIGHT", words: ["STOP", "FLASH", "MOON", "SPOT"] },
      { name: "TYPES OF DOUGHNUTS", words: ["GLAZED", "JELLY", "BOSTON", "CRULLER"] },
      { name: "TYPES OF ENZYMES", words: ["LIPASE", "AMYLASE", "LACTASE", "PEPSIN"] },
    ],
  },
  {
    categories: [
      { name: "CONTAINERS", words: ["BOX", "JAR", "CAN", "BIN"] },
      { name: "___ MATE", words: ["CLASS", "ROOM", "SOUL", "PLAY"] },
      { name: "TYPES OF PIES", words: ["APPLE", "PECAN", "PUMPKIN", "CHERRY"] },
      { name: "TYPES OF MEMORY", words: ["RAM", "ROM", "CACHE", "FLASH"] },
    ],
  },
  {
    categories: [
      { name: "INSECTS", words: ["ANT", "BEE", "FLY", "WASP"] },
      { name: "___ BALL", words: ["FOOT", "BASE", "SNOW", "DISCO"] },
      { name: "TYPES OF RICE", words: ["BASMATI", "JASMINE", "ARBORIO", "BROWN"] },
      { name: "TYPES OF CIRCUITS", words: ["SERIES", "PARALLEL", "OPEN", "CLOSED"] },
    ],
  },
  {
    categories: [
      { name: "DRINKS", words: ["WATER", "JUICE", "SODA", "MILK"] },
      { name: "___ PIPE", words: ["DRAIN", "BAG", "PEACE", "LEAD"] },
      { name: "TYPES OF MELONS", words: ["WATERMELON", "CANTALOUPE", "HONEYDEW", "CANARY"] },
      { name: "TYPES OF ACIDS", words: ["CITRIC", "SULFURIC", "HYDROCHLORIC", "ACETIC"] },
    ],
  },
  {
    categories: [
      { name: "TREES", words: ["PINE", "OAK", "MAPLE", "BIRCH"] },
      { name: "___ TOP", words: ["DESK", "LAP", "ROOF", "TABLE"] },
      { name: "TYPES OF PEPPERS", words: ["BELL", "JALAPENO", "HABANERO", "CAYENNE"] },
      { name: "TYPES OF GALAXIES", words: ["SPIRAL", "ELLIPTICAL", "BARRED", "IRREGULAR"] },
    ],
  },
  {
    categories: [
      { name: "BIRDS", words: ["EAGLE", "HAWK", "OWL", "ROBIN"] },
      { name: "___ CALL", words: ["WAKE", "ROLL", "BIRD", "CAT"] },
      { name: "TYPES OF HONEY", words: ["CLOVER", "MANUKA", "ACACIA", "WILDFLOWER"] },
      { name: "TYPES OF HORMONES", words: ["INSULIN", "ESTROGEN", "THYROXINE", "CORTISOL"] },
    ],
  },
  {
    categories: [
      { name: "FISH", words: ["SALMON", "TUNA", "TROUT", "BASS"] },
      { name: "___ NET", words: ["FISH", "HAIR", "SAFETY", "INTER"] },
      { name: "TYPES OF ONIONS", words: ["RED", "YELLOW", "SHALLOT", "SCALLION"] },
      { name: "TYPES OF ECLIPSES", words: ["LUNAR", "SOLAR", "PARTIAL", "HYBRID"] },
    ],
  },
  {
    categories: [
      { name: "VEGETABLES", words: ["CARROT", "POTATO", "ONION", "GARLIC"] },
      { name: "___ PATCH", words: ["CABBAGE", "EYE", "PUMPKIN", "ELBOW"] },
      { name: "TYPES OF SALT", words: ["SEA", "KOSHER", "HIMALAYAN", "TABLE"] },
      { name: "TYPES OF LENSES", words: ["CONCAVE", "CONVEX", "BIFOCAL", "FISHEYE"] },
    ],
  },
  {
    categories: [
      { name: "FRUITS", words: ["APPLE", "BANANA", "GRAPE", "PEACH"] },
      { name: "___ STAND", words: ["NIGHT", "GRAND", "BAND", "UNDER"] },
      { name: "TYPES OF VINEGAR", words: ["WHITE", "BALSAMIC", "RICE", "CIDER"] },
      { name: "TYPES OF ORBITS", words: ["GEOSTATIONARY", "POLAR", "LOW", "MEDIUM"] },
    ],
  },
  {
    categories: [
      { name: "ANIMALS", words: ["LION", "TIGER", "BEAR", "WOLF"] },
      { name: "___ CUT", words: ["HAIR", "SHORT", "PAPER", "CREW"] },
      { name: "TYPES OF SUGAR", words: ["CANE", "BROWN", "POWDERED", "RAW"] },
      { name: "TYPES OF VOLCANOES", words: ["ACTIVE", "DORMANT", "EXTINCT", "SHIELD"] },
    ],
  },
  {
    categories: [
      { name: "INSTRUMENTS", words: ["GUITAR", "PIANO", "DRUMS", "FLUTE"] },
      { name: "___ CASE", words: ["BRIEF", "SUIT", "BOOK", "STAIR"] },
      { name: "TYPES OF FLOUR", words: ["WHEAT", "OAT", "ALMOND", "COCONUT"] },
      { name: "TYPES OF ROCK FORMATIONS", words: ["CAVE", "ARCH", "CANYON", "PLATEAU"] },
    ],
  },
  {
    categories: [
      { name: "COLORS", words: ["RED", "BLUE", "GREEN", "YELLOW"] },
      { name: "___ BOW", words: ["RAIN", "CROSS", "LONG", "ELBOW"] },
      { name: "TYPES OF NUTS", words: ["PEANUT", "ALMOND", "WALNUT", "CASHEW"] },
      { name: "TYPES OF SOUND WAVES", words: ["ULTRASONIC", "INFRASONIC", "AUDIBLE", "SHOCK"] },
    ],
  },
  {
    categories: [
      { name: "SPORTS", words: ["SOCCER", "TENNIS", "GOLF", "HOCKEY"] },
      { name: "___ WHEEL", words: ["FERRIS", "STEERING", "CART", "PIN"] },
      { name: "TYPES OF OLIVES", words: ["KALAMATA", "CASTELVETRANO", "MANZANILLA", "NICOISE"] },
      { name: "TYPES OF PLATE BOUNDARIES", words: ["DIVERGENT", "CONVERGENT", "TRANSFORM", "SUBDUCTION"] },
    ],
  },
  {
    categories: [
      { name: "CLOTHING", words: ["SHIRT", "PANTS", "DRESS", "SKIRT"] },
      { name: "___ PIN", words: ["SAFETY", "HAIR", "BOWLING", "CLOTHES"] },
      { name: "TYPES OF STEAK", words: ["RIBEYE", "SIRLOIN", "FILET", "STRIP"] },
      { name: "TYPES OF NEBULAE", words: ["EMISSION", "REFLECTION", "DARK", "PLANETARY"] },
    ],
  },
  {
    categories: [
      { name: "VEHICLES", words: ["CAR", "TRUCK", "BUS", "BIKE"] },
      { name: "___ POINT", words: ["VIEW", "PIN", "MID", "CHECK"] },
      { name: "TYPES OF CHOCOLATE", words: ["DARK", "MILK", "WHITE", "BITTERSWEET"] },
      { name: "TYPES OF TEETH", words: ["INCISOR", "CANINE", "PREMOLAR", "MOLAR"] },
    ],
  },
  {
    categories: [
      { name: "BUILDINGS", words: ["HOUSE", "CABIN", "CASTLE", "TOWER"] },
      { name: "___ YARD", words: ["BACK", "COURT", "GRAVE", "JUNK"] },
      { name: "TYPES OF PASTA SAUCES", words: ["PESTO", "BOLOGNESE", "ALFREDO", "MARINARA"] },
      { name: "TYPES OF STARS", words: ["RED GIANT", "WHITE DWARF", "SUPERNOVA", "NEUTRON"] },
    ],
  },
  {
    categories: [
      { name: "ROOMS", words: ["KITCHEN", "BEDROOM", "BATHROOM", "LIVING"] },
      { name: "___ WORK", words: ["HOME", "FRAME", "NET", "ART"] },
      { name: "TYPES OF CHEESE", words: ["BRIE", "CHEDDAR", "SWISS", "GOUDA"] },
      { name: "TYPES OF ATMOSPHERIC LAYERS", words: ["TROPOSPHERE", "STRATOSPHERE", "MESOSPHERE", "EXOSPHERE"] },
    ],
  },
  {
    categories: [
      { name: "METALS", words: ["GOLD", "SILVER", "COPPER", "IRON"] },
      { name: "___ SET", words: ["SUN", "MIND", "HEAD", "OFF"] },
      { name: "TYPES OF BREAD", words: ["WHITE", "WHEAT", "RYE", "SOURDOUGH"] },
      { name: "TYPES OF ELEMENTARY PARTICLES", words: ["QUARK", "LEPTON", "BOSON", "GLUON"] },
    ],
  },
  {
    categories: [
      { name: "PLANETS", words: ["MARS", "VENUS", "EARTH", "JUPITER"] },
      { name: "___ SPACE", words: ["WORK", "CRAWL", "OUTER", "AIR"] },
      { name: "TYPES OF TEA", words: ["GREEN", "BLACK", "HERBAL", "WHITE"] },
      { name: "TYPES OF TECTONIC PLATES", words: ["PACIFIC", "EURASIAN", "AFRICAN", "NAZCA"] },
    ],
  },
  {
    categories: [
      { name: "SHAPES", words: ["CIRCLE", "SQUARE", "TRIANGLE", "RECTANGLE"] },
      { name: "___ FRUIT", words: ["GRAPE", "STAR", "PASSION", "JACK"] },
      { name: "TYPES OF COFFEE", words: ["ESPRESSO", "LATTE", "CAPPUCCINO", "MOCHA"] },
      { name: "TYPES OF CHEMICAL BONDS", words: ["IONIC", "COVALENT", "METALLIC", "HYDROGEN"] },
    ],
  },
  {
    categories: [
      { name: "ANCIENT CIVILIZATIONS", words: ["SUMER", "MAYA", "ROME", "EGYPT"] },
      { name: "___ WALK", words: ["BOARD", "JAY", "CAKE", "MOON"] },
      { name: "KNITTING STITCHES", words: ["PURL", "GARTER", "CABLE", "RIB"] },
      { name: "DINOSAUR NAME ENDINGS", words: ["RAPTOR", "STEGOSAURUS", "TRICERATOPS", "REX"] },
    ],
  },
  {
    categories: [
      { name: "MUSICAL NOTATION TERMS", words: ["TREBLE", "BASS", "SHARP", "FLAT"] },
      { name: "___ SHOW", words: ["SIDE", "TALK", "GAME", "ROAD"] },
      { name: "PARTS OF A CASTLE", words: ["RAMPART", "PORTCULLIS", "BATTLEMENT", "DUNGEON"] },
      { name: "KINDS OF LOCKS", words: ["PADLOCK", "DEADBOLT", "COMBINATION", "LATCH"] },
    ],
  },
  {
    categories: [
      { name: "WORLD CAPITALS", words: ["OSLO", "LIMA", "CAIRO", "ROME"] },
      { name: "___ STICK", words: ["LIP", "YARD", "JOY", "DRUM"] },
      { name: "TYPES OF DAMS", words: ["ARCH", "GRAVITY", "BUTTRESS", "EMBANKMENT"] },
      { name: "SUSHI ROLLS", words: ["CALIFORNIA", "DRAGON", "SPIDER", "RAINBOW"] },
    ],
  },
  {
    categories: [
      { name: "HAIRSTYLES", words: ["BRAID", "BUN", "PONYTAIL", "MULLET"] },
      { name: "___ FIELD", words: ["OUT", "BATTLE", "AIR", "MINE"] },
      { name: "TYPES OF ARCHERY BOWS", words: ["RECURVE", "COMPOUND", "LONGBOW", "CROSSBOW"] },
      { name: "SUBMARINE PARTS", words: ["HULL", "PERISCOPE", "BALLAST", "SONAR"] },
    ],
  },
  {
    categories: [
      { name: "ROMAN GODS", words: ["JUPITER", "MARS", "VENUS", "NEPTUNE"] },
      { name: "___ CLIP", words: ["PAPER", "HAIR", "NAIL", "MONEY"] },
      { name: "ORIGAMI FOLDS", words: ["VALLEY", "MOUNTAIN", "PETAL", "SQUASH"] },
      { name: "ICE CREAM FLAVORS", words: ["PISTACHIO", "ROCKY ROAD", "NEAPOLITAN", "SHERBET"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF PUZZLES", words: ["JIGSAW", "CROSSWORD", "SUDOKU", "REBUS"] },
      { name: "___ BOX", words: ["MAIL", "SAND", "TOOL", "JUKE"] },
      { name: "SEWING STITCHES", words: ["BACKSTITCH", "CROSS", "RUNNING", "WHIP"] },
      { name: "GOLF SCORING TERMS", words: ["BIRDIE", "BOGEY", "EAGLE", "PAR"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF TENTS", words: ["DOME", "TUNNEL", "POPUP", "TEEPEE"] },
      { name: "___ HOLE", words: ["MAN", "RABBIT", "KEY", "POT"] },
      { name: "PIRATE TERMS", words: ["PLUNDER", "BOOTY", "MUTINY", "PLANK"] },
      { name: "PARTS OF A SAILBOAT", words: ["MAIN", "JIB", "SPINNAKER", "GENOA"] },
    ],
  },
  {
    categories: [
      { name: "MYTHICAL CREATURES", words: ["DRAGON", "GRIFFIN", "PHOENIX", "UNICORN"] },
      { name: "___ KEEPER", words: ["GOAL", "BEE", "ZOO", "GATE"] },
      { name: "ARCHITECTURE STYLES", words: ["GOTHIC", "BAROQUE", "MODERN", "RUSTIC"] },
      { name: "KINDS OF TAXES", words: ["INCOME", "SALES", "PROPERTY", "ESTATE"] },
    ],
  },
  {
    categories: [
      { name: "BRANCHES OF SCIENCE", words: ["BIOLOGY", "CHEMISTRY", "PHYSICS", "GEOLOGY"] },
      { name: "___ MILL", words: ["WIND", "TREAD", "SAW", "WATER"] },
      { name: "TYPES OF ROPE", words: ["HEMP", "NYLON", "BRAIDED", "TWISTED"] },
      { name: "DESSERT TOPPINGS", words: ["SPRINKLES", "WHIP", "FUDGE", "CARAMEL"] },
    ],
  },
  {
    categories: [
      { name: "CONSTELLATIONS", words: ["URSA", "CASSIOPEIA", "PEGASUS", "HERCULES"] },
      { name: "___ WATCH", words: ["STOP", "WRIST", "NIGHT", "BIRD"] },
      { name: "TYPES OF SANDALS", words: ["FLIP FLOP", "GLADIATOR", "ESPADRILLE", "SLIDE"] },
      { name: "KITCHEN TOOLS", words: ["SCALE", "CUP", "THERMOMETER", "TIMER"] },
    ],
  },
  {
    categories: [
      { name: "ROLLER COASTER ELEMENTS", words: ["LOOP", "DROP", "CORKSCREW", "LAUNCH"] },
      { name: "___ PACK", words: ["BACK", "SIX", "WOLF", "ICE"] },
      { name: "SWIMMING STROKES", words: ["FREESTYLE", "BACKSTROKE", "BUTTERFLY", "BREASTSTROKE"] },
      { name: "TYPES OF KITES", words: ["DIAMOND", "DELTA", "BOX", "PARAFOIL"] },
    ],
  },
  {
    categories: [
      { name: "EMOTIONS", words: ["JOY", "ANGER", "FEAR", "SURPRISE"] },
      { name: "___ RAY", words: ["X", "STING", "GAMMA", "MANTA"] },
      { name: "TYPES OF PRINTING", words: ["LETTERPRESS", "OFFSET", "SCREEN", "DIGITAL"] },
      { name: "PARTS OF A GUITAR", words: ["FRET", "BRIDGE", "NECK", "TUNER"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF CACTI", words: ["SAGUARO", "BARREL", "PRICKLY PEAR", "CHOLLA"] },
      { name: "___ WORM", words: ["BOOK", "EARTH", "SILK", "TAPE"] },
      { name: "TYPES OF COMPASSES", words: ["MAGNETIC", "GYRO", "SOLAR", "DRAWING"] },
      { name: "ORCHESTRA SECTIONS", words: ["STRINGS", "BRASS", "WOODWIND", "PERCUSSION"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF OCEAN WAVES", words: ["TSUNAMI", "SWELL", "RIPPLE", "BREAKER"] },
      { name: "___ ACHE", words: ["HEAD", "TOOTH", "STOMACH", "HEART"] },
      { name: "CHESS OPENINGS", words: ["SICILIAN", "FRENCH", "ITALIAN", "ENGLISH"] },
      { name: "TYPES OF TICKETS", words: ["PARKING", "LOTTERY", "RAFFLE", "MOVIE"] },
    ],
  },
  {
    categories: [
      { name: "ART SUPPLIES", words: ["EASEL", "PALETTE", "CANVAS", "SMOCK"] },
      { name: "___ TIME", words: ["BED", "LUNCH", "HALF", "OVER"] },
      { name: "TYPES OF ICE SKATING", words: ["FIGURE", "SPEED", "HOCKEY", "SYNCHRONIZED"] },
      { name: "TYPES OF ANCHORS", words: ["DANFORTH", "PLOW", "MUSHROOM", "GRAPNEL"] },
    ],
  },
  {
    categories: [
      { name: "SPICE RACK STAPLES", words: ["OREGANO", "TURMERIC", "CORIANDER", "FENNEL"] },
      { name: "___ SAW", words: ["JIG", "CHAIN", "SEE", "HACK"] },
      { name: "TYPES OF DRUMS", words: ["SNARE", "BONGO", "TIMPANI", "DJEMBE"] },
      { name: "WEIGHTLIFTING MOVEMENTS", words: ["DEADLIFT", "CLEAN", "SNATCH", "JERK"] },
    ],
  },
  {
    categories: [
      { name: "FAMOUS MOUNTAIN PEAKS", words: ["EVEREST", "DENALI", "KILIMANJARO", "MATTERHORN"] },
      { name: "___ OUT", words: ["WORK", "HANG", "BLACK", "TIME"] },
      { name: "TYPES OF ICE CREAM CONES", words: ["SUGAR", "WAFFLE", "CAKE", "WAFER"] },
      { name: "BALLET TERMS", words: ["PLIE", "RELEVE", "PIROUETTE", "ARABESQUE"] },
    ],
  },
  {
    categories: [
      { name: "CANDY TYPES", words: ["TAFFY", "FUDGE", "TOFFEE", "NOUGAT"] },
      { name: "___ MARKET", words: ["SUPER", "FLEA", "BLACK", "STOCK"] },
      { name: "JUGGLING PROPS", words: ["BALL", "CLUB", "RING", "DIABOLO"] },
      { name: "WRESTLING MOVES", words: ["SUPLEX", "BODYSLAM", "HEADLOCK", "PILEDRIVER"] },
    ],
  },
  {
    categories: [
      { name: "HOUSEPLANTS", words: ["POTHOS", "SUCCULENT", "MONSTERA", "PHILODENDRON"] },
      { name: "___ WORTHY", words: ["NEWS", "TRUST", "PRAISE", "BLAME"] },
      { name: "BREWING TERMS", words: ["STEEP", "INFUSE", "FERMENT", "DISTILL"] },
      { name: "PARTS OF A VIOLIN", words: ["BOW", "BRIDGE", "SCROLL", "CHINREST"] },
    ],
  },
  {
    categories: [
      { name: "DESERT ANIMALS", words: ["CAMEL", "SCORPION", "LIZARD", "COYOTE"] },
      { name: "___ SPRING", words: ["HOT", "BED", "MAIN", "OFF"] },
      { name: "TYPES OF SAND DUNES", words: ["BARCHAN", "STAR", "LINEAR", "PARABOLIC"] },
      { name: "PHOTOGRAPHY TERMS", words: ["EXPOSURE", "ISO", "APERTURE", "FOCUS"] },
    ],
  },
];
