from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('categoryproducts/', CategoryProductView.as_view()),
    path('categoris/', CategorisView.as_view()),
    path('singlecategoris/<int:pk>/', SingleCategoryView.as_view()),
]
