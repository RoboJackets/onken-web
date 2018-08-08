#!/bin/bash

export DEPLOYMENT_START=$(date --iso-8601=seconds)

# Switch to the project directory
cd "${0%/*}"

# Install required packages
yarn install

# Build production assets
yarn run build

# Ask PM2 to reload app
touch reload

# Notify Sentry that the deployment completed
# shellcheck disable=SC1091
./notify-sentry.sh
