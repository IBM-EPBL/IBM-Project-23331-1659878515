from re import T
from flask import Flask,render_template,flash,redirect,url_for,session,request
import sqlite3

app=Flask(__name__)
app.secret_key="123"

con=sqlite3.connect("database.db")
con.execute("create table if not exists customer(pid integer primary key,name text,address text,contact integer,mail text)")
con.close()

@app.route("/")
def homePage():
    return render_template('home.html')

@app.route("/about")
def aboutPage():
    return "about Page !!!"

@app.route("/signin",methods=["GET","POST"])
def signinPAGE():
    if request.method=='POST':
        name=request.form['name']
        password=request.form['password']
        con=sqlite3.connect("database.db")
        con.row_factory=sqlite3.Row
        cur=con.cursor()
        cur.execute("select * from customer where name=? and mail=?",(name,password))
        data=cur.fetchone()

        if data:
            session["name"]=data["name"]
            session["mail"]=data["mail"]
            return redirect("home")
        else:
            flash("Username and Password Mismatch","danger")
    return render_template('signin.html')


@app.route("/signup",methods=['GET','POST'])
def signupPAGE():
    if request.method=='POST':
        try:
            name=request.form['name']
            address=request.form['address']
            contact=request.form['contact']
            mail=request.form['mail']
            con=sqlite3.connect("database.db")
            cur=con.cursor()
            cur.execute("insert into customer(name,address,contact,mail)values(?,?,?,?)",(name,address,contact,mail))
            con.commit()
            flash("Record Added  Successfully","success")
        except:
            flash("Error in Insert Operation","danger")
        finally:
            return redirect(url_for("home"))
            con.close()
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
    app.run(host='0.0.0.0',port=3000,debug=True)