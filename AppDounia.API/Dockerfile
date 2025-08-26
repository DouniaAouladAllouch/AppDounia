# Étape 1 : Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ["AppDounia.API/AppDounia.API.csproj", "AppDounia.API/"]
COPY ["AppDounia.Application/AppDounia.Application.csproj", "AppDounia.Application/"]
COPY ["AppDounia.Domain/AppDounia.Domain.csproj", "AppDounia.Domain/"]
COPY ["AppDounia.Infrastructure/AppDounia.Infrastructure.csproj", "AppDounia.Infrastructure/"]

RUN dotnet restore "AppDounia.API/AppDounia.API.csproj"

COPY . .
WORKDIR "/src/AppDounia.API"

RUN dotnet publish "AppDounia.API.csproj" -c Release -o /app/publish

# Étape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

# Installer curl pour les healthchecks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Forcer .NET à écouter sur le port 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "AppDounia.API.dll"]
