"""Defines the database models for the bsky_cidades application."""

from django.db import models

# Create your models here.
class City(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    est_pop = models.IntegerField(default=0)
    cns_pop = models.IntegerField(default=0)
    gentilic = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    used = models.BooleanField(default=False)
    def __str__(self) -> str:
        return str(self.name)

# Município [-]
# Código [-]
# Gentílico [-]
# Prefeito [2025]
# Área Territorial - km² [2024]
# População no último censo - pessoas [2022]
# Densidade demográfica - hab/km² [2022]
# População estimada - pessoas [2024]
# Escolarização 6 a 14 anos - % [2022]
# IDHM Índice de desenvolvimento humano municipal [2010]
# Mortalidade infantil - óbitos por mil nascidos vivos [2023]
# Total de receitas brutas realizadas - R$ [2024]
# Total de despesas brutas empenhadas - R$ [2024]
# PIB per capita - R$ [2021]
# Estado [-]