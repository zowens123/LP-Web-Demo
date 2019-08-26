const check = () => {
	if (!('serviceWorker' in navigator)) {
		throw new Error('No Service Worker support')
	}
	if (!('PushManager') in window) {
		throw new Error('No Push API support')
	}
}

const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('sw.min.js'); //notice the file name
    return swRegistration;
}

const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
    }
}
/*
const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body, 
    };
    swRegistration.showNotification(title, options);
}
*/
const main = async () => {
	check();
	const swRegistration = await registerServiceWorker();
	const permission =  await requestNotificationPermission();
    //showLocalNotification('Push Title', 'Push Message', swRegistration);
}

//main();
