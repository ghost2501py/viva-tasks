**********
Viva Tasks
**********

Task app to apply to Viva Translate position.

Gettings started
===============

Prerequisites
-------------

* Node.js >= 18.12.1
* Yarn >= 1.22.19
* Docker >= 20.10.22

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

1. Build the React app:

   .. code-block:: bash

      $ yarn build

2. Run the docker container:

   .. code-block:: bash

      $ sudo docker run --rm -ti \
         --env ELECTRON_CACHE="/root/.cache/electron" \
         --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
         -v ${PWD}:/project \
         -v ${PWD##*/}-node-modules:/project/node_modules \
         -v ~/.cache/electron:/root/.cache/electron \
         -v ~/.cache/electron-builder:/root/.cache/electron-builder \
         electronuserland/builder:wine

3. Run these commands inside the container to build the executable for Windows:

   .. code-block:: bash

      $ yarn && yarn dist -w
