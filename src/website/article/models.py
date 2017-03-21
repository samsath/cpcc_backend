from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse


def categoryCount():
    try:
        return Category.objects.count()
    except:
        return 0


class Category(Base):
    sort_value = models.IntegerField(_('Sort Value'), default=categoryCount())


def articleCount():
    try:
        return Article.objects.count()
    except:
        return 0


class Article(Base):
    list_description = models.CharField(_('List Description'), max_length=255, blank=True, null=True)
    description = models.TextField(_('Description'), blank=True, null=True)
    post_date = models.DateField(_('Post Date'), blank=True, null=True)
    author = models.ForeignKey(User, blank=True, null=True)
    sort_value = models.IntegerField(_('Sort Value'), default=articleCount())
    category = models.ManyToManyField(Category, blank=True, null=True)

    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'
        ordering = ['-sort_value',]

    def url(self):
        return None
        #return reverse('articles',kwargs={'slug':self.slug})

