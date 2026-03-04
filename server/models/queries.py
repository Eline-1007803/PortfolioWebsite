from database_connection import Database

class Queries:
    def __init__(self):
        database = Database()
        self.cursor, self.con = database.connect_db()

    def get_all_products(self):
       products = self.cursor.execute("SELECT * FROM products").fetchall()
       return products

    def get_sorted_products(self):
        sorted_products = self.cursor.execute("SELECT * FROM products WHERE price > 10").fetchall()
        return sorted_products

    def post_contact_info(self, fname, lname, email, phonenumber, subject, message):
        contact_info = self.cursor.execute(
            '''INSERT INTO (fname, lname, email, phonenumber, subject, message) VALUES (?, ?, ?, ?, ?, ?)''',
            (fname, lname, email, phonenumber, subject, message))
        self.con.commit()
        return contact_info