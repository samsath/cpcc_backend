from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.authtoken import views
from django.conf.urls.static import static
from rest_framework import routers


admin.autodiscover()

router = routers.SimpleRouter()
#router.register(r'accounts',AccountViewSet)

urlpatterns = [
    url(r'api-token-auth$', views.obtain_auth_token),
] + router.urls \
  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)