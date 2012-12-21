from django.contrib.auth.hashers import PBKDF2PasswordHasher

class OvertinyPBKDF2PasswordHasher(PBKDF2PasswordHasher):
    iterations = PBKDF2PasswordHasher.iterations * 100
