## Setup
1. Clone the repository
2. In the root, run `yarn install`
3. Get your `GoogleService-Info.plist` from Firebase console and paste it in `./ios/(here)`
4. Open ios project in XCode and Update the url-schema as mentioned <a href="https://developers.google.com/identity/sign-in/ios/start-integrating#add_a_url_scheme_to_your_project">here</a>
5. Copy `env.example` & create `.env` in project root directory
6. Add your `web_client_id` to `.env` from firebase console.
7. `cd ios && pod install`
8. `cd .. && yarn run ios`
