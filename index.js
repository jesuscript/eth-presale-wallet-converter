var fs = require("fs"),
    keythereum = require("keythereum"),
    validator = require("validator"),
    crypto = require("crypto");

var pk = process.argv[2],
    pass = process.argv[3];


var wallet = keythereum.dump(pass, pk, "80f1c403d90ed46fa98fe9096ecb57c6e9dd25a9582c1a7c43fa07f320a88f29", "fd739b3c6514eb98ce860d3fdd310af3", {
  kdf: "scrypt",
  kdfparams: {
    "dklen":32,
    "n":262144,
    "p":1,
    "r":8,
    "salt":"80f1c403d90ed46fa98fe9096ecb57c6e9dd25a9582c1a7c43fa07f320a88f29"
  }
});


fs.writeFileSync("presale-converted.json",JSON.stringify(wallet));



