from ..mediatypes.download.serializers import DownloadSerializers
from ..mediatypes.embeded.serializers import EmbededSerializers
from ..mediatypes.image.serializers import ImageSerializer
from ..mediatypes.map.serializers import MapSerialiers
from ..mediatypes.pdf.serializers import PdfSerializer
from ..mediatypes.video.serializers import VideoSerializer

from rest_framework.serializers import ModelSerializer
from ..models import Media


class MediaStoreSerializers(ModelSerializer):
    image = ImageSerializer(read_only=True)
    download = DownloadSerializers(read_only=True)
    embeded = EmbededSerializers(read_only=True)
    map = MapSerialiers(read_only=True)
    pdf = PdfSerializer(read_only=True)
    video = VideoSerializer(read_only=True)

    class Meta:
        model = Media
        fields = '__all__'