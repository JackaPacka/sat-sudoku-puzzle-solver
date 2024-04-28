const puzzles = [
    [
        "530070000",
        "600195000",
        "098000060",
        "800060003",
        "400803001",
        "700020006",
        "060000280",
        "000419005",
        "000080079"
    ],
    [
        "200080300",
        "060070084",
        "030500209",
        "000105408",
        "000000000",
        "402706000",
        "301007040",
        "720040060",
        "004010003"
    ],
    [
        "000000907",
        "000420180",
        "000705026",
        "100904000",
        "050000040",
        "000507009",
        "920108000",
        "034059000",
        "507000000"
    ],
    [
        "030050040",
        "008010500",
        "460000012",
        "070502080",
        "000603000",
        "040109030",
        "250000098",
        "001020600",
        "080060020"
    ],
    [
        "020810740",
        "700003100",
        "090002805",
        "009040087",
        "400208003",
        "160030200",
        "302700060",
        "005600008",
        "076051090"
    ]
];

export const generator = {
    generate: function() {
        const randomIndex = Math.floor(Math.random() * puzzles.length);
        return puzzles[randomIndex].map(row => row.split('').map(val => val !== "0" ? parseInt(val) : ""));
    }
};
