Developer Tools:
    a. React Developer Tools

NPM vs Yarn:
    a. install depedency from package.json : npm install == yarn
    b. install a package and add to package.json : npm install package --save  == yarn add package
    c. install a devDepedency to package.json : npm install package --save-dev == yarn add package --dev
    d. remove a depedency from package.json : npm uninstall package --save  == yarn remove package
    e. upgrade a package to its latest version : npm update --save == yarn upgrade
    f. install a package globally : npm install package -g == yarn global add package
    g. npm audit fix : fix security vulnerbility

Create React app:
    a. npx create-react-app nama_app
    b. cd nama_app
    c. npm start

Folder src : lokasi coding react

Folder public : Hasil build src akan ditaro di folder public

Array Method:
    a. map()
    b. filter()
    c. reduce()
    d. find()
    e. includes()

Dua Tipe Component : 
    1. Class component.
    2. Function component -> tidak dapat mengakses state, constructor, lifecycle.

Props = input parameter.

React lifecycle :
    a. Base :
        a. Constructor()
        b. Render()
        c. ComponentDidMount()
    b. Update :
        a. ShoudlComponentUpdate()
        b. Render()
        c. ComponentDidUpdate()
    c. Unmounting :
        a. ComponentWillUnmount()

React Developer Job:
    a. Decide on Component
    b. Decide the State and where it lives
    c. What changes when state changes

Flux Pattern : Action - Dispatcher - Store - View

Redux Flow : Action - Root Reducer - Store - State Change

Redux :
    1. mapStateToProps
    2. mapDispatchToProps

Two Types Selectors: -> supaya tidak perlu rerender kalau component itu tidak ada perubahan
    1. Input Selectors.
    2. Output Selectors.

6 Things javascript consider false:
    1. 0
    2. false
    3. undefined
    4. null
    5. Nan
    6. ""

