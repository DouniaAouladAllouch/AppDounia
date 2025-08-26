# Étape 1 : Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copier les fichiers .csproj pour profiter du cache Docker
COPY ["AppDounia.API/AppDounia.API.csproj", "AppDounia.API/"]
COPY ["AppDounia.Application/AppDounia.Application.csproj", "AppDounia.Application/"]
COPY ["AppDounia.Domain/AppDounia.Domain.csproj", "AppDounia.Domain/"]
COPY ["AppDounia.Infrastructure/AppDounia.Infrastructure.csproj", "AppDounia.Infrastructure/"]

# Restaurer les packages
RUN dotnet restore "AppDounia.API/AppDounia.API.csproj"

# Copier le reste du code
COPY . .
WORKDIR "/src/AppDounia.API"

# Publier l’application en Release
RUN dotnet publish "AppDounia.API.csproj" -c Release -o /app/publish

# Étape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "AppDounia.API.dll"]
