#!/bin/bash
set -ex
gsudo apt-get update
gsudo apt-get install dirmngr --install-recommends
gsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | gsudo tee /etc/apt/sources.list.d/k6.list
gsudo apt-get update
gsudo apt-get install k6
