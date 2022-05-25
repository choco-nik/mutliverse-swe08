from apprentice import *

#ROUTES

@app.route("/")
def say_hello():
    return "Welcome to the Apprentice Informational API!"


@app.route("/sign_in", methods=["GET", "POST"])
def sign_in():
    request_data = request.get_json()
    email_entered = request_data["email"]
    password_entered = request_data["password"]
    user = Apprentice.query.filter(
        or_(Apprentice.email == email_entered, Apprentice.password == password_entered)
    ).first()
    if user is not None and verify_password(password_entered, user.hash):
        return jsonify({"signed_in": True})
    return jsonify({"signed_in": False})


@app.route("/apprentice", methods=["GET"])
def get_apprentices():
    """Function to get all the movies in the database"""
    return jsonify({"Apprentices": Apprentice.get_all_apprentices()})


@app.route("/apprentice/<int:id>", methods=["GET"])
def get_apprentice_by_id(id):
    return_value = Apprentice.get_apprentice(id)
    return jsonify(return_value)


@app.route("/apprentice", methods=["POST"])
def add_new_apprentice():
    """Function to add new apprentice to our database"""
    request_data = request.get_json()  # getting data from client
    Apprentice.add_apprentice(
        request_data["id"],
        request_data["employee_id"],
        request_data["email"],
        request_data["password"],
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
        request_data["email"],
        request_data["password"],
    )
    response = Response("Apprentice Updated", status=200, mimetype="application/json")
    return response


@app.route("/apprentice/<int:id>", methods=["DELETE"])
def remove_apprentice(id):
    """Function to delete movie from our database"""
    Apprentice.delete_apprentice(id)
    response = Response("Apprentice Deleted", status=200, mimetype="application/json")
    return response


if __name__ == "__main__":
    app.run(port=5050, debug=True)
