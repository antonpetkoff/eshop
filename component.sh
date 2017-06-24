#!/bin/bash

# TAKES A COMPONENT NAME IN CAMEL CASE WITH FIRST CAPITAL CASE

COMPONENTS_DIR=./app/src/components
COMPONENT=$1
SMALL="$(echo ${COMPONENT} | cut -c1 | tr A-Z a-z)$(echo ${COMPONENT} | cut -c2-)"
COMPONENT_DIR=${COMPONENTS_DIR}/${SMALL}

if [ -d "${COMPONENT_DIR}" ]; then
    echo "Component already exists!"
    exit 1
fi

mkdir "${COMPONENT_DIR}"

touch "${COMPONENT_DIR}/${SMALL}.html"

touch "${COMPONENT_DIR}/${SMALL}.css"

echo "'use strict';

class ${COMPONENT}Controller {
  constructor() {

  }
}

angular.module('eshop').component('es${COMPONENT}', {
  templateUrl: 'templates/${SMALL}/${SMALL}.html',
  controller: ${COMPONENT}Controller
});" > "${COMPONENT_DIR}/${SMALL}Component.js"

