# Generated by Django 5.1.6 on 2025-03-01 17:31

import tinymce.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('date', models.DateField()),
                ('tags', models.CharField(help_text='Seprate the tag with comma', max_length=150)),
                ('description', models.TextField(blank=True, default='', help_text='Enter 10 words description only', max_length=450)),
                ('detail_description', tinymce.models.HTMLField(blank=True)),
                ('slug', models.SlugField(blank=True, help_text='keep empty', unique=True)),
                ('imgBanner', models.ImageField(upload_to='event_Banner/')),
                ('status', models.CharField(choices=[('upcoming', 'Upcoming'), ('ongoing', 'Ongoing'), ('completed', 'Completed')], default='upcoming', max_length=20)),
                ('link', models.URLField(blank=True, help_text='Add event link (only for upcoming and ongoing events)', null=True)),
                ('showCase', models.BooleanField(default=False)),
            ],
        ),
    ]
