## Job Search


#### Download Instructions

##### Step 1:
* Download the Repo using ```git clone```

#### Instructions to start application
##### Step 1: 
* Use ```npm i``` to install node modules
##### Step 2:
* Run this command to see an output ```node app.js -p PORT_NUMBER``` default port number is 5454

Note: if you provide invalid arguments to app.js it will exit the process with proper error message
##### Step 3:
* Open http://localhost:PORT_NUMBER to see an output

```
    npm i
    node app.js -p 5555 #-p and port numbers are optional default port is 5454
    #Go to browser open http://localhost:PORT_NUMBER
```
#### Instructions to start application in Developement mode 
##### Step 1:
* Install NPM packages using ```npm i```

##### Step 2:
* Start the server using ```npm start```

```
    npm i 
    npm start
```

##### Step 3: 
* Open this link to see an output http://localhost:3000

#### Instructions to start application in Production mode 
##### Step 1:
* Install NPM packages using ```npm i```

##### Step 2:
* Start the server using ```npm i -g serve ```

##### Step 3:
* Run the following command to run production server ```serve -s build```
##### Step 4: 
* Open this link to see an output http://localhost:5000

```
    npm i
    npm i -g serve
    serve -s build
```