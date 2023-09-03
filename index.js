/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

import qr from 'qr-image';

import fs from 'fs';


inquirer
  .prompt([
    {message:'Enter Your URL',
    name:'URL'
},
  ])
  .then((answers) => {
    console.log(answers)
    
    const input_answer = answers.URL;
    console.log(input_answer,{ type: 'svg' })


    
    var qr_svg = qr.image(input_answer);
    qr_svg.pipe(fs.createWriteStream('qr_code_img.png'));


    fs.writeFile('message.txt', input_answer, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(err.isTtyError)
    } else {
      console.log("The code executed sucessfully")
    }
  });



