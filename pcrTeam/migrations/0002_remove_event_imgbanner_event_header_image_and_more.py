# Generated by Django 5.1.6 on 2025-03-28 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pcrTeam', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='imgBanner',
        ),
        migrations.AddField(
            model_name='event',
            name='header_image',
            field=models.ImageField(default='', upload_to='event_headers/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
