# Generated by Django 5.1.2 on 2024-11-04 07:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mylibrary', '0007_remove_book_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='cover_image',
            new_name='coverImage',
        ),
    ]