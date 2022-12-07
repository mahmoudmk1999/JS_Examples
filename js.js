//1-مقدمة
//____________________________________________________________________________________________________________________________
// <script> document.write(“hello world”); </script>                               // html هذه الطريقة للكتابة مباشرة داخل ملف ال 

// <script src=“main.js”></script>                                                 // هذه الطريقة لاستدعاء ملف جافا سكربت خارجي


//2- اوامر الطباعة
//____________________________________________________________________________________________________________________________

//document.write("For test");                                                      //للكتابة داخل صفحة الويب 
//console.log("For test");                                                         //للكتابة داخل الكونسول  
//window.alert("for test");                                                        // للكتابة على نافذة منبثقة


//3- المتغيرات
//____________________________________________________________________________________________________________________________

// var = "test";
// let = "test";
// const = "test";                                                                  // قيمة ثايتة غير قابلة للتغيير


//4- الاشارات
//____________________________________________________________________________________________________________________________

// let name = "ahmed"; 
// let age = 15;
// let x = 5;

// console.log( age + name );          //-->    15ahmed                             // تستخدم اشارة ال+  للربط بين كلمتين                      
// console.log( age + x );             //-->    20                                  // او لجمع عددين 
// console.log( age - x );             //-->    10                                  // تستخدم للطرح فقط
// console.log( age * x );             //-->    75                                  // تسنخدم للضرب فقط
// console.log( age / x );             //-->    3                                   // تستخدم للقسمة فقط
// console.log( age % x );             //-->    0                                   // تستخدم لحساب الباقي 
// console.log( age ** x );            //-->    759375                              // تستخدم لحساب الاس 


//5- تحويل النصوص الى ارقام 
//____________________________________________________________________________________________________________________________

// let x = +"5"; let x = +"abdelrahman";                                             // يمكن تحويل اي نص الى رقم باضافة 
// let x = -undefined; let x = -true; let x = -null;                                 // -اشارة ال+  وال  

// let x = Number("5");                                                              // يمكن التحويل ايضا باستخدام هذه الدوال
// let x = parsInt("5");
// let x = parsFloat("5");


//6- number دالة
//____________________________________________________________________________________________________________________________

// console.log(Number.MAX_VALUE);          //--> 1.7976931348623157e+308              //JavaScript ترجع اكبر رقم ممكن في 
// console.log(Number.MIN_VALUE);          //--> 5e-324                               //JavaScript ترجع اقل رقم ممكن في 
// console.log(Number.MAX_SAFE_INTEGER);   //--> 9007199254740991                     //JavaScript ترجع اكبر رقم امن ممكن في 
// console.log(Number.MIN_SAFE_INTEGER);   //--> -9007199254740991                    //JavaScript ترجع اصغر رقم امن ممكن في 
// console.log(Number.isSafeInteger(15));  //--> true                                 //للتحقق من الرقم اذا كان امن او لا 
// console.log(Number.isInteger(1.5))      //--> false                                //للتحقق اذا كان نوع الرقم عدد صحيح
// console.log(Number.isNaN( 15 - "T"));   //--> true                                 //للتحقق اذا كان رقما او لا  


//6- Math دالة
//____________________________________________________________________________________________________________________________

// console.log(Math.E);                       //--> 2.718281828459045                  //e قيمة ال
// console.log(Math.PI);                      //--> 3.141592653589793                  //قيمة الباي 
// console.log(Math.abs(-4));                 //--> 4                                  //تحويل الى عدد صحيح
// console.log(Math.sqrt(9));                 //--> 3                                  //حساب الجذر
// console.log(Math.pow(2,3));                //--> 8                                  //حساب الاس 
// console.log(Math.round(10.3));             //--> 10                                 //تقرب الى اقرب عدد صحيح
// console.log(Math.ceil(10.3));              //--> 11                                 //تقرب الى اعلى عدد صحيح
// console.log(Math.floor(10.3));             //--> 10                                 //تقرب الى ادنى عدد صحيح
// console.log(Math.min(1,2,3,5));            //--> 1                                  //حساب القيمة الدنيى
// console.log(Math.max(1,2,3,5));            //--> 5                                  //حساب القيمة العليى


