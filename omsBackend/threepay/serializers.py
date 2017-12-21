# -*- coding: utf-8 -*-
# author: kiven

from threepay.models import Platform, Merchant, PlatformEnclosure, ThreePayTicket, PayChannel
from rest_framework import serializers
from users.models import User, Group
from tools.models import Upload


class ThreePayTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThreePayTicket
        fields = (
            'url', 'id', 'ticketid', 'platform', 'level', 'status', 'create_user', 'action_user', 'follower',
            'create_time',
            'desc')


class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ('url', 'id', 'name', 'desc')


class PayChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PayChannel
        fields = ('url', 'id', 'name', 'desc')


class MerchantSerializer(serializers.ModelSerializer):
    platform = serializers.SlugRelatedField(queryset=Platform.objects.all(), slug_field='name')
    m_channel = serializers.SlugRelatedField(many=True, queryset=PayChannel.objects.all(), slug_field='name')

    class Meta:
        model = Merchant
        fields = (
            'url', 'id', 'platform', 'name', 'm_backurl', 'm_id', 'm_channel', 'm_md5key', 'm_public_key',
            'm_private_key',
            'p_public_key', 'three')


class PlatformEnclosureSerializer(serializers.ModelSerializer):
    create_user = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    file = serializers.SlugRelatedField(queryset=Upload.objects.all(), slug_field='filepath')

    class Meta:
        model = PlatformEnclosure
        fields = ('url', 'id', 'ticket', 'file', 'create_user', 'create_time')