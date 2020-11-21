## Dapp -  Powered by Ethereum

Demo Application link: https://jibrel.herokuapp.com/

Dockerhub Repository link https://hub.docker.com/r/mkhululincube/jibrel

#### Tech Stack

* React v 16.8

* Redux

* Ant Design

* Jest

* Heroku (CI/CD)

* Docker

* Ethereum

* Web3

## Set up

### Setup on your computer

Download and Install Node JS : https://nodejs.org/en/download/

#### Clone repository

    Git clone     Git clone https://github.com/mkhululincube/eth-dapp.git


#### Extract the downloaded file using any zipping tool

#### Open terminal and change directory to the project

    cd /path/to/the/project
    
Download the dependencies

    npm install

Start the server

    npm install


### Alternative docker setup if you prefer to run the application on docker

#### Visit for docker setup or  https://hub.docker.com/r/mkhululincube/jibrel

### How to use the dapp application

***  To use the dapp app you need to use Metamask browser extension. If you have done this already please go to Part 3. If you don’t have MetaMask, you MUST install it, otherwise it may result in a permanent loss of funds!  ***

#### Step 1: Add MetaMask extension to chrome
Click “Add to Chrome” to Install MetaMask as Google Chrome extension. Visit https://metamask.io

#### Step 2: Creating a wallet
Click on the Metamask logo. Switch to Ropsten Test Network, read and agree to the MetaMask terms and Conditions. Click “Create new wallet”. This depends on your browser.

#### Step 3: Get free coins
Visit https://faucet.metamask.io/ to get free tokens

### !!! Happy testing !!! 😄


Visit https://github.com/mkhululincube/mongod-blockchain-app-api- and start the API

Once the API is running

Visit https://jibrel.herokuapp.com/ and use the credentials below


___ Username ___ : admin

___ Password ___ : admin


## Demo In Pictures

### Login

#### Username and Password Validation 

If username and password is correct token is stored in localstorage, alternatively we can store it in session or cookie and set the expiration date.

Action is also fired/initiated to store authentication state is global storage.

```javascript
    const onSubmit = data => {
    axios.post(`${url}/auth/login`, data)
    .then(response => {
    dispatch(AdminLoggedIn(response.data))

     localStorage.setItem('admin-token', JSON.stringify({
       loggedIn: true,
       token: response.token,
       username: response.userId
     }));
     //console.log("jibrel data",response.data.userId);

     props.history.push('/home')
     })
      .catch(error => {
       throw(error);
       });
       }
```

![alt text](https://user-images.githubusercontent.com/16665636/99882611-380cfd00-2c3b-11eb-88ce-f2866196e56e.png)


### Home page

### Dispatch action to  to set web3 config 

    dispatch(Web3Provider(Web3.givenProvider))

##### If metamask is not set

![alt text](https://user-images.githubusercontent.com/16665636/99883081-5b857700-2c3e-11eb-92a1-fbaf24db2824.png)


##### If metamask is set

![alt text](https://user-images.githubusercontent.com/16665636/99883066-38f35e00-2c3e-11eb-8770-ff4373a93a9d.png)

### Add User

#### Validation

* Age should greater than 18 and less than 150

* Age required

* City required

* Name required

* someNote required

```javascript
   {
     type: "number",
     name: "age",
     label: "Age",
     min : 18,
     max : 150,
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Age"
 
   },
   {
     type: "text",
     name: "city",
     label: "City",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid City"
 
   }
```

#### On Validation pass

Note the submission returns a promise therefore we have to async/await

```javascript
            try {
              await citizensList.methods.addCitizen(age, city, name, someNote).send({ from: accounts[0] })
            .once('receipt', (receipt) => {
              setSucessMessage(true);
              setLoading(false);
              setShowForm(false);     
          })
            } catch (e) {
              setNoAccount(true);
              setLoading(false);
          } finally {
              console.log('We do cleanup here');
          }
```

#### If account has no fund an error is caught and error is shown

![alt text](https://user-images.githubusercontent.com/16665636/99883036-0ba6b000-2c3e-11eb-9b3a-8f7d2936aea6.png)

#### If account has funds

![alt text](https://user-images.githubusercontent.com/16665636/99882999-cc785f00-2c3d-11eb-9f46-3ceddf0f1e80.png")


### Users list page

#### Protected Page (check login token in localstorage)

```Javascript
        <Route
        {...rest}
        render={({ location }) =>
        sellerToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
```


Check on the global store if metamask is set

      const web3Provider = useSelector(state=>state.Web3Provider);

#### IF metamask is set

![alt text](https://user-images.githubusercontent.com/16665636/99883241-8a501d00-2c3f-11eb-9879-fec05d9f164c.png)

#### IF metamask is not set

![alt text](https://user-images.githubusercontent.com/16665636/99883253-9f2cb080-2c3f-11eb-8d90-d8eb50a1cb74.png)


# DEVOPS 

#### CI/CD Implemented Using Heroku

Application hosted on heroku

Heroku is linked to application codebase on github repo https://github.com/mkhululincube/eth-dapp/

## Automated deployment is setup on heroku 

![alt text](https://user-images.githubusercontent.com/16665636/99882855-c635b300-2c3c-11eb-9563-57802a8dedbe.png)


## If automated tests fail deployment fails

![alt text](https://user-images.githubusercontent.com/16665636/99882723-0d6f7400-2c3c-11eb-80fe-4ce194f3dfae.png)


## If automated tests pass deployment also passes


## Our docker image is also updated if our test passes

![alt text](https://user-images.githubusercontent.com/16665636/99882903-2298d280-2c3d-11eb-96ea-5fed9c59ac7f.png)



# Docker Setup

## Build Image from Dockerfile or pull image from dockerhub

    docker pull mkhululincube/jibrel

![alt text](https://user-images.githubusercontent.com/16665636/99882973-87542d00-2c3d-11eb-963e-a140abe41a20.png)

## List images to see if the image is downloaded

    docker images

 
## Spin up the image to create a container and map the port

    docker run --name jibrel -p 4680:3000 -d mkhululi/jibrel

## List containers to see if the image is downloaded

    docker ps
    
    
## Get docker engine ip

    docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' imageNameOrID

## Using the IP Address, add the ip on the url and the configured port

😄😄 Happy Programming !!








