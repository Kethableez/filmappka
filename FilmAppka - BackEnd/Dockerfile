FROM mcr.microsoft.com/dotnet/sdk:3.1 as build
WORKDIR /api

COPY . .

ARG BUILD_CONFIGURATION=Debug
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DOTNET_USE_POLLING_FILE_WATCHER=true  
ENV ASPNETCORE_URLS=http://+:5000;http://+:5001

RUN dotnet dev-certs https --clean
RUN dotnet dev-certs https

RUN dotnet build
ENTRYPOINT [ "dotnet", "run", "--project=FA.RestApi" ]