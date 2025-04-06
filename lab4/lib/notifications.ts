import Constants from "expo-constants";
import {Alert} from "react-native";
import {LogLevel, NotificationWillDisplayEvent, OneSignal} from "react-native-onesignal";

const ONESIGNAL_APPID = Constants?.expoConfig?.extra?.oneSignalAppId
const ONESIGNAL_BASE_URL = 'https://api.onesignal.com/notifications'
const ONESIGNAL_SEND_NOTIFICATION_URL = `${ONESIGNAL_BASE_URL}?c=push`;

if (!ONESIGNAL_APPID) {
    throw new Error('OneSignal app id not found');
}

const apiHeaders = {
    'Accept': 'application/json',
    'Authorization': 'Basic os_v2_app_dofpjylgcbcn7jk2n3nsiiqfvs6pwo3tptbe7zfdldcyexdgyui5jzgqvarv55zj7k3elkujj5u5ijtanejacf4eiyxcopfofchhc3i',
    'Content-Type': 'application/json'
}

const handleForegroundWillDisplay = (event: NotificationWillDisplayEvent) => {
    event.preventDefault()
    event.notification.display()
}

export function initializeOneSignal() {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(ONESIGNAL_APPID);
    void OneSignal.Notifications.requestPermission(true);

    OneSignal.Notifications.addEventListener('foregroundWillDisplay', handleForegroundWillDisplay)
    return () => {
        OneSignal.Notifications.removeEventListener('foregroundWillDisplay', handleForegroundWillDisplay)
    }
}

export const scheduleNotification = async (title: string, description: string, time: Date) => {
    const body = {
        app_id: ONESIGNAL_APPID,
        contents: {
            en: `${title}\n${description}`
        },
        included_segments: ['todo'],
        send_after: time
    }
    console.log({body})
    return fetch(ONESIGNAL_SEND_NOTIFICATION_URL, {
        method: 'POST',
        headers: apiHeaders,
        body: JSON.stringify(body)
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((result) => {
        console.log(result);
        return result.id
    }).catch((error) => {
        console.error(error);
        Alert.alert('Error', error.message)
    })
};

export const cancelNotification = async (id: string) => {
    fetch(`${ONESIGNAL_BASE_URL}/${id}?app_id=${ONESIGNAL_APPID}`, {
        method: 'DELETE',
        headers: apiHeaders,
    }).then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error(error);
        Alert.alert('Error', error.message)
    })
};
