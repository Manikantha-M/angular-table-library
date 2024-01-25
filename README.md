# Angular Library

## Step1

Create a workspace and generate a library inside the workspace.

ng new my-workspace --no-create-application
cd my-workspace
ng generate library my-lib


## Step 2

Open tsconfig.json of the workspace directory and change strictInjectionParameters value to false.
"strictInjectionParameters": false

Add the required dependencies on the workspace directory ex: ng add @angular/material

Open package.json of the workspace directory and add the required dependencies ex:Material, and devdependencies
"@angular/material": "x.x.x",



## Step 3

Delete all the angular test files, if not required.

## Step 4

Create a folder for the components.
Start creating the components.


Import all the modules that this module requires into the lib module and put them in the imports array.

Put the module component and all the components that were built into the Library modules Declarations and Exports array


Write an export statement for each of the component that needs to be exported in the public-api.ts.



## Step 5

Run: npm run build <library-name> in the workspace directory. This generates a dist folder.

Navigate to workspace/dist/<library-name> and run: npm pack .

You have generated an angular module.



## Step 6

Use this Angular module in Neutrinos Studio

Move the my-lib-0.0.1.tgz file to the root/app folder of the N-Application

Run npm i my-lib-0.0.1.tgz on the root/app folder. This lib adds to the package.json.

## Step 7

Add this lib module to imports array and exports array of the studio’s dependency module ts file.

Import the module inside the studio’s page and use the selector.



## Publish to Nexus Repository

## Step 1:

Create a folder and name it according to your module, this is the root folder.
Create a folder under the root folder and name it the same as root folder. Now create a package folder under this folder.

Under root folder create two folders and one file
1).  package-icon
2).  screenshots
3).  n-packages.json


Contents of n-packages.json

{
 "metadata": {
   "name": "art-list-test",
   "displayName": "Art List Test",
   "version": "0.0.1",
   "username": "manikantha.m@neutrinos.co",
   "publisher": "Manikantha",
   "platformSupportVersion": {
     "min": "8.1.0"
   },
   "description": "This library contains the test table component created for the art b2c project. ",
   "pluginImage": "components.png"
 },
 "packages": [
   {
     "name": "art-list-test",
     "version": "0.0.1",
     "packageType": "angular-package",
     "displayName": "Art List Test",
     "packageDependencies": {
       "tslib": "^2.3.0"
     }
   }
 ]
}

Name should be the root folder name

n-packages.json 
Copy paste your library package.json dependencies to packageDependencies of packages


## Step 2:

Copy your dist folder to package folder.
Now open package.json of the library from the package folder and change the name to your root folder’s name.

## Step 3:

At the root folder level run this command, this generates a zip file

zip -r -X Archive.zip *
Rename this zip file to your root folder’s name.


## Step 4:

Login to studio with anup@neutrinos.co
Inspect studio and copy the Authorization token from path API

Paste below to postman

curl --location --request PUT 'https://store.neutrinos.co/api/artefact' \
--header 'Authorization: Bearer d' \
--form 'icon=@"/Users/guna/idp-nodes/neutrinos-dms-nodes/package-icon/neutrinos-dms-nodes.png"' \
--form 'zip=@"/Users/guna/idp-nodes/neutrinos-dms-nodes/neutrinos-dms-nodes.zip"' \
--form 'screenshots=@"/Users/guna/idp-nodes/neutrinos-dms-nodes/package-icon/neutrinos-dms-nodes.png"'


Put the Authorization token in the request headers
Map icon, zip, and screenshots to the body and trigger the request

Response:
{"message":"art-list-test with version 0.0.1 has been published successfully."}


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.
