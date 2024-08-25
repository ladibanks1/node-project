const generator = require("generate-password")
const paswword = generator.generate({
    length : 8,
    lowercase: true,
    uppercase: false
})
console.log(paswword)