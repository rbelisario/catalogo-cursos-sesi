FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY backend/CatalogoCursos.Api.csproj backend/
RUN dotnet restore backend/CatalogoCursos.Api.csproj

COPY backend/ backend/
RUN dotnet publish backend/CatalogoCursos.Api.csproj \
    -c Release \
    -o /app/publish \
    --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .
ENV ASPNETCORE_HTTP_PORTS=10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "CatalogoCursos.Api.dll"]
