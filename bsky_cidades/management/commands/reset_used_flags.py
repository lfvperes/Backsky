from django.core.management.base import BaseCommand
from bsky_cidades.models import City

class Command(BaseCommand):
    help = "Resets the 'used' field to False for all cities in the database."

    def handle(self, *args, **options):
        self.stdout.write("Starting to reset 'used' flags for all cities...")

        # This is the powerful one-liner that does all the work.
        # It returns the number of rows that were updated.
        num_updated = City.objects.all().update(used=False)

        self.stdout.write(self.style.SUCCESS(
            f"Successfully reset 'used' field for {num_updated} cities."
        ))