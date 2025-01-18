#!/bin/sh
set -e

if [ ! -d node_moules ]; then
  npm install
  npm run build
fi

exec "$@"