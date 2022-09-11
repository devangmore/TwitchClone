<h1> Twitch Like an App Using React Router, forms and more !! </h1>

<h2> React Router </h2>

*   react router only cares about what written after slash not the host name.
 
*   BrowserRoute component communicates with history component and then communicates with Route
    component and these/this Route/s component will render the data according to the mentioned path

    <img src="https://ncoughlin.com/static/f0a60a719be3f7c71e060208204d7319/74549/1.png"/>


    </br>

<h2> Properties of Route Component </h2>
    1.  Path 
    2.  Component 
    3.  Exact

<h3> Behavior of app without Exact </h3>

 * As react router only cares about what writtens after "/", it may check wheter this method 
   -> extractedPath.contains(path) returns true or not. Refer Images below for more explainations.,,
   <img src="https://i.stack.imgur.com/pdnn6.jpg"/>

</br>
   <img src="https://i.stack.imgur.com/Ols7l.jpg"/>

</br>

So when we are using exact property in the Route Component our comparison method changes from 
</br>
        <h3> extractedPath.contains(path) </h3> </br> to  </br> <h3> extractedPath === path </h3>

<h2> BAD Approach to handle navigation In react !!! </h2>

We should never use anchor tag ( "<a href="">" )to navigate on diffrent pages in our application
because it is <b> Removing all the states and data from our app and renderes brand new requested page with empty data containers </b>. 
<img src="https://user-images.githubusercontent.com/14003377/61182238-0126e000-a620-11e9-9a4e-67c22d082d95.png"/>
</br>

<h2> Solution or Proper way ?? </h2>
<h3> Use Link Component from react-router-dom </h3>
    * it prevents rendering new html file. 



