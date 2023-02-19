/*
---- Fun Profile Generator ----
M1/Wk4/More Async JS: https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/392?journey_step=32
/lighthouse/profile_gennerator/survey.js


*/

// Challenge ---- Use their example code (copied below) to serve as our starting "boilerplate" code.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What is your name? Nicknames are also acceptable 😊 `,
  (name) => {
    //console.log(`Thanks ${name}!`);

    rl.question(`What's an activy you like doing? `,
      (activity) => {
        //console.log(`${activity}`)

        rl.question(`What do you listen to while doing that? `,
          (listenTo) => {
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `,
              (favMeal) => {
                rl.question(`What's your favourite thing to eat for that meal? `,
                  (favFood) => {
                    rl.question(`Which sport is your absolute favourite? `,
                      (sport) => {
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `,
                          (superpower) => {
                            console.log(`${name} loves to ${activity}, while listening to ${listenTo}. ${name}'s favorite meal of the day is ${favMeal} and their favorite part of ${favMeal} is ${favFood}. ${name}'s absolute favourite sport is ${sport} and they are amazing at ${superpower}!`)
                            rl.close()
                          })
                      })
                  })
              })
          })

      })


    //rl.close(); must be in last question
  });