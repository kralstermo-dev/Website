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
      { name: "___ WORK", words: ["HOME", "FRAME", "NET", "ART"] },
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
      { name: "___ POINT", words: ["VIEW", "PIN", "MID", "CHECK"] },
      { name: "TYPES OF LAUGHTER", words: ["GIGGLE", "CHUCKLE", "SNICKER", "CACKLE"] },
      { name: "GARDEN TOOLS", words: ["TROWEL", "RAKE", "SPADE", "SHEARS"] },
    ],
  },
];
