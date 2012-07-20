@echo off
set JS_BASE_DIR=tools\jsdoc\jsdoc-toolkit
java -jar %JS_BASE_DIR%\jsrun.jar %JS_BASE_DIR%\app\run.js -c=jsdoc.conf