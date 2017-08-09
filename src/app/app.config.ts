export interface IConfig {
	logInUrl: string;
	getUsers: string;
	
	// getUserNotification:string;
	// addUserNotification:string;
	// subscriberUser:string;
	// loadNotification:string;
	// getCountry:string;
	};
import { Injectable }    from '@angular/core';
@Injectable()
export class ConfigService  {
	
	 
  getAppConfig(): IConfig { 
  // let serverLoginPath = 'http://ctc.api.uat.jato.com/jato.carspecs.api/', serverLoginPathDebug = 'http://ctc.api.uat.jato.com/jato.carspecs.api/';
  // let serverUserNotificationPath = 'http://development2.cs4.jato.com/JATO.WLC.DrServices/jato.drservices/', serverUserNotificationPathDebug = 'http://localhost:19569/jato.drservices/';
	
	let serverLoginPath = 'http://localhost:4068/api/',serverLoginPathDebug='http://localhost:4068/api/';

	let serverUserNotificationPath ='';
	let debug = true;
	
	let getUsers=(debug ? serverLoginPathDebug + "authentication/login" : serverLoginPath + "userCont/getusers");
  let logInUrl = (debug ? serverLoginPathDebug + "userCont/login" : serverLoginPath + "authentication/login");
  let getLogOutURl = (debug ? serverLoginPathDebug + "authentication/logout" : serverLoginPath + "authentication/logout");
//   let getUserNotification = (debug ? serverUserNotificationPathDebug + "UserNotification/load" : serverUserNotificationPath + "UserNotification/load");
//   let loadNotification = (debug ? serverUserNotificationPathDebug + "VehicleTypeActivity/load" : serverUserNotificationPath + "VehicleTypeActivity/load");
//   let getCountry = (debug ? serverUserNotificationPathDebug + "Countries/load" : serverUserNotificationPath + "Countries/load");
//   let addUserNotification = (debug ? serverUserNotificationPathDebug + "UserNotification/add" : serverUserNotificationPath + "UserNotification/add");
//   let subscriberUser = (debug ? serverUserNotificationPathDebug + "SubscriberUser/load" : serverUserNotificationPath + "SubscriberUser/load");
  return {
			logInUrl: logInUrl,
			getUsers:getUsers
        //,	 
	//   getUserNotification:getUserNotification,
	//   addUserNotification:addUserNotification,
	//   subscriberUser:subscriberUser,
	//   loadNotification:loadNotification,
	// 	getCountry:getCountry
	}
  }
};