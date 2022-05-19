from typing import Optional
from flask import Flask, request, Response, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


@app.route("/")
def say_hello():
    return "Hello, World!"


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Apprentice(db.Model):
    __tablename__ = "table"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer(), unique=True)
    name = db.Column(db.String())
    age = db.Column(db.Integer())
    company = db.Column(db.String())

    def __init__(self, employee_id, name, age, company):
        self.employee_id = employee_id
        self.name = name
        self.age = age
        self.company = company

    def json(self):
        return {
            "employee_id": self.employee_id,
            "name": self.name,
            "age": self.age,
            "company": self.company,
        }

    def get_all_apprentices():
        """function to get all movies in our database"""
        return [Apprentice.json(apprentice) for apprentice in Apprentice.query.all()]

    def add_apprentice(self, _employee_id, _name, _age, _company):
        """function to add apprentice"""
        # creating an instance of our Apprentice constructor
        new_apprentice = Apprentice(
            employee_id=_employee_id, name=_name, age=_age, company=_company
        )
        db.session.add(new_apprentice)  # add new apprentice to database session
        db.session.commit()  # commit changes to session

    def get_apprentice(id):
        """function to get movie using the id of the movie as parameter"""
        return [Apprentice.json(Apprentice.query.filter_by(employee_id=id).first())]

    def update_apprentice(self, employee_id, name, age, company):
        """function to update the details of an apprentice using the id, title,
        year and genre as parameters"""
        apprentice_to_update = Apprentice.query.filter_by(id=employee_id).first()
        apprentice_to_update.name = name
        apprentice_to_update.age = age
        apprentice_to_update.company = company
        db.session.commit()

    def delete_apprentice(id):
        """function to delete an apprentice from our database using
        the id of the movie as a parameter"""
        Apprentice.query.filter_by(id=id).delete()
        # filter movie by id and delete
        db.session.commit()

    def __repr__(self):
        return f"{self.name}:{self.employee_id}"


@app.route("/apprentice", methods=["GET"])
def get_apprentices():
    """Function to get all the movies in the database"""
    return jsonify({"Apprentices": Apprentice.get_all_apprentices()})


@app.route("/apprentice/<int:id>", methods=["GET"])
def get_apprentice_by_id(id):
    return_value = Apprentice.get_apprentice(id)
    return jsonify(return_value)


@app.route("/apprentice", methods=["POST"])
def add_apprentice():
    """Function to add new apprentice to our database"""
    request_data = request.get_json()  # getting data from client
    Apprentice.add_apprentice(
        request_data["employee_id"],
        request_data["name"],
        request_data["age"],
        request_data["company"],
    )
    response = Response("Apprentice added", 201, mimetype="application/json")
    return response


@app.route("/apprentice/<int:id>", methods=["PUT"])
def update_apprentice(id):
    """Function to edit movie in our database using movie id"""
    request_data = request.get_json()
    Apprentice.update_apprentice(
        id,
        request_data["employee_id"],
        request_data["name"],
        request_data["age"],
        request_data["company"],
    )
    response = Response("Apprentice Updated", status=200, mimetype="application/json")
    return response


@app.route("/movies/<int:id>", methods=["DELETE"])
def remove_movie(id):
    """Function to delete movie from our database"""
    Apprentice.delete_apprentice(id)
    response = Response("Apprentice Deleted", status=200, mimetype="application/json")
    return response


app.run(host="localhost", port=5050)

if __name__ == "__main__":
    app.run()
