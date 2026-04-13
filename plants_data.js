const plantsData = [
    {
        id: "tomato",
        name: "Tomato",
        image: "images/tomato.jpg",
        description: "A popular and versatile fruit grown as a vegetable in many home gardens.",
        watering: "1-2 inches per week. Keep soil consistently moist but not waterlogged.",
        sunlight: "Full sun (6-8 hours daily)",
        soil: "Well-draining, slightly acidic (pH 6.0-6.8)",
        fertilizer: "High phosphorus and potassium fertilizer every 2 weeks.",
        problems: "Blossom end rot: provide consistent watering. Aphids: use neem oil.",
        steps: [
            "Start seeds indoors 6-8 weeks before last frost.",
            "Transplant seedlings when they have 2 sets of true leaves.",
            "Plant deeply, burying the stem up to the bottom leaves.",
            "Provide sturdy cages or stakes for support.",
            "Prune suckers regularly to improve airflow and yield."
        ]
    },
    {
        id: "rose",
        name: "Rose",
        image: "images/rose.jpg",
        description: "Classic, beautiful flowering shrubs known for their fragrance and vibrant colors.",
        watering: "Deep watering twice a week at the base. Avoid wetting leaves.",
        sunlight: "Full sun (at least 6 hours daily)",
        soil: "Rich, well-draining loam (pH 6.5-6.8)",
        fertilizer: "Balanced rose fertilizer monthly during active growth.",
        problems: "Black spot: use fungicide and prune affected leaves. Aphids: spray with water or neem oil.",
        steps: [
            "Choose a site with excellent drainage and morning sun.",
            "Dig a hole twice as wide as the root ball.",
            "Plant with the graft union 1-2 inches below soil level (in cold climates).",
            "Water deeply and apply a 2-inch layer of organic mulch.",
            "Prune in early spring to shape the plant and remove dead wood."
        ]
    },
    {
        id: "aloe-vera",
        name: "Aloe Vera",
        image: "images/aloe-vera.jpg",
        description: "A hardy succulent famous for its soothing medicinal gel.",
        watering: "Water deeply, then allow top 2 inches of soil to dry completely. Less water in winter.",
        sunlight: "Bright, indirect sunlight",
        soil: "Cactus or succulent potting mix",
        fertilizer: "Half-strength houseplant fertilizer once in spring.",
        problems: "Root rot from overwatering. Leaves turn brown if sun is too direct.",
        steps: [
            "Select a pot with excellent drainage holes.",
            "Fill with specialized cactus mix.",
            "Plant root ball shallowly.",
            "Do not water immediately after repotting; wait a week.",
            "Place in a bright sunny spot indoors."
        ]
    },
    {
        id: "mint",
        name: "Mint",
        image: "images/mint.jpg",
        description: "A fast-growing aromatic herb, perfect for teas, cocktails, and cooking.",
        watering: "Keep soil consistently moist but well-drained.",
        sunlight: "Partial shade to full sun",
        soil: "Rich, moist soil",
        fertilizer: "Light application of balanced fertilizer in early spring.",
        problems: "Highly invasive in garden beds. Keep it containerized. Rust: remove affected leaves.",
        steps: [
            "Plant mint from cuttings or starter plants.",
            "Always plant in a container to prevent it from taking over the garden.",
            "Pinch back stems regularly to promote bushy growth.",
            "Harvest leaves frequently to encourage new growth.",
            "Cut the plant to the ground before winter."
        ]
    },
    {
        id: "basil",
        name: "Basil",
        image: "images/basil.jpg",
        description: "A fragrant herb essential in Italian cooking and pesto.",
        watering: "Water deeply when the top inch of soil feels dry.",
        sunlight: "Full sun (6-8 hours daily)",
        soil: "Rich, well-draining soil",
        fertilizer: "Liquid fertilizer every 2-3 weeks.",
        problems: "Fusarium wilt, aphids. Avoid overwatering to prevent root rot.",
        steps: [
            "Sow seeds indoors 6 weeks before last frost or plant outdoors directly after frost.",
            "Keep soil warm for germination.",
            "Pinch off the top set of leaves once the plant is 6 inches tall.",
            "Always pick flowers off as soon as they form to preserve flavor.",
            "Harvest by snipping stems just above a pair of leaves."
        ]
    },
    {
        id: "sunflower",
        name: "Sunflower",
        image: "images/sunflower.jpg",
        description: "Tall, vibrant annuals that bring immediate joy and attract pollinators.",
        watering: "1 inch of water a week. Deep watering encourages deep roots.",
        sunlight: "Full sun (6-8 hours direct daily)",
        soil: "Well-draining, loose soil",
        fertilizer: "Slow-release granular fertilizer at planting.",
        problems: "Downy mildew and rust. Provide good air circulation.",
        steps: [
            "Sow seeds directly securely into the ground after frost risk passes.",
            "Plant spacing depends on the variety (often 6-12 inches apart).",
            "Protect young seedlings from birds and snails.",
            "Stake taller varieties if you live in high-wind areas.",
            "Harvest heads when the back turns yellow and seeds plump up."
        ]
    },
    {
        id: "lavender",
        name: "Lavender",
        image: "images/lavender.jpg",
        description: "Fragrant, drought-tolerant perennial popular for essential oils and aesthetics.",
        watering: "Water sparingly. Allow the soil to dry out between waterings.",
        sunlight: "Full sun",
        soil: "Sandy, well-draining, alkaline soil",
        fertilizer: "Do not fertilize heavily; a little compost in spring is enough.",
        problems: "Root rot from damp, heavy soil. Ensure excellent drainage.",
        steps: [
            "Plant in raised beds or mounds if your soil is heavy clay.",
            "Add gravel or sand to the planting hole.",
            "Space plants adequately for maximal air circulation.",
            "Prune back by one-third after flowering to maintain a neat mound.",
            "Avoid wood-chip mulch around the base; use gravel instead."
        ]
    },
    {
        id: "orchid",
        name: "Orchid (Phalaenopsis)",
        image: "images/orchid.jpg",
        description: "Elegant and exotic houseplants with long-lasting blooms.",
        watering: "Water weekly. Allow water to freely run through the pot. Do not let roots sit in water.",
        sunlight: "Bright, indirect light",
        soil: "Orchid bark or sphagnum moss (never regular potting soil)",
        fertilizer: "Orchid-specific fertilizer weekly at quarter strength ('weakly, weekly').",
        problems: "Crown rot if water sits in the leaves. Yellow leaves from direct sun.",
        steps: [
            "Pot your orchid in a clear plastic pot with holes to monitor root health.",
            "Ensure the medium is chunky and airy.",
            "Water by running lukewarm water over the roots for a minute.",
            "Provide high humidity (50-70%) using a pebble tray.",
            "Cut the flower spike down once blooms drop to encourage new growth."
        ]
    },
    {
        id: "snake-plant",
        name: "Snake Plant",
        image: "images/snake-plant.jpg",
        description: "One of the most indestructible indoor plants that purifies the air.",
        watering: "Allow soil to completely dry out entirely before watering. Every 2-3 weeks.",
        sunlight: "Tolerates low light to bright indirect light.",
        soil: "Standard well-draining potting or cactus mix",
        fertilizer: "All-purpose plant food once in the spring and once in mid-summer.",
        problems: "Root rot from overwatering is the main threat.",
        steps: [
            "Plant in a pot with drainage.",
            "Place literally anywhere in the house.",
            "Wipe leaves with a damp cloth occasionally to remove dust.",
            "Do not overwater. Ignore the plant for weeks at a time.",
            "Repot only when roots crack the pot."
        ]
    },
    {
        id: "spider-plant",
        name: "Spider Plant",
        image: "images/spider-plant.jpg",
        description: "A fast-growing, highly adaptable houseplant that produces fun 'babies'.",
        watering: "Water when the top inch of soil is dry. Use distilled water if tips brown.",
        sunlight: "Bright, indirect light",
        soil: "Well-draining, general-purpose potting soil",
        fertilizer: "Liquid fertilizer twice a month in spring/summer.",
        problems: "Brown tips caused by fluoride in tap water or low humidity.",
        steps: [
            "Plant in a hanging basket to let babies dangle.",
            "Place in a well-lit room away from direct hot sun.",
            "Water evenly but avoid soggy soil.",
            "Snip the 'babies' (spiderettes) off and root them in water to propagate.",
            "Repot every other year."
        ]
    },
    { id: "pothos", name: "Pothos", image: "images/pothos.jpg", description: "Trailing vine with heart-shaped leaves, extremely easy to care for.", watering: "Every 1-2 weeks when top soil dries.", sunlight: "Low to bright indirect light.", soil: "Standard potting soil.", fertilizer: "Monthly in spring/summer.", problems: "Yellow leaves from overwatering.", steps: ["Use a hanging basket", "Water when dry", "Trim vines if they get stringy", "Propagate cuttings in water", "Wipe dusty leaves"] },
    { id: "peace-lily", name: "Peace Lily", image: "images/peace-lily.jpg", description: "Beautiful white blooms, acts as a natural air purifier. Will dramatically droop when thirsty.", watering: "Keep slightly moist, water when leaves start to subtly droop.", sunlight: "Medium to low indirect light.", soil: "Rich potting mix.", fertilizer: "Every 6 weeks.", problems: "Brown tips from dry air.", steps: ["Place away from drafts", "Water thoroughly when it sags", "Wipe leaves gently with damp cloth", "Keep away from pets (toxic)", "Mist occasionally for humidity"] },
    { id: "monstera", name: "Monstera", image: "images/monstera.jpg", description: "Iconic tropical plant with large split leaves (fenestrations).", watering: "Every 1-2 weeks. Top 2 inches should dry out.", sunlight: "Bright indirect light.", soil: "Peaty, well-draining soil.", fertilizer: "Monthly during growing season.", problems: "Lack of splits due to low light.", steps: ["Provide a moss pole for climbing", "Clean leaves with damp cloth", "Water until it drains out", "Increase light for more leaf splits", "Repot every 1-2 years"] },
    { id: "ficus", name: "Ficus / Rubber Plant", image: "images/ficus.jpg", description: "A bold plant with thick, glossy, burgundy/green leaves.", watering: "Every 1-2 weeks.", sunlight: "Bright, indirect light.", soil: "Well-draining soil.", fertilizer: "Every month in spring/summer.", problems: "Dropping leaves from sudden temperature shifts.", steps: ["Find a bright spot and do not move it", "Water when top half is dry", "Clean leaves with a damp sponge", "Keep away from cold windows", "Prune to encourage branching"] },
    { id: "cactus", name: "Cactus", image: "images/cactus.jpg", description: "Desert natives that thrive on neglect.", watering: "Very little. Every 3-4 weeks.", sunlight: "Direct full sun.", soil: "Cactus mix.", fertilizer: "Cactus fertilizer in spring.", problems: "Rotting from overwatering.", steps: ["Use a terra-cotta pot", "Place in south-facing window", "Water only when bone dry", "Do not mist", "Wear gloves when handling"] },
    { id: "succulent", name: "Succulent", image: "images/succulent.jpg", description: "Fleshy-leaved plants perfect for sunny windowsills.", watering: "Soak thoroughly, let dry completely.", sunlight: "Bright direct light.", soil: "Cactus mix.", fertilizer: "Rarely needed.", problems: "Stretching out (etiolation) from low light.", steps: ["Use small pots with drainage", "Put in brightest window possible", "Water every 2-3 weeks", "Protect from freezing temps", "Propagate from healthy fallen leaves"] },
    { id: "fern", name: "Fern", image: "images/fern.jpg", description: "Lush, ancient plants that love humidity.", watering: "Keep consistently damp but not soaked.", sunlight: "Low to medium indirect light.", soil: "Moisture-retaining soil with peat.", fertilizer: "Weak liquid fertilizer monthly.", problems: "Crispy fronds due to dry air.", steps: ["Place in a bathroom or humid area", "Never let soil dry out completely", "Mist regularly or use a humidifier", "Keep away from heating vents", "Trim dead lower fronds"] },
    { id: "bamboo", name: "Lucky Bamboo", image: "images/bamboo.jpg", description: "Technically a dracaena, famously grown in water and pebbles.", watering: "Change water every 2-3 weeks. Use distilled.", sunlight: "Medium indirect light.", soil: "Can be grown in water or standard soil.", fertilizer: "A tiny drop of liquid fertilizer every 2 months.", problems: "Yellow stalks from chlorine in tap water.", steps: ["Fill vase with pebbles for support", "Keep roots constantly submerged", "Use filtered or bottled water", "Avoid direct sun which algae loves", "Remove any yellowing stems immediately"] },
    { id: "bonsai", name: "Bonsai Tree", image: "images/bonsai.jpg", description: "Miniature trees trained to mimic mature, full-size trees.", watering: "Check daily. Water when topsoil feels dry.", sunlight: "Depends on species, generally bright light.", soil: "Bonsai-specific granular mix.", fertilizer: "Bonsai fertilizer every month.", problems: "Drying out entirely leading to sudden death.", steps: ["Water using a fine nozzle or submerge pot", "Prune new growth to maintain shape", "Wire branches carefully if styling", "Repot every 2-5 years", "Protect outdoor species from extreme winter cold"] },
    { id: "tulip", name: "Tulip", image: "images/tulip.jpg", description: "Classic spring-blooming bulbs.", watering: "1 inch per week during growing season.", sunlight: "Full to partial sun.", soil: "Well-drained soil.", fertilizer: "Bulb food at planting time.", problems: "Squirrels eating bulbs. Bud blast (failure to bloom).", steps: ["Plant bulbs in autumn before ground freezes", "Plant 6-8 inches deep with pointy end up", "Water well after planting", "Apply mulch to protect in winter", "Let foliage die back naturally after blooming"] },
    { id: "daffodil", name: "Daffodil", image: "images/daffodil.jpg", description: "Cheerful yellow and white spring flowers that animals won't eat.", watering: "Regularly during spring. Needs dry summer dormancy.", sunlight: "Full sun or dappled shade.", soil: "Neutral, well-draining soil.", fertilizer: "Low-nitrogen bulb food.", problems: "Rot if grown in poorly draining, wet soil.", steps: ["Plant bulbs in fall", "Plant 3 times as deep as the bulb is tall", "Group in drifts for best visual effect", "Leave leaves until they turn brown", "Divide clumps every few years"] },
    { id: "lily", name: "Lily", image: "images/lily.jpg", description: "Tall, elegant, highly fragrant summer bloomers.", watering: "Keep moist during active growth.", sunlight: "Full sun for tops, shaded roots.", soil: "Rich, well-draining loam.", fertilizer: "High-potassium fertilizer every 2 weeks until bloom.", problems: "Red lily beetles eating leaves.", steps: ["Plant in spring or fall", "Add organic matter to soil", "Stake tall varieties securely", "Apply a heavy mulch to keep roots cool", "Deadhead spent blooms but keep the stem"] },
    { id: "daisy", name: "Shasta Daisy", image: "images/daisy.jpg", description: "Cheerful and hardy perennials with white petals and yellow centers.", watering: "1 inch per week. Tolerates some drought.", sunlight: "Full sun.", soil: "Average, well-drained soil.", fertilizer: "Compost in early spring.", problems: "Aphids and earwigs.", steps: ["Sow seeds or plant divisions in spring", "Space 1-2 feet apart", "Water consistently in first year", "Deadhead repeatedly to prolong blooming", "Divide clumps every 3-4 years"] },
    { id: "marigold", name: "Marigold", image: "images/marigold.jpg", description: "Bright, punchy annuals that act as a great companion plant.", watering: "Let soil dry out somewhat between waterings.", sunlight: "Full sun.", soil: "Unfussy, almost any well-drained soil.", fertilizer: "None required. Too much fertilizer reduces blooms.", problems: "Slugs, snails, and spider mites.", steps: ["Plant after all danger of frost", "Use around tomatoes to deter pests", "Deadhead spent blooms continuously", "Avoid watering over the flowers", "Pull up after frost kills them in fall"] },
    { id: "petunia", name: "Petunia", image: "images/petunia.jpg", description: "Sprawling, colorful annuals ideal for hanging baskets.", watering: "Water deeply once a week, more in baskets.", sunlight: "Full sun.", soil: "Light, fertile, well-draining.", fertilizer: "Liquid fertilizer every 2-3 weeks.", problems: "Legginess if they don't get enough sun or pruning.", steps: ["Plant in premium potting mix for containers", "Provide excellent drainage", "Pinch back early growth for bushiness", "Deadhead meticulously all season", "Water baskets daily in extreme heat"] },
    { id: "pansy", name: "Pansy", image: "images/pansy.jpg", description: "Cool-weather favorites with 'face-like' blooms.", watering: "Keep soil evenly moist.", sunlight: "Full to partial sun.", soil: "Rich, slightly acidic soil.", fertilizer: "General fertilizer every 4 weeks.", problems: "Dying off quickly in summer heat.", steps: ["Plant in early spring or early fall", "Mulch around plants to retain moisture", "Remove faded flowers right away", "Water in the morning so leaves dry by night", "Tear out when they get spindly in summer heat"] },
    { id: "zinnia", name: "Zinnia", image: "images/zinnia.jpg", description: "Fast-growing annuals offering spectacular summer color.", watering: "Water at the base. Let soil dry slightly.", sunlight: "Full sun is a must.", soil: "Rich, well-draining.", fertilizer: "Light fertilizer at planting time.", problems: "Powdery mildew if planted too closely.", steps: ["Direct sow seeds securely after frost", "Space well to ensure air circulation", "Pinch seedlings back to encourage branching", "Deadhead relentlessly", "Water with a soaker hose to keep leaves dry"] },
    { id: "geranium", name: "Geranium (Pelargonium)", image: "images/geranium.jpg", description: "Sturdy, vibrant bedding plants and container favorites.", watering: "Allow soil to dry out between thorough waterings.", sunlight: "Full sun (protect from harsh afternoon sun in hot climates).", soil: "Well-draining, slightly acidic.", fertilizer: "Water-soluble fertilizer every 2 weeks.", problems: "Overwatering leads to stem rot.", steps: ["Plant in terra cotta pots to prevent wet feet", "Remove yellowed leaves immediately", "Snap off dead flower stalks at the base", "Bring indoors before first frost to overwinter", "Prune aggressively in spring"] },
    { id: "begonia", name: "Begonia", image: "images/begonia.jpg", description: "Excellent shade-loving plants with beautiful foliage and flowers.", watering: "Keep soil slightly moist, never soggy.", sunlight: "Dappled shade to partial sun.", soil: "Rich, aerated potting mix.", fertilizer: "Diluted liquid fertilizer every 2 weeks.", problems: "Mildew and rot if leaves stay wet.", steps: ["Plant tubers or nursery plants in spring", "Water only the soil, not the leaves", "Ensure pots have large drainage holes", "Pinch off dead blooms gently", "Dig up tubers in fall if in cold climate"] },
    { id: "impatiens", name: "Impatiens", image: "images/impatiens.jpg", description: "The classic shade garden annual blooming continuously all summer.", watering: "Need constant moisture. Wilt quickly if dry.", sunlight: "Full shade to partial shade.", soil: "Rich, moisture-retentive soil.", fertilizer: "Slow-release fertilizer at planting.", problems: "Downy mildew can decimate beds quickly.", steps: ["Plant in shaded beds or under trees", "Add generous amounts of compost before planting", "Check containers daily for water needs", "Do not let them fully wilt", "Enjoy continuous blooms with no deadheading required"] }
];

// If in Node, export for testing; else attach to window
if (typeof module !== 'undefined' && module.exports) {
    module.exports = plantsData;
}
