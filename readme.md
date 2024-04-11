#setup the project

Download this template from github and open it in your favourite text editor.
Go inside the folder path and execute the following command:
npm install
In the src folder create a .env file and add the following env variables

    PORT=<port number of your choice>

   
ex:

    PORT=3000
go inside the src folder and execute the following command:

  npx sequelize init
By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc in the config.json file

If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

To run the server execute

npm run dev

and if you have some nodmon install in your device execute:

nodmeon index.js


