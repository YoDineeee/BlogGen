from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home),
    path('online/',views.Online),
    path('meetme/',views.Meetme),
    path('topdoners/',views.top_doners),
    path('account/',views.Accounts),

]
