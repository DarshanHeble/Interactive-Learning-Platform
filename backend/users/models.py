# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)

    # Fix reverse accessor clash for groups and user_permissions
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="custom_user_set",  # Changing the related name
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="custom_user_permissions",  # Changing the related name
        blank=True,
    )

    def __str__(self):
        return self.username
