from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class CategoryProductView(APIView):
    def get(self, request):
        category_obj = Category.objects.all()
        category_serializer = CategorySerializer(category_obj, many=True).data
        data = []
        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerializer(
                product_obj, many=True, context={'request': request}).data
            data.append(cata)
        return Response(data)


class SingleBrandsProducts(APIView):
    def get(self, request, pk):
        brand_obj = Brand.objects.filter(id=pk)
        brand_serializer = BrandSerializer(
            brand_obj, many=True, context={'request': request})
        data = []
        for brand in brand_serializer.data:
            brandProducts = Product.objects.filter(brand=brand['id'])
            brandProducts_serializer = ProductSerializer(
                brandProducts, many=True, context={'request': request})
            brand['products'] = brandProducts_serializer.data
            data.append(brand)
        return Response(data)


class SingleCategoryView(APIView):
    def get(self, request, pk):
        category_obj = Category.objects.filter(id=pk)
        category_serializer = CategorySerializer(
            category_obj, many=True, context={'request': request}).data
        data = []
        for cata in category_serializer:
            product_obj = Product.objects.filter(category=cata['id'])
            cata['products'] = ProductSerializer(
                product_obj, many=True, context={'request': request}).data
            data.append(cata)
        return Response(data)


class CategorisView(APIView):
    def get(self, request):
        categoris_obj = Category.objects.all()
        category_serializer = CategorySerializer(
            categoris_obj, many=True, context={'request': request}).data
        return Response(category_serializer)


class SingleProductView(APIView):
    def get(self, request, pk):
        product_obj = Product.objects.filter(id=pk)
        data = []
        product_serializer = SingleProductSerializer(
            product_obj, many=True, context={'request': request}).data
        for prod in product_serializer:
            prod_view = ProductView.objects.filter(product=prod['id']).first()
            # print('prod_view', prod_view)
            if prod_view:
                prod['view'] = prod_view.view
            else:
                prod['view'] = 0
            prod_review = Review.objects.filter(product=prod['id'])
            prod_review_serializer = ReviewSerializer(
                prod_review, many=True).data
            prod['review'] = prod_review_serializer

            data.append(prod)
        return Response(data)


class BrandSNameView(APIView):
    def get(self, request):
        brand_obj = Brand.objects.all()
        brand_serializers = BrandSerializer(
            brand_obj, many=True, context={'request': request}).data
        return Response(brand_serializers)


class TrandingProductsView(APIView):
    def get(self, request):
        products_obj = TrendingProduct.objects.all()
        product_serializer = TrendingProductSerializer(
            products_obj, many=True, context={'request': request}).data
        return Response(product_serializer)


class SliderView(APIView):
    def get(self, request):
        slider_obj = Slider.objects.all()
        slider_serializer = SliderSerializer(
            slider_obj, many=True, context={'request': request}).data
        return Response(slider_serializer)


class AddViewProduct(APIView):
    def post(self, request):
        p_id = request.data['id']
        p_obj = Product.objects.get(id=p_id)
        p_view_obj = ProductView.objects.filter(product=p_obj).first()
        if p_view_obj:
            p_view_obj.view += 1
            p_view_obj.save()
        else:
            ProductView.objects.create(product=p_obj, view=1)
        return Response({'error': False, 'message': 'Success'})


class MostViewsProducts(APIView):
    def get(self, request):
        p_obj = ProductView.objects.all().order_by('-view')[:12]
        p_obj_data = ProductViewSerializer(
            p_obj, many=True, context={'request': request}).data
        return Response(p_obj_data)
