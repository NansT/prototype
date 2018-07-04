# installation holochain
https://developer.holochain.org/Install_Holochain
https://github.com/holochain/holochain-proto

# installation application
copier le répertoire sur le disque dur

# lancement interface web
cd <parent_folder>
hcdev init <app_folder>
cd <app_folder>
hcdev web

accès via : http://localhost:4141
  
# lancement avec docker (simulation de plusieurs noeuds)
cd <app_folder>
TARGETDIR=$(pwd) docker-compose up

accès via : http://localhost:3141 & http://localhost:4141
