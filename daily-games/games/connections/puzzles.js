// ============================================================
// CONNECTIONS - puzzle data
// Each puzzle has 4 categories of 4 words, ordered easiest -> trickiest
// (this controls which color banner a category gets when solved).
// No word should appear in more than one category within the same
// puzzle. Add more puzzles any time - the game picks one deterministically
// based on today's date, so everyone gets the same puzzle on the same day.
// A puzzle may have at most one "___ X" fill-in-the-blank category;
// it's fine for a puzzle to have none.
// ============================================================

// ------------------------------------------------------------
//  {
//      categories: [
//        { name: "CATEGORIE1", words: ["WORD1", "WORD2", "WORD3", "WORD4"] },
//        { name: "CATEGORIE2", words: ["WORD1", "WORD2", "WORD3", "WORD4"] },
//        { name: "CATEGORIE3", words: ["WORD1", "WORD2", "WORD3", "WORD4"] },
//        { name: "CATEGORIE4", words: ["WORD1", "WORD2", "WORD3", "WORD4"] },
//      ],
//    },
// ------------------------------------------------------------

const PUZZLES = [
  {
    categories: [
      { name: "KITCHEN APPLIANCES", words: ["TOASTER", "BLENDER", "KETTLE", "MIXER"] },
      { name: "ZODIAC SIGNS", words: ["ARIES", "TAURUS", "GEMINI", "LEO"] },
      { name: "SHADES OF BLUE", words: ["NAVY", "TEAL", "COBALT", "AZURE"] },
      { name: "TYPES OF DANCE", words: ["TANGO", "SALSA", "WALTZ", "BALLET"] },
    ],
  },
  {
    categories: [
      { name: "CLASSIC AMERICAN PERFORMANCE CARS", words: ["CORVETTE", "FIREBIRD", "MUSTANG", "VIPER"] },
      { name: "FEATURES OF A MIME COSTUME", words: ["BERET", "GLOVES", "STRIPES", "SUSPENDERS"] },
      { name: "___ HEART", words: ["ARTICHOKE", "PURPLE", "SACRED", "TAKE TO"] },
      { name: "CANDY BARS PLUS A LETTER", words: ["DOVES", "MARSH", "SKORT", "TWIXT"] },
    ],
  },
  {
    categories: [
      { name: "QUITE THE SAGA", words: ["FABRICATION", "FISH STORY", "TALL TALE", "YARN"] },
      { name: "PARTS OF A BRA", words: ["CUP", "HOOK", "STRAP", "UNDERWIRE"] },
      { name: "ASSOCIATED WITH PINE TREES", words: ["CAR AIR FRESHENER", "CHRISTMAS", "NEEDLES", "TURPENTINE"] },
      { name: "STARTING WITH DISNEY CHARACTERS", words: ["PLUTONIUM", "SCAR TISSUE", "STITCH MARKER", "TRAMPOLINE"] },
    ],
  },
  {
    categories: [
      { name: "UNRESTRICTED PERMISSION", words: ["BLANK CHECK", "CARTE BLANCHE", "FREE REIN", "FULL AUTHORITY"] },
      { name: "PLACES TO INSERT SOMETHING INTO ON A COMPUTER", words: ["CARD SLOT", "HEADPHONE JACK", "OPTICAL DRIVE", "USB PORT"] },
      { name: "ABBREVIATIONS FOLLOWED BY REDUNDANT WORD", words: ["ATM MACHINE", "LCD DISPLAY", "PIN NUMBER", "UPC CODE"] },
      { name: "ENDING WITH WAYS TO CARVE A SURFACE", words: ["COURT SCRIBE", "DIRECTOR'S CUT", "PIZZA SLICE", "SAT SCORE"] },
    ],
  },
  {
    categories: [
      { name: "MOVE UNSTEADILY", words: ["SWAY", "TODDLE", "TOTTER", "WOBBLE"] },
      { name: "BIRD ONOMATOPOEIA", words: ["COO", "GOBBLE", "HONK", "WARBLE"] },
      { name: "___HEAD", words: ["BOBBLE", "HAMMER", "JUG", "SLEEPY"] },
      { name: "DESSERTS MINUS LAST LETTER", words: ["COBBLE", "PI", "TAR", "TORT"] },
    ],
  },
  {
    categories: [
      { name: "SPHERICAL THINGS", words: ["BOWLING BALL", "EYE", "MOON", "ORANGE"] },
      { name: "FOOD WHOSE NAME IS TWO FOODS", words: ["CAKE DONUT", "CANDY CORN", "CHERRY TOMATO", "PIZZA PIE"] },
      { name: "KINDS OF EELS", words: ["CONGER", "GULPER", "MORAY", "RIBBON"] },
      { name: "ACCESSORIES INSIDE STARTING AND ENDING LETTERS", words: ["CRINGY", "OPINE", "STIED", "THAT'S"] },
    ],
  },
  {
    categories: [
      { name: "TWO SHAKES OF A LAMB'S TAIL", words: ["BLINK", "FLASH", "HEARTBEAT", "TRICE"] },
      { name: "SHADES OF RED", words: ["CARMINE", "CINNABAR", "MAROON", "VERMILLION"] },
      { name: "TOY CAR BRANDS", words: ["HOT WHEELS", "MATCHBOX", "MICRO MACHINES", "TONKA"] },
      { name: "SPREADSHEET FUNCTIONS", words: ["AVERAGE", "COUNT", "MAX", "SUM"] },
    ],
  },
  {
    categories: [
      { name: "FLABBERGAST", words: ["DAZZLE", "FLOOR", "STUN", "WOW"] },
      { name: "THINGS IN A VIOLIN CASE", words: ["BOW", "MUTE", "ROSIN", "SHOULDER REST"] },
      { name: "___ DOGS (THAT ARE DOGS)", words: ["HUNTING", "RESCUE", "SAUSAGE", "SHEEP"] },
      { name: "___ DOGS (THAT AREN'T DOGS)", words: ["CORN", "PRAIRIE", "SALTY", "TOP"] },
    ],
  },
  {
    categories: [
      { name: "\"I PROMISE!\"", words: ["CROSS MY HEART", "FOR REAL", "ON GOD", "PINKY SWEAR"] },
      { name: "LONG, SKINNY THINGS OFTEN SEEN TOGETHER", words: ["ARROW", "GOLF CLUB", "PICK-UP STICK", "SPAGHETTO"] },
      { name: "PRIVATE INVESTIGATORS OF FICTION", words: ["HERCULE POIROT", "MIKE HAMMER", "SAM SPADE", "SHERLOCK HOLMES"] },
      { name: "STARTING WITH WORDS OF INTENTION", words: ["AIMEE MANN", "HOPE DIAMOND", "PLANETARIUM", "WISHY-WASHY"] },
    ],
  },
  {
    categories: [
      { name: "THINGS THAT COME IN TUBES", words: ["LIPSTICK", "POSTER", "TENNIS BALLS", "TOOTHPASTE"] },
      { name: "WARNINGS ON A SHIPPING BOX", words: ["FRAGILE", "HEAVY", "PERISHABLE", "THIS SIDE UP"] },
      { name: "HISTORICAL SOVEREIGN TITLES", words: ["CALIPH", "KHAN", "PHARAOH", "SHOGUN"] },
      { name: "___ BOWL", words: ["DUST", "POKE", "SALAD", "SUPER"] },
    ],
  },
  {
    categories: [
      { name: "EXERCISE FACILITIES", words: ["GYMNASIUM", "HEALTH CLUB", "REC CENTER", "YMCA"] },
      { name: "WINE ACCESSORIES", words: ["AERATOR", "CORKSCREW", "DECANTER", "STOPPER"] },
      { name: "BRANDS WITH BUNNY RABBIT MASCOTS", words: ["CADBURY", "ENERGIZER", "PLAYBOY", "TRIX"] },
      { name: "WORDS ON AN OLD WEST WANTED POSTER", words: ["ALIAS", "OUTLAW", "REWARD", "WANTED"] },
    ],
  },
  {
    categories: [
      { name: "UNDER THE HOOD OF A CAR", words: ["ALTERNATOR", "BATTERY", "ENGINE", "RADIATOR"] },
      { name: "KINDS OF SALAD", words: ["CHOPPED", "GREEK", "HOUSE", "WEDGE"] },
      { name: "KEYBOARD KEYS", words: ["CONTROL", "ESCAPE", "SHIFT", "SPACE"] },
      { name: "STARTING WITH FIGURES FROM GREEK MYTH", words: ["AT LAST", "HERALD", "HYDRANT", "TRITONE"] },
    ],
  },
  {
    categories: [
      { name: "BEDTIME PARTING WORDS", words: ["NIGHT", "REST EASY", "SLEEP TIGHT", "SWEET DREAMS"] },
      { name: "PALINDROMES", words: ["MOM", "NOON", "SIS", "TOP SPOT"] },
      { name: "MODERN ADD-ONS/COMBINING FORMS", words: ["BRO", "CODED", "ERA", "MAXXING"] },
      { name: "TOP OF THE ___", words: ["HOUR", "LINE", "MORNING", "POPS"] },
    ],
  },
  {
    categories: [
      { name: "ELECTRIC THINGS", words: ["ELECTRIC EEL", "LIGHTNING", "LIVE WIRE", "PIKACHU"] },
      { name: "MOVED TO TEARS", words: ["CHOKED UP", "EMOTIONAL", "MISTY", "OVERCOME"] },
      { name: "SHADES OF GRAY", words: ["ASH", "DOVE", "PEWTER", "SLATE"] },
      { name: "MUSIC GENRE PLUS STARTING LETTER", words: ["BROCK", "NEMO", "SPUNK", "WRAP"] },
    ],
  },
  {
    categories: [
      { name: "\"THERE YOU HAVE IT!\"", words: ["BEHOLD", "PRESTO", "SHAZAM", "VOILÀ"] },
      { name: "KNACK", words: ["FORTE", "GIFT", "STRENGTH", "TALENT"] },
      { name: "WHAT \"P\" MIGHT STAND FOR", words: ["PAGE", "PARK", "PHOSPHORUS", "PIANO"] },
      { name: "KEY ___", words: ["CHAIN", "LARGO", "LIME", "SIGNATURE"] },
    ],
  },
  {
    categories: [
      { name: "SURFACE-LEVEL", words: ["COSMETIC", "ONE-DIMENSIONAL", "SKIN-DEEP", "SUPERFICIAL"] },
      { name: "SCI-FI PHENOMENA", words: ["HYPERSPACE", "PARALLEL UNIVERSE", "TELEPORTATION", "TIME WARP"] },
      { name: "STEPHEN KING FILM ADAPTATIONS, WITH \"THE\"", words: ["GREEN MILE", "LONG WALK", "RUNNING MAN", "SHAWSHANK REDEMPTION"] },
      { name: "ENDING IN ICE CREAM ORDERS", words: ["HARLEM SHAKE", "INSIDE SCOOP", "LICKETY-SPLIT", "TRAFFIC CONE"] },
    ],
  },
  {
    categories: [
      { name: "FISH", words: ["MULLET", "PIKE", "SOLE", "TANG"] },
      { name: "PRINCIPAL", words: ["ARCH", "CHIEF", "MAIN", "PRIME"] },
      { name: "PRO-WRESTLING LINGO", words: ["FACE", "HEEL", "JOBBER", "KAYFABE"] },
      { name: "LETTER HOMOPHONE PLUS TENNIS TERM", words: ["BESET", "DESERVE", "EX-LOVE", "EYELET"] },
    ],
  },
  {
    categories: [
      { name: "POTENTIALLY EXPLOSIVE THINGS", words: ["POWDER KEG", "TIME BOMB", "TINDERBOX", "VOLCANO"] },
      { name: "DOUBLE VOWELS", words: ["ANTIFREEZE", "BAZAAR", "SKIING", "VACUUM"] },
      { name: "MADE WITH POTATOES", words: ["HOME FRIES", "POTATO BATTERY", "VICHYSSOISE", "VODKA"] },
      { name: "HOUSEHOLD STAIN REMOVERS", words: ["BAKING SODA", "CLUB SODA", "HYDROGEN PEROXIDE", "VINEGAR"] },
    ],
  },
  {
    categories: [
      { name: "CARPENTRY TOOLS", words: ["CHISEL", "HAMMER", "PLANE", "SAW"] },
      { name: "KINDS OF MELON", words: ["BITTER", "MUSK", "WATER", "WINTER"] },
      { name: "GARDEN HOSE SETTINGS", words: ["CONE", "JET", "MIST", "SHOWER"] },
      { name: "___ GIRLS OF POP CULTURE", words: ["GILMORE", "GOLDEN", "MEAN", "SPICE"] },
    ],
  },
  {
    categories: [
      { name: "THINGS MOST ANIMALS NEED", words: ["NUTRITION", "OXYGEN", "SLEEP", "WATER"] },
      { name: "CALLS TO BEGIN A PERFORMANCE", words: ["ACTION", "CURTAIN UP", "PLACES", "SHOWTIME"] },
      { name: "___ KIDS", words: ["COMEBACK", "KARATE", "SUNDANCE", "WIMPY"] },
      { name: "ONCE IN A ___", words: ["BLUE MOON", "GENERATION", "LIFETIME", "WHILE"] },
    ],
  },
  {
    categories: [
      { name: "KINDS OF PIZZA", words: ["DIAVOLA", "HAWAIIAN", "MEAT LOVERS", "WHITE"] },
      { name: "KINDS OF NUMBERS", words: ["ATOMIC", "SERIAL", "SOCIAL SECURITY", "TELEPHONE"] },
      { name: "SIMILARLY SHAPED TYPOGRAPHICAL MARKS", words: ["APOSTROPHE", "CEDILLA", "COMMA", "OKINA"] },
      { name: "STARTING WITH CHINESE ZODIAC ANIMALS", words: ["DRAGONFLY", "OXFORD", "PIGMENT", "RATCHET"] },
    ],
  },
  {
    categories: [
      { name: "PIECE OF CAKE", words: ["BREEZE", "CINCH", "PICNIC", "SNAP"] },
      { name: "CONCEAL", words: ["BLANKET", "HIDE", "MASK", "OBSCURE"] },
      { name: "WORDS BEFORE \"BALL\" IN SPORT NAMES", words: ["BASE", "BASKET", "FOOT", "PICKLE"] },
      { name: "HOMOPHONES OF CGI-ANIMATED FILMS", words: ["ANTS", "COCOA", "RHEO", "SEOUL"] },
    ],
  },
  {
    categories: [
      { name: "SEEN AT A MOVIE PREMIERE", words: ["LIMOUSINE", "PAPARAZZI", "RED CARPET", "VELVET ROPE"] },
      { name: "PJS", words: ["PETROLEUM JELLY", "POETIC JUSTICE", "PRACTICAL JOKE", "PRIVATE JET"] },
      { name: "THINGS THAT ARE ORANGE", words: ["BASKETBALL", "ORANGUTAN", "SWEET POTATO", "TRAFFIC CONE"] },
      { name: "THINGS THAT ARE GRITTY", words: ["COWBOY COFFEE", "FILM NOIR", "FLYERS MASCOT", "SANDPAPER"] },
    ],
  },
  {
    categories: [
      { name: "VIDEO CALL PLATFORMS", words: ["HUDDLE", "MEET", "TEAMS", "ZOOM"] },
      { name: "SPREADSHEET FEATURES", words: ["FORMULA", "FUNCTION", "MACRO", "SCRIPT"] },
      { name: "FIRST NAMES OF COUNTRY MUSIC LEGENDS", words: ["DOLLY", "JOHNNY", "PATSY", "WILLIE"] },
      { name: "STARTING WITH PETS", words: ["BIRDIE", "CATTLE", "DOGIE", "FISHEYE"] },
    ],
  },
  {
    categories: [
      { name: "MUSICAL PERFORMANCE", words: ["CONCERT", "GIG", "SET", "SHOW"] },
      { name: "PARTICIPANT", words: ["ACTOR", "AGENT", "PARTY", "PLAYER"] },
      { name: "FAMILY RELATIONSHIP MODIFIERS", words: ["GRAND", "GREAT", "HALF", "STEP"] },
      { name: "DESCRIPTORS FOR OUR HUMAN ANCESTORS", words: ["FROM NEANDER", "HANDY", "UPRIGHT", "WISE"] },
    ],
  },
  {
    categories: [
      { name: "EXHAUSTED", words: ["BEAT", "FRIED", "SPENT", "WORN OUT"] },
      { name: "SEGMENT", words: ["LEG", "PHASE", "STAGE", "STRETCH"] },
      { name: "ENDING IN UNITS OF LENGTH", words: ["CHAMOMILE", "GRINCH", "HOTFOOT", "LANYARD"] },
      { name: "ENDING IN SYNONYMS FOR FOLLOW SECRETLY", words: ["BEANSTALK", "EYESHADOW", "HIGHTAIL", "SOUNDTRACK"] },
    ],
  },
  {
    categories: [
      { name: "BLACK-AND-YELLOW", words: ["BUMBLEBEE", "CAUTION TAPE", "CHARLIE BROWN", "WOLVERINE"] },
      { name: "PLACES WHERE EVERYONE THINKS THE SAME WAYS", words: ["BUBBLE", "ECHO CHAMBER", "HIVEMIND", "SILO"] },
      { name: "COMIC BOOK ARTIST'S TOOLS", words: ["BRISTOL BOARD", "DIP PEN", "INDIA INK", "STRAIGHTEDGE"] },
      { name: "TRIANGLE LOGOS", words: ["BASS ALE", "CITGO", "DELTA AIRLINES", "GOOGLE DRIVE"] },
    ],
  },
  {
    categories: [
      { name: "PERSEVERE", words: ["CARRY ON", "CONTINUE", "MAKE IT", "PERSIST"] },
      { name: "MOVE SLOWLY (UP TO)", words: ["CREEP", "EASE", "EDGE", "INCH"] },
      { name: "AIRLINE STATUS PERKS", words: ["CHECKED BAGS", "LOUNGE", "MILES", "UPGRADE"] },
      { name: "\"COLD\" THINGS, IN IDIOMS", words: ["COMFORT", "FEET", "SHOULDER", "TURKEY"] },
    ],
  },
  {
    categories: [
      { name: "HOLD ONTO, AS A FEELING", words: ["FOSTER", "HARBOR", "MAINTAIN", "NURSE"] },
      { name: "KINDS OF FROGS", words: ["BULL", "GREEN", "POISON DART", "TREE"] },
      { name: "NBC SITCOM SURNAMES", words: ["BENES", "BING", "LEMON", "SCOTT"] },
      { name: "STARTING WITH AFFIRMATIVE RESPONSES", words: ["FINE PRINT", "GOODBYE", "GREAT WHITE", "OKAYAMA"] },
    ],
  },
  {
    categories: [
      { name: "DOOMED", words: ["DONE", "SUNK", "THROUGH", "TOAST"] },
      { name: "BASIC CABLE CHANNELS", words: ["BET", "BRAVO", "HISTORY", "USA"] },
      { name: "WORDS IN AN AUCTIONEER'S CHANT", words: ["GOING", "ONCE", "SOLD", "TWICE"] },
      { name: "HOMOPHONES OF FACIAL FEATURES", words: ["AYE", "HARE", "KNOWS", "TUNG"] },
    ],
  },
  {
    categories: [
      { name: "HAPHAZARDLY", words: ["ANY OLD HOW", "AT RANDOM", "HELTER-SKELTER", "WILLY-NILLY"] },
      { name: "WAYS TO RECEIVE EVENT TICKETS", words: ["MAIL DELIVERY", "MOBILE TICKET", "PRINT-AT-HOME", "WILL CALL"] },
      { name: "SECTIONS ON AN INVOICE", words: ["BALANCE DUE", "BILL TO", "ORDER NUMBER", "UNIT PRICE"] },
      { name: "FAMOUS GOATEES", words: ["BILLY GOAT", "COLONEL SANDERS", "DOCTOR STRANGE", "THE DEVIL"] },
    ],
  },
  {
    categories: [
      { name: "TAKE A DIFFERENT APPROACH", words: ["CHANGE TACK", "COURSE-CORRECT", "RECALIBRATE", "SHIFT GEARS"] },
      { name: "CLASSIC CHILDREN'S BOOKS", words: ["CAPS FOR SALE", "CORDUROY", "GOODNIGHT MOON", "MADELINE"] },
      { name: "MOVIE SUBGENRES", words: ["BUDDY COP", "NEO-NOIR", "SPACE OPERA", "SPAGHETTI WESTERN"] },
      { name: "THINGS PEOPLE TRY TO GET OUT OF", words: ["BAD DREAM", "ESCAPE ROOM", "JURY DUTY", "LABYRINTH"] },
    ],
  },
  {
    categories: [
      { name: "QUAINT EXPRESSIONS OF EXCITEMENT", words: ["HOT DOG", "HURRAH", "WHOOPEE", "YAHOO"] },
      { name: "CONVEY", words: ["COUCH", "EXPRESS", "FRAME", "PHRASE"] },
      { name: "WORDS ABBREVIATED WITH LETTERS AS HOMOPHONES", words: ["CUTIE", "EASY", "EFFECTS", "I OWE YOU"] },
      { name: "SAFETY ___", words: ["BELT", "GOGGLES", "PIN", "RAZOR"] },
    ],
  },
  {
    categories: [
      { name: "COMPONENTS OF A CANDLE", words: ["FRAGRANCE", "JAR", "WAX", "WICK"] },
      { name: "COLD THINGS", words: ["LIQUID NITROGEN", "REFRIGERATOR", "SNOW", "SUNDAE"] },
      { name: "PARTS OF AN ELEVATOR", words: ["BUTTONS", "CABLES", "MOTOR", "SHAFT"] },
      { name: "STARTING WITH MALE ANIMALS", words: ["BUCKYBALL", "JACKPOT", "RAMBO", "TOMATILLO"] },
    ],
  },
  {
    categories: [
      { name: "CLASSIC WOODEN TOYS", words: ["ALPHABET BLOCKS", "CUP-AND-BALL", "JACOB'S LADDER", "LINCOLN LOGS"] },
      { name: "PLACES WITH LANES", words: ["BOWLING ALLEY", "FREEWAY", "SUPERMARKET", "SWIMMING POOL"] },
      { name: "ICONIC ROMAN LANDMARKS", words: ["COLOSSEUM", "PANTHEON", "SPANISH STEPS", "TREVI FOUNTAIN"] },
      { name: "PLACES WITH NETS", words: ["BARCLAYS CENTER", "FISHING BOAT", "HOCKEY RINK", "TENNIS COURT"] },
    ],
  },
  {
    categories: [
      { name: "NAVIGATE", words: ["DRIVE", "MANEUVER", "PILOT", "STEER"] },
      { name: "JEANS BRANDS", words: ["DIESEL", "GAP", "LUCKY", "WRANGLER"] },
      { name: "HOUSE STYLES", words: ["CAPE COD", "MISSION", "RANCH", "TUDOR"] },
      { name: "WHAT \"STOCK\" MIGHT REFER TO", words: ["BROTH", "CATTLE", "INVESTMENT", "MERCHANDISE"] },
    ],
  },
  {
    categories: [
      { name: "LONG CYLINDRICAL THINGS", words: ["CIGARETTE", "FOAM ROLLER", "POOL NOODLE", "PRETZEL ROD"] },
      { name: "ICONIC NYC SIGHTS", words: ["BODEGA", "PIGEON", "SUBWAY STATION", "TAXI CAB"] },
      { name: "THINGS WITH PEDALS", words: ["PIANO", "SEWING MACHINE", "SWAN BOAT", "UNICYCLE"] },
      { name: "V-SHAPED THINGS", words: ["ANGLE BRACKET", "CHEVRON", "GOOSE FORMATION", "PEACE SIGN"] },
    ],
  },
  {
    categories: [
      { name: "ROAD LESS TRAVELED", words: ["ALLEY", "BACKSTREET", "BYWAY", "LANE"] },
      { name: "SHADES OF GREEN", words: ["FOREST", "HUNTER", "MINT", "SAGE"] },
      { name: "\"Y\" IS THE ONLY VOWEL", words: ["FLY BY", "MYRRH", "NSYNC", "RHYTHM"] },
      { name: "STARTING WITH SYNONYMS FOR \"PESTER\"", words: ["BUG FIX", "NAG CHAMPA", "NEEDLESS", "TEA SET"] },
    ],
  },
  {
    categories: [
      { name: "FILLER WORDS", words: ["ACTUALLY", "LIKE", "SO", "WELL"] },
      { name: "BY MEANS OF", words: ["BY", "PER", "THROUGH", "VIA"] },
      { name: "___ MODE", words: ["AIRPLANE", "BEAST", "DARK", "À LA"] },
      { name: "U.S. AIRPORT CODES PLUS STARTING LETTER", words: ["ASEA", "FLAX", "LORD", "OLGA"] },
    ],
  },
  {
    categories: [
      { name: "BEDDING", words: ["COMFORTER", "SHAM", "SHEET", "THROW"] },
      { name: "OSCAR-WINNING ACTORS SINCE 2010", words: ["BALE", "JORDAN", "PHOENIX", "WALTZ"] },
      { name: "PERFORM SOME HOLE MACHINING OPERATIONS", words: ["BORE", "COUNTERSINK", "DRILL", "REAM"] },
      { name: "STARTING WITH BREAD SHAPES", words: ["BOULEVARD", "BUNDLE", "LOAFER", "ROLLS-ROYCE"] },
    ],
  },
  {
    categories: [
      { name: "CONSTRUCT", words: ["FASHION", "MODEL", "MOLD", "SHAPE"] },
      { name: "SUPER MARIO FIGURES", words: ["DINOSAUR", "MUSHROOM", "PLUMBER", "PRINCESS"] },
      { name: "FRUITS PLUS STARTING LETTER", words: ["DAPPLE", "JDATE", "SLIME", "SPEAR"] },
      { name: "STARTING WITH MERRIMENTS", words: ["CHEERIOS", "FUNGUS", "GLEEK", "JOYSTICK"] },
    ],
  },
  {
    categories: [
      { name: "VIRTUOUS", words: ["FAIR", "GOOD", "JUST", "RIGHT"] },
      { name: "ACTIVITIES WITH MULTIPLE BALLS", words: ["BEER PONG", "BINGO", "JUGGLING", "POOL"] },
      { name: "CRUISE LINES", words: ["CARNIVAL", "CELEBRITY", "PRINCESS", "VIKING"] },
      { name: "ON THE ___, TO MEAN \"PRECISE\"", words: ["DOT", "MARK", "MONEY", "NOSE"] },
    ],
  },
  {
    categories: [
      { name: "FASTENERS", words: ["NAIL", "RIVET", "SCREW", "STAPLE"] },
      { name: "NONDESCRIPT", words: ["BASIC", "MID", "PLAIN", "VANILLA"] },
      { name: "UNITS OF WISDOM", words: ["GEM", "NUGGET", "PEARL", "WORD"] },
      { name: "___BOARDS IN A CLASSROOM", words: ["BLACK", "CHALK", "CORK", "WHITE"] },
    ],
  },
  {
    categories: [
      { name: "COMMAND", words: ["CAPTAIN", "DIRECT", "HEAD", "LEAD"] },
      { name: "HOW DO YOU LIKE THEM APPLES", words: ["EMPIRE", "FUJI", "GALA", "HONEYCRISP"] },
      { name: "SHOE BRANDS STARTING WITH \"C\"", words: ["CAMPER", "CLARKS", "CONVERSE", "CROCS"] },
      { name: "STARTING WITH PALINDROMIC NAMES", words: ["ANNAPOLIS", "BOBSLED", "EVEREST", "OTTOMAN"] },
    ],
  },
  {
    categories: [
      { name: "GYMNASTICS APPARATUS", words: ["BEAM", "HORSE", "RINGS", "VAULT"] },
      { name: "LONG TAPERED THINGS", words: ["CARROT", "ICICLE", "KNITTING NEEDLE", "STALACTITE"] },
      { name: "KINDS OF SHIFTS", words: ["DOPPLER", "GRAVEYARD", "PARADIGM", "STICK"] },
      { name: "ICONS ON A SHOPPING SITE", words: ["BELL", "CART", "HEART", "MAGNIFYING GLASS"] },
    ],
  },
  {
    categories: [
      { name: "BABY MILESTONES", words: ["CRAWLING", "FIRST WORDS", "ROLLING OVER", "SOLID FOOD"] },
      { name: "OUTMODED CONSUMER TECH", words: ["BLACKBERRY", "DISCMAN", "DVD PLAYER", "PLASMA TV"] },
      { name: "EXPRESSIONS FOR RAIN", words: ["APRIL SHOWERS", "LIQUID SUNSHINE", "SCOTCH MIST", "WET WEATHER"] },
      { name: "WHAT \"SHELL\" MIGHT REFER TO", words: ["CARAPACE", "GAS STATION", "PASTRY CRUST", "ROWING BOAT"] },
    ],
  },
  {
    categories: [
      { name: "SPANISH RELATIVES", words: ["ABUELA", "HIJO", "MADRE", "PRIMO"] },
      { name: "START TO CRY, WITH \"UP\"", words: ["CHOKE", "MIST", "TEAR", "WELL"] },
      { name: "AFRICAN CURRENCIES", words: ["KWANZA", "LEONE", "NAIRA", "RAND"] },
      { name: "STRIP ___", words: ["CLUB", "MALL", "POKER", "STEAK"] },
    ],
  },
  {
    categories: [
      { name: "TALK AT LENGTH", words: ["BABBLE", "DRONE", "RAMBLE", "YAK"] },
      { name: "OUTCOMES FOR A BATTER", words: ["HOME RUN", "SINGLE", "STRIKEOUT", "WALK"] },
      { name: "BRING TO MIND, AS A MEMORY", words: ["JOG", "PROMPT", "REFRESH", "SPARK"] },
      { name: "HOMOPHONES OF RELIGIOUS ROLES", words: ["CANTER", "FRYER", "LLAMA", "NONE"] },
    ],
  },
  {
    categories: [
      { name: "SPHERICAL THINGS", words: ["BASEBALL", "GLOBE", "MARBLE", "ORANGE"] },
      { name: "IN AN ANXIOUS STATE", words: ["EXCITED", "FEBRILE", "FRENETIC", "INTENSE"] },
      { name: "PARTS OF AN AIRPORT", words: ["APRON", "HANGAR", "RUNWAY", "TERMINAL"] },
      { name: "ENDING IN GEOMETRY TERMS", words: ["APPOINT", "DEPLANE", "FELINE", "JANGLE"] },
    ],
  },
  {
    categories: [
      { name: "SYMPTOMS OF AN ALLERGIC REACTION", words: ["HIVES", "ITCHING", "RASH", "REDNESS"] },
      { name: "ON A GOLF SCORECARD", words: ["HOLE", "PAR", "SCORE", "STROKES"] },
      { name: "PLATFORM-SPECIFIC POSTS", words: ["PINS", "SNAPS", "TWEETS", "VINES"] },
      { name: "FEATURES OF A ZEBRA", words: ["HOOVES", "MANE", "TAIL", "WHITE STRIPES"] },
    ],
  },
  {
    categories: [
      { name: "KINDS OF TOPS", words: ["CROP", "HALTER", "TANK", "TUBE"] },
      { name: "SOFTWARE DOWNLOADS", words: ["APP", "DRIVER", "EXTENSION", "PLUGIN"] },
      { name: "ELEMENTS OF A MUSICAL", words: ["BOOK", "LYRICS", "MUSIC", "ORCHESTRATION"] },
      { name: "TELE___", words: ["GRAM", "KINESIS", "PROMPTER", "VISION"] },
    ],
  },
  {
    categories: [
      { name: "ANNOUNCE", words: ["BLARE", "HERALD", "SOUND", "TRUMPET"] },
      { name: "THINGS TO CLICK", words: ["BUTTON", "ICON", "LINK", "MENU"] },
      { name: "ASSOCIATED WITH PEARLS", words: ["BUBBLE TEA", "OYSTER", "SWINE", "WISDOM"] },
      { name: "STARTING WITH ALCOHOLIC BEVERAGES", words: ["ALEXA", "MEADOW", "PORTOBELLO", "SAKES"] },
    ],
  },
  {
    categories: [
      { name: "CIRCUIT COMPONENTS", words: ["BREAKER", "FUSE", "RELAY", "SWITCH"] },
      { name: "DIGITAL COUPLING VERBS", words: ["CONNECT", "JOIN", "PAIR", "SYNC"] },
      { name: "THINGS TOILETS DO", words: ["DRAIN", "FLUSH", "REFILL", "SWIRL"] },
      { name: "___ FACE EXPRESSIONS", words: ["GAME", "LONG", "POKER", "STRAIGHT"] },
    ],
  },
  {
    categories: [
      { name: "COMMIT A BASKETBALL VIOLATION", words: ["CARRY", "DOUBLE DRIBBLE", "GOALTEND", "TRAVEL"] },
      { name: "BELIEF", words: ["ATTITUDE", "MIND", "OPINION", "VIEW"] },
      { name: "THINGS TRACKED IN VIDEO GAMES", words: ["HEALTH", "LIVES", "SCORE", "TIME"] },
      { name: "WORDS AFTER \"POP\"", words: ["CULTURE", "FLY", "QUIZ", "TART"] },
    ],
  },
  {
    categories: [
      { name: "GRAND FINALE", words: ["EPILOGUE", "FAREWELL", "LAST DANCE", "SWAN SONG"] },
      { name: "SEEN IN AN ARCADE", words: ["CRANE GAME", "PINBALL", "TICKETS", "TOKENS"] },
      { name: "FOUR GROUPS OF FOUR", words: ["CARDINAL DIRECTIONS", "CLASSICAL ELEMENTS", "SEASONS", "SUITS"] },
      { name: "ENDING IN PARTS OF A CAR", words: ["PLOT SPOILER", "ROBIN HOOD", "SATIRES", "TREE TRUNK"] },
    ],
  },
  {
    categories: [
      { name: "SKINCARE PRODUCTS", words: ["CLAY MASK", "EYE CREAM", "PEEL", "TONER"] },
      { name: "SHADES OF BLACK", words: ["CHARCOAL", "INK", "JET", "PITCH"] },
      { name: "ASSOCIATED WITH PRECISION", words: ["BULLSEYE", "CLOCKWORK", "LASER", "NEEDLE"] },
      { name: "STARTING WITH TINY MARKS", words: ["DOT MATRIX", "PERIOD PIECE", "POINT BREAK", "SPOT REMOVER"] },
    ],
  },
  {
    categories: [
      { name: "TERMS FOR THE LEGAL SYSTEM", words: ["BAR", "BENCH", "COURT", "TRIBUNAL"] },
      { name: "THINGS WITH LACES", words: ["BASEBALL GLOVE", "CORSET", "FOOTBALL", "SHOE"] },
      { name: "KINDS OF SPORTS", words: ["EXTREME", "MOTOR", "RACKET", "WATER"] },
      { name: "WORDS BEFORE \"ROOM\" TO INDICATE EXTRA SPACE", words: ["BREATHING", "ELBOW", "HEAD", "WIGGLE"] },
    ],
  },
  {
    categories: [
      { name: "CONTRACT", words: ["AGREEMENT", "BARGAIN", "DEAL", "UNDERSTANDING"] },
      { name: "EDIT MENU OPTIONS", words: ["COPY", "CUT", "DELETE", "PASTE"] },
      { name: "KINDS OF BASKETS", words: ["EASTER", "GROCERY", "LAUNDRY", "PICNIC"] },
      { name: "SYMBOLIZED WITH ARROWS", words: ["RECYCLING", "SHUFFLE", "THIS SIDE UP", "U-TURN"] },
    ],
  },
  {
    categories: [
      { name: "INTERROGATE", words: ["EXAMINE", "GRILL", "PUMP", "QUESTION"] },
      { name: "THINGS WITH HANDLES", words: ["BUCKET", "DRAWER", "MUG", "UMBRELLA"] },
      { name: "FICTIONAL CATS", words: ["FIGARO", "PUSS", "SALEM", "TOM"] },
      { name: "STARTING WITH SMOOCHES", words: ["BUSSIN", "KISSER", "PECKISH", "SMACKDOWN"] },
    ],
  },
  {
    categories: [
      { name: "REPRODUCTIVE PART OF FRUIT", words: ["PIP", "PIT", "SEED", "STONE"] },
      { name: "BIT OF FRUIT-FLAVORED CANDY", words: ["DOT", "NERD", "RUNT", "SPREE"] },
      { name: "VERBS IN A COLLEGE LIFE SLOGAN", words: ["PARTY", "REPEAT", "SLEEP", "STUDY"] },
      { name: "STARTS OF U.S. CAPITALS", words: ["DEN", "MAD", "PHO", "SAC"] },
    ],
  },
  {
    categories: [
      { name: "CIRCUS EQUIPMENT", words: ["CANNON", "STILTS", "TRAPEZE", "UNICYCLE"] },
      { name: "UNDISTURBED, AS WATER", words: ["CALM", "FLAT", "GLASSY", "STILL"] },
      { name: "\"TOY STORY\" CHARACTERS", words: ["BO PEEP", "JESSIE", "SLINKY", "WOODY"] },
      { name: "DOUBLE LETTERS APPEARING IN THAT LETTER'S ALPHABETICAL POSITION", words: ["AARDVARK", "BOCCE", "EBBING", "TWIDDLE"] },
    ],
  },
  {
    categories: [
      { name: "SMARTPHONE SETTINGS", words: ["AIRPLANE MODE", "DO NOT DISTURB", "HOTSPOT", "LOCATION SERVICES"] },
      { name: "DESSERT MENU DESCRIPTORS", words: ["DECADENT", "FRESH-BAKED", "MOLTEN", "À LA MODE"] },
      { name: "80S SYNTH-POP BANDS", words: ["DEPECHE MODE", "ERASURE", "NEW ORDER", "PET SHOP BOYS"] },
      { name: "STARTING WITH BASEBALL CALLS", words: ["BALL GOWN", "OUTKAST", "SAFE MODE", "STRIKE A POSE"] },
    ],
  },
  {
    categories: [
      { name: "NON-ALCOHOLIC DESIGNATORS", words: ["NA", "SPIRIT-FREE", "VIRGIN", "ZERO-PROOF"] },
      { name: "MUSIC PUBLICATIONS", words: ["BILLBOARD", "PITCHFORK", "ROLLING STONE", "SPIN"] },
      { name: "KINDS OF RUGS", words: ["PERSIAN", "PRAYER", "SHAG", "THROW"] },
      { name: "PONTIAC MODELS", words: ["FIREBIRD", "G6", "GRAND PRIX", "TRANS AM"] },
    ],
  },
  {
    categories: [
      { name: "CUT INTO THIN PIECES", words: ["GRATE", "PLANE", "SHAVE", "SLIVER"] },
      { name: "MOTIF", words: ["DRIFT", "PLOT", "THEME", "THREAD"] },
      { name: "GUITAR-PLAYING TECHNIQUES", words: ["PICK", "PLUCK", "STRUM", "TAP"] },
      { name: "HOUSE OF ___", words: ["CARDS", "LORDS", "WAX", "WORSHIP"] },
    ],
  },
  {
    categories: [
      { name: "ROOMS IN CLUE", words: ["CONSERVATORY", "HALL", "KITCHEN", "STUDY"] },
      { name: "STUDENT-ATHLETE DESIGNATIONS", words: ["ALL-AMERICAN", "JOCK", "LETTERMAN", "TEAM CAPTAIN"] },
      { name: "___ TWIST", words: ["FRENCH", "LEMON", "OLIVER", "PLOT"] },
      { name: "ENDING IN \"SESAME STREET\" CHARACTERS", words: ["BERNIE", "COLBERT", "DISCOUNT", "SAN ANSELMO"] },
    ],
  },
  {
    categories: [
      { name: "STUNNING NEWS", words: ["BOMBSHELL", "REVELATION", "SHOCKER", "THUNDERBOLT"] },
      { name: "SCIENCE FAIR MODEL SUBJECTS", words: ["ATOM", "DNA", "SOLAR SYSTEM", "VOLCANO"] },
      { name: "ACME PRODUCTS USED BY WILE E. COYOTE", words: ["EARTHQUAKE PILLS", "IRON BIRD SEED", "ROCKET SKATES", "TNT"] },
      { name: "STARTING WITH DATING APPS", words: ["BUMBLEBEE", "GRIND RAIL", "MATCHA", "TINDERBOX"] },
    ],
  },
  {
    categories: [
      { name: "GRANOLA INGREDIENTS", words: ["HONEY", "NUTS", "OATS", "SEEDS"] },
      { name: "PAYMENT METHODS", words: ["CARD", "CASH", "CHECK", "WIRE"] },
      { name: "AMEX CARD TYPES", words: ["CENTURION", "GOLD", "GREEN", "PLATINUM"] },
      { name: "WHAT \"W\" MIGHT STAND FOR", words: ["TUNGSTEN", "WEST", "WIN", "WITH"] },
    ],
  },
  {
    categories: [
      { name: "PERSIST", words: ["CONTINUE", "LAST", "LINGER", "STAY"] },
      { name: "KINDS OF POEMS", words: ["BALLAD", "EPIC", "ODE", "VILLANELLE"] },
      { name: "TROPICAL DRINKS", words: ["HURRICANE", "PAINKILLER", "SCORPION", "ZOMBIE"] },
      { name: "SWEET ___", words: ["DREAMS", "NOTHINGS", "PEA", "SPOT"] },
    ],
  },
  {
    categories: [
      { name: "POSITIVE FEELINGS", words: ["BLISS", "FELICITY", "HAPPINESS", "WARM FUZZIES"] },
      { name: "RETRO EXPRESSIONS OF APPROVAL", words: ["COOL BEANS", "FAR OUT", "GROOVY", "RIGHT ON"] },
      { name: "BAD THINGS TO GIVE SOMEONE", words: ["COLD SHOULDER", "DIRTY LOOK", "HARD TIME", "RUNAROUND"] },
      { name: "WHAT THINGS PRONOUNCED \"T\" MIGHT REFER TO", words: ["GOLF ACCESSORY", "GOSSIP", "HOT DRINK", "SHIRT"] },
    ],
  },
  {
    categories: [
      { name: "THEY IMPERSONATE OTHER THINGS", words: ["COPYCAT", "MIME", "MOCKINGBIRD", "T-1000"] },
      { name: "OLD-TIMEY NAMES FOR THINGS WE STILL USE", words: ["LOOKING GLASS", "SPECTACLES", "TALKIE", "WATER CLOSET"] },
      { name: "STARTING WITH NICKNAMES", words: ["BILLY GOAT", "DAN DAN NOODLES", "RICH TEXT", "TOM-TOM"] },
      { name: "STARTING WITH SPORTS VENUES", words: ["COURT JESTER", "DIAMOND RING", "FIELD MOUSE", "TRACK RECORD"] },
    ],
  },
  {
    categories: [
      { name: "THINGS NAMED AFTER PLACES", words: ["CHAMPAGNE", "CHINA", "COLOGNE", "LIMERICK"] },
      { name: "BEST PICTURE WINNERS/NOMINEES", words: ["CASABLANCA", "CHICAGO", "FARGO", "MUNICH"] },
      { name: "PLACES IN COCKTAIL NAMES", words: ["CUBA", "LONG ISLAND", "MOSCOW", "SINGAPORE"] },
      { name: "STARTING WITH COUNTRIES", words: ["DOMINICAN REPUBLIC", "GUINEA-BISSAU", "INDIANAPOLIS", "NIGERIA"] },
    ],
  },
  {
    categories: [
      { name: "DIVIDING STRUCTURES", words: ["FENCE", "GATE", "HEDGE", "WALL"] },
      { name: "PARTICIPATE IN SOME WINTER OLYMPICS", words: ["CURL", "LUGE", "SKATE", "SKI"] },
      { name: "COMMON RECYCLABLES", words: ["BOTTLE", "BOX", "CAN", "NEWSPAPER"] },
      { name: "WHAT \"DRAFT\" MIGHT REFER TO", words: ["BREEZE", "ON TAP", "RECRUIT", "SKETCH"] },
    ],
  },
  {
    categories: [
      { name: "OLD TIMEY TROUBLEMAKERS", words: ["MISCREANT", "ROGUE", "RUFFIAN", "SCOUNDREL"] },
      { name: "CONSUME WITH GUSTO", words: ["CRUSH", "GUZZLE", "INHALE", "SNARF"] },
      { name: "PARTS OF A SPEAKER", words: ["CABINET", "CONE", "MAGNET", "WOOFER"] },
      { name: "ENDING IN PARTS OF A TREE", words: ["EMBARK", "GROOT", "NUDIBRANCH", "STRUNK"] },
    ],
  },
  {
    categories: [
      { name: "HIGH-QUALITY", words: ["CHOICE", "FINE", "PRIME", "SELECT"] },
      { name: "SIGNALS TO COMMENCE", words: ["BEGIN", "GO", "NOW", "START"] },
      { name: "ACCESSORIES FOR A GUITARIST", words: ["CAPO", "PICK", "SLIDE", "STRAP"] },
      { name: "THEY HAVE BOARDS", words: ["CHESS", "CORPORATION", "DARTS", "SURFER"] },
    ],
  },
  {
    categories: [
      { name: "MONOPOLY SQUARES", words: ["BOARDWALK", "INCOME TAX", "SHORT LINE", "WATER WORKS"] },
      { name: "COMPONENTS OF A FASHION SHOW", words: ["CATWALK", "COLLECTION", "DESIGNER", "MODEL"] },
      { name: "COMMONLY STRIPED THINGS", words: ["BARBER POLE", "BILLIARD BALL", "CREDIT CARD", "CROSSWALK"] },
      { name: "ENDING IN HORSE GAITS", words: ["DECANTER", "ENVELOPE", "FIREWALK", "FOXTROT"] },
    ],
  },
  {
    categories: [
      { name: "CRUNCHY SNACK ITEM", words: ["CHIP", "CRACKER", "NUT", "PRETZEL"] },
      { name: "VARIOUS AMOUNTS OF WOOD", words: ["BOARD", "LOG", "SPLINTER", "TREE"] },
      { name: "AREAS OF LOW GROUND", words: ["DALE", "DELL", "GORGE", "HOLLOW"] },
      { name: "COLORS PLUS A LETTER", words: ["BRONZER", "PINKY", "REDO", "TANG"] },
    ],
  },
  {
    categories: [
      { name: "COMPUTER PERIPHERALS", words: ["MICROPHONE", "MONITOR", "PRINTER", "TRACKPAD"] },
      { name: "TIGHTLY PACKED", words: ["COMPACT", "COMPRESSED", "DENSE", "SQUASHED"] },
      { name: "HAZARDOUS ELEMENTAL METALS", words: ["FRANCIUM", "LEAD", "MERCURY", "POLONIUM"] },
      { name: "STARTING WITH BIRD HOMOPHONES", words: ["CRANIUM", "CROQUETTE", "DUCTILE", "HOCKEY"] },
    ],
  },
  {
    categories: [
      { name: "PROG BANDS", words: ["GENESIS", "KING CRIMSON", "PINK FLOYD", "RUSH"] },
      { name: "CLASSIC WEDDING GIFTS", words: ["CHINA", "LUGGAGE", "MONEY", "TOASTER"] },
      { name: "RED CHARACTERS", words: ["CLIFFORD", "DEADPOOL", "KOOL-AID MAN", "MR. KRABS"] },
      { name: "RHYMING COMPOUND WORDS", words: ["CHICK FLICK", "HELTER SKELTER", "HUMPTY DUMPTY", "MUMBO JUMBO"] },
    ],
  },
  {
    categories: [
      { name: "DANCE STYLES", words: ["FOXTROT", "MODERN", "SWING", "TAP"] },
      { name: "IN A MONOPOLY BOX", words: ["DEED", "HOTEL", "MONEY", "TOKEN"] },
      { name: "CONTENT SORTING OPTIONS ONLINE", words: ["FEATURED", "POPULAR", "RECENT", "TRENDING"] },
      { name: "THINGS WITH MANTLES/MANTELS", words: ["EARTH", "EMPEROR", "FIREPLACE", "YANKEES"] },
    ],
  },
  {
    categories: [
      { name: "DOMINANT", words: ["ALPHA", "HEAD", "LEAD", "PRIMARY"] },
      { name: "MULTIPLICATION INDICATORS", words: ["BY", "TIMES", "X", "●"] },
      { name: "PRONUNCIATION DESCRIPTORS", words: ["SHORT", "SILENT", "SOFT", "STRESSED"] },
      { name: "STARTING WITH EXPLOSIVE ONOMATOPOEIA", words: ["BANGKOK", "BOOMER", "POPSICLE", "POWDER"] },
    ],
  },
  {
    categories: [
      { name: "PRECIPITATION", words: ["DRIZZLE", "RAIN", "SHOWERS", "SPRINKLES"] },
      { name: "BOWLS OVER", words: ["FLOORS", "ROCKS", "STUNS", "SURPRISES"] },
      { name: "NBC SITCOMS", words: ["COMMUNITY", "FRIENDS", "SCRUBS", "WINGS"] },
      { name: "STARTING WITH KINDS OF INSULTS", words: ["BARBADOS", "DIGGITY", "DISSECT", "SLAPDASH"] },
    ],
  },
  {
    categories: [
      { name: "FEATURING SILENT AND PRONOUNCED \"K\"S", words: ["JACKKNIFE", "KNAPSACK", "KNICKS", "KNOCK-KNOCK"] },
      { name: "ENDORSE", words: ["BACK", "BOLSTER", "CHAMPION", "SUPPORT"] },
      { name: "KINDS OF CHAIRS", words: ["BEANBAG", "RECLINER", "ROCKER", "STOOL"] },
      { name: "WORDS REPEATED IN HIT SONG TITLES", words: ["JUMPIN'", "LOUIE", "NEW YORK", "REBEL"] },
    ],
  },
  {
    categories: [
      { name: "UMAMI-RICH FOODS", words: ["MISO PASTE", "PARMESAN", "SOY SAUCE", "VEGEMITE"] },
      { name: "THINGS A BEGINNER MIGHT LEARN ON THE PIANO", words: ["CHOPSTICKS", "FÜR ELISE", "HEART AND SOUL", "THE ENTERTAINER"] },
      { name: "STARTING WITH MAGAZINES", words: ["FORTUNE COOKIE", "PEOPLE PERSON", "SPINDERELLA", "TIME MACHINE"] },
      { name: "ENDING IN SYNONYMS FOR \"AGGREGATE\"", words: ["COINCIDENTALLY", "DIM SUM", "TEETOTAL", "VISCOUNT"] },
    ],
  },
  {
    categories: [
      { name: "FITNESS CLASS TYPES", words: ["AEROBICS", "BARRE", "BOOTCAMP", "PILATES"] },
      { name: "DEMEANOR", words: ["ATTITUDE", "BEARING", "CARRIAGE", "PRESENCE"] },
      { name: "PEACE ACTIVISTS", words: ["GANDHI", "KING", "MANDELA", "TUTU"] },
      { name: "TOOLS MINUS LAST TWO LETTERS", words: ["HAMM", "JIGS", "PLIE", "WREN"] },
    ],
  },
  {
    categories: [
      { name: "ALCOVE", words: ["CAVITY", "NICHE", "NOOK", "RECESS"] },
      { name: "BODILY WORDS FOR ATTITUDE", words: ["CHEEK", "LIP", "MOUTH", "NERVE"] },
      { name: "FIGURES IN GREEK MYTH", words: ["CALLIOPE", "ECHO", "IRIS", "NEMESIS"] },
      { name: "STARTING WITH SYNONYMS FOR \"ILK\"", words: ["CLASSIC", "KINDLE", "SORTIE", "TYPEFACE"] },
    ],
  },
  {
    categories: [
      { name: "CREAMY SALAD DRESSINGS", words: ["BLUE CHEESE", "CAESAR", "GREEN GODDESS", "RANCH"] },
      { name: "ATTENDANTS", words: ["COURT", "ENTOURAGE", "RETINUE", "SUITE"] },
      { name: "RARE THINGS, IDIOMATICALLY", words: ["BLACK SWAN", "BLUE MOON", "PERFECT STORM", "UNICORN"] },
      { name: "WHAT \"HOOPS\" MIGHT REFER TO", words: ["BASKETBALL", "EARRINGS", "RED TAPE", "RHYTHMIC GYMNASTICS GEAR"] },
    ],
  },
  {
    categories: [
      { name: "STAYING POWER", words: ["LEGS", "MOMENTUM", "STAMINA", "TRACTION"] },
      { name: "GET READY FOR A NIGHT OUT", words: ["ACCESSORIZE", "CHANGE", "PRIMP", "SHOWER"] },
      { name: "CHINESE ZODIAC ANIMALS", words: ["DOG", "DRAGON", "HORSE", "SNAKE"] },
      { name: "FLOWERS", words: ["ANEMONE", "LARKSPUR", "MONKSHOOD", "PHLOX"] },
    ],
  },
  {
    categories: [
      { name: "CLASSIC SLAPSTICK PROPS", words: ["BANANA PEEL", "CREAM PIE", "RUBBER CHICKEN", "SELTZER BOTTLE"] },
      { name: "THINGS THAT SPIN", words: ["GLOBE", "GRINDSTONE", "GYROSCOPE", "ROULETTE WHEEL"] },
      { name: "FEATURED IN \"ALICE'S ADVENTURES IN WONDERLAND\"", words: ["CATERPILLAR", "POCKET WATCH", "RABBIT HOLE", "TEA PARTY"] },
      { name: "WHAT \"MA\" MIGHT REFER TO", words: ["MASSACHUSETTS", "MASTER OF ARTS", "MILLIAMPERE", "MOTHER"] },
    ],
  },
  {
    categories: [
      { name: "SEEN AT A TEA SERVICE", words: ["SAUCER", "SPOON", "TEACUP", "TONGS"] },
      { name: "ENDURING SONG", words: ["CLASSIC", "HIT", "OLDIE", "STANDARD"] },
      { name: "USED IN MOVIE PRACTICAL EFFECTS", words: ["MAKEUP", "MINIATURE", "PROSTHETIC", "PUPPET"] },
      { name: "WORDS BEFORE \"STORY\" IN MOVIE TITLES", words: ["CHRISTMAS", "NEVERENDING", "TOY", "WEST SIDE"] },
    ],
  },
  {
    categories: [
      { name: "STARTING WITH INCANTATIONS", words: ["CHARM BRACELET", "CURSE WORD", "HEX KEY", "SPELL CHECKER"] },
      { name: "STARTING WITH ANIMAL GROUP NAMES", words: ["MURDER MYSTERY", "PACK RAT", "PRIDE ROCK", "SCHOOL DAYS"] },
      { name: "STARTING WITH SYNONYMS FOR \"REPEAT\"", words: ["COPY EDITOR", "ECHO PARK", "MIRROR SELFIE", "QUOTE UNQUOTE"] },
      { name: "STARTING WITH PARTS OF A RIVER", words: ["BANK TELLER", "BED HEAD", "DELTA AIRLINES", "MOUTH GUARD"] },
    ],
  },
  {
    categories: [
      { name: "PARTS OF A WORKOUT ROUTINE", words: ["BALANCE", "CARDIO", "STRETCHING", "WEIGHTS"] },
      { name: "THINGS WITH HORNS", words: ["BRASS BAND", "DEVIL", "RHINO", "VIKING HELMET"] },
      { name: "HOMOPHONES OF SUVS", words: ["BRONCHO", "FORERUNNER", "TROUPER", "UCONN"] },
      { name: "PAYMENT APPS MINUS A LETTER", words: ["ELLE", "PAPAL", "STRIP", "VENO"] },
    ],
  },
  {
    categories: [
      { name: "TECHNIQUE", words: ["FASHION", "MANNER", "METHOD", "WAY"] },
      { name: "GROSS THINGS THAT FORM ON WET SURFACES", words: ["CRUST", "FILM", "SCUM", "SKIN"] },
      { name: "PARTS OF A THEATER", words: ["CATWALK", "PIT", "STAGE", "WINGS"] },
      { name: "COUNTED IN DOCUMENT WORD COUNTS", words: ["CHARACTER", "LINE", "PAGE", "WORD"] },
    ],
  },
  {
    categories: [
      { name: "SYMBOLS OF INNOCENCE", words: ["ANGEL", "BABE", "DOVE", "LAMB"] },
      { name: "THINGS YOU'RE NOT SUPPOSED TO REVEAL", words: ["PASSWORD", "SECRET", "SPOILER", "SURPRISE"] },
      { name: "THINGS REPRESENTED IN SUPERSCRIPT", words: ["ASTERISK", "DEGREE", "EXPONENT", "TRADEMARK"] },
      { name: "SLANG FOR MUSICAL INSTRUMENTS", words: ["AXE", "BONE", "KEYS", "SKINS"] },
    ],
  },
  {
    categories: [
      { name: "LANDFORMS BY WATER", words: ["DELTA", "ISLAND", "ISTHMUS", "PENINSULA"] },
      { name: "SLANG FOR HEAD", words: ["COCONUT", "DOME", "MELON", "PATE"] },
      { name: "THINGS THAT CAN BE SPIKED", words: ["MOHAWK", "PUNCH", "SEA URCHIN", "VOLLEYBALL"] },
      { name: "\"THE ___ MAN\" MOVIES", words: ["ELEPHANT", "INVISIBLE", "OMEGA", "RUNNING"] },
    ],
  },
  {
    categories: [
      { name: "TRANSLUCENT, AS FABRIC", words: ["GAUZY", "GOSSAMER", "SHEER", "THIN"] },
      { name: "SPEAK", words: ["EXPRESS", "STATE", "UTTER", "VOICE"] },
      { name: "DEMOLISH", words: ["GUT", "LEVEL", "TOTAL", "TRASH"] },
      { name: "MUSIC GENRE SUFFIXES", words: ["CORE", "POP", "STEP", "WAVE"] },
    ],
  },
  {
    categories: [
      { name: "PILLAR", words: ["POLE", "POST", "SHAFT", "STAKE"] },
      { name: "INDICATE, AS EMOTIONS", words: ["BETRAY", "DISPLAY", "EXPRESS", "REGISTER"] },
      { name: "KINDS OF LIZARDS", words: ["BASILISK", "DRAGON", "MONITOR", "SKINK"] },
      { name: "___ TABLE", words: ["DINNER", "DRAFTING", "ROUND", "TIMES"] },
    ],
  },
  {
    categories: [
      { name: "ASSOCIATED WITH HANSEL AND GRETEL", words: ["BREADCRUMB", "FOREST", "OVEN", "WITCH"] },
      { name: "BIT OF CEREAL", words: ["CLUSTER", "FLAKE", "LOOP", "PUFF"] },
      { name: "DEMI MOORE MOVIES", words: ["DISCLOSURE", "GHOST", "STRIPTEASE", "THE SUBSTANCE"] },
      { name: "ENDING IN METHODS OF TRANSPORTATION", words: ["INCUBUS", "OSCAR", "QUATRAIN", "SITUATIONSHIP"] },
    ],
  },
  {
    categories: [
      { name: "PAINTING MEDIA", words: ["ACRYLIC", "GOUACHE", "OIL", "TEMPERA"] },
      { name: "ESPRIT", words: ["GUSTO", "PANACHE", "VERVE", "VINEGAR"] },
      { name: "STARTS OF CLASSIC HIP-HOP GROUPS", words: ["BEASTIE", "PUBLIC", "RUN", "SALT"] },
      { name: "GHOST ___", words: ["KITCHEN", "PEPPER", "TOWN", "WRITER"] },
    ],
  },
  {
    categories: [
      { name: "KINDS OF RICE", words: ["BROWN", "JASMINE", "STICKY", "SUSHI"] },
      { name: "GUMMY BEAR DESCRIPTORS", words: ["COLORFUL", "GUMMY", "SUGARY", "URSINE"] },
      { name: "SAVORY STUFFED PASTRIES", words: ["EMPANADA", "FATAYER", "PASTY", "SAMOSA"] },
      { name: "DISNEY PRINCESSES MINUS LAST LETTER", words: ["ARIE", "BELL", "MOAN", "RAY"] },
    ],
  },
  {
    categories: [
      { name: "CLANDESTINE", words: ["CLOAK-AND-DAGGER", "COVERT", "HUSH-HUSH", "TOP SECRET"] },
      { name: "BRITISH POTATO DISHES", words: ["BUBBLE AND SQUEAK", "CHIPS", "JACKET POTATO", "MASH"] },
      { name: "HERALDIC ACHIEVEMENTS", words: ["COAT OF ARMS", "CREST", "HELMET", "SHIELD"] },
      { name: "ENDING IN MODAL AUXILIARY VERBS", words: ["CAPE MAY", "FREE WILL", "GRAPE MUST", "TIN CAN"] },
    ],
  },
  {
    categories: [
      { name: "ROOM FEATURES", words: ["CEILING", "DOOR", "WALL", "WINDOW"] },
      { name: "OLD-TIMEY LOUNGING ACCESSORIES", words: ["NEWSPAPER", "PIPE", "ROBE", "SLIPPERS"] },
      { name: "SUBJECTS IN TENNESSEE WILLIAMS TITLES", words: ["STREETCAR", "CAT", "MENAGERIE", "TATTOO"] },
      { name: "___ RING", words: ["KEY", "ONION", "TREE", "WEDDING"] },
    ],
  },
  {
    categories: [
      { name: "THINGS THAT ARE YELLOW", words: ["BUTTER", "PIKACHU", "RUBBER DUCK", "SCHOOL BUS"] },
      { name: "BILLIARDS TERMS", words: ["BREAK", "CUE", "POCKET", "RACK"] },
      { name: "SLANG FOR A SAILOR", words: ["JACK", "SALT", "SEA DOG", "TAR"] },
      { name: "KINDS OF WOOD PLUS \"S\"", words: ["SASH", "SOAK", "SPINE", "STEAK"] },
    ],
  },
  {
    categories: [
      { name: "\"IN YOUR DREAMS\"", words: ["IMPOSSIBLE", "NEVER", "NO WAY", "SORRY"] },
      { name: "SENSIBLE", words: ["CLEAR", "LUCID", "RIGHT", "SOUND"] },
      { name: "TYPOGRAPHICAL SYMBOLS", words: ["BRACE", "CARET", "PIPE", "TILDE"] },
      { name: "SONG OF THE YEAR NOMINEES AT THE FIRST GRAMMY AWARDS", words: ["FEVER", "GIGI", "VOLARE", "WITCHCRAFT"] },
    ],
  },
  {
    categories: [
      { name: "OCEANS", words: ["ARCTIC", "ATLANTIC", "PACIFIC", "SOUTHERN"] },
      { name: "SOURCES OF DISTINCTIVE SMELLS", words: ["AMMONIA", "BO", "DURIAN", "WET DOG"] },
      { name: "KINDS OF ROOMS IN A MANSION", words: ["BILLIARD", "DRAWING", "POWDER", "READING"] },
      { name: "WHAT \"PA\" MIGHT REFER TO", words: ["FATHER", "PENNSYLVANIA", "PROTACTINIUM", "PUBLIC ADDRESS"] },
    ],
  },
  {
    categories: [
      { name: "GET LOW", words: ["DUCK", "HUNCH", "SQUAT", "STOOP"] },
      { name: "FOURTH ESTATE", words: ["MEDIA", "NEWS", "PAPERS", "PRESS"] },
      { name: "PARTS OF A COURTROOM", words: ["BAR", "BENCH", "PODIUM", "STAND"] },
      { name: "SKI ___", words: ["JUMP", "LIFT", "LODGE", "SLOPE"] },
    ],
  },
  {
    categories: [
      { name: "SMALL COMMUNITY", words: ["COMMUNE", "HAMLET", "TOWNSHIP", "VILLAGE"] },
      { name: "CLASSIC BOARD GAMES", words: ["BATTLESHIP", "OPERATION", "OTHELLO", "TROUBLE"] },
      { name: "HOMOPHONES OF WAYS OF LOOKING", words: ["AYE", "LEAR", "PIER", "STAIR"] },
      { name: "ENDING IN THE \"LITTLE WOMEN\" MARCH SISTERS", words: ["BANJO", "MACBETH", "MONOGAMY", "NUTMEG"] },
    ],
  },
  {
    categories: [
      { name: "CHAMPIONSHIP AWARDS", words: ["CUP", "MEDAL", "PENNANT", "RING"] },
      { name: "MATTER AT HAND", words: ["CONCERN", "FOCUS", "POINT", "SUBJECT"] },
      { name: "80S COMEDIES", words: ["AIRPLANE", "BIG", "CLUE", "TWINS"] },
      { name: "ANAGRAMS", words: ["ENLIST", "LISTEN", "SILENT", "TINSEL"] },
    ],
  },
  {
    categories: [
      { name: "COMMON PROMO ITEMS", words: ["CAP", "PIN", "SHIRT", "STICKER"] },
      { name: "TINY BIT", words: ["JOT", "SCRAP", "SHRED", "WHIT"] },
      { name: "TEXTING ABBREVIATIONS", words: ["ATM", "CYA", "LOL", "TIA"] },
      { name: "EYE___", words: ["BALL", "BROW", "LASH", "LID"] },
    ],
  },
  {
    categories: [
      { name: "FARM FIXTURES", words: ["COOP", "PEN", "SHED", "STABLE"] },
      { name: "LABOR PROTEST ACTIONS", words: ["MARCH", "PICKET", "RALLY", "STRIKE"] },
      { name: "OBJECTS USED IN RITUAL PERFORMANCES", words: ["DRUM", "MASK", "RATTLE", "STAFF"] },
      { name: "POSSESSIVE ADJECTIVES PLUS A LETTER", words: ["HERB", "HISS", "ITSY", "MYA"] },
    ],
  },
  {
    categories: [
      { name: "HAIRDOS", words: ["BEEHIVE", "BOUFFANT", "CHIGNON", "POMPADOUR"] },
      { name: "MORE READILY", words: ["FIRST", "PREFERABLY", "RATHER", "SOONER"] },
      { name: "MARVEL CHARACTERS", words: ["DAREDEVIL", "HAWKEYE", "NIGHTCRAWLER", "WOLVERINE"] },
      { name: "WORDS AFTER \"THE\" IN \"STAR WARS\" MOVIE TITLES", words: ["EMPIRE", "FORCE", "LAST", "PHANTOM"] },
    ],
  },
  {
    categories: [
      { name: "REACH BACK OUT", words: ["CHECK IN", "FOLLOW UP", "RECONNECT", "TOUCH BASE"] },
      { name: "THE WAY THINGS ARE DONE", words: ["CONVENTION", "CUSTOM", "SOCIAL NORM", "UNWRITTEN RULE"] },
      { name: "PLACES WITH CONVEYOR BELTS", words: ["ASSEMBLY LINE", "BAGGAGE CLAIM", "CHECKOUT LANE", "REVOLVING SUSHI BAR"] },
      { name: "STARTING WITH NAME HOMOPHONES", words: ["CARRY-ON", "EL NIÑO", "LOOSEY-GOOSEY", "TAILOR-MADE"] },
    ],
  },
  {
    categories: [
      { name: "KINDS OF PIES", words: ["CHESS", "PECAN", "PUMPKIN", "SHOOFLY"] },
      { name: "THINGS ASSOCIATED WITH BUTTS", words: ["CABOOSE", "CAN", "MOON", "PEACH"] },
      { name: "TENNIS SCORING TERMS", words: ["ADVANTAGE", "DEUCE", "FORTY", "LOVE"] },
      { name: "___ MUSTARD", words: ["COLONEL", "HONEY", "HOT", "YELLOW"] },
    ],
  },
  {
    categories: [
      { name: "STOVE KNOB SETTINGS", words: ["HIGH", "MEDIUM", "OFF", "SIMMER"] },
      { name: "POTENCY", words: ["CONCENTRATION", "FORCE", "INTENSITY", "MIGHT"] },
      { name: "MUSIC THEORY CONCEPTS", words: ["INTERVAL", "KEY", "MODE", "SCALE"] },
      { name: "\"___ DAY\" MOVIES", words: ["GROUNDHOG", "INDEPENDENCE", "THE LONGEST", "TRAINING"] },
    ],
  },
  {
    categories: [
      { name: "THINGS BABIES DO", words: ["BABBLE", "CRY", "NURSE", "TEETHE"] },
      { name: "MODIFY DECEPTIVELY", words: ["ALTER", "COOK", "DOCTOR", "FUDGE"] },
      { name: "JUDY BLUME BOOKS", words: ["BLUBBER", "DEENIE", "FOREVER", "SUPERFUDGE"] },
      { name: "FISH MINUS A LETTER", words: ["FOUNDER", "SALON", "SURGEON", "TROT"] },
    ],
  },
  {
    categories: [
      { name: "HOMOPHONES", words: ["PAIR", "PARE", "PEAR", "PÈRE"] },
      { name: "RUPTURE", words: ["BLOW", "CRACK", "POP", "SPLIT"] },
      { name: "MLB PLAYER", words: ["PADRE", "RED", "ROYAL", "TWIN"] },
      { name: "FRUIT ANAGRAMS", words: ["CHEAP", "EARP", "LUMP", "WIKI"] },
    ],
  },
  {
    categories: [
      { name: "CONDUIT", words: ["DUCT", "LINE", "MAIN", "PIPE"] },
      { name: "SWINDLE", words: ["FLEECE", "HOSE", "SQUEEZE", "STIFF"] },
      { name: "TEA-MAKING VERBS", words: ["BOIL", "POUR", "STEEP", "STRAIN"] },
      { name: "\"SCHOOL\" MODIFIERS", words: ["GRADE", "GRAMMAR", "HIGH", "PRIMARY"] },
    ],
  },
  {
    categories: [
      { name: "GLASSWARE", words: ["COUPE", "FLUTE", "STEIN", "TUMBLER"] },
      { name: "MESS AROUND (WITH)", words: ["FIDDLE", "MESS", "PLAY", "TINKER"] },
      { name: "MUSIC PERFORMANCE DIRECTIONS", words: ["ALLEGRO", "FORTE", "LARGO", "PIANO"] },
      { name: "ENDING IN SYNONYMS FOR \"ASAP\"", words: ["BASSOON", "BELFAST", "NESQUICK", "THERMOSTAT"] },
    ],
  },
  {
    categories: [
      { name: "NAVIGATE THROUGH, AS A RIVER", words: ["CROSS", "FORD", "TRAVERSE", "WADE"] },
      { name: "MULTI-TIME NBA MVPS", words: ["BIRD", "CURRY", "JAMES", "JORDAN"] },
      { name: "NON-PALINDROMIC WORDS IN A FAMOUS PALINDROME", words: ["ABLE", "ELBA", "SAW", "WAS"] },
      { name: "HOMOPHONES OF KINDS OF DOGS, FAMILIARLY", words: ["CIAO", "PALM", "PEEK", "PITT"] },
    ],
  },
  {
    categories: [
      { name: "PREMONITION", words: ["GUT FEELING", "HUNCH", "INTUITION", "SIXTH SENSE"] },
      { name: "CELLPHONE MODES", words: ["DO NOT DISTURB", "RING", "SILENT", "VIBRATE"] },
      { name: "BAD THINGS TO DO IN MODERN DATING", words: ["BREADCRUMB", "CATFISH", "GHOST", "LOVE BOMB"] },
      { name: "PHRASES WHOSE SECOND WORDS INCLUDE THEIR FIRST WORD", words: ["AIR CAIRO", "ALL HALLOWS", "ARM WARMER", "THE OTHERS"] },
    ],
  },
  {
    categories: [
      { name: "LONG SANDWICH", words: ["GRINDER", "HERO", "HOAGIE", "SUB"] },
      { name: "PRETEXT", words: ["ARGUMENT", "BASIS", "CAUSE", "GROUNDS"] },
      { name: "SMARTPHONE PHOTO EDITING OPTIONS", words: ["ADJUST", "CROP", "FILTERS", "MARKUP"] },
      { name: "JELLY ___", words: ["BEAN", "BELLY", "DONUT", "ROLL"] },
    ],
  },
  {
    categories: [
      { name: "SUBSTANTIAL BOOK", words: ["OPUS", "TOME", "VOLUME", "WORK"] },
      { name: "\"SAINT\" CITIES", words: ["MONICA", "PAULO", "PETERSBURG", "SALVADOR"] },
      { name: "\"LONG\" THINGS", words: ["DISTANCE", "DIVISION", "JOHNS", "WEEKEND"] },
      { name: "CURRENCIES PLUS A LETTER", words: ["FRANCI", "RANDO", "REALM", "WONK"] },
    ],
  },
  {
    categories: [
      { name: "MOVE STEALTHILY, WITH \"IN\"", words: ["CREEP", "SLIP", "SNEAK", "STEAL"] },
      { name: "KINDS OF SCHEMES", words: ["COLOR", "PONZI", "PYRAMID", "RHYME"] },
      { name: "DETECTIVE MOVIES", words: ["CHINATOWN", "KNIVES OUT", "SEVEN", "VERTIGO"] },
      { name: "BODY PARTS SURROUNDED BY TWO LETTERS", words: ["ELEGY", "KARMA", "KEYED", "SHANDY"] },
    ],
  },
  {
    categories: [
      { name: "MUSIC PLAYER BUTTONS", words: ["PLAY", "REPEAT", "SHUFFLE", "SKIP"] },
      { name: "DESTINED", words: ["BOUND", "CERTAIN", "FATED", "SURE"] },
      { name: "VERBS IN MAKING A MOJITO", words: ["GARNISH", "MUDDLE", "POUR", "STIR"] },
      { name: "WHAT \"SPRING\" MIGHT REFER TO", words: ["COIL", "FOUNTAIN", "LEAP", "SEASON"] },
    ],
  },
  {
    categories: [
      { name: "UNITS OF TV PROGRAMS", words: ["EPISODE", "FRANCHISE", "SEASON", "SERIES"] },
      { name: "THINGS WORN AROUND THE NECK", words: ["BOA", "CHAIN", "LANYARD", "TIE"] },
      { name: "STRINGS TIED IN KNOTS", words: ["FRIENDSHIP BRACELET", "MACRAMÉ", "QUIPU", "SHOELACES"] },
      { name: "___ PIECE", words: ["CONVERSATION", "PERIOD", "PUFF", "THINK"] },
    ],
  },
  {
    categories: [
      { name: "CANOODLING", words: ["FIRST BASE", "MAKING OUT", "NECKING", "TONSIL HOCKEY"] },
      { name: "FIVE-SIDED THINGS", words: ["HOME PLATE", "JEANS BACK POCKET", "SCHOOL CROSSING SIGN", "THE PENTAGON"] },
      { name: "UNEXPECTED PLACES TO BE \"OUT OF\"", words: ["LEFT FIELD", "NOWHERE", "THE BLUE", "THIN AIR"] },
      { name: "ENDING IN CANDY BRANDS MINUS \"S\"", words: ["BURGER KING WHOPPER", "FILM NERD", "MEMENTO", "PITCHER'S MOUND"] },
    ],
  },
  {
    categories: [
      { name: "FISHING GEAR", words: ["FLY", "HOOK", "LINE", "NET"] },
      { name: "MULTITUDE", words: ["DROVE", "HOST", "MASS", "PACK"] },
      { name: "COMMIT A BASKETBALL INFRACTION", words: ["CARRY", "DOUBLE-DRIBBLE", "GOALTEND", "TRAVEL"] },
      { name: "CONTROLLED WITH UP/DOWN BUTTONS", words: ["CAR WINDOW", "CHANNEL", "ELEVATOR", "VOLUME"] },
    ],
  },
  {
    categories: [
      { name: "FOUND IN A CASINO", words: ["SLOT MACHINE", "CARDS", "DICE", "CHIPS"] },
      { name: "WAYS TO FASTEN THINGS", words: ["ZIPPER", "BUTTON", "LACES", "BUCKLE"] },
      { name: "SEEN IN A BOWLING ALLEY", words: ["SCORECARD", "BOWLING BALL", "BOWLING PINS", "LANE"] },
      { name: "FLAG DESIGNS", words: ["HORIZONTAL TRISECTION", "CIRCLE", "VERTICAL TRISECTION", "HORIZONTAL BISECTION"] },
    ],
  },
  {
    categories: [
      { name: "GLIMMER", words: ["FLICKER", "HINT", "SUGGESTION", "WHIFF"] },
      { name: "INVOLUNTARY ACTIONS", words: ["BLINK", "HICCUP", "SHIVER", "SNEEZE"] },
      { name: "KINDS OF KNOTS", words: ["BEND", "BOWLINE", "HITCH", "SHEEPSHANK"] },
      { name: "STARTING WITH UNITS IN COMPETITIONS", words: ["GAMELAN", "MATCHSTICK", "POINTER", "SETBACK"] },
    ],
  },
  {
    categories: [
      { name: "TENDER-HEARTED PERSON", words: ["MARSHMALLOW", "SOFTIE", "SWEETHEART", "TEDDY BEAR"] },
      { name: "PELLET-FILLED THINGS", words: ["BEANIE BABY", "DESICCANT PACKET", "EYE PILLOW", "HACKY SACK"] },
      { name: "THINGS WITH KNOBS", words: ["CONTROL PANEL", "ETCH A SKETCH", "RADIO", "STOVE"] },
      { name: "STARTING WITH FAMILIAR NAMES FOR KINDS OF DOGS", words: ["CHOWDER", "DOODLEBUG", "LABUBU", "PITTER-PATTER"] },
    ],
  },
  {
    categories: [
      { name: "HOME STRUCTURES", words: ["GARAGE", "HOUSE", "PORCH", "SHED"] },
      { name: "ASSOCIATED WITH 1960S COUNTERCULTURE", words: ["ACID", "COMMUNE", "FREE LOVE", "HIPPIE"] },
      { name: "FAMOUS REVOLUTIONS IN HISTORY", words: ["FRENCH", "GREEN", "INDUSTRIAL", "SEXUAL"] },
      { name: "GESTURES MADE WITH THE INDEX AND MIDDLE FINGERS", words: ["AIR QUOTES", "BUNNY EARS", "FINGERS CROSSED", "PEACE"] },
    ],
  },
  {
    categories: [
      { name: "CLAIRVOYANT", words: ["EXTRASENSORY", "MENTAL", "PSYCHIC", "TELEPATHIC"] },
      { name: "STAGED PERFORMANCES", words: ["BALLET", "MUSICAL", "OPERA", "PLAY"] },
      { name: "U.S. CABINET DEPARTMENTS", words: ["EDUCATION", "INTERIOR", "STATE", "TREASURY"] },
      { name: "STARTING WITH NEWSPAPER NAMES", words: ["GLOBETROTTER", "HERALDRY", "POST-IT", "TIMES TABLES"] },
    ],
  },
  {
    categories: [
      { name: "MAKE GLOSSY", words: ["BUFF", "POLISH", "SHINE", "WAX"] },
      { name: "TRANSLUCENT GOLDEN THINGS", words: ["ALE", "AMBER", "CITRINE", "HONEY"] },
      { name: "FEATURES OF A BIRD'S HEAD", words: ["BEAK", "COMB", "CREST", "WATTLE"] },
      { name: "NUMBERS WITH FIRST LETTER CHANGED", words: ["HIVE", "MIX", "POUR", "WIGHT"] },
    ],
  },
  {
    categories: [
      { name: "UNNERVE", words: ["ALARM", "DISTURB", "SHAKE", "SHOCK"] },
      { name: "REMOVE, AS AN ITEM FROM A LIST, WITH \"OFF\"", words: ["CHECK", "CROSS", "MARK", "TICK"] },
      { name: "WHAT \"T\" MIGHT STAND FOR", words: ["TESLA", "TIME", "TRUE", "TYRANNOSAURUS"] },
      { name: "HOMOPHONES OF POSSESSIVE ADJECTIVES", words: ["HOUR", "HUR", "THERE", "YORE"] },
    ],
  },
  {
    categories: [
      { name: "STEP IN A PROCESS", words: ["LEVEL", "PHASE", "ROUND", "STAGE"] },
      { name: "SOUND LIKE THUNDER", words: ["BOOM", "CLAP", "ROLL", "RUMBLE"] },
      { name: "KINDS OF PUPPETS", words: ["HAND", "SHADOW", "SOCK", "STRING"] },
      { name: "STANDING ___", words: ["JOKE", "ORDERS", "OVATION", "ROOM"] },
    ],
  },
  {
    categories: [
      { name: "ENTREATY", words: ["APPEAL", "BID", "CALL", "REQUEST"] },
      { name: "LAUNDRY DAY VERBS", words: ["DRY", "FOLD", "SORT", "WASH"] },
      { name: "THINGS THAT COME IN \"BOOKS\"", words: ["CHECK", "COUPON", "MATCH", "STAMP"] },
      { name: "SUN___", words: ["DIAL", "FLOWER", "SCREEN", "TAN"] },
    ],
  },
  {
    categories: [
      { name: "SALAD INGREDIENTS", words: ["RANCH DRESSING", "RED ONION", "ROASTED CHICKEN", "ROMAINE LETTUCE"] },
      { name: "CLASSIC FILMS", words: ["RAIN MAN", "REAR WINDOW", "RESERVOIR DOGS", "ROMAN HOLIDAY"] },
      { name: "\"THE SIMPSONS\" CHARACTERS", words: ["RADIOACTIVE MAN", "RALPH WIGGUM", "REVEREND LOVEJOY", "ROD FLANDERS"] },
      { name: "ENDING IN NBA PLAYERS", words: ["RAGING BULL", "REGINA KING", "ROE BUCK", "ROTARY CLIPPER"] },
    ],
  },
  {
    categories: [
      { name: "STIPULATION", words: ["CATCH", "CAVEAT", "FINE PRINT", "STRINGS"] },
      { name: "VOCAL CHARACTERISTICS", words: ["PITCH", "RANGE", "REGISTER", "TONE"] },
      { name: "CHARACTERS IN \"DICK AND JANE\"", words: ["DICK", "JANE", "MOTHER", "SPOT"] },
      { name: "THINGS WITH FACES", words: ["BUILDING", "CLIFF", "CLOCK", "POLYHEDRON"] },
    ],
  },
  {
    categories: [
      { name: "BODY COVERINGS", words: ["ENAMEL", "HAIR", "NAIL", "SKIN"] },
      { name: "MASSES, IN IDIOMS", words: ["CROWD", "HAYSTACK", "MILLION", "OCEAN"] },
      { name: "OLD TIMEY SLANG FOR LAW ENFORCEMENT", words: ["COPPER", "DICK", "FLATFOOT", "GUMSHOE"] },
      { name: "STARTING WITH SYNONYMS FOR \"THROW\"", words: ["CAST IRON", "CHUCK E. CHEESE", "HURLY-BURLY", "PITCHFORK"] },
    ],
  },
  {
    categories: [
      { name: "PIZZA INGREDIENTS", words: ["CHEESE", "DOUGH", "PEPPERONI", "TOMATO SAUCE"] },
      { name: "ASSOCIATED WITH OCTOPUSES", words: ["ARMS", "INK", "INTELLIGENCE", "SUCTION CUPS"] },
      { name: "THEY HAVE BLADES", words: ["GRASS", "HELICOPTER", "ICE SKATES", "LAWN MOWER"] },
      { name: "WHAT \"CAB\" MIGHT REFER TO", words: ["CABIN", "CALLOWAY", "RED WINE", "TAXI"] },
    ],
  },
  {
    categories: [
      { name: "BORDER", words: ["FLANK", "NEIGHBOR", "SKIRT", "TOUCH"] },
      { name: "KINDS OF FICTION", words: ["HISTORICAL", "LITERARY", "PULP", "SCIENCE"] },
      { name: "WORDS IN A PLANETARY MNEMONIC", words: ["EDUCATED", "MOTHER", "MY", "VERY"] },
      { name: "STARTING WITH FOUR-LETTER '80S BANDS", words: ["ASIAGO", "DEVOTE", "TOTORO", "WHAMMY"] },
    ],
  },
  {
    categories: [
      { name: "POTTERY EQUIPMENT", words: ["CLAY", "GLAZE", "KILN", "WHEEL"] },
      { name: "WALLOP", words: ["DECK", "PUNCH", "SLUG", "SOCK"] },
      { name: "WORDS PRONOUNCED DIFFERENT WAYS AS PROPER NOUNS", words: ["HERB", "NICE", "POLISH", "READING"] },
      { name: "PICK-UP ___", words: ["ARTIST", "GAME", "STICKS", "TRUCK"] },
    ],
  },
  {
    categories: [
      { name: "AMBLE (IN)", words: ["BREEZE", "MOSEY", "STROLL", "WALTZ"] },
      { name: "BALDERDASH", words: ["BALONEY", "BILGE", "BULL", "BUNK"] },
      { name: "KINDS OF BAGS", words: ["CROSSBODY", "HOBO", "MESSENGER", "SADDLE"] },
      { name: "STARTS OF ONE-WORD JAMES BOND MOVIE TITLES", words: ["GOLD", "MOON", "OCTOPUS", "THUNDER"] },
    ],
  },
  {
    categories: [
      { name: "MASS OF SMOKE", words: ["BILLOW", "CLOUD", "PLUME", "PUFF"] },
      { name: "FISHING GEAR", words: ["BAIT", "HOOK", "NET", "ROD"] },
      { name: "ASSOCIATED WITH BLACK WIDOW SPIDERS", words: ["CANNIBALISM", "HOURGLASS", "VENOM", "WEB"] },
      { name: "___ MONDAY", words: ["BLUE", "CYBER", "MANIC", "MEATLESS"] },
    ],
  },
  {
    categories: [
      { name: "CHEEKY", words: ["ARCH", "FRESH", "SASSY", "WISE"] },
      { name: "DRESS MEASUREMENTS", words: ["BUST", "HIPS", "LENGTH", "WAIST"] },
      { name: "CARDS IN TEXAS HOLD 'EM", words: ["FLOP", "HOLE", "RIVER", "TURN"] },
      { name: "LAST WORDS OF CANDY BRANDS IN THE SINGULAR", words: ["CAP", "DUD", "KID", "MINT"] },
    ],
  },
  {
    categories: [
      { name: "LOOK AT WITH AWE", words: ["GOGGLE", "MARVEL", "STARE", "WONDER"] },
      { name: "BASIC ELECTRICITY TERMS", words: ["AC", "DC", "POWER", "VOLTAGE"] },
      { name: "UNEXPECTED WINNER", words: ["DARK HORSE", "LONG SHOT", "SLEEPER", "UNDERDOG"] },
      { name: "STARTING WITH SODA BRANDS", words: ["CRUSHWORTHY", "FANTAGRAPHICS", "FRESCADE", "PEPSINOGEN"] },
    ],
  },
  {
    categories: [
      { name: "VEGETABLE PARTS", words: ["BULB", "LEAF", "ROOT", "STEM"] },
      { name: "PREVAILING", words: ["COMMON", "DOMINANT", "GENERAL", "POPULAR"] },
      { name: "PARTS OF A PIANO", words: ["HAMMER", "KEY", "PEDAL", "STRING"] },
      { name: "SECOND HALVES OF DRINK NAMES", words: ["SODA", "STORMY", "TAN", "TONIC"] },
    ],
  },
  {
    categories: [
      { name: "TEASE", words: ["NEEDLE", "RIB", "RIDE", "ROAST"] },
      { name: "THERMOSTAT SETTINGS", words: ["AUTO", "COOL", "FAN", "HEAT"] },
      { name: "FEATURES OF A CATWOMAN COSTUME", words: ["BODYSUIT", "CLAWS", "MASK", "WHIP"] },
      { name: "TRAINING ___", words: ["BRA", "CAMP", "DAY", "WHEELS"] },
    ],
  },
  {
    categories: [
      { name: "GRADUATION GEAR", words: ["CAP", "DIPLOMA", "GOWN", "TASSEL"] },
      { name: "TEDIOUS UNDERTAKING", words: ["CHORE", "GRIND", "HASSLE", "TRIAL"] },
      { name: "OVERSIMPLISTIC", words: ["FACILE", "FLIP", "SHALLOW", "TRITE"] },
      { name: "SHAPES OF CHESS PIECES", words: ["CASTLE", "CROWN", "HORSE", "MITER"] },
    ],
  },
  {
    categories: [
      { name: "THINGS STORED BY A BROWSER", words: ["BOOKMARK", "CACHE", "COOKIE", "HISTORY"] },
      { name: "BOXING TERMS", words: ["BELL", "GLOVES", "RING", "ROUND"] },
      { name: "TILT", words: ["LEAN", "LIST", "PITCH", "TIP"] },
      { name: "FREE___", words: ["LANCE", "MASON", "STYLE", "WAY"] },
    ],
  },
  {
    categories: [
      { name: "SEEN OUTSIDE A THEATER", words: ["BOX OFFICE", "MARQUEE", "TICKET LINE", "VELVET ROPE"] },
      { name: "ACCESSORIES FOR A MAGICIAN", words: ["CAPE", "HANDKERCHIEF", "MAGIC WAND", "RABBIT"] },
      { name: "TV SHOW TITLE SURNAMES", words: ["HOUSE", "LASSO", "MONTANA", "SOPRANO"] },
      { name: "THEY HAVE CAPS", words: ["BASEBALL PLAYER", "CAMERA LENS", "MUSHROOM", "PEN"] },
    ],
  },
  {
    categories: [
      { name: "PANTS FEATURES", words: ["BELT LOOP", "CUFF", "FLY", "POCKET"] },
      { name: "PERSPECTIVE", words: ["ANGLE", "POSITION", "STANCE", "TAKE"] },
      { name: "EMIT", words: ["CAST", "PROJECT", "RADIATE", "SHED"] },
      { name: "___ DOLL", words: ["PAPER", "RAG", "RUSSIAN", "TROLL"] },
    ],
  },
  {
    categories: [
      { name: "FOUND IN THE TRUNK OF A CAR", words: ["ICE SCRAPER", "JACK", "JUMPER CABLES", "SPARE TIRE"] },
      { name: "BENEFACTOR", words: ["ANGEL", "CHAMPION", "PATRON", "SPONSOR"] },
      { name: "STRUCTURAL SUPPORTS", words: ["BEAM", "BRACE", "COLUMN", "STRUT"] },
      { name: "ENDING IN BODIES OF WATER", words: ["BOMBAY", "CHELSEA", "SCREWDRIVER", "SNOWFLAKE"] },
    ],
  },
  {
    categories: [
      { name: "PEPPERS", words: ["BELL PEPPER", "CAROLINA REAPER", "CHIPOTLE", "PEPPERONCINO"] },
      { name: "THINGS THAT POP UP", words: ["EJECTOR SEAT", "JACK-IN-THE-BOX", "POP-UP BOOK", "TOASTER"] },
      { name: "DESCRIPTORS FOR SWISS CHEESE", words: ["FIRM", "HOLEY", "NUTTY", "SWISS"] },
      { name: "BLUE CHARACTERS", words: ["BLUE", "GENIE", "GONZO", "SONIC"] },
    ],
  },
  {
    categories: [
      { name: "GLOOMY", words: ["BLUE", "DARK", "DOWN", "LOW"] },
      { name: "OINTMENT", words: ["BALM", "CREAM", "PASTE", "RUB"] },
      { name: "ZODIAC SYMBOLS", words: ["ARCHER", "FISH", "GOAT", "RAM"] },
      { name: "MUSCULAR, MINUS \"ED\" SOUND", words: ["JACK", "RIP", "SHRED", "YOKE"] },
    ],
  },
  {
    categories: [
      { name: "COHORT MEMBER", words: ["ASSOCIATE", "COLLEAGUE", "FELLOW", "PEER"] },
      { name: "AESTHETIC", words: ["DESIGN", "LOOK", "SCHEME", "STYLE"] },
      { name: "KINDS OF BAR APPARATUSES", words: ["MONKEY", "PARALLEL", "PULL-UP", "UNEVEN"] },
      { name: "EYEWEAR IN THE SINGULAR", words: ["CONTACT", "GOGGLE", "SHADE", "SPECTACLE"] },
    ],
  },
  {
    categories: [
      { name: "COMPETITION", words: ["BATTLE", "CLASH", "CONTEST", "MATCH"] },
      { name: "ON BOARD", words: ["DOWN", "GAME", "IN", "WILLING"] },
      { name: "WORDS FOR UNSPECIFIED CHOICES", words: ["ANOTHER", "EITHER", "NEITHER", "ONE"] },
      { name: "___LIFE", words: ["AFTER", "LOW", "NIGHT", "WILD"] },
    ],
  },
  {
    categories: [
      { name: "EVENTS WITH DANCING", words: ["BALL", "HOEDOWN", "HOP", "RAVE"] },
      { name: "INTEREST", words: ["CLAIM", "CONCERN", "SHARE", "STAKE"] },
      { name: "COMPONENTS OF WHAC-A-MOLE", words: ["HOLES", "MALLET", "MOLE", "TIMER"] },
      { name: "MUSICALS WITH LAST LETTER CHANGED", words: ["CAROUSER", "EVITE", "OLIVES", "WICKET"] },
    ],
  },
  {
    categories: [
      { name: "ATOMIC STRUCTURE TERMS", words: ["ELECTRON", "NUCLEUS", "ORBIT", "SHELL"] },
      { name: "PARTS OF A SHERLOCK HOLMES COSTUME", words: ["DEERSTALKER", "MAGNIFYING GLASS", "PIPE", "VIOLIN"] },
      { name: "THINGS TO FLIP", words: ["COIN", "LIGHT SWITCH", "PANCAKE", "THE BIRD"] },
      { name: "STARTING WITH SYNONYMS FOR \"SLUSH\"", words: ["GOOGOL", "MUSHROOM", "PASTEURIZE", "PULPIT"] },
    ],
  },
  {
    categories: [
      { name: "\"LET SLEEPING DOGS LIE\"", words: ["DOGS", "LET", "LIE", "SLEEPING"] },
      { name: "OBSCURE", words: ["COVER", "MASK", "SCREEN", "SHIELD"] },
      { name: "COASTAL LANDFORMS", words: ["BLUFF", "CAPE", "POINT", "SPIT"] },
      { name: "___ CAMP", words: ["BAND", "BASE", "BOOT", "SUMMER"] },
    ],
  },
  {
    categories: [
      { name: "CATTY", words: ["MEAN", "PETTY", "SMALL", "SNIDE"] },
      { name: "HANKER (FOR)", words: ["JONES", "LONG", "LUST", "THIRST"] },
      { name: "COCKTAIL GLASSES", words: ["COLLINS", "HURRICANE", "ROCKS", "ZOMBIE"] },
      { name: "___ CONTROL", words: ["CRUISE", "DAMAGE", "GROUND", "MISSION"] },
    ],
  },
  {
    categories: [
      { name: "SUPPORT", words: ["BACK", "CHAMPION", "ENDORSE", "SECOND"] },
      { name: "OPPORTUNITY", words: ["CHANCE", "MOMENT", "OPENING", "WINDOW"] },
      { name: "MALE ANIMALS", words: ["BUCK", "DRAKE", "DRONE", "STALLION"] },
      { name: "ENDS OF LIQUOR BRANDS", words: ["CARDI", "EATER", "MESON", "MIGOS"] },
    ],
  },
  {
    categories: [
      { name: "BEER BRANDS", words: ["MILLER HIGH LIFE", "RED STRIPE", "DOS EQUIS", "BLUE MOON"] },
      { name: "ROCK BANDS", words: ["U2", "PINK FLOYD", "GREEN DAY", "THREE DOORS DOWN"] },
      { name: "MOVIES", words: ["BLUE VELVET", "BACK TO THE FUTURE", "SINGIN' IN THE RAIN", "TOP GUN"] },
      { name: "U.S. CITY NICKNAMES", words: ["BIG APPLE", "BIG EASY", "MILE HIGH CITY", "SECOND CITY"] },
    ],
  },
  {
    categories: [
      { name: "SHORTAGE", words: ["ABSENCE", "CRUNCH", "DEFICIT", "PINCH"] },
      { name: "PARTS OF A PIRATE SHIP", words: ["CANNON", "CROW'S NEST", "JOLLY ROGER", "PLANK"] },
      { name: "KINDS OF BRAS", words: ["PLUNGE", "PUSH-UP", "SPORTS", "WIRELESS"] },
      { name: "STARTING WITH BABY ANIMALS", words: ["CALF RAISE", "CHICK FLICK", "FRY COOK", "KIT KAT"] },
    ],
  },
  {
    categories: [
      { name: "IMITATION", words: ["DUMMY", "ERSATZ", "FAUX", "MOCK"] },
      { name: "PLAY AROUND (WITH)", words: ["FUTZ", "MESS", "TINKER", "TOY"] },
      { name: "CAR RENTAL COMPANIES", words: ["AVIS", "BUDGET", "DOLLAR", "HERTZ"] },
      { name: "SNACK BRANDS PLUS STARTING LETTER", words: ["FRITZ", "PLAYS", "TRUFFLES", "YUTZ"] },
    ],
  },
  {
    categories: [
      { name: "IMAGES SEEN ON THE STREET", words: ["GRAFFITI", "MURAL", "POSTER", "STENCIL"] },
      { name: "RETRO DANCE CRAZES", words: ["HUSTLE", "MASHED POTATO", "ROBOT", "TWIST"] },
      { name: "SILENT \"P\"", words: ["CORPS", "COUP", "PSYCHO", "RECEIPT"] },
      { name: "___ MARK", words: ["BEAUTY", "CHECK", "QUESTION", "STRETCH"] },
    ],
  },
  {
    categories: [
      { name: "STEP ONTO, AS A VEHICLE", words: ["BOARD", "EMBARK", "ENTER", "MOUNT"] },
      { name: "QUANTITIES IN MECHANICS", words: ["ACCELERATION", "FORCE", "MASS", "MOMENTUM"] },
      { name: "TEXTBOOK IMAGES", words: ["FIGURE", "ILLUSTRATION", "PICTURE", "PLATE"] },
      { name: "___ PLANT", words: ["FACE", "PITCHER", "POWER", "ROBERT"] },
    ],
  },
  {
    categories: [
      { name: "WHAT IT ALL BOILS DOWN TO", words: ["BASIC FACTS", "BOTTOM LINE", "BRASS TACKS", "NITTY-GRITTY"] },
      { name: "FEATURES OF AN AIRPORT TERMINAL", words: ["BAGGAGE CLAIM", "DUTY-FREE", "FOOD COURT", "TICKET COUNTER"] },
      { name: "THINGS THAT ARE ORANGE", words: ["GOLDFISH CRACKER", "MONARCH BUTTERFLY", "THE LORAX", "TRAFFIC CONE"] },
      { name: "ENDING IN WORDS FOR CELLULAR CONNECTIVITY", words: ["LIP SERVICE", "MONKEY BARS", "TURN SIGNAL", "WEDDING RECEPTION"] },
    ],
  },
  {
    categories: [
      { name: "FOOD PROCUREMENT METHODS", words: ["AGRICULTURE", "FISHING", "GATHERING", "HUNTING"] },
      { name: "MEMBER OF A DETROIT SPORTS TEAM", words: ["LION", "PISTON", "RED WING", "TIGER"] },
      { name: "FEATURES OF A CLASSIC VOTING BOOTH", words: ["BALLOT", "BOOTH", "CURTAIN", "LEVER"] },
      { name: "THEY HAVE BOLTS", words: ["FRANKENSTEIN'S MONSTER", "HARDWARE STORE", "LIGHTNING", "LOCK"] },
    ],
  },
  {
    categories: [
      { name: "OBFUSCATE", words: ["BLUR", "CLOUD", "MUDDY", "OBSCURE"] },
      { name: "MAGAZINES", words: ["FORTUNE", "PEOPLE", "SPIN", "TIME"] },
      { name: "PAYMENT METHODS", words: ["CASH", "CHARGE", "CHECK", "WIRE"] },
      { name: "UNITS OF VOLUME WITH LAST LETTER CHANGED", words: ["CUR", "GALLOP", "PING", "QUARK"] },
    ],
  },
  {
    categories: [
      { name: "DESPICABLE", words: ["BASE", "LOW", "MEAN", "VILE"] },
      { name: "FEATURES OF A WEDDING", words: ["CAKE", "KISS", "RING", "VOW"] },
      { name: "KINDS OF TRUCKS", words: ["DUMP", "FIRE", "FOOD", "TOW"] },
      { name: "HETERONYMS", words: ["BOW", "ROW", "SOW", "WIND"] },
    ],
  },
  {
    categories: [
      { name: "PRINCIPLED", words: ["DECENT", "HONEST", "MORAL", "STAND-UP"] },
      { name: "GAME-CHANGING INVENTIONS", words: ["LIGHT BULB", "PRINTING PRESS", "SLICED BREAD", "WHEEL"] },
      { name: "\"VIRGIN\" THINGS", words: ["MARY", "MOCKTAIL", "OLIVE OIL", "VIRGO"] },
      { name: "ENDING IN NICKNAME HOMOPHONES", words: ["BRAIN STEW", "BROCCOLI RABE", "JUNGLE GYM", "OPEN MIC"] },
    ],
  },
  {
    categories: [
      { name: "OVERSEE", words: ["CHAIR", "HEAD", "LEAD", "RUN"] },
      { name: "PICTURE TAKEN FROM A FILM", words: ["FRAME", "IMAGE", "SHOT", "STILL"] },
      { name: "COMPONENTS OF A WEIGHTLIFTING SETUP", words: ["BAR", "BENCH", "RACK", "WEIGHTS"] },
      { name: "___ SURF", words: ["CHANNEL", "COUCH", "CROWD", "KITE"] },
    ],
  },
  {
    categories: [
      { name: "DIRECT", words: ["BLUNT", "FRANK", "PLAIN", "STRAIGHT"] },
      { name: "TARGET", words: ["GOAL", "MARK", "OBJECT", "POINT"] },
      { name: "CHECKERS TERMS", words: ["CAPTURE", "CROWN", "JUMP", "KING"] },
      { name: "20TH CENTURY AMERICAN POETS", words: ["BISHOP", "FROST", "POUND", "RICH"] },
    ],
  },
  {
    categories: [
      { name: "DISTURB", words: ["ALARM", "CONCERN", "RATTLE", "SHAKE"] },
      { name: "WORDS ON A MONOPOLY BOARD", words: ["BOARDWALK", "CHANCE", "LUXURY", "PARKING"] },
      { name: "FIGURE IN GREEK MYTH", words: ["FATE", "FURY", "MUSE", "SIREN"] },
      { name: "EGG ___", words: ["CARTON", "NOODLE", "ROLL", "TIMER"] },
    ],
  },
  {
    categories: [
      { name: "FOLK TALE CHARACTERS", words: ["CHICKEN LITTLE", "FROG PRINCE", "GINGERBREAD MAN", "GOLDILOCKS"] },
      { name: "GOOD LUCK SYMBOLS", words: ["EVIL EYE", "FOUR-LEAF CLOVER", "HORSESHOE", "RABBIT'S FOOT"] },
      { name: "THINGS THAT CHANGE COLOR", words: ["CHAMELEON", "MOOD RING", "SUNSET", "TRAFFIC LIGHT"] },
      { name: "ENDING IN MUSIC GENRES", words: ["BABY BLUES", "PET ROCK", "SCRAP METAL", "SODA POP"] },
    ],
  },
  {
    categories: [
      { name: "INTERVAL", words: ["PATCH", "PERIOD", "SPELL", "STRETCH"] },
      { name: "REACT TO A STUBBED TOE", words: ["CURSE", "HOP", "WINCE", "YELL"] },
      { name: "GUITAR EFFECTS PEDALS", words: ["DELAY", "REVERB", "WAH", "WHAMMY"] },
      { name: "___ CHECK", words: ["BLANK", "COAT", "RAIN", "REALITY"] },
    ],
  },
  {
    categories: [
      { name: "METAPHORS FOR TROUBLE", words: ["BIND", "HOT WATER", "JAM", "PICKLE"] },
      { name: "MUSIC THEORY CONCEPTS", words: ["KEY", "PITCH", "SCALE", "TONE"] },
      { name: "THINGS WITH STRINGS", words: ["BALLOON", "KITE", "TEA BAG", "YO-YO"] },
      { name: "METAPHORS FOR QUICKNESS", words: ["ARROW", "LIGHTNING", "ROCKET", "WIND"] },
    ],
  },
  {
    categories: [
      { name: "ANIMAL GROUP NAMES", words: ["GAGGLE", "PACK", "POD", "PRIDE"] },
      { name: "THINGS ASSOCIATED WITH BEING SLOW", words: ["GLACIER", "MOLASSES", "SLOTH", "TRAFFIC"] },
      { name: "SILENT \"W\"", words: ["CARTWRIGHT", "TWO", "WRATH", "WRESTLE"] },
      { name: "WORDS THAT SOUND LIKE STATE ABBREVIATIONS", words: ["ANY", "EMMY", "ENVY", "OKAY"] },
    ],
  },
  {
    categories: [
      { name: "GREEDILY CONTROL", words: ["BOGART", "CORNER", "HOG", "MONOPOLIZE"] },
      { name: "TOOTHED WHEELS", words: ["COG", "GEAR", "PINION", "SPROCKET"] },
      { name: "PORTMANTEAUX", words: ["BLOG", "MOTEL", "SMOG", "SPORK"] },
      { name: "BULL___", words: ["DOG", "DOZE", "FROG", "HORN"] },
    ],
  },
  {
    categories: [
      { name: "HYPNOTIC STATE", words: ["DREAM", "HAZE", "SPELL", "TRANCE"] },
      { name: "STARTING WITH PREFIXES MEANING \"TWO\"", words: ["BINARY", "DIOXIDE", "DUOLINGO", "TWILIGHT"] },
      { name: "FICTIONAL INSPECTORS", words: ["CLOUSEAU", "GADGET", "JAVERT", "MORSE"] },
      { name: "ENDING IN FEMALE ANIMALS", words: ["HOOTENANNY", "LICHEN", "MOSCOW", "NIGHTMARE"] },
    ],
  },
  {
    categories: [
      { name: "\"NO THANKS\"", words: ["LATER", "NAH", "NEXT TIME", "PASS"] },
      { name: "KINDS OF NUMBERS", words: ["EVEN", "IRRATIONAL", "PERFECT", "PRIME"] },
      { name: "KINDS OF WALLS", words: ["BERLIN", "BRICK", "FOURTH", "GREAT"] },
      { name: "HOMOPHONES OF NON-NUMERIC AMOUNTS", words: ["AWL", "NUN", "PHEW", "SUM"] },
    ],
  },
  {
    categories: [
      { name: "PLACES TO FIND SAND", words: ["BUNKER", "DESERT", "HOURGLASS", "SANDBOX"] },
      { name: "THINGS THAT MOVE BACK AND FORTH", words: ["METRONOME", "PENDULUM", "SWING", "WINDSHIELD WIPER"] },
      { name: "APPARATUS-BASED EXERCISE CLASSES", words: ["BARRE", "REFORMER", "SPIN", "STEP"] },
      { name: "FEATURING BIRDS", words: ["CUCKOO CLOCK", "FROOT LOOPS", "MEXICAN FLAG", "WEATHER VANE"] },
    ],
  },
  {
    categories: [
      { name: "STEAL", words: ["LIFT", "PALM", "PINCH", "POCKET"] },
      { name: "MAKE NICER, WITH \"UP\"", words: ["DRESS", "JAZZ", "SPIFF", "SPRUCE"] },
      { name: "KINDS OF CONES", words: ["ICE CREAM", "PINE", "SNOW", "TRAFFIC"] },
      { name: "PRONOUN HOMOPHONES", words: ["HEE", "MI", "OUI", "YEW"] },
    ],
  },
  {
    categories: [
      { name: "COOK WITH DRY HEAT", words: ["BROWN", "ROAST", "SEAR", "TOAST"] },
      { name: "FAMILIAL NICKNAMES", words: ["CUZ", "GRAM", "POP", "UNC"] },
      { name: "U.S. STATE ABBREVIATIONS", words: ["MASS", "MISS", "PENN", "WASH"] },
      { name: "PUNCH", words: ["BOX", "DUKE", "SLUG", "SOCK"] },
    ],
  },
  {
    categories: [
      { name: "STARTING WITH THE SAME SOUND, SPELLED DIFFERENTLY", words: ["WAREHOUSE", "WEARABLE", "WEREWOLF", "WHEREFORE"] },
      { name: "METAPHORS FOR PUBLIC SCRUTINY", words: ["FISHBOWL", "HOT SEAT", "MICROSCOPE", "SPOTLIGHT"] },
      { name: "MUPPETS", words: ["ANIMAL", "BEAKER", "FOZZIE", "GONZO"] },
      { name: "THEY FEATURE A BOSS", words: ["COMPANY", "E STREET BAND", "MAFIA", "VIDEO GAME"] },
    ],
  },
  {
    categories: [
      { name: "CITIES", words: ["LIMA", "NICE", "OSAKA", "PHOENIX"] },
      { name: "PALINDROMES", words: ["EYE", "REFER", "ROTATOR", "SELES"] },
      { name: "HORROR MOVIES MINUS \"S\"", words: ["GREMLIN", "JAW", "SINNER", "TREMOR"] },
      { name: "STARTING WITH SLANG FOR ZERO", words: ["JACKET", "NADAL", "SQUATTER", "ZIPPER"] },
    ],
  },
  {
    categories: [
      { name: "$1", words: ["BUCK", "DOLLAR", "ONE", "SINGLE"] },
      { name: "\"WHEREFORE ART THOU ROMEO?\"", words: ["ART", "ROMEO", "THOU", "WHEREFORE"] },
      { name: "WORDS BEFORE \"CASTLE\"", words: ["BOUNCY", "NEW", "SAND", "WHITE"] },
      { name: "WHERE YOU MIGHT MAKE A CONNECTION", words: ["THIS GAME", "AIRPORT", "DATING APP", "INTERNET CAFE"] },
    ],
  },
  {
    categories: [
      { name: "FREELOADER", words: ["LEECH", "MOOCH", "PARASITE", "SPONGE"] },
      { name: "CONCEALING COVER", words: ["BLANKET", "CLOAK", "CURTAIN", "LAYER"] },
      { name: "WAYS ONE MIGHT REFER TO #", words: ["HASH", "NUMBER", "POUND", "SHARP"] },
      { name: "WORDS FOR LUCIDITY, IN THE SINGULAR", words: ["FACULTY", "MARBLE", "SENSE", "WIT"] },
    ],
  },
  {
    categories: [
      { name: "BITS OF HARDWARE", words: ["BOLT", "NUT", "SCREW", "WASHER"] },
      { name: "PLACES WHERE IDEAS ARE DEVELOPED", words: ["INCUBATOR", "LAB", "SANDBOX", "TEST BED"] },
      { name: "GO BACK AND FORTH", words: ["ALTERNATE", "SEESAW", "SWITCH", "TOGGLE"] },
      { name: "WHAT \"SUB\" MIGHT REFER TO", words: ["BELOW", "HERO", "REPLACEMENT", "SUBMARINE"] },
    ],
  },
  {
    categories: [
      { name: "PURSUE", words: ["HOUND", "SHADOW", "TAIL", "TRACK"] },
      { name: "SPORTSMANLIKE", words: ["FAIR", "HONEST", "SPORTING", "SQUARE"] },
      { name: "CLASSIC KID GIFTS", words: ["BIKE", "BOOK", "TOY", "VIDEO GAME"] },
      { name: "\"___ GIRL\" TITLES", words: ["GONE", "GOSSIP", "NEW", "WORKING"] },
    ],
  },
  {
    categories: [
      { name: "\"BIG\" THINGS", words: ["APPLE", "BROTHER", "DIPPER", "MAC"] },
      { name: "BE ADJACENT TO", words: ["ABUT", "FLANK", "NEIGHBOR", "TOUCH"] },
      { name: "SEEN IN A CLOSET", words: ["HANGER", "HOOK", "ROD", "SHELF"] },
      { name: "STARTING WITH SYNONYMS FOR \"SPEEDY\"", words: ["BRISKET", "FASTIDIOUS", "FLEETWOOD", "QUICKSAND"] },
    ],
  },
  {
    categories: [
      { name: "GYMNASTICS APPARATUS", words: ["BEAM", "HORSE", "RINGS", "VAULT"] },
      { name: "STATUS", words: ["POSITION", "RANK", "STANDING", "STATION"] },
      { name: "BASEBALL CALLS", words: ["BALL", "FOUL", "SAFE", "STRIKE"] },
      { name: "___ CHICKEN", words: ["FUNKY", "POPCORN", "RUBBER", "SPRING"] },
    ],
  },
  {
    categories: [
      { name: "LITTLE BITE", words: ["CANAPÉ", "FINGER FOOD", "HORS D'OEUVRE", "TAPA"] },
      { name: "CONSTRUCTION EQUIPMENT", words: ["HARD HAT", "LADDER", "NAIL GUN", "TOOL BELT"] },
      { name: "VACATION EMOJI", words: ["AIRPLANE", "LUGGAGE", "PALM TREE", "SMILING FACE WITH SUNGLASSES"] },
      { name: "THINGS YOU DON'T EAT THAT END IN FOODS", words: ["COPYPASTA", "JOHANNESBURGER", "KNUCKLE SANDWICH", "LICORICE PIZZA"] },
    ],
  },
  {
    categories: [
      { name: "CRAVING", words: ["DESIRE", "ITCH", "THIRST", "URGE"] },
      { name: "JOBS THAT INVOLVE TRAVELING", words: ["CRUISE DIRECTOR", "PILOT", "ROADIE", "SALESMAN"] },
      { name: "NAME HOMOPHONES", words: ["EARNEST", "KNEEL", "RUSTLE", "TAILOR"] },
      { name: "ASTRONOMICAL TERMS PLUS A LETTER", words: ["COMETH", "NOVAK", "START", "SUNG"] },
    ],
  },
  {
    categories: [
      { name: "BACKSTABBER", words: ["JUDAS", "SNAKE", "TRAITOR", "TURNCOAT"] },
      { name: "AURA", words: ["AIR", "IMPRESSION", "MANNER", "QUALITY"] },
      { name: "KINDS OF CHAIN REACTION \"EFFECTS\"", words: ["BUTTERFLY", "DOMINO", "RIPPLE", "SNOWBALL"] },
      { name: "___ PRESS", words: ["BENCH", "DRILL", "FRENCH", "PRINTING"] },
    ],
  },
  {
    categories: [
      { name: "PIVOTAL POINT", words: ["CROSSROADS", "LANDMARK", "MILESTONE", "WATERSHED"] },
      { name: "GREEN THINGS", words: ["GRASSHOPPER", "SHAMROCK", "STATUE OF LIBERTY", "WASABI"] },
      { name: "ELEMENTS OF JOKE-TELLING", words: ["CALLBACK", "PUNCHLINE", "SETUP", "TIMING"] },
      { name: "\"___ PLEASE\"", words: ["ATTENTION", "CHECK", "DRUMROLL", "PRETTY"] },
    ],
  },
  {
    categories: [
      { name: "CARE FOR", words: ["BABY", "FOSTER", "MOTHER", "NURSE"] },
      { name: "ELEMENTARY", words: ["BASIC", "KEY", "PRIMARY", "PRINCIPAL"] },
      { name: "JAMESES", words: ["BROWN", "COOK", "DEAN", "HARDEN"] },
      { name: "ENDING IN FAMILY WORDS", words: ["ALKALINE", "DECLAN", "DIATRIBE", "NAPKIN"] },
    ],
  },
  {
    categories: [
      { name: "CALCIUM-BASED STRUCTURES", words: ["BONES", "CORAL", "SHELLS", "TEETH"] },
      { name: "SYMBOLS OF SCOTLAND", words: ["BAGPIPES", "SCOTTIE", "TARTAN", "THISTLE"] },
      { name: "FAMOUS PLAYWRIGHTS", words: ["CHEKHOV", "COWARD", "MILLER", "SHAW"] },
      { name: "___ BEAM", words: ["BALANCE", "JIM", "LASER", "TRACTOR"] },
    ],
  },
  {
    categories: [
      { name: "EAT VORACIOUSLY", words: ["BOLT", "GORGE", "INHALE", "SCARF"] },
      { name: "CONICAL THINGS", words: ["CHRISTMAS TREE", "CONE", "PARTY HAT", "VOLCANO"] },
      { name: "POSE", words: ["BLUFF", "FRONT", "MASQUERADE", "POSTURE"] },
      { name: "SETTINGS FOR A KISS", words: ["BLARNEY STONE", "MISTLETOE", "NEW YEAR'S EVE", "WEDDING"] },
    ],
  },
  {
    categories: [
      { name: "ONE WHO DOESN'T FIT IN", words: ["BLACK SHEEP", "MISFIT", "OUTCAST", "REJECT"] },
      { name: "DESCRIPTORS FOR GRAYING HAIR", words: ["DISTINGUISHED", "FLECKED", "SALT-AND-PEPPER", "SILVER"] },
      { name: "CLASSIC COMIC STRIPS", words: ["BLONDIE", "BLOOM COUNTY", "PEANUTS", "THE FAR SIDE"] },
      { name: "ASSOCIATED WITH THEODORE ROOSEVELT", words: ["BIG STICK", "BULL MOOSE", "ROUGH RIDERS", "TEDDY BEAR"] },
    ],
  },
  {
    categories: [
      { name: "EXPERIENCE", words: ["BACKGROUND", "HISTORY", "LIFE", "PAST"] },
      { name: "ATTENDANCE STATUS", words: ["ABSENT", "EXCUSED", "LATE", "PRESENT"] },
      { name: "COMMENTARY ABOUT YOUR CONNECTIONS RESULTS", words: ["GREAT", "PERFECT", "PHEW", "SOLID"] },
      { name: "CAR BRANDS PLUS TWO LETTERS", words: ["AUDITS", "DODGERS", "INFINITIVE", "MINION"] },
    ],
  },
  {
    categories: [
      { name: "QUICK FIX", words: ["EASY ANSWER", "MAGIC WAND", "PANACEA", "SILVER BULLET"] },
      { name: "ASSOCIATED WITH THE MOON", words: ["ECLIPSE", "GREEN CHEESE", "TIDE", "WEREWOLF"] },
      { name: "ORIGINAL MONOPOLY TOKENS", words: ["BOOT", "IRON", "THIMBLE", "TOP HAT"] },
      { name: "WHAT \"JACK\" MIGHT REFER TO", words: ["CHEESE", "DONKEY", "PLAYING CARD", "SOCKET"] },
    ],
  },
  {
    categories: [
      { name: "EASTER SUPPLIES", words: ["BASKET", "DYE", "EGGS", "PEEPS"] },
      { name: "FIREPLACE ACCESSORIES", words: ["BELLOWS", "POKER", "SHOVEL", "TONGS"] },
      { name: "ELEMENTS OF \"SATURDAY NIGHT FEVER\"", words: ["DISCO", "JOHN TRAVOLTA", "PLATFORM SHOES", "POLYESTER SUIT"] },
      { name: "HOMOPHONES OF WAYS TO COOK SOMETHING", words: ["BOYLE", "BRAYS", "SEER", "STU"] },
    ],
  },
  {
    categories: [
      { name: "RETRO HAIR DIRECTIVES", words: ["CRIMP", "CURL", "FEATHER", "TEASE"] },
      { name: "RETRO SLANG FOR COOL", words: ["BAD", "FLY", "RAD", "WICKED"] },
      { name: "CHICKEN DESCRIPTORS", words: ["BANTAM", "CRESTED", "FREE-RANGE", "LEGHORN"] },
      { name: "___ CREAM", words: ["HEAVY", "SHAVING", "SOUR", "TOPICAL"] },
    ],
  },
  {
    categories: [
      { name: "ZOOM", words: ["DART", "FLASH", "SPEED", "ZIP"] },
      { name: "SAUCES IN CHINESE CUISINE", words: ["HOISIN", "OYSTER", "PLUM", "SOY"] },
      { name: "RIFFLE (THROUGH)", words: ["FLIP", "LEAF", "SKIM", "THUMB"] },
      { name: "STARTING WITH SYNONYMS FOR \"DUD\"", words: ["BOMBAY", "BUSTLE", "FLOPPY", "MISSUS"] },
    ],
  },
  {
    categories: [
      { name: "KNEE-SLAPPER", words: ["HOOT", "LAUGH", "RIOT", "SCREAM"] },
      { name: "HOMOPHONES", words: ["DO", "DOE", "DOH", "DOUGH"] },
      { name: "SOUNDS A CHICKEN MAKES", words: ["BUCK", "CACKLE", "CLUCK", "SQUAWK"] },
      { name: "STRESS RESPONSES", words: ["FAWN", "FIGHT", "FLIGHT", "FREEZE"] },
    ],
  },
  {
    categories: [
      { name: "REFERENCE BOOKS", words: ["ATLAS", "DICTIONARY", "ENCYCLOPEDIA", "THESAURUS"] },
      { name: "SOMETHING THAT BRINGS BACK MEMORIES", words: ["ECHO", "REMINDER", "TRACE", "VESTIGE"] },
      { name: "KINDS OF COMPLEXES", words: ["ELECTRA", "INFERIORITY", "OEDIPUS", "SUPERIORITY"] },
      { name: "STARTING WITH WAYS TO REACH SOMEONE VIA PHONE", words: ["BUZZARD", "CALLIOPE", "DIALECT", "RINGMASTER"] },
    ],
  },
  {
    categories: [
      { name: "UPTICK", words: ["HIKE", "JUMP", "RISE", "SPIKE"] },
      { name: "PROTUBERANCE", words: ["BUMP", "HUMP", "LUMP", "MOUND"] },
      { name: "TOM HANKS ROLES", words: ["GUMP", "PHILLIPS", "SULLY", "WOODY"] },
      { name: "WORDS BEFORE \"MINT\"", words: ["BREATH", "JUNIOR", "PEPPER", "SPEAR"] },
    ],
  },
  {
    categories: [
      { name: "DOWNRIGHT", words: ["PURE", "SHEER", "STARK", "UTTER"] },
      { name: "PENNANT", words: ["BANNER", "COLORS", "FLAG", "STANDARD"] },
      { name: "CIGARETTE BRANDS", words: ["CAMEL", "KENT", "PARLIAMENT", "SALEM"] },
      { name: "HOMOPHONES OF WAYS TO GET SMALLER", words: ["LESSON", "RESEED", "SYNC", "WAYNE"] },
    ],
  },
  {
    categories: [
      { name: "CONSTRUCT", words: ["FORM", "MAKE", "MOLD", "PRODUCE"] },
      { name: "FIXED IN PLACE", words: ["FAST", "FIRM", "FROZEN", "TIGHT"] },
      { name: "MLB PLAYER, FOR SHORT", words: ["A", "CARD", "JAY", "YANK"] },
      { name: "___ QUEEN", words: ["DAIRY", "DANCING", "DRAG", "MAY"] },
    ],
  },
  {
    categories: [
      { name: "ACT LOVESTRUCK", words: ["MOON", "PINE", "SWOON", "YEARN"] },
      { name: "EARNINGS", words: ["GAIN", "NET", "RETURN", "YIELD"] },
      { name: "COMPACT MASS", words: ["BLOCK", "BRICK", "CAKE", "PUCK"] },
      { name: "ROLLER ___", words: ["BAG", "COASTER", "DERBY", "RINK"] },
    ],
  },
  {
    categories: [
      { name: "EXHIBITION", words: ["CONVENTION", "EXPOSITION", "FAIR", "SHOW"] },
      { name: "WORDS SPELLING OUT INITIALISMS", words: ["DEEJAY", "EMCEE", "KAYO", "OKAY"] },
      { name: "DVD BONUS FEATURES", words: ["COMMENTARY", "INTERVIEW", "OUTTAKES", "TRAILER"] },
      { name: "STARTING WITH PARTS OF A WHEEL", words: ["HUBBUB", "RIMSHOT", "SPOKESPERSON", "TIRESOME"] },
    ],
  },
  {
    categories: [
      { name: "USED IN WEAVING", words: ["LOOM", "NEEDLE", "SCISSORS", "YARN"] },
      { name: "METHOD", words: ["APPROACH", "MANNER", "STYLE", "WAY"] },
      { name: "KINDS OF PAYMENT FOR AN AUTHOR", words: ["ADVANCE", "BONUS", "FEE", "ROYALTY"] },
      { name: "DRAW ___", words: ["NEAR", "POKER", "STRAWS", "THE LINE"] },
    ],
  },
  {
    categories: [
      { name: "SUPPRESS", words: ["GAG", "INHIBIT", "MUZZLE", "SILENCE"] },
      { name: "SAME OLD STUFF", words: ["DRILL", "GRIND", "HABIT", "ROUTINE"] },
      { name: "FEATURES OF A STRONG PASSWORD", words: ["LENGTH", "NUMBER", "SYMBOL", "UPPERCASE"] },
      { name: "WORDS AFTER \"TWO\"", words: ["BIT", "CENTS", "FACED", "TIMER"] },
    ],
  },
  {
    categories: [
      { name: "PIPS ON A DIE", words: ["FIVE", "THREE", "FOUR", "TWO"] },
      { name: "SYMBOLS USED IN ARITHMETIC", words: ["EQUALS", "DIVIDED BY", "MINUS", "PLUS"] },
      { name: "PUNCTUATION MARKS", words: ["COLON", "PERIOD", "QUOTATION MARK", "ELLIPSIS"] },
      { name: "LOWERCASE LETTERS", words: ["T", "X", "L", "I"] },
    ],
  },
  {
    categories: [
      { name: "ITEMS AT A COFFEE STATION", words: ["CUP", "LID", "STIRRER", "STRAW"] },
      { name: "THINGS WITH STRIPES", words: ["CANDY CANE", "CROSSWALK", "REFEREE", "TIGER"] },
      { name: "WORDS BEFORE \"FLY\" IN INSECT NAMES", words: ["BUTTER", "DRAGON", "FIRE", "HORSE"] },
      { name: "HOMOPHONES OF GREETINGS", words: ["CHOW", "HAY", "HIGH", "YEOH"] },
    ],
  },
  {
    categories: [
      { name: "CULTURAL SYMBOLS OF THE U.S.", words: ["AMERICAN FLAG", "APPLE PIE", "BALD EAGLE", "BASEBALL"] },
      { name: "COLLIDE WITH", words: ["BUMP", "BUTT", "KNOCK", "RAM"] },
      { name: "BLUE THINGS", words: ["JEANS", "LAPIS LAZULI", "OCEAN", "SKY"] },
      { name: "LEES OF HOLLYWOOD", words: ["ANG", "BRUCE", "CHRISTOPHER", "SPIKE"] },
    ],
  },
  {
    categories: [
      { name: "CONTENTION", words: ["CONFLICT", "DISCORD", "FRICTION", "RIVALRY"] },
      { name: "GAMES OF CHANCE", words: ["BINGO", "CRAPS", "LOTTERY", "WAR"] },
      { name: "MORE OR LESS, COLLOQUIALLY", words: ["APPROX", "BOUT", "LIKE", "ROUND"] },
      { name: "STARTING WITH NBA TEAMS", words: ["BULLSEYE", "HEATED", "MAGICAL", "NETSCAPE"] },
    ],
  },
  {
    categories: [
      { name: "CUT INTO PIECES", words: ["CUBE", "DICE", "HASH", "MINCE"] },
      { name: "PROVIDE WITH A PLACE TO STAY", words: ["BOARD", "HOUSE", "LODGE", "QUARTER"] },
      { name: "KINDS OF GOLF CLUBS", words: ["IRON", "PUTTER", "WEDGE", "WOOD"] },
      { name: "MEMORY ___", words: ["CARD", "FOAM", "HOLE", "LANE"] },
    ],
  },
  {
    categories: [
      { name: "DURATION", words: ["INTERVAL", "PERIOD", "SPAN", "STRETCH"] },
      { name: "CREDENTIALS FOR ENTRY", words: ["LANYARD", "PASS", "STAMP", "WRISTBAND"] },
      { name: "MODERN CRIME SERIES PROTAGONISTS", words: ["BOSCH", "CROSS", "REACHER", "RYAN"] },
      { name: "TREES PLUS A LETTER", words: ["FAIR", "MARPLE", "POPULAR", "PSALM"] },
    ],
  },
  {
    categories: [
      { name: "PUBLICIZE", words: ["BOOST", "HYPE", "PITCH", "PLUG"] },
      { name: "KINDS OF SHOES", words: ["CLOG", "FLAT", "MULE", "WEDGE"] },
      { name: "ANTHEM", words: ["BANGER", "BOP", "HEATER", "JAM"] },
      { name: "MUSICAL INSTRUMENTS PLUS STARTING LETTER", words: ["GLUTE", "MORGAN", "SHARP", "THORN"] },
    ],
  },
  {
    categories: [
      { name: "KINDS OF PARTIES", words: ["BALL", "MIXER", "RECEPTION", "SHOWER"] },
      { name: "WAYS TO APPLY PAINT", words: ["BRUSH", "PALETTE KNIFE", "ROLLER", "SPRAY CAN"] },
      { name: "Y-SHAPED THINGS", words: ["SLINGSHOT", "STETHOSCOPE", "TUNING FORK", "WISHBONE"] },
      { name: "WHAT \"SHIFT\" MIGHT REFER TO", words: ["COMPUTER KEY", "DRESS", "FLUCTUATION", "WORK PERIOD"] },
    ],
  },
  {
    categories: [
      { name: "REGION", words: ["AREA", "CLUSTER", "PATCH", "POCKET"] },
      { name: "GROOMING ITEMS", words: ["COMB", "COMPACT", "NAIL FILE", "TWEEZERS"] },
      { name: "THINGS WITH ADHESIVE SURFACES", words: ["BAND-AID", "LINT ROLLER", "STICKER", "TAPE"] },
      { name: "___ HAND", words: ["HELPING", "MINUTE", "POKER", "UPPER"] },
    ],
  },
  {
    categories: [
      { name: "MAKEUP", words: ["BRONZER", "FOUNDATION", "LINER", "STAIN"] },
      { name: "FEATURED IN GOLDILOCKS AND THE THREE BEARS", words: ["BEAR", "BED", "GOLDILOCKS", "PORRIDGE"] },
      { name: "ENDING WITH DRINKING VESSELS", words: ["FIBERGLASS", "SILVERSTEIN", "SMUG", "STUMBLER"] },
      { name: "HOMOPHONES OF WORDS MEANING \"BRUTAL\"", words: ["GOREY", "GRIMM", "GRIZZLY", "SCARRY"] },
    ],
  },
  {
    categories: [
      { name: "IMITATION", words: ["DUMMY", "MOCK", "PRETEND", "SHAM"] },
      { name: "CLEANING SUPPLIES", words: ["BUCKET", "GLOVES", "RAG", "SOAP"] },
      { name: "COMPONENTS OF A RECORD PLAYER", words: ["MOTOR", "NEEDLE", "PLATTER", "TONEARM"] },
      { name: "SPARE ___", words: ["ME", "RIB", "TIME", "TIRE"] },
    ],
  },
  {
    categories: [
      { name: "QUITE THE LAUGH", words: ["CARD", "CHARACTER", "CUTUP", "JOKER"] },
      { name: "NHL TEAM MEMBER", words: ["DEVIL", "FLYER", "PENGUIN", "RANGER"] },
      { name: "FIRST WORDS OF ROBIN HOOD CHARACTER NAMES", words: ["FRIAR", "MAID", "ROBIN", "SHERIFF"] },
      { name: "STARTING WITH BASEBALL GEAR", words: ["BALLROOM", "BASEMENT", "BATMOBILE", "CAPSTONE"] },
    ],
  },
  {
    categories: [
      { name: "EXPLOIT", words: ["DRAIN", "FLEECE", "MILK", "SQUEEZE"] },
      { name: "DAUNT", words: ["BUFFALO", "COW", "RATTLE", "RUFFLE"] },
      { name: "ICONIC ACTRESSES", words: ["CLOSE", "FIELD", "FOSTER", "WEAVER"] },
      { name: "MAMMALS MINUS LAST LETTER", words: ["BADGE", "GOA", "MOOS", "RABBI"] },
    ],
  },
  {
    categories: [
      { name: "ACT AS A BACKUP", words: ["COVER", "FILL IN", "SUB", "TEMP"] },
      { name: "PC KEYBOARD KEYS", words: ["ALT", "ENTER", "MENU", "WINDOWS"] },
      { name: "PASTA SHAPES", words: ["BOWTIE", "RIBBON", "SHELL", "TUBE"] },
      { name: "SUFFIXES", words: ["ATE", "DOM", "HOOD", "SHIP"] },
    ],
  },
  {
    categories: [
      { name: "GEAR FOR A BOXER", words: ["GLOVES", "MOUTHGUARD", "ROBE", "SHORTS"] },
      { name: "CHAMPIONSHIP", words: ["AWARD", "CROWN", "CUP", "TITLE"] },
      { name: "KINDS OF NECKLINES", words: ["BOAT", "CREW", "HALTER", "SCOOP"] },
      { name: "SNOW ___", words: ["CONE", "GLOBE", "LEOPARD", "PEA"] },
    ],
  },
  {
    categories: [
      { name: "FACIAL FEATURES", words: ["CHEEK", "EYE", "LIP", "TEMPLE"] },
      { name: "KINDS OF PARKING", words: ["GARAGE", "METER", "STREET", "VALET"] },
      { name: "IMPERIAL UNITS", words: ["ACRE", "BUSHEL", "FOOT", "STONE"] },
      { name: "WORDS BEFORE \"LIGHT\"", words: ["FLOOD", "LIME", "PILOT", "TRAFFIC"] },
    ],
  },
  {
    categories: [
      { name: "WELL-DEFINED, AS AN IMAGE", words: ["CLEAR", "CRISP", "DISTINCT", "SHARP"] },
      { name: "FRUIT DESSERTS", words: ["COBBLER", "CRUMBLE", "STRUDEL", "TURNOVER"] },
      { name: "BUNGLE", words: ["FLUFF", "FUMBLE", "MISS", "TRIP"] },
      { name: "MAGAZINES PLUS A LETTER", words: ["ELLEN", "SPINY", "TIMER", "USE"] },
    ],
  },
  {
    categories: [
      { name: "ITEMS TO RECYCLE", words: ["BOTTLE", "CAN", "CARDBOARD BOX", "NEWSPAPER"] },
      { name: "BEDDING", words: ["BLANKET", "SHAM", "SHEET", "THROW"] },
      { name: "PLAGIARIZE", words: ["COPY", "CRIB", "LIFT", "PIRATE"] },
      { name: "BATMAN'S \"BAT\" THINGS", words: ["CAVE", "MOBILE", "SIGNAL", "SUIT"] },
    ],
  },
  {
    categories: [
      { name: "INTERTWINE", words: ["LACE", "TWIST", "WEAVE", "WIND"] },
      { name: "KINDS OF BEES", words: ["BUMBLE", "CARPENTER", "HONEY", "KILLER"] },
      { name: "FAMOUS BRIDGES", words: ["BROOKLYN", "GOLDEN GATE", "RIALTO", "TOWER"] },
      { name: "STARTING WITH SYNONYMS FOR \"HANKER FOR\"", words: ["CRAVEN", "DESIREE", "NEEDLE", "WANTON"] },
    ],
  },
  {
    categories: [
      { name: "INEXPERIENCED", words: ["BUDDING", "FRESH", "NAIVE", "NEW"] },
      { name: "🤑", words: ["BUNDLE", "FORTUNE", "MINT", "WAD"] },
      { name: "MEASURED BY SI UNITS", words: ["CURRENT", "LENGTH", "MASS", "TIME"] },
      { name: "WORDS AFTER \"QUICK\"", words: ["FIX", "SAND", "SILVER", "STUDY"] },
    ],
  },
  {
    categories: [
      { name: "FEATURES OF A DUCK", words: ["BILL", "FEATHERS", "WEBBING", "WINGS"] },
      { name: "DESTROY", words: ["BREAK", "DAMAGE", "TOTAL", "WRECK"] },
      { name: "FOUND ON A BOOK JACKET", words: ["AUTHOR", "QUOTE", "SYNOPSIS", "TITLE"] },
      { name: "CLASSIC HOLLYWOOD ACTORS", words: ["COOPER", "GRANT", "PECK", "PRICE"] },
    ],
  },
  {
    categories: [
      { name: "SPREAD OVER", words: ["BLANKET", "COAT", "COVER", "PLASTER"] },
      { name: "THROW", words: ["CAST", "HURL", "PELT", "SLING"] },
      { name: "ANAGRAMS", words: ["INKS", "KINS", "SINK", "SKIN"] },
      { name: "FIRST WORDS OF KIDS' GAMES", words: ["CAPTURE", "HIDE", "RED", "SIMON"] },
    ],
  },
  {
    categories: [
      { name: "KINDS OF HATS", words: ["DERBY", "FEDORA", "PANAMA", "PORKPIE"] },
      { name: "COMPONENTS OF A KID’S BEDTIME ROUTINE", words: ["BATH", "BRUSHING", "PAJAMAS", "STORY"] },
      { name: "MUSICAL ACTS WITH \"A\" AS THE ONLY VOWEL", words: ["ALABAMA", "BANANARAMA", "KANSAS", "SANTANA"] },
      { name: "GRAND ___", words: ["BAHAMA", "CANYON", "SLAM", "PIANO"] },
    ],
  },
  {
    categories: [
      { name: "GARDENING TOOLS", words: ["HOSE", "RAKE", "SHOVEL", "SPADE"] },
      { name: "UNMOVING", words: ["FROZEN", "STATIC", "STATIONARY", "STILL"] },
      { name: "THINGS THAT COME IN FLAKES", words: ["CEREAL", "DANDRUFF", "SALT", "SNOW"] },
      { name: "WORDS FORMED BY TWO MEN’S NAMES", words: ["JACKAL", "LEVITATE", "MELTED", "PATRON"] },
    ],
  },
  {
    categories: [
      { name: "FIXED", words: ["FAST", "FIRM", "SECURE", "TIGHT"] },
      { name: "RECEIVER OF GOODS OR SERVICES", words: ["ACCOUNT", "CLIENT", "CONSUMER", "USER"] },
      { name: "STARTING WITH WEATHER CONDITIONS", words: ["FROSTY", "MISTLETOE", "RAINMAKER", "SNOWMAN"] },
      { name: "SILENT ___", words: ["AUCTION", "MOVIE", "PARTNER", "TREATMENT"] },
    ],
  },
  {
    categories: [
      { name: "PRESENT GO-WITHS", words: ["BOW", "CARD", "GIFT WRAP", "RIBBON"] },
      { name: "JOSTLE", words: ["ELBOW", "PRESS", "SHOULDER", "SHOVE"] },
      { name: "ACCESSORIES FOR MR. MONOPOLY", words: ["BOWTIE", "CANE", "MONEYBAG", "TOP HAT"] },
      { name: "PARTS OF THE FOOT PLUS STARTING LETTER", words: ["OTOE", "PARCH", "RANKLE", "WHEEL"] },
    ],
  },
  {
    categories: [
      { name: "LIVING ROOM FURNITURE", words: ["ARMCHAIR", "BOOKCASE", "CONSOLE", "FOOTSTOOL"] },
      { name: "EXPERIENCE LEVELS", words: ["EXPERT", "INTERMEDIATE", "NOVICE", "PROFICIENT"] },
      { name: "PROMISE", words: ["AGREEMENT", "COMPACT", "HANDSHAKE", "UNDERSTANDING"] },
      { name: "ENDING IN U.S. COINS", words: ["CEFTAZIDIME", "HEADQUARTER", "MONEYPENNY", "PUMPERNICKEL"] },
    ],
  },
  {
    categories: [
      { name: "GROUP", words: ["BAND", "CREW", "PACK", "TEAM"] },
      { name: "PLUNGE", words: ["CRASH", "CRATER", "DROP", "TANK"] },
      { name: "PARTS OF A SINK", words: ["BASIN", "DRAIN", "FAUCET", "STOPPER"] },
      { name: "EQUESTRIAN GEAR", words: ["BIT", "CROP", "HALTER", "SADDLE"] },
    ],
  },
  {
    categories: [
      { name: "HOLLOW CYLINDERS", words: ["HOSE", "PIPE", "STRAW", "TUBE"] },
      { name: "SOFTWARE PLATFORMS", words: ["APP", "DESKTOP", "MOBILE", "WEB"] },
      { name: "TAKE OFF", words: ["BOOK", "DIP", "JET", "SPLIT"] },
      { name: "UNITS OF MEASURE", words: ["BAR", "GRAM", "MOLE", "VOLT"] },
    ],
  },
  {
    categories: [
      { name: "THINGS THAT ARE RED", words: ["3 BALL", "CARDINAL", "HEART EMOJI", "SOLO CUP"] },
      { name: "USED IN METAPHORS FOR PRECARIOUS SITUATIONS", words: ["8 BALL", "DEEP END", "LIMB", "THIN ICE"] },
      { name: "MUSICAL ARTISTS MINUS STARTING NUMBERS", words: ["6 MAFIA", "CHAINZ", "DIRECTION", "NON BLONDES"] },
      { name: "CARDINAL DIRECTIONS WITH FIRST LETTER CHANGED", words: ["COUTH", "FORTH", "LEST", "OAST"] },
    ],
  },
  {
    categories: [
      { name: "BIT OF A RESPONSE TO STRONG EMOTIONS", words: ["CHILL", "GOOSEBUMP", "SHIVER", "TINGLE"] },
      { name: "BREAK THE RULES", words: ["JAYWALK", "LITTER", "LOITER", "SPEED"] },
      { name: "FIRST-CLASS LEVERS", words: ["CLOTHESPIN", "CROWBAR", "SCISSORS", "SEESAW"] },
      { name: "STARTING WITH CANDY BARS", words: ["AEROPLANE", "DOVETAIL", "HEATHERS", "MARSALA"] },
    ],
  },
  {
    categories: [
      { name: "DOPPELGÄNGER", words: ["CLONE", "DOUBLE", "MIRROR", "RINGER"] },
      { name: "PORTION", words: ["CONCERN", "INTEREST", "SHARE"] },
    ],
  },
  {
  categories: [
    { name: "CHEMICAL ELEMENTS", words: ["ACTINIUM", "KRYPTON", "LEAD", "SULFUR"] },
    { name: "BRUCE SPRINGSTEEN CLASSICS", words: ["ATLANTIC CITY", "BADLANDS", "BORN TO RUN", "THUNDER ROAD"] },
    { name: "WHAT YOU MIGHT SEE STICKING OUT OF A WINDOW", words: ["AIR CONDITIONER", "CATIO", "CLOTHESLINE", "FLOWER BOX"] },
    { name: "ENDING IN SYNONYMS FOR 'HAPPENING NOW'", words: ["ADULT CONTEMPORARY", "ALTERNATING CURRENT", "REPRESENT", "SEXTANT"] },
   ],
  },
  {
  categories: [
    { name: "UNRESTRICTED PERMISSION", words: ["BLANK CHECK", "CARTE BLANCHE", "FREE REIN", "FULL AUTHORITY"] },
    { name: "PLACES TO INSERT SOMETHING INTO ON A COMPUTER", words: ["CARD SLOT", "HEADPHONE JACK", "OPTICAL DRIVE", "USB PORT"] },
    { name: "ABBREVIATIONS FOLLOWED BY REDUNDANT WORD", words: ["ATM MACHINE", "LCD DISPLAY", "PIN NUMBER", "UPC CODE"] },
    { name: "ENDING WITH WAYS TO CARVE A SURFACE", words: ["COURT SCRIBE", "DIRECTOR'S CUT", "PIZZA SLICE", "SAT SCORE"] },
   ],
  },
  {
  categories: [
    { name: "MOVE UNSTEADILY", words: ["SWAY", "TODDLE", "TOTTER", "WOBBLE"] },
    { name: "BIRD ONOMATOPOEIA", words: ["COO", "GOBBLE", "HONK", "WARBLE"] },
    { name: "___HEAD", words: ["BOBBLE", "HAMMER", "JUG", "SLEEPY"] },
    { name: "DESSERTS MINUS LAST LETTER", words: ["COBBLE", "PI", "TAR", "TORT"] },
   ],
  },
  {
  categories: [
    { name: "SPHERICAL THINGS", words: ["BOWLING BALL", "EYE", "MOON", "ORANGE"] },
    { name: "FOOD WHOSE NAME IS TWO FOODS", words: ["CAKE DONUT", "CANDY CORN", "CHERRY TOMATO", "PIZZA PIE"] },
    { name: "KINDS OF EELS", words: ["CONGER", "GULPER", "MORAY", "RIBBON"] },
    { name: "ACCESSORIES INSIDE STARTING AND ENDING LETTERS", words: ["CRINGY", "OPINE", "STIED", "THAT'S"] },
    ],
  },
  {
  categories: [
    { name: "U.S. PRESIDENTS", words: ["ADAMS", "FORD", "GRANT", "WASHINGTON"] },
    { name: "ACTORS WHOSE LAST NAMES ARE ALSO VERBS", words: ["CHEVY CHASE", "CHRISTOPH WALTZ", "GEOFFREY RUSH", "TOM CRUISE"] },
    { name: "KINDS OF POKER", words: ["DRAW", "OMAHA", "STRIP", "STUD"] },
    { name: "PROPER NOUNS AFTER GERUNDS IN '90S MOVIE TITLES", words: ["AMY", "JOHN MALKOVICH", "LAS VEGAS", "PRIVATE RYAN"] },
    ],
  },
  {
  categories: [
    { name: "BLACK-AND-WHITE THINGS", words: ["DOMINO", "PIANO KEYS", "YIN-YANG SYMBOL", "ZEBRA"] },
    { name: "PAIRS OF RODS", words: ["CHOPSTICKS", "CLAVES", "KNITTING NEEDLES", "SKI POLES"] },
    { name: "THINGS THAT ROTATE ABOUT A VERTICAL AXIS", words: ["BARBER POLE", "CAROUSEL", "CEILING FAN", "LAZY SUSAN"] },
    { name: "RODS THAT CURVE AT ONE END", words: ["CANDY CANE", "CROCHET HOOK", "CROOK", "CROWBAR"] },
    ],
  },
  {
  categories: [
    { name: "OFF-WHITE SHADES", words: ["CREAM", "EGGSHELL", "IVORY", "VANILLA"] },
    { name: "ANTI-VAMPIRE", words: ["CRUCIFIX", "GARLIC", "MIRROR", "STAKE"] },
    { name: "KINDS OF MEAT", words: ["BEEF", "PORK", "POULTRY", "VENISON"] },
    { name: "SYNONYMS FOR ARGUMENT", words: ["ROW", "QUARREL", "SPAT", "TIFF"] },
    ],
  },
  {
  categories: [
    { name: "MUSCLES, INFORMALLY", words: ["LAT", "PEC", "QUAD", "TRI"] },
    { name: "AWARDS", words: ["CUP", "MEDAL", "RIBBON", "TROPHY"] },
    { name: "TITLE TV DOCTORS", words: ["GREY", "HOUSE", "HOWSER", "QUINN"] },
    { name: "NFL PLAYERS", words: ["BEAR", "BILL", "BROWN", "COMMANDER"] },
    ],
  },
  {
  categories: [
    { name: "COFFEE DRINKS", words: ["AMERICANO", "CAPPUCCINO", "ESPRESSO", "LATTE"] },
    { name: "TREE NUTS", words: ["ALMOND", "CASHEW", "PECAN", "WALNUT"] },
    { name: "SHADES OF GREEN", words: ["EMERALD", "FOREST", "KELLY", "OLIVE"] },
    { name: "MR. ___", words: ["BEAN", "CLEAN", "FOX", "PEANUT"] },
    ],
  },
  {
  categories: [
    { name: "FRUIT", words: ["DATE", "KIWI", "LEMON", "ORANGE"] },
    { name: "COUNTRIES", words: ["CHAD", "GEORGIA", "JORDAN", "TOGO"] },
    { name: "BIRDS", words: ["CRANE", "JAY", "SWALLOW", "TURKEY"] },
    { name: "ZODIAC SYMBOLS", words: ["FISH", "GOAT", "SCALES", "TWINS"] },
    ],
  },
  {
  categories: [
    { name: "BOARD GAMES", words: ["BACKGAMMON", "CHECKERS", "CHESS", "GO"] },
    { name: "MATTRESS SIZES", words: ["FULL", "KING", "QUEEN", "TWIN"] },
    { name: "THINGS THAT ARE RED", words: ["CHERRY", "FIRE TRUCK", "RUBY", "STOP SIGN"] },
    { name: "THINGS WITH KEYS", words: ["CRYPTOGRAPHY", "FLORIDA", "LOCKSMITH", "PIANO"] },
    ],
  },
  {
  categories: [
    { name: "LEG PARTS", words: ["ANKLE", "KNEE", "SHIN", "THIGH"] },
    { name: "BABY ANIMALS", words: ["CALF", "CUB", "JOEY", "KID"] },
    { name: "SLANG FOR TOILET", words: ["CAN", "HEAD", "JOHN", "THRONE"] },
    { name: "___ FISH THAT AREN'T FISH", words: ["CRAY", "JELLY", "SILVER", "STAR"] },
  ],
  },
  {
  categories: [
    { name: "NECKWEAR", words: ["ASCOT", "BOLO", "SCARF", "TIE"] },
    { name: "SHIP DIRECTIONS", words: ["BOW", "PORT", "STARBOARD", "STERN"] },
    { name: "DETERGENTS", words: ["ALL", "ERA", "GAIN", "TIDE"] },
    { name: "___ TRIANGLE", words: ["ACUTE", "BERMUDA", "LOVE", "RIGHT"] },
    ],
  },
  {
  categories: [
    { name: "INDICATION", words: ["CUE", "NOD", "PROMPT", "SIGNAL"] },
    { name: "OPPORTUNITY", words: ["BREAK", "CHANCE", "OPENING", "SHOT"] },
    { name: "HOTEL AMENITIES", words: ["BREAKFAST", "PARKING", "POOL", "WI-FI"] },
    { name: "WORDS BEFORE 'WATCH'" , words: ["DIGITAL", "POCKET", "STOP", "WRIST"] },
    ],
  },
  {
  categories: [
    { name: "RESTAURANT WATER OPTIONS", words: ["BOTTLED", "SPARKLING", "STILL", "TAP"] },
    { name: "ATM OPTIONS", words: ["CHECKING", "DEPOSIT", "SAVINGS", "WITHDRAWAL"] },
    { name: "BINARY QUESTION OPTIONS", words: ["FALSE", "NO", "TRUE", "YES"] },
    { name: "ROULETTE OPTIONS", words: ["BLACK", "EVEN", "ODD", "RED"] },
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
      { name: "CARD SUITS", words: ["HEARTS", "CLUBS", "SPADES", "DIAMONDS"] },
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
      { name: "OCEANS", words: ["PACIFIC", "ATLANTIC", "INDIAN", "ARCTIC"] },
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
      { name: "CONTINENTS", words: ["ASIA", "AFRICA", "EUROPE", "OCEANIA"] },
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
      { name: "SHAKESPEARE PLAYS", words: ["HAMLET", "MACBETH", "OTHELLO", "TEMPEST"] },
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
      { name: "PHASES OF MATTER", words: ["SOLID", "LIQUID", "GAS", "PLASMA"] },
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
      { name: "FARM ANIMALS", words: ["LLAMA", "DONKEY", "ROOSTER", "ALPACA"] },
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
      { name: "SEASONS", words: ["SPRING", "SUMMER", "AUTUMN", "WINTER"] },
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
      { name: "US STATES", words: ["TEXAS", "OREGON", "NEVADA", "FLORIDA"] },
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
      { name: "BREAD TYPES", words: ["RYE", "SOURDOUGH", "BAGEL", "CHALLAH"] },
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
      { name: "COMPASS DIRECTIONS", words: ["NORTH", "SOUTH", "EAST", "WEST"] },
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
      { name: "UNITS OF TIME", words: ["SECOND", "MINUTE", "HOUR", "DAY"] },
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
      { name: "PHASES OF THE MOON", words: ["NEW", "FULL", "CRESCENT", "GIBBOUS"] },
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
      { name: "DAYS OF THE WEEK", words: ["MONDAY", "TUESDAY", "FRIDAY", "SUNDAY"] },
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
      { name: "UNITS OF WEIGHT", words: ["GRAM", "OUNCE", "POUND", "TON"] },
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
      { name: "BASIC MATH OPERATIONS", words: ["ADD", "SUBTRACT", "MULTIPLY", "DIVIDE"] },
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
      { name: "FAMOUS RIVERS", words: ["NILE", "AMAZON", "THAMES", "DANUBE"] },
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
      { name: "PARTS OF SPEECH", words: ["NOUN", "VERB", "ADJECTIVE", "ADVERB"] },
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
      { name: "TYPES OF GOVERNMENT", words: ["DEMOCRACY", "MONARCHY", "REPUBLIC", "DICTATORSHIP"] },
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
      { name: "FAMOUS PAINTERS", words: ["MONET", "PICASSO", "DALI", "REMBRANDT"] },
      { name: "KNITTING STITCHES", words: ["PURL", "GARTER", "CABLE", "RIB"] },
      { name: "DINOSAUR NAME ENDINGS", words: ["SAURUS", "RAPTOR", "ODON", "OPS"] },
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
      { name: "ICE CREAM FLAVORS", words: ["PISTACHIO", "ROCKY ROAD", "NEAPOLITAN", "BUTTER PECAN"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF PUZZLES", words: ["JIGSAW", "CROSSWORD", "SUDOKU", "REBUS"] },
      { name: "FAMOUS COMPOSERS", words: ["MOZART", "BEETHOVEN", "BACH", "CHOPIN"] },
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
      { name: "TRACK AND FIELD EVENTS", words: ["SPRINT", "HURDLES", "JAVELIN", "DISCUS"] },
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
      { name: "FAMOUS SCIENTISTS", words: ["NEWTON", "DARWIN", "CURIE", "TESLA"] },
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
      { name: "HOUSEPLANTS", words: ["POTHOS", "FICUS", "MONSTERA", "PHILODENDRON"] },
      { name: "___ WORTHY", words: ["NEWS", "TRUST", "PRAISE", "BLAME"] },
      { name: "BREWING TERMS", words: ["STEEP", "INFUSE", "FERMENT", "MASH"] },
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
  {
    categories: [
      { name: "PRECIOUS METALS", words: ["GOLD", "SILVER", "PLATINUM", "PALLADIUM"] },
      { name: "TYPES OF STORMS", words: ["HURRICANE", "TORNADO", "BLIZZARD", "MONSOON"] },
      { name: "SHAKESPEARE TRAGEDIES", words: ["HAMLET", "MACBETH", "OTHELLO", "LEAR"] },
      { name: "UNITS OF ENERGY", words: ["CALORIE", "JOULE", "ERG", "BTU"] },
    ],
  },
  {
    categories: [
      { name: "SMALL DOGS", words: ["CHIHUAHUA", "PUG", "POMERANIAN", "DACHSHUND"] },
      { name: "___ NIGHT", words: ["GOOD", "MID", "OPENING", "MOVIE"] },
      { name: "TYPES OF PEPPERCORNS", words: ["BLACK", "WHITE", "PINK", "GREEN"] },
      { name: "COMPUTER PARTS", words: ["MONITOR", "KEYBOARD", "MOUSE", "CPU"] },
    ],
  },
  {
    categories: [
      { name: "SEASONING BLENDS", words: ["ADOBO", "CAJUN", "CURRY", "ZAATAR"] },
      { name: "TYPES OF HATS", words: ["FEDORA", "BOWLER", "SOMBRERO", "BERET"] },
      { name: "FAMOUS BRIDGES", words: ["GOLDEN GATE", "BROOKLYN", "TOWER", "CHARLES"] },
      { name: "ELEMENTS OF FICTION", words: ["PLOT", "SETTING", "THEME", "CONFLICT"] },
    ],
  },
  {
    categories: [
      { name: "SMALL BIRDS", words: ["FINCH", "WREN", "CHICKADEE", "SPARROW"] },
      { name: "___ CODE", words: ["ZIP", "MORSE", "DRESS", "BAR"] },
      { name: "MARTIAL ARTS WEAPONS", words: ["NUNCHAKU", "BOKKEN", "SAI", "KATANA"] },
      { name: "PARTS OF AN EYE", words: ["CORNEA", "RETINA", "PUPIL", "IRIS"] },
    ],
  },
  {
    categories: [
      { name: "ROOT VEGETABLES", words: ["BEET", "TURNIP", "RADISH", "PARSNIP"] },
      { name: "UNITS OF COMPUTER MEMORY", words: ["BYTE", "BIT", "KILOBYTE", "MEGABYTE"] },
      { name: "PARTS OF A FLOWER", words: ["PETAL", "STEM", "STAMEN", "POLLEN"] },
      { name: "BOARD GAME PIECES", words: ["PAWN", "DIE", "TOKEN", "CARD"] },
    ],
  },
  {
    categories: [
      { name: "LARGE CATS", words: ["LION", "TIGER", "JAGUAR", "LEOPARD"] },
      { name: "___ HOUND", words: ["BLOOD", "GREY", "FOX", "BASSET"] },
      { name: "KITCHEN MEASUREMENTS", words: ["CUP", "PINCH", "DASH", "TEASPOON"] },
      { name: "PARTS OF A TREE", words: ["ROOT", "TRUNK", "BRANCH", "CANOPY"] },
    ],
  },
  {
    categories: [
      { name: "MOONS OF SATURN", words: ["TITAN", "ENCELADUS", "MIMAS", "IAPETUS"] },
      { name: "FAMOUS INVENTORS", words: ["EDISON", "TESLA", "BELL", "FRANKLIN"] },
      { name: "UNITS OF PRESSURE", words: ["PASCAL", "BAR", "ATMOSPHERE", "PSI"] },
      { name: "PARTS OF THE EAR", words: ["COCHLEA", "EARDRUM", "CANAL", "LOBE"] },
    ],
  },
  {
    categories: [
      { name: "SHADES OF GREEN", words: ["OLIVE", "LIME", "EMERALD", "MINT"] },
      { name: "___ APPLE", words: ["CANDY", "PINE", "CRAB", "TOFFEE"] },
      { name: "TYPES OF YOGA", words: ["HATHA", "VINYASA", "ASHTANGA", "KUNDALINI"] },
      { name: "FAMOUS EXPLORERS", words: ["COLUMBUS", "MAGELLAN", "COOK", "DRAKE"] },
    ],
  },
  {
    categories: [
      { name: "FRENCH PASTRIES", words: ["ECLAIR", "MACARON", "PROFITEROLE", "CROISSANT"] },
      { name: "FAMOUS PHILOSOPHERS", words: ["SOCRATES", "PLATO", "ARISTOTLE", "KANT"] },
      { name: "LAYERS OF THE EARTH", words: ["CRUST", "MANTLE", "OUTER CORE", "INNER CORE"] },
      { name: "NOBLE GASES", words: ["HELIUM", "NEON", "ARGON", "XENON"] },
    ],
  },
  {
    categories: [
      { name: "SMALL PRIMATES", words: ["TARSIER", "MARMOSET", "LEMUR", "TAMARIN"] },
      { name: "___ MONKEY", words: ["SPIDER", "GREASE", "SEA", "BRASS"] },
      { name: "FAMOUS MATHEMATICIANS", words: ["EUCLID", "PYTHAGORAS", "GAUSS", "EULER"] },
      { name: "PARTS OF A CLOCK", words: ["HAND", "PENDULUM", "FACE", "GEAR"] },
    ],
  },
  {
    categories: [
      { name: "JAPANESE DISHES", words: ["RAMEN", "TEMPURA", "UDON", "YAKITORI"] },
      { name: "FAMOUS ARCHITECTS", words: ["GAUDI", "WRIGHT", "GEHRY", "PEI"] },
      { name: "PARTS OF A ROOF", words: ["GABLE", "EAVE", "SHINGLE", "RIDGE"] },
      { name: "WORLD RELIGIONS", words: ["BUDDHISM", "HINDUISM", "ISLAM", "JUDAISM"] },
    ],
  },
  {
    categories: [
      { name: "PACK ANIMALS", words: ["MULE", "OX", "CAMEL", "HORSE"] },
      { name: "___ WHALE", words: ["BLUE", "KILLER", "SPERM", "HUMPBACK"] },
      { name: "PARTS OF A SHIP", words: ["BOW", "STERN", "HULL", "DECK"] },
      { name: "TYPES OF SEAWEED", words: ["KELP", "NORI", "WAKAME", "DULSE"] },
    ],
  },
  {
    categories: [
      { name: "NORDIC COUNTRIES", words: ["NORWAY", "SWEDEN", "FINLAND", "ICELAND"] },
      { name: "FAMOUS VOLCANOES", words: ["VESUVIUS", "KRAKATOA", "FUJI", "ETNA"] },
      { name: "ELECTRICAL UNITS", words: ["VOLT", "AMP", "OHM", "WATT"] },
      { name: "SHADES OF PURPLE", words: ["LAVENDER", "VIOLET", "PLUM", "LILAC"] },
    ],
  },
  {
    categories: [
      { name: "FLIGHTLESS BIRDS", words: ["PENGUIN", "OSTRICH", "EMU", "KIWI"] },
      { name: "___ EGG", words: ["NEST", "GOOSE", "EASTER", "DEVILED"] },
      { name: "ITALIAN DESSERTS", words: ["TIRAMISU", "CANNOLI", "GELATO", "PANNA COTTA"] },
      { name: "PARTS OF A FOOT", words: ["ARCH", "HEEL", "SOLE", "TOE"] },
    ],
  },
  {
    categories: [
      { name: "FAMOUS ASTRONAUTS", words: ["ARMSTRONG", "ALDRIN", "GAGARIN", "GLENN"] },
      { name: "TYPES OF SALAD DRESSING", words: ["RANCH", "VINAIGRETTE", "CAESAR", "THOUSAND ISLAND"] },
      { name: "GYMNASTICS EVENTS", words: ["VAULT", "BEAM", "RINGS", "FLOOR"] },
      { name: "PARTS OF A ROCKET", words: ["NOSE CONE", "BOOSTER", "FUSELAGE", "FIN"] },
    ],
  },
  {
    categories: [
      { name: "GERMAN FOODS", words: ["PRETZEL", "SCHNITZEL", "SAUERKRAUT", "BRATWURST"] },
      { name: "___ KNOT", words: ["SLIP", "SAILOR", "TOP", "BOW"] },
      { name: "PERCUSSION INSTRUMENTS", words: ["MARIMBA", "XYLOPHONE", "CYMBAL", "TAMBOURINE"] },
      { name: "TYPES OF FIREWORKS", words: ["ROCKET", "SPARKLER", "CATHERINE WHEEL", "ROMAN CANDLE"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF COOKWARE", words: ["SKILLET", "SAUCEPAN", "WOK", "DUTCH OVEN"] },
      { name: "FAMOUS AUTHORS", words: ["DICKENS", "AUSTEN", "TWAIN", "ORWELL"] },
      { name: "DESSERT WINES", words: ["PORT", "SHERRY", "MADEIRA", "TOKAJI"] },
      { name: "MEASURING INSTRUMENTS", words: ["THERMOMETER", "BAROMETER", "HYGROMETER", "ANEMOMETER"] },
    ],
  },
  {
    categories: [
      { name: "TYPES OF SNAKES", words: ["COBRA", "VIPER", "BOA", "MAMBA"] },
      { name: "___ PIT", words: ["FIRE", "MOSH", "ARM", "TAR"] },
      { name: "FAMOUS PIRATES", words: ["BLACKBEARD", "MORGAN", "KIDD", "DRAKE"] },
      { name: "TYPES OF MAP PROJECTIONS", words: ["MERCATOR", "ROBINSON", "PETERS", "AZIMUTHAL"] },
    ],
  },
];