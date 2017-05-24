# -*- coding: utf-8 -*-

def order_queryset_by_pks(queryset, pks):
    object_list = dict((
        (str(key), value)
        for key, value in queryset.in_bulk(pks).items()))
    return [object_list[str(pk)] for pk in pks]
