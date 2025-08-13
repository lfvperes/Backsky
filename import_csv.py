import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Backsky.settings')
django.setup()

import csv
from bsky_cidades.models import City

with open('cities.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        try:
            est_pop = int(row['População estimada - pessoas [2024]'])
        except ValueError:
            est_pop = 0
        try:
            cns_pop = int(row['População estimada - pessoas [2024]'])
        except ValueError:
            cns_pop = 0
        
        city = City(
            id = row['Código [-]'],
            name=row['Município [-]'],
            est_pop=est_pop,
            cns_pop=cns_pop,
            gentilic=row['Gentílico [-]'],
            state=row['Estado [-]'],
        )
        city.save()