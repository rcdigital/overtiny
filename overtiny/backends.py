from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

class OvertinyAuthBackEnd(ModelBackend):
    
    def authenticate(self, email=None, password=None,**kwargs):
        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None
