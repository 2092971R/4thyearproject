from django.conf.urls import patterns, url
from project import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'),
		url(r'^twoperson/', views.twoperson, name= 'twoperson'),
		url(r'^threeperson/', views.threeperson, name= 'threeperson')
		)