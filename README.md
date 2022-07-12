# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


  {/* <div key={user.id.value}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <p>{user.name.first}</p>
          </div> */}

          id={id} cb={handlePrev}
          data-userid={id} onClick={cb}


          { name:{first,last}, picture:{large}, phone, cell, email, location, dob:{ date, age} }



//    const [dateValue, setDate] = useState({})

// useEffect(()=>{
        
    //     function updateCountDown() {
          
    //         const currentYear = new Date().getFullYear();
    //         const addedYear = currentYear + 1
            
    //         const currentTime = new Date();
    //         let regex = /\d{4}/g
    //         const dateObj = new Date(date);
    //         const birthdayTime = dateObj.toString().replace(regex, currentYear);
    //         const newBirthdayTime = dateObj.toString().replace(regex, addedYear);

    //         const birthdayTimeObj = new Date(birthdayTime);
    //         const newBirthdayTimeObj = new Date(newBirthdayTime);
 
    //         const diff =  birthdayTimeObj < currentTime
    //         ? newBirthdayTimeObj - currentTime
    //         : birthdayTimeObj - currentTime

            

    //         const months = Math.floor(diff / 1000/ 60 / 60 / 24 / 30) % 12;
    //         const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    //         const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    //         const minutes = Math.floor(diff / 1000 / 60) % 60;
    //         const seconds = Math.floor(diff / 1000) % 60;
            
            

    //         setDate({
    //             months,
    //             days,
    //             hours,
    //             minutes,
    //             seconds
    //         })
    //     }
        
    //     setInterval(updateCountDown, 1000);
    // },[date])
    # randomuserAPI-React


if (!searchTerm) {
                        
                        return elements
                    
                    } else if (searchTerm) {

filter users
      
search term
         


  search bar component arguements = { setSearchTerm, value, setValue }


  <Link to={`/${id}`} key={id} onClick={() => dispatch(selectPrevious(id))} data-userid={id} className="bg-slate-400 w-full rounded-lg" >  
  </Link>

  {users &&  users.filter((elements) => {
                    if (searchTerm) {
                        
                        if ((elements.name.first.toLowerCase().includes(searchTerm.toLowerCase()) || elements.name.last.toLowerCase().includes(searchTerm.toLowerCase()))) {
                            
                            return elements;
                        
                        }
                    }
                    return !searchTerm;
                }).map(values => {
                    const { name:{first, last}, picture:{large}, id } = values;
                    return (
                    
                        <Link to={`/user/${id}`} key={id} onClick={() => dispatch(selectPrevious(id))} data-userid={id} className="bg-slate-400 w-full rounded-lg" >
                            <UserCard key={id} first={first} last={last} id={id} picture={large}   />
                        </Link>
                        
                    )
                })}

        <Link to={`/user/${user.id}`} key={user.id} onClick={() => dispatch(selectPrevious(user.id))} data-userid={user.id} className="bg-slate-400 w-full rounded-lg" >


        {previous &&
                    <NavLink
                      to={`user/${previous.id}`}
                      className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {`${previous.name.first} ${previous.name.last}`}
                    </NavLink>
                    }

                     {previous &&
                <div className="p-5 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold text-white p-5 m-5">Previous User</h3>
                    <div className="w-10/12"> 
                        <Link to={`/user/${previous.id}`} key={previous.id} onClick={() => dispatch(selectPrevious(previous.id))} data-userid={previous.id} className="w-full">     
                            <UserCard key={previous.id} first={previous.name.first} last={previous.name.last} picture={previous.picture.large} />
                        </Link>   
                    </div>
                </div>
            }

             {previous &&
                    <NavLink
                        to={`user/${previous.id}`}
                        className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        {`${previous.name.first} ${previous.name.last}`}
                    </NavLink>
                  }

                  store.subscribe(() => { const { someData } = store.getState() localStorage.setItem("someData", JSON.stringify(someData)) })