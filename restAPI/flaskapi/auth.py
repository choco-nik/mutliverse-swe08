import bcrypt

# hash pw
def hash_password(password):
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

# check pw
def verify_password(password, hash):
    return bcrypt.checkpw(password.encode("utf-8"), hash)

