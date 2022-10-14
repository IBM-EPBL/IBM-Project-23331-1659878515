
import sqlite3 as sql
from flask import Flask,render_template,redirect,url_for,session,request

app=Flask(__name__)

@app.route("/")
def hello_page():
    return "Hello!!! How you doing!!"

@app.route("/home")
def homePage():
    return render_template('home.html')

@app.route("/adduser")
def addUser():
    return render_template('add_user.html')

@app.route('/addrec',methods=['POST','GET'])
def addrec():
    if request.method=='POST':
        try:
            name = request.form['name']
            address = request.form['address']
            city = request.form['city']
            pin = request.form['pin']
            # print(name + address+city+pin)

            with sql.connect('users.db') as con:
                # print("coming..........")
                cur=con.cursor()
                cur.execute("INSERT INTO users(name,address,city,pin) VALUES(?,?,?,?)",(name,address,city,pin))
                con.commit()
                msg="Record added successfully"
        except:
            print("except................")
            con.rollback()
            msg="ERROR in insertion!"

        finally:
            return render_template('list.html',msg=msg)
            con.close()

@app.route("/deleteuser")
def deleteuser():
    return render_template('del_user.html')

@app.route("/delete",methods=['POST','GET'])
def delete():    
    if request.method=='POST':
        try:
            name = request.form['name']
            msg="NULL"
            with sql.connect('users.db') as con:                
                cur=con.cursor()
                sql="Delete from users where name='SIVASUBRAMANIAN S'"
                # name=("{name}",)
                cur.execute(sql)
                con.commit()
                msg="Record deleted successfully"
        except:
            print("except................")
            con.rollback()
            msg="ERROR in deletion!"

        finally:
            return render_template('list.html',msg=msg)
            con.close()
        

@app.route("/list")
def list():
    con=sql.connect('users.db')
    con.row_factory=sql.Row

    cur=con.cursor()
    cur.execute('select * from users')

    user=cur.fetchall()
    return render_template("list.html",user=user)



@app.route("/about")
def aboutPage():
    return "about Page !!!"

@app.route("/signin")
def signinPAGE():
    return render_template('signin.html')


@app.route("/signup")
def signupPAGE():
    return render_template('signup.html')


@app.route("/admin")
def admin():
    return "Admin Page"

@app.route("/hello/<name>")
def hello_users(name):
    return "Hello!! %s" %name


@app.route("/user/<name>")
def hello_user(name):
    if name=='admin':
        return redirect(url_for('admin'))
    else:
        return redirect(url_for('hello_users',name=name))



if __name__=='__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)