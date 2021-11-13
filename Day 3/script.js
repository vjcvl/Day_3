
let myResume = [{
        "Basics": {
            "Name": "Vijayakumar.A",
            "email": "vijayakumar97civil@gmail.com",
            "Phone": 6374477290
        },
        "Work": {
            "CompanyName": "WoodlineInteriors",
            "Post": "SiteSupervisor",
            "ecperience": "2 years"
        },
        "education": {
            "SSLC": "Seeni Mat School",
            "SSLC Marks with %": "89 %",
            "SSLC year of completion": 2012,
            "HSC": "The Sivakasi Lions Mat Hr.sec School",
            "HSC year of completion": 2014,
            "HSC Marks with %": "75 %",
            "UG": "Sri Lakshmi Ammal Engineering College",
            "dept":"Civil Engineering",
            "UG year of completion": 2018,
            "UG Marks with %": "68 %"
        },
        "language": {
            "read & write": "Tamil,English",
            "read": "Hindi"
        },
        "skills & interest": {
            "skills": "Web Development",
            "interst": "Coding , photography"
        },
        "PersonalInfo": {
            "DOB": "11/05/1997",
            "location": {
                "address": "33s/4 kamaraj Nagar,2nd street,vilathikulam",
                "District": "Tuticorin",
                "State": "TamilNadu",
                "pinCode": "628-907"
            }
        }
    }];
    for(i=0;i<myResume.length;i++){
        console.log(`For :`);
        console.log(myResume[i]);
        
    }
    myResume.forEach(element=>{
        console.log(`ForEach :`);
        console.log(element);
        
    })
    for (j in myResume) {
        console.log(`For in :`);
        console.log(myResume[j]);
    }
   for ( k of myResume) {
    console.log(`For of :`);
       console.log(k);
   }