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
// API URL
//
const DEVELOPMENT_API_BASE = 'http://localhost:5000/family-website-prod/us-central1'
const PRODUCTION_API_BASE = 'https://us-central1-family-website-prod.cloudfunctions.net'

//
// Stripe
//
const DEVELOPMENT_STRIPE = 'pk_test_zRxOPqNPQQzWt4n7nGJTBwR000IXITGuLN'
const PRODUCTION_STRIPE = 'pk_live_wXjQNqvOMfTPwM7UMnDqlvDv00uVNsGHWs'

//
// Configurations
//
const DEVELOPMENT = {
	dev: true,
	BASE_URL: 'http://localhost:9999',
	API_BASE_URL: DEVELOPMENT_API_BASE,
	// API_BASE_URL: PRODUCTION_API_BASE,/
	API_DEBUGGING: true,
	FIREBASE_PERFORMANCE: false,
	STRIPE_API_KEY: DEVELOPMENT_STRIPE,
	// STRIPE_API_KEY: PRODUCTION_STRIPE,
	...DEVELOPMENT_FB,
}
const PRODUCTION = {
	dev: false,
	BASE_URL: 'https://stuartandcourtney.com',
	API_BASE_URL: PRODUCTION_API_BASE,
	API_DEBUGGING: false,
	FIREBASE_PERFORMANCE: true,
	STRIPE_API_KEY: PRODUCTION_STRIPE,
	...PRODUCTION_FB,
}

export const settings = {
	VERSION: '0.1.0',

	// ...DEVELOPMENT,
	// ...PRODUCTION,
	...(process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION),
}
