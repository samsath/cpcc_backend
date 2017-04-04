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

router_v1 = routers.SimpleRouter()
router_v1.register(r'article', ArticleViewSet)
router_v1.register(r'category', CategoryViewSet)
router_v1.register(r'sessions', SessionView)
router_v1.register(r'faq', FaqViewSet)
router_v1.register(r'notification', NotificationView)
router_v1.register(r'homepage', HomePageView)
router_v1.register(r'menu', MenuViews)
router_v1.register(r'membership', MembershipView)
router_v1.register(r'newsletter', NewsletterView)


urlpatterns = [
    url(r'api-token-auth$', views.obtain_auth_token),
    url(r'api/auth/', include('knox.urls')),
    url(r'^api/v1/', include(router_v1.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)