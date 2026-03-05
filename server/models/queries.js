const database = require('./databaseConnection')

class Queries {
     static postContactInfo(fname, lname, email, phonenumber, subject, message) {
        const contactInfo =
            `INSERT INTO contactinfo (fname, lname, email, phonenumber, subject, message) VALUES (?,?,?,?,?,?)`
        database.run(contactInfo, [fname,lname, email, phonenumber, subject, message])
        return contactInfo
    }

    static getAllProducts() {
         return new Promise((resolve, reject) => {
         const products = `SELECT * FROM products`
         database.all(products, [], (err, rows) => {
             if (err) reject(err)
             else resolve(rows)
         })
    })
     }

}
module.exports = Queries


