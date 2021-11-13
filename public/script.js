'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// 1. HOW TO CREATE A USER STORY? (description of the applications functionality from the user's perspective, of the appcations functionality, all user stories together provides a clear picture of the application whole functonality)
// ------------------------------
// There are multiple formats in which we can write user stories. one of the common is to write senteces with this format:

// Common format: 'As a [type of user], I want [an action] so that [a benefit]'
//                      who?user,admin.etc      what?               why?

// 'As a user, I want to log my running workouts with location, distance, time, pace and steps/minute so i can keep a log of all my running'

// 'As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain so i can keep a log of all my cycling'

// 'As a user, I want to see all my workouts at a glance, so i can easily track my progress over time'

// 'As a user, I want to also see my workouts on a map, so i can easily check where i work out the most'

// 'As a user, I want to see all my workouts when i leave the app and come back later, so that i an keep using the app over time'

/* 2. Features (based on the user storeis)
// ------------------------------
        
        USER STORIES                   ---------------->   FEATURES
1.log my running workouts with location, -->           Map where user clicks to add a new workout(best way to
distance, time, pace and steps/minute                  get location coordinates                                                   // From the first user story alone we know that we need these three things
                                        -->            Geolocation to display map at current location(more user firendly) 
                                        -->            Form to input the distance, time, pace, steps/minute(cadence)

 
2. log my cycling workouts with location,  -->         Form to input the distance, time, speed  and elevation gain
distance, time, speed and elevation gain   
                                           
3. see all my workouts at a glance    -->               Display all workouts in a list

4. see my workouts on a map            -->              Display all workouts on the map 

5.see all my workouts when i leave the app       -->    Store workout data in the browser using Local storage API (because its a small app, no need to use accounts from db)
 and come back later                             -->    On page load read the saved data from local storage and display

------------------------
3. FLOWCHART (will contain these features and also contains how the
   different parts of the app interact with each other, which event
   makes sense to implement and how data flows accross the aplication)

   Features
   --------

1) Geolocation to display
   map at current location

2) Map where user clicks to
   add a new workout

3) Form to input the distance,
   time, pace, steps/minute(cadence)   

4) Form to input the distance, time,
   speed  and elevation gain   

5) Display all workouts in a list 

6) Display all workouts on the map 

7 Store workout data in the browser using Local storage API

8) On page load read the saved data from local storage and display

9) Move map to workout location on click (forget added before on feature)

when we start to build a flowchart like this it is a good idea to start with events(ex. page loads)
map features numbers to flowchart rectangle numbers
*/

// FlowChart
// yellow parts --> actions
// green parts --> when we render something on the user
// red --> operations

// we can start with a flowchart in planning phase but its normal that it changes through implementation
// flowcharts doesnt show us things about implementation. it shows us how the programm work
//-----------
// Architecture step can be in the begging or later
