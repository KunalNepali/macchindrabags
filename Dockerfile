# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["macchindrabagstore.csproj", "./"]
RUN dotnet restore "macchindrabagstore.csproj"

COPY . .
RUN dotnet publish "macchindrabagstore.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:10000

ENTRYPOINT ["dotnet", "macchindrabagstore.dll"]