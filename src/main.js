import snsWebSdk from '@sumsub/websdk';

require('dotenv').config()

// const host = process.env.DB_HOST;

console.log('Watched yeep', process.env);

//
// /**
//  * @param accessToken - access token that you generated on the backend in Step 2
//  * @param applicantEmail - applicant email (not required)
//  * @param applicantPhone - applicant phone, if available (not required)
//  * @param customI18nMessages - customized locale messages for current session (not required)
//  */
// function launchWebSdk(accessToken, applicantEmail, applicantPhone, customI18nMessages) {
//     let snsWebSdkInstance = snsWebSdk.init(
//         accessToken,
//         // token update callback, must return Promise
//         // Access token expired
//         // get a new one and pass it to the callback to re-initiate the WebSDK
//         () => this.getNewAccessToken()
//     )
//         // flag to start SDK for the test environment
//         // please remove it as soon as migrating to the production environment
//         .onTestEnv()
//         .withConf({
//             lang: 'en', //language of WebSDK texts and comments (ISO 639-1 format)
//             email: applicantEmail,
//             phone: applicantPhone,
//             i18n: customI18nMessages, //JSON of custom SDK Translations
//             uiConf: {
//                 customCss: "https://url.com/styles.css"
//                 // URL to css file in case you need change it dynamically from the code
//                 // the similar setting at Customizations tab will rewrite customCss
//                 // you may also use to pass string with plain styles `customCssStr:`
//             },
//         })
//         .withOptions({ addViewportTag: false, adaptIframeHeight: true})
//         .on('stepCompleted', (payload) => {
//             console.log('stepCompleted', payload)
//         })
//         .on('onError', (error) => {
//             console.log('onError', payload)
//         })
//         .onMessage((type, payload) => {
//             // see below what kind of messages the WebSDK generates
//             console.log('onMessage', type, payload)
//         })
//         .build();
//
//     // you are ready to go:
//     // just launch the WebSDK by providing the container element for it
//     snsWebSdkInstance.launch('#sumsub-websdk-container')
// }
//
// function getNewAccessToken() {
//     return Promise.resolve(newAccessToken)// get a new token from your backend
// }
