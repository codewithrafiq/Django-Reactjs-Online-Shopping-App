from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'email',)
        extra_kwargs = {'password': {"write_only": True, 'required': True}, }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['user'] = UserSerializer(instance.user, ).data
        return response


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)


class SingleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1

    def imageurl(self, obj):
        request = self.context.get('request')
        return request.url(image)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

        def imageurl(self, obj):
            request = self.context.get('request')
            return request.url(image)


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'customer', 'title']
        depth = 1


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"

    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(logo)


class TrendingProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrendingProduct
        fields = "__all__"

    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['products'] = ProductSerializer(
            instance.products, context={'request': request}).data
        return response


class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = "__all__"

    def getimage(self, *args, **kwargs):
        request = self.context.get('request')
        return request.url(image)


class ProductViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductView
        fields = "__all__"

    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['product'] = ProductSerializer(
            instance.product, context={'request': request}).data
        return response
