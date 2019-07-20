#!/usr/bin/env bash

function open_url(){
  sleep 2
  open http://localhost:3000/
}

open_url &
python -m SimpleHTTPServer 3000
