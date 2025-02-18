from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Challenge


class ChallengeList(APIView):
    def get(self, request):
        challenges = Challenge.objects.all().values(
            "id", "title", "description", "difficulty", "points"
        )
        return Response({"challenges": list(challenges)})
