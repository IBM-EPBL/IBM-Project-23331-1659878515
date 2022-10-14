import sqlite3

conn=sqlite3.connect('users.db')
print('Database opened successfully')

conn.execute('CREATE TABLE USERS (name TEXT,address TEXT,city TEXT, pin NUMBER)')
print('Table created successfully')
conn.close()