# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.db import transaction
# from pcrTeam.models import *
# from mediaTeam.models import * 

# @receiver(post_save, sender=PCR_Event)
# def sync_media_team_event(sender, instance, created, **kwargs):
#     # Check if the signal is already being processed for this instance
#     if hasattr(instance, '_syncing'):
#         return
#     if created:
#         try:
#             # Set a flag to avoid recursion
#             instance._syncing = True
#             # Create related objects
#             with transaction.atomic():
#                 content_event = ContentEvent.objects.create(
#                     title=instance.title,
#                     date=instance.date,
#                 )
#                 Media_Event.objects.create(
#                     events=content_event,
#                     hero_Image=instance.imgBanner
#                 )
#         finally:
#             # Remove the flag after processing
#             del instance._syncing