from auth import verify_password, hash_password
from flask import Flask, request, Response, jsonify
from sqlalchemy import or_
from settings import * 


class Apprentice(db.Model):
    __tablename__ = "apprentice_table"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer(), unique=True)
    email = db.Column(db.String())
    # password = db.Column(db.String())  # remove?
    hash = db.Column(db.Text(), nullable=False)

    def __init__(self, id, employee_id, email, password, hash):
        self.id = id
        self.employee_id = employee_id
        self.email = email
        self.password = password
        self.hash = hash

    def json(self):
        return {
            "id": self.id,
            "employee_id": self.employee_id,
            "email": self.email,
            # "password": self.password, to remove
            "hash": str(self.hash),
        }

    @classmethod
    def get_all_apprentices(cls):
        """function to get all movies in our database"""
        return [Apprentice.json(apprentice) for apprentice in Apprentice.query.all()]

    @staticmethod
    def get_apprentice(id):
        """function to get movie using the id of the movie as parameter"""
        return [Apprentice.json(Apprentice.query.filter_by(id=id).first())]

    @classmethod
    def update_apprentice(self, id, employee_id, email, password):
        """function to update the details of an apprentice using the id, title,
        year and genre as parameters"""
        apprentice_to_update = Apprentice.query.filter_by(id=id).first()
        apprentice_to_update.employee_id = employee_id
        apprentice_to_update.email = email
        apprentice_to_update.hash = hash_password(password)
        
        db.session.commit()

    @staticmethod
    def add_apprentice(id, employee_id, email, password):
        """function to add apprentice"""
        # creating an instance of our Apprentice constructor
        # hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
        hashed = hash_password(password)
        new_apprentice = Apprentice(
            id=id, employee_id=employee_id, email=email, password=password, hash=hashed
        )
        db.session.add(new_apprentice)  # add new apprentice to database session
        db.session.commit()  # commit changes to session

    @staticmethod
    def delete_apprentice(id):
        """function to delete an apprentice from our database using
        the id of the apprentice as a parameter"""
        Apprentice.query.filter_by(id=id).delete()
        # filter apprenntice by id and delete
        db.session.commit()

    @staticmethod
    def get_apprentice_by_email(email):
        """function to get apprentice using the id of the movie as parameter"""
        return [Apprentice.json(Apprentice.query.filter_by(email=email).first())]


def __repr__(self):
    return f"{self.email}:{self.pasword}"

