from django.contrib import admin
from .models import (
    Customer,
    Category,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    TrendingProduct,
    Cart,
    CartProduct,
    Order,
)

admin.site.register([
    Customer,
    Category,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    TrendingProduct,
    Cart,
    CartProduct,
    Order,
])
