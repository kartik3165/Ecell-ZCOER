from django.apps import AppConfig


class PcrteamConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'pcrTeam'

    def ready(self):
        import pcrTeam.signals 
