from django.contrib.contenttypes.models import ContentType
from django.apps import apps


def unique_slug(text, model, slug_field='slug'):
    from django.template.defaultfilters import slugify
    base = slug = slugify(text)
    suffix = 0
    while True:
        if suffix:
            slug = "-".join([base, str(suffix)])
        if not model.objects.filter(**{'%s__exact' % slug_field: slug}).count():
            return slug
        suffix += 1


def is_media_model(model):
    from mediastore.models import Media
    if model is Media:
        return False
    return issubclass(model, Media)


def is_media_instance(model):
    from mediastore.models import Media
    if model.__class__ is Media:
        return False
    return isinstance(model, Media)


def get_media_models(app_label=None, model_label=None):
    models = []
    if app_label:
        appa = [apps.get_app_config(app_label)]
        for app in appa:
            if model_label:
                models.append(app.get_model(model_label))
            else:
                models.extend(app.get_models())

    else:
        models.extend(apps.get_models())

    models = [model for model in models if is_media_model(model)]
    return models


def get_media_types(app_label=None, model_label=None):
    models = get_media_models(app_label, model_label)
    types = set()
    for model in models:
        if model.media_type:
            types.add(model.media_type)
    return types


def get_model_for_type(media_type):
    for model in get_media_models():
        if model.media_type == media_type:
            return model
    raise ValueError('There is no such mediatype available.')


def get_content_types_for_type(media_type):
    models = []
    for model in get_media_models():
        if model.media_type == media_type:
            models.append(
                ContentType.objects.get_for_model(model))
    return models


def get_preview(obj, size):
    from django.template import TemplateDoesNotExist
    from django.template.loader import render_to_string
    data = {
        'object': obj,
        'size': size,
    }
    try:
        return render_to_string(
            'mediastore/types/%s/preview.html' % obj.object.media_type,
            data
        )
    except TemplateDoesNotExist:
        return render_to_string('mediastore/no_display_found.html', data)
