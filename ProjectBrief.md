# MovieApp

### Steps to run the code

1.clone from the github
2.checkout master branch as all code here is on mmaster branch
3.goto root folder and run yarn 
4.cd ios && pod install
5.for ios : react-native run-ios
    for android :  react-native run-android


 ### Code folder structure and main classes

src folder: this main folder holding the react-native pasrt of the project
ios: holds ios specic code and if we need to configure native ios realted stuff need to change here only
android: holds android specic code and if we need to configure native android realted stuff need to change here only



1. AppStacks.js  : This file mamanging configure navigation and swicthing between pages
2. API.js and BaseAPI.js: Is for handling server request handling
3. Componets Folder: This folder contains all the subcomponents used inside the project

### 4. screens: this folder contains all the screens where our projects pages lies.

### Home Screen:
This page fetchs all movies list from api and render after categorising those with the help of Utility class.

### MovieDetails:
This page showing details of the movie selected from Home Page.

### SearchScreen: 
In This page implemented movie search functionality.


### Things I know we should give a try if have time:
1. Data flow is done using navigation props but can be done Context API.
2. Smooth api failing due to any case(like disconnected internet, servertime out etc)
