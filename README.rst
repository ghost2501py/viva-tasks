**********
Viva Tasks
**********

Gettings started
===============

Prerequisites
-------------

* Node.js >= 18.12.1
* Yarn >= 1.22.19

Installing
----------

1. Install dependencies:

   .. code-block:: bash

      $ yarn

2. Start the application:

   .. code-block:: bash

      $ yarn dev

Deploy
------

1. Run the docker container:

   .. code-block:: bash

      $ sudo docker run --rm -ti \
         --env ELECTRON_CACHE="/root/.cache/electron" \
         --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
         -v ${PWD}:/project \
         -v ${PWD##*/}-node-modules:/project/node_modules \
         -v ~/.cache/electron:/root/.cache/electron \
         -v ~/.cache/electron-builder:/root/.cache/electron-builder \
         electronuserland/builder:wine

2. Run these commands to build:

   .. code-block:: bash

      $ yarn && yarn dist -w
