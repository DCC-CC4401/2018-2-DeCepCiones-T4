from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
    # path('', views.index, name=''),
    # En este caso el string de path recibe un entero, y la variable tiene nombre humano. También se pueden usar regex.
    # El nombre de la url permite insertarla en la template usando {% url 'humano' %}
    path('admin/', admin.site.urls),
    path('home/', views.landingPageEstudiante),
    path('perfil/', views.perfilDueno),
    path('fichaCursoDoc/', views.fichaCursoDocente),
    path('fichaCursoEst/', views.fichaCursoEstudiante),
    path('fichaCoev/', views.fichaCoevaluacionEstudiante),
]