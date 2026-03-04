import sqlite3
from pathlib import Path


class DatabaseGenerator:
    def __init__(self, database_file, overwrite=False, initial_data=False):
        self.database_file = Path(database_file)
        self.create_initial_data = initial_data
        self.database_overwrite = overwrite
        self.test_file_location()
        self.conn = sqlite3.connect(self.database_file)

    def generate_database(self):
        self.create_table_products()
        self.create_table_contactinfo()

        if self.create_initial_data:
            self.insert_product()
            self.insert_product2()
            self.insert_contact()


    def create_table_products(self):
        create_statement = """
         CREATE TABLE IF NOT EXISTS products (
             product_id INTEGER PRIMARY KEY AUTOINCREMENT,
             name TEXT NOT NULL,
             price FLOAT NOT NULL
            );
         """
        self.__execute_transaction_statement(create_statement)
        print("✅ products table created")

    def create_table_contactinfo(self):
        create_statement = """
         CREATE TABLE IF NOT EXISTS contactinfo (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             fname TEXT NOT NULL,
             lname TEXT NOT NULL,
             email TEXT NOT NULL,
             phonenumber TEXT,
             subject TEXT NOT NULL,
             message TEXT NOT NULL
             );
         """
        self.__execute_transaction_statement(create_statement)
        print("✅ contactinfo table created")


    def insert_product(self):
        product1 = [
            ("Knuffelbeer", 19.95)
        ]
        insert_statement = "INSERT INTO products (name, price) VALUES (?, ?);"
        self.__execute_many_transaction_statement(insert_statement, product1)
        print("✅ Default product created")

    def insert_product2(self):
        product2 = [
            ("Aardrijkskundeboek", 4.05)
        ]
        insert_statement = "INSERT INTO products (name, price) VALUES (?, ?);"
        self.__execute_many_transaction_statement(insert_statement, product2)
        print("✅ Default product created")

    def insert_contact(self):
        contact = [
            ("Eline", "Mol", "e.m@outlook.com", "123456", "Sollicitatiegesprek", "Hallo, wil je op gesprek komen?")

        ]
        insert_statement = "INSERT INTO contactinfo (fname, lname, email, phonenumber, subject, message) VALUES (?, ?, ?, ?, ?, ?);"
        self.__execute_many_transaction_statement(insert_statement, contact)
        print("✅ Default contact created")


    def __execute_many_transaction_statement(
            self, create_statement, list_of_parameters=()
    ):
        c = self.conn.cursor()
        c.executemany(create_statement, list_of_parameters)
        self.conn.commit()

    def __execute_transaction_statement(self, create_statement, parameters=()):
        c = self.conn.cursor()
        c.execute(create_statement, parameters)
        self.conn.commit()

    def test_file_location(self):
        if not self.database_file.parent.exists():
            raise ValueError(
                f"Database file location {self.database_file.parent} does not exist"
            )
        if self.database_file.exists():
            if not self.database_overwrite:
                raise ValueError(
                    f"Database file {self.database_file} already exists, set overwrite=True to overwrite"
                )
            else:
                self.database_file.unlink()
                print("✅ Database already exists, deleted")
        if not self.database_file.exists():
            try:
                self.database_file.touch()
                print("✅ New database setup")
            except Exception as e:
                raise ValueError(
                    f"Could not create database file {self.database_file} due to error {e}"
                )


if __name__ == "__main__":
    my_path = Path(__file__).parent.resolve()
    root_backend = my_path.parent
    database_path = root_backend / "database" / "database.db"
    database_generator = DatabaseGenerator(
        database_path, overwrite=True, initial_data=True
    )
    database_generator.generate_database()