//7- تحويل الارقام الى نصوص
//____________________________________________________________________________________________________________________________

// let x =10;

// console.log(typeof String(x));                //--> string                             //تستخدم هذه الدالتين لتحويل
// console.log(typeof((15).toString()));         //--> string                             //الارقام الى نصوص 


//8- التعامل مع النصوص
//____________________________________________________________________________________________________________________________

// let name = "ali";

// console.log(name.repeat(3));                     //--> alialiali                        //تستخدم للتكرار              
// console.log(name.length);                        //--> 3                                //تستخدم لحساب عدد الاحرف
// console.log(name[0]);                            //--> a                                //تسنخدم لطباعة العنصر الاول
// console.log(name[10]);                           //--> undefined                        //لطباعة عنصر غير موجود والنتيجة غير معرف
// console.log(name.charAt(0));                     //--> a                                //تسنخدم لطباعة العنصر الاول
// console.log(name.charAt(10));                    //-->                                  //لطباعة عنصر غير موجود والنتيجة فراغ


//9-التقطيع في النصوص
//____________________________________________________________________________________________________________________________

// let name = "This method for string";

// console.log(name.slice(2,8));                    //-->is met                            //تستخدم للتقطيع  مع تحديد البداية  
// console.log(name.slice(-10,-7));                 //-->for                               //والنهاية وتدعم السير العكسي
// console.log(name.substring(2,8));                //-->is met                            //نفس عمل السابقة مع عدم دعم السير العكسي
// console.log(name.substr(2,8));                   //-->is metho                          //تستخدم للتقطيع مع تحديد البداية ثم عدد الاحرف
// console.log(name.split(" "));                    //--> ['Im', 'ahmad']                  //تستخدم لتقطيع الكلام على شكل مصفوفة


//10-البحث في النصوص
//____________________________________________________________________________________________________________________________

// let name = "Im ahmad";

// console.log(name.indexOf("a"));                    //--> 3                                 //لايجاد مكان العنصر
// console.log(name.indexOf("a",4));                  //--> 6                                 //لايجاد مكان العنصر مع تحديد نقطة البداية
// console.log(name.lastIndexOf("m"));                //--> 5                                 //لايجاد مكان العنصر من الطرف العكسي
// console.log(name.lastIndexOf("m",4));              //--> 1                                 //لايجاد مكان العنصر مع تحديد نقطة البداية بشكل عكسي
// console.log(name.includes("h",2))                  //--> true                              //للبحث عن القيمة ان كانت موجودة ام لا 
// console.log(name.startsWith("h",4))                //--> true                              //لايجاد ان النص يبدا بالحرف المطلوب 
// console.log(name.endsWith("d"))                    //--> true                              //لايجاد ان كان النص ينتهي بالحرف المطلوب

//10-المصفوفات
//____________________________________________________________________________________________________________________________

// let names = ["ahmed" ,"ali" , "zaid"];

// names.push("MK");                                                                            //لاضافة عنصر الى المصفوفة من الاخير 
// console.log(names);                                //--> ['ahmed', 'ali', 'zaid', 'MK']

// names.unshift("HQ")                                                                          //لاضافة عنصر الى المصفوفة من الاول 
// console.log(names);                                //--> ['HQ', 'ahmed', 'ali', 'zaid']

// names.shift()                                                                                //لحذف عنصر الى المصفوفة من الاول 
// console.log(names);                                //--> ['ali', 'zaid', 'MK']

// names.pop()                                                                                  //لاضافة عنصر الى المصفوفة من الاخير 
// console.log(names);                                //--> ['ahmed', 'ali']

/*splice(start, count, add ,add)*/
//names.splice(1,2)                                                                             //لتقطيع المصفوفة بطريقطة العداد
//console.log()                                       //--> ['ali', 'zaid']                  

// names.splice(1,0,"LM")                                                                       //يمكن ايضا اضافة عنصر في مكان معين  
// console.log(names)                                 //--> ['ahmed', 'LM', 'ali', 'zaid']      

