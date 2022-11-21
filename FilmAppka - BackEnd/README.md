# Backend

## Uruchomienie

### Wymagania wst�pne:
* Baza danych SQL (dowolna wersja)
* VisualStudio 

### Pierwsze uruchomienie
W celu uruchomienia aplikacji nale�y:
* Przywr�ci� pakiety NuGet
* Utworzy� baz� danych
* Podmieni� adres bazy danych w FaDbContextFactory.cs oraz appsettings.json
* Zaaplikowa� migracje (Package Manager Console -> FA.DataAcces -> Wpisa� "Update-database")
* Wybra� FA.RestApi jako projekt startowy
* Uruchomi�

---

### Zmiany Punkt Kontrolny 1
#### Utworzenie Infrastruktury:
* Projekt FA.RestApi
* Projekt FA.Domain
* Projekt FA.DataAccess
* Projekt FA.Services
#### Przygotowanie Entity Framework - Prace w FA.Domain oraz FA. DataAccess
#### Przygotowanie RestApi - Prace w FA.RestApi
#### Utworzenie bazy danych

---

### Zmiany Punkt Kontrolny 2
#### Utworzenie pustych kontroler�w w celu przygotowania integracji z FrontEndem