__author__ = 'sam'
from django.db import models
from tinymce_4.widgets import TinyMCEFullWidget


def TextEditor():
    return TinyMCEFullWidget(attrs={'style': 'width: 50%; height: 20em;'})


class TinyMCEAdminMixin(object):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCEFullWidget(attrs={'style': 'width:50%; height:20em;'})},
    }

    def get_queryset(self, request):
        qs = self.model.objects.get_queryset()
        ordering = self.get_ordering(request)
        if ordering:
            qs = qs.order_by(*ordering)
        return qs