/*slice(start, end)*/                                                                           //تقوم باخذ القعطة المحددة وحفظها في الذاكرة     
//console.log(names.slice(0,1))                       //--> ['ahmed']                           //مع عدم التاثير على المصفوفة الاساسية 


//____________________________________________________________________________________________________________________________


// let names = ['ahmed','ali','mahmoud','hamza','ali','ahmed'];

// console.log(names.indexOf("ahmed",2));              //--> 5                                    //للبحث في مصفوفة
// console.log(names.lastIndexOf("ali",-3));           //--> 1                                    //للبحث العكسي في مصفوفة
// console.log(names.includes('hamza',1))              //--> true                                 // للبحث مع نتيجة صح او خطا

// console.log(names.sort());                          //--> ['ahmed', 'ahmed', 'ali', ....]      //لترتيب المصفوفة سواء نص او ارقام
// console.log(names.reverse());                       //--> ['mahmoud', 'hamza', 'ali', ..]      //لعكس ترتيب المصفوفة

//____________________________________________________________________________________________________________________________

// let name1=['ahmed','mahmoud','ali'];
// let name2=['hamza','khaled','smer'];

// name1 += name2;                                                                                 //في هذه الطريقة تم الدمج
// console.log(name1)     ;                            //--> ahmed,mahmoud,alihamza,khaled,smer    //ولكن تحولت المصفوفة الى نص

//console.log(name1.concat(name2,'zaid'));             //--> ['ahmed', 'mahmoud', 'ali', ... ]     //تم الدمج مع الحفاظ على كونها مصفوفة

//console.log(name1.join('-'));                        //--> ahmed-mahmoud-ali                     //لتحويل المصفوفة الى نص من اجل المستخدم                        

//11-مبادئ المقارنة
//____________________________________________________________________________________________________________________________

// == مساواة مع عدم الاهتمام بنوع البيانات
// === مساواة مع الاهتمام بنوع البيانات 
// !=  عدم المساواة 
// > <  <= >=  اكبر واصغر
// &&  and 
// ||  or  

// let x = 1; y = 3; z = 5; t= '1';

// console.log(x == t);                                               //--> true
// console.log(x === t);                                              //--> false
// console.log(x >= t && y < z);                                      //--> true
// console.log(x >= t && y > z);                                      //--> false
// console.log(x >= t || y > z);                                      //--> true

//____________________________________________________________________________________________________________________________

//window.prompt() | prompt() لاخذ قيمة من المستخدم
//.toUpperCase() لتحويل الحروف الصغيرة الى كبيرة
//.toLowerCase() لتحويل الحروف الكبيرة الى صغيرة
//.trim() لحذف المسافة من البداية والنهاية 

// let askemail = prompt();
// let email = 'mk@gmail.com';

// console.log(askemail.toLowerCase().trim() == email)               //--> true


//11-if
//_____________________________________________________________________________________________________________________________

//Example 1 :

/*let role = prompt("What is your role");

if(role == 'admin')
{

document.write("You can Read, Write , Excute");

}

else if(role == 'user')
{

document.write("You can Read, Excute");

}

else
{

document.write("Acces Denid >_<");

}*/

//_____________________________________________________________________________________________________________________________

//Example 2 :

// let role = prompt('what is your role');

// role == 'admin'?
//         document.write("You can Read, Write , Excute");
//     :role == 'user'?
//         document.write("You can Read, Excute");
//     :   document.write("Acces Denid >_<");   


//12-switch 
//_____________________________________________________________________________________________________________________________

// let role = prompt('what is your role');

// switch(role)
// {
//     case 'admin' : 
//         document.write("You can Read, Write , Excute");
//         break;
    
//     case 'user' :
//         document.write("You can Read, Excute");
//         break;

//     default: document.write("Acces Denid >_<")

// }



//12-for loop
//_____________________________________________________________________________________________________________________________

// start ; condition; steps

//Example 1 :

// for(let i = 10 ; i >= 0 ; i-=1 )

// {

// console.log(i);                                    //--> 10 9 8 7 6 5 ... 

// }

