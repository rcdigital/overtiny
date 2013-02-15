from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

class OvertinyAuthBackEnd(ModelBackend):
    
    def authenticate(self, email=None,**kwargs):
        try:
            user = User.objects.get(email=email)
            return user
        except User.DoesNotExist:
            return None
