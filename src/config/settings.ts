//
// Firebase
//

const DEVELOPMENT_FB = {
	FIREBASE_API_KEY: 'AIzaSyBURLD7PWwSweHE7zAzDBHorAPpNksuv2Y',
	FIREBASE_AUTH_DOMAIN: 'family-website-dev.firebaseapp.com',
	FIREBASE_DATABASE_URL: 'https://family-website-dev.firebaseio.com',
	FIREBASE_PROJECT_ID: 'family-website-dev',
	FIREBASE_STORAGE_BUCKET: 'family-website-dev.appspot.com',
	FIREBASE_MESSAGING_SENDER_ID: '684799561699',
	FIREBASE_APP_ID: '1:684799561699:web:d8e1eb29214aa6caea1ad6',
	FIREBASE_MEASUREMENT_ID: 'G-06QDEPMF6G',
}
const PRODUCTION_FB = {
	FIREBASE_API_KEY: 'AIzaSyB_ErUrBQqlPiQ2vrVi5ySvSkVXOiTNt1Y',
	FIREBASE_AUTH_DOMAIN: 'family-website-prod.firebaseapp.com',
	FIREBASE_DATABASE_URL: 'https://family-website-prod.firebaseio.com',
	FIREBASE_PROJECT_ID: 'family-website-prod',
	FIREBASE_STORAGE_BUCKET: 'family-website-prod.appspot.com',
	FIREBASE_MESSAGING_SENDER_ID: '934338417987',
	FIREBASE_APP_ID: '1:934338417987:web:dcc77ae7b605a636e48bf6',
	FIREBASE_MEASUREMENT_ID: 'G-ZKJZMW8WE4',
}

//
// Configurations
//
const DEVELOPMENT = {
	BASE_URL: 'http://localhost:3003',
	dev: true,
	apiDebugging: true,
	...DEVELOPMENT_FB,
}
const PRODUCTION = {
	BASE_URL: 'https://www.rcmssoftware.com',
	dev: false,
	apiDebugging: false,
	...PRODUCTION_FB,
}

export const settings = {
	VERSION: '0.1.0',
	// EMAIL_API_ROUTE: 'https://ov7qju62dl.execute-api.us-east-1.amazonaws.com/development/sendMail',

	// ...DEVELOPMENT,
	// ...PRODUCTION,
	...(process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION),
}