//_____________________________________________________________________________________________________________________________

//Example 2 :

// let names = ['ahmed', 'ismail', 'ali', 'zaid'];

// for( i = 0 ; i < names.length ; i++)

// {
//     console.log(names[i])                            //-- ahmed ismail ali zaid
// }

//_____________________________________________________________________________________________________________________________

//Example 3 :

// let names = ['bmw', 'honda', 'nisan', 'fiat'];
// let models = ['2020','2021','2022'];

// for ( i= 0 ; i < names.length ; i++)
// {
// console.log(names[i]);

//     for( j = 0; j < models.length  ; j ++)

//     console.log(models[j]);

//     console.log('_____________')
// }


//13-continue and break in loop
//_____________________________________________________________________________________________________________________________

//continue تستخدم لاستبعاد عنصر 
//break تستخدم للتوقف عند عنصر 

// let names = ['ali', 'ahmad', 'zaid', 1 , 2 , 3 ,'yousef','ismail'];

// for (i = 0 ; i < names.length ; i++ )
// {
//     if( typeof names[i] == 'number')
//     {
//         continue;
//     }

//         console.log(names[i])                   //--> ali ahmad zaid yousef ismail
// }


// for (i = 0 ; i < names.length ; i++ )
// {
//     if(names[i] == 1)
//     {
//         break;
//     }

//         console.log(names[i])                       //--> ali ahmad zaid 
// }


//14-while , do while
//_____________________________________________________________________________________________________________________________

//let i = 0;
//while(condition) هنا نكتب الشرط فقط ويجب ان تكون القيم معرفة من الخارج

// let i = 0; 

// while( i < 3 )
// {

//     document.write('<h1> Hello </h1>')                  //--> Hello Hello Hello
//     i++;

// }


// do {

//     document.write('<h1> Hello </h1>')
//     i++;

// }while( i < 0 )                                          //--> Hello

//14-function 
//_____________________________________________________________________________________________________________________________

//Example 1 :

// function pro (price , taxes ,ads)
// {
//     let prodcut = price + taxes;
//     let result  = prodcut + ads;

//     console.log(result);
// }

// pro(100, 50 , 10);                                        //--> 160 
// pro(500, 100, 40);                                        //--> 140

//_____________________________________________________________________________________________________________________________

//Example 2 :

// function phonePriceInTl(price)

// {
//     inTl = price * 18.5;
//     document.write(inTl);
//     return inTl;
// }

// let phonePrice = phonePriceInTl(prompt());

// function priceIsGood(x)
// {
//     x < 10000? 
//         document.write('Price is Good !')
//     :x > 10000?  
//         document.write('Price is Bad !')
//     : document.write("Idont now");
// }

// priceIsGood(phonePrice);


//14-hoisting
//_____________________________________________________________________________________________________________________________
//هنا يجب التفريق بين طرق الكتابة احداها تقوم بانشاء متغيرات في الاعلى والاخرى لا تقوم بذلك


//user                                                                       //javascrpit
// console.log(x)l                                                           // var x;                                   
// var x = 10l                //--> undefined                                // console.log(x)          
//                                                                           // x=10;

//user                                                                       //javascrpit
// console.log(x);                                                           // console.log(x);                                
// let x = 10;                //--> error                                    // let x=10;       

//_____________________________________________________________________________________________________________________________

//user                                                                       //javascrpit      
// console.log(hello());                                                     //function hello()
// function hello()                                                          //{                                            
// {                                                                         //    return 1;
//     return 1;                                                             //}
// }                          //--> 1                                        //console.log(hello());

//user                                                                       //javascrpit      
// console.log(hello());                                                     //console.log(hello());
// let hello = function()                                                    //let hello = function()                                           
// {                                                                         //{  
//     return 1;                                                             //     return 1;
// }                         //--> error                                     //}


//15-object
//_____________________________________________________________________________________________________________________________

// let car = {

//     name : 'BMW',
//     price : 50000,
//     color : ['black','white','red'],
//     model : 2020

// };

// console.log(car.name);        //--> BMW
// console.log(car.color[2]);    //--> red