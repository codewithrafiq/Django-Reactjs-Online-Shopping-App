from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('categoryproducts/', CategoryProductView.as_view()),
    path('categoris/', CategorisView.as_view()),
    path('singlecategoris/<int:pk>/', SingleCategoryView.as_view()),
    path('singlebrands/<int:pk>/', SingleBrandsProducts.as_view()),
    path('singleproduct/<int:pk>/', SingleProductView.as_view()),
    path('brandsname/', BrandSNameView.as_view()),
    path('trandingproducts/', TrandingProductsView.as_view()),
    path('sliders/', SliderView.as_view()),
]
