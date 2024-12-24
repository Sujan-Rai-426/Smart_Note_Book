"""
URL configuration for Backend_django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.shortcuts import render
from django.urls import include, path

from django.conf import settings
from django.conf.urls.static import static

from api.views import UserCreateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 


# def index_view(request):
#     return render(request, 'dist/index.html')


urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Path to the api app
    path('api/', include('api.urls')),
    path('api/user/register/', UserCreateView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls')),
    
    
    # Path to the frontend react app
    # path('', index_view, name='index'),
] 
