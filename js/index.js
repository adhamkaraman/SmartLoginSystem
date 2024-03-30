// ------------------------------ SIGN UP PAGE :- --------------------------------------------

var signNameInput = document.getElementById("userName") ;   //input kolo 3la b3d
var signEmailInput = document.getElementById("userEmail") ; //input kolo 3la b3d
var signPassInput = document.getElementById("userPass") ;   //input kolo 3la b3d

var signSucc = document.getElementById("signValid") ;      
var signFail = document.getElementById("signUnvalid") ;
var signExist = document.getElementById("signExist") ;

var usersInfo = []    // array shayl objects el user kol object feh m3lomat l user l wa7d
var newArr = []
var newArr2 = [] 

if(localStorage.getItem("list") != null){
    usersInfo = JSON.parse(localStorage.getItem("list"))   // zbon adem
}

// --------------------//

function signUp(){

    localStorage.setItem("list" , JSON.stringify(usersInfo)) 

    var test = JSON.parse(localStorage.getItem("list")) ;

    var newArr = test.filter((el)=>{
    return el.email == signEmailInput.value ;
    
    })

    if(signNameInput.value != "" && signEmailInput.value != "" && signPassInput.value != "" && newArr.length == 0){
        var user = {
            name : signNameInput.value  ,
            email : signEmailInput.value  ,
            password : signPassInput.value 
        }
        usersInfo.push(user) 
    
        localStorage.setItem("list" , JSON.stringify(usersInfo))  // 5zn b2a l users fel local storge 
        
        signSucc.classList.remove("d-none")
        signFail.classList.add("d-none")
        signExist.classList.add("d-none")

    }
    else if(signNameInput.value == "" || signEmailInput.value == "" || signPassInput.value== "" ){
    
        signFail.classList.remove("d-none")
        signSucc.classList.add("d-none")
        signExist.classList.add("d-none")
    }
    else if(newArr.length != 0){
        signExist.classList.remove("d-none")
        signSucc.classList.add("d-none")
        signFail.classList.add("d-none")
    }   
    
}





// -------------------------------------------------------------------------------------------------------------------
// ------------------------------ LOG IN PAGE :- --------------------------------------------

var logEmailInput = document.getElementById("logEmail");    //input kolo 3la b3d
var logPassInput = document.getElementById("logPass");      //input kolo 3la b3d

var logFail = document.getElementById("logUnvalid");
var logIncorrect = document.getElementById("logWrong");

// --------------------

function logIn(){


    var test2 = JSON.parse(localStorage.getItem("list"));  // hat l users mn local storge w 7thom f var asmo test2

    var newArr2 = test2.filter((el)=>{
        return el.email == logEmailInput.value && el.password == logPassInput.value;
    })

    console.log(newArr2); // array feh el object l 722 l condition

    var userInfo = newArr2 ;

    if( userInfo.length != 0){
        localStorage.setItem("theUserNameOnly" , userInfo[0].name)
    }

    if(logEmailInput.value != "" && logPassInput.value != "" && newArr2 != 0){
        location.replace("home.html")
        logFail.classList.add("d-none")
        logIncorrect.classList.add("d-none")
    }
    else if(logEmailInput.value == "" || logPassInput.value == ""){
        logFail.classList.remove("d-none")
        logIncorrect.classList.add("d-none")   
    }
    else if(newArr2 == 0){
        logIncorrect.classList.remove("d-none")
        logFail.classList.add("d-none")   
    }
}





// -------------------------------------------------------------------------------------------------------------------
// ------------------------------ HOME PAGE :- --------------------------------------------

if (localStorage.getItem("theUserNameOnly") != null &&  document.getElementById("welcName") != null ){
    document.getElementById("welcName").innerHTML = localStorage.getItem("theUserNameOnly") ; 
}

//!= null 3shan lma yb2a f page l home bs lan hyb2a null f ba2y l pages 



// ----------- THE END -----------













// # EXPLANIATION :- 

// sign up --> get users mn local storge b3d ma at5zn feha w 3adi 3lehom w karn l email input bl emails l mtsgla :-

// - lo el array.length dah tl3 malyan ya3ni != zero yb2a el email dah already exist 
// - lo el array.length dah tl3 fadi == 0 yb2a el email msh mwgod yb2a 5zn w a3ml push w kml b2a l 7agat di 


// login --> get users mn local storge b3d ma at5zno w 3di 3lehom w karn el email wl pass bto3 l input bl email wl pass l mtsgla :-

// - lo el Array.length dah tl3 mlyan y3ni != zero yb2a el email wl pass mazboten w wdeh 3la page l home 
// - lo el array.length tl3 fadi == 0 yb2a 2olo incorect email or pass