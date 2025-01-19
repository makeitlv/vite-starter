#!/bin/sh
set -e

if [ ! -d node_moules ]; then
  npm install
fi

exec "$@"