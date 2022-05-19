from apprentice import *


@app.route("/apprentice", methods=["GET"])
def get_apprentices():
    """Function to get all the movies in the database"""
    return jsonify({"Movies": Apprentice.get_all_apprentices()})


@app.route("/apprentice/<int:id>", methods=["GET"])
def get_apprentice_by_id(id):
    return_value = Apprentice.get_movie(id)
    return jsonify(return_value)


@app.route("/apprentice", methods=["POST"])
def add_apprentice():
    """Function to add new movie to our database"""
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


if __name__ == "__main__":
    app.run(port=5050, debug=True)
