from django.conf.urls import patterns, include, url
import local_settings
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^$', 'application.views.home.index', name='home'),
     url(r'^tasks/', 'application.views.task.index', name='task'),
     url(r'^xhr_save_time', 'application.views.task.xhr_save_time', name='xhr_save_time'),
     url(r'^start_timer', 'application.views.task.start_timer', name='start_timer'),
     url(r'^home/register', 'application.views.home.register',name='register'),
     url(r'^access-channel', 'application.views.home.access_channel',name='access-channel'),
     url(r'^home/logout', 'application.views.home.logout',name='logout'),
     url(r'', include('social_auth.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

if local_settings.IS_LOCAL :
    urlpatterns += patterns('',
        (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': local_settings.MEDIA_ROOT}),
    )
