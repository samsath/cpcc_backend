from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.authtoken import views
from django.conf.urls.static import static
from rest_framework import routers
from website.article.views import ArticleViewSet, CategoryViewSet
from website.clubsessions.views import SessionView
from website.faq.views import FaqViewSet
from website.homepage.views import NotificationView, HomePageView, MenuViews
from website.membership.views import MembershipView
from website.newsletter.views import NewsletterView

admin.autodiscover()

router = routers.SimpleRouter()
router.register(r'article', ArticleViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'sessions', SessionView)
router.register(r'faq', FaqViewSet)
router.register(r'notification', NotificationView)
router.register(r'homepage', HomePageView)
router.register(r'menu', MenuViews)
router.register(r'membership', MembershipView)
router.register(r'newsletter', NewsletterView)


urlpatterns = [
    url(r'api-token-auth$', views.obtain_auth_token),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)