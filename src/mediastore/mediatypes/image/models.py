import os
from django.utils.translation import ugettext_lazy as _
from django.db import models
from mediastore.conf import settings as msettings
from mediastore.models import Media
from django.template.defaultfilters import slugify
from wand.image import Image as wd
from PIL import Image as Pil
from resizeimage import resizeimage
from django.conf import settings


def get_image_mimetype(file):
    try:
        from PIL import Image
    except ImportError:
        import Image
    closed = file.closed
    try:
        if closed:
            file.open()
        image = Image.open(file)
    except IOError:
        return None
    if closed:
        file.close()
    elif hasattr(file, 'seek'):
        file.seek(0)
    return Image.MIME[image.format]


class Image(Media):
    help_text = _('Stores an image and holds attributes like width, height and mimetype.')

    file = models.ImageField(_('image'),
        width_field='width',
        height_field='height',
        upload_to=os.path.join(msettings.MEDIASTORE_FS_PREFIX, 'images')
    )
    width = models.IntegerField(_('width'), editable=False)
    height = models.IntegerField(_('height'), editable=False)
    mimetype = models.CharField(_('mimetype'), max_length=32,
        null=True, blank=True, editable=False)

    class Meta:
        app_label = 'mediastore'
        verbose_name = _('image')
        verbose_name_plural = _('images')

    def save(self, *args, **kwargs):
        self.mimetype = get_image_mimetype(self.file)
        super(Image, self).save(*args, **kwargs)

    def get_original(self):
        if self.file.url[0] is '/':
            url = settings.CURRENT_SYSTEM
            return url + self.file.url
        return self.file.url

    def _get_media_count(self):
        line = self.file.url
        count = 0
        item = '/media'
        for i in line.split('/'):
            if u'media' in i:
                count += 1
        return item * count

    def _get_size(self, size, croping=False):
        if settings.CURRENT_SYSTEM:
            url = settings.CURRENT_SYSTEM
        else:
            url = ''
        try:
            size_name = [key for key, value in self.SIZE.iteritems() if value == size][0]
        except:
            size_name = str(size)

        rvalue = str(size)

        name = ['','','','']
        name[0] = os.path.split(self.file.path)[0]+'/'
        name[1] = slugify(os.path.splitext(os.path.split(self.file.path)[1])[0])
        name[2] = size_name
        name[3] = os.path.splitext(self.file.path)[1]
        nm = '_'.join(name)

        if os.path.isfile(nm):
            p = nm.split('media')[-1:]
            return url + self._get_media_count() + p[0]
        else:
            with open(self.file.path, 'rb') as fl:
                sizelist = size.replace('x',' x ').split(' ')
                if croping and len(sizelist) == 3:
                    with Pil.open(fl) as img:
                        cover = resizeimage.resize_cover(img,[int(sizelist[0]), int(sizelist[2])], validate=False)
                        cover.save(nm, img.format)
                else:
                    with wd(file=fl) as img:
                        img.transform(resize=rvalue)
                        img.save(filename=nm)
                if os.path.isfile(nm):
                    p = nm.split('media')[-1:]
                    return url + self._get_media_count() + p[0]

    def get_small(self):
        try:
            return self._get_size('200x')
        except:
            self.get_original()

    def get_medium(self):
        try:
            return self._get_size('900x')
        except:
            self.get_original()

    def get_large(self):
        try:
            return self._get_size('1400x')
        except:
            self.get_original()