# Backsky

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Backsky is a Python/Django REST API that provides authoritative data about Brazilian cities. It serves as the back-end for the [Cidades do Brasil](https://github.com/lfvperes/cidades-br) project, exposing city lists and related lookup endpoints so front-ends or other services can consume city metadata in a simple, standardized way. It is not an official government source.

## Key features
- RESTful API built with Django and Django REST Framework.
- Endpoints to list cities, retrieve details for a specific city, and perform basic searches and filters.
- Pagination and simple filtering for efficient client usage.
- Clear data model using canonical identifiers (for example, IBGE municipality codes) and consistent field naming.

## Technology stack
This project uses a compact, industry-standard stack chosen to make the codebase approachable for reviewers while demonstrating backend skills:
- **Language:** Python (3.10+)
- **Framework:** Django & Django REST Framework
- **Database:** SQLite (development), PostgreSQL (recommended for production)
- **API Tools:** `django-filter` for filtering, DRF pagination.
- **Tooling:** `pip`/`venv` for development. Docker support may be included.

## Quick usage examples
- `GET /api/cities/` — returns a paginated list of cities.
- `GET /api/cities/{id}/` — returns full metadata for a single city.
- Filtering/search: `/api/cities/?search={term}`, `/api/cities/?state={UF}`

Example:

```bash
curl -s "https://your-backend.example.com/api/cities/?search=rio"
```

Contributing
- Open issues for bugs or feature suggestions.
- Submit pull requests with clear descriptions and tests for behavioral changes where appropriate.
- Follow repository coding style and include migration files for model changes.

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

