import firebase from 'firebase/app'
import 'firebase/storage'
import { useTEPopupsFunctions } from 'react-tec'

//Firebase Helpers
export const collectionToDataObject = (snapshot: firebase.firestore.QuerySnapshot) => {
	if (!snapshot) {
		return snapshot
	}

	const data: { [key: string]: any } = {}
	snapshot.forEach((doc) => {
		data[doc.id] = doc.data()
	})
	return data
}
export const collectionToDataArray = (snapshot: firebase.firestore.QuerySnapshot) => {
	if (!snapshot) {
		return snapshot
	}

	const data: any[] = []
	snapshot.forEach((doc) => {
		data.push({
			uid: doc.id,
			...doc.data(),
		})
	})
	return data
}
export const docToDataObject = (doc: firebase.firestore.DocumentSnapshot) => {
	if (!(doc && doc.exists)) {
		return undefined
	}

	return { ...doc.data(), uid: doc.id } as any
}
//Make this generalized to accept a list of types ['array', 'object', 'set'] and then replace the use of the other colleciton unwraps
export const collectionToDataObjectAndArray = (snapshot: firebase.firestore.QuerySnapshot) => {
	if (!snapshot) {
		return snapshot
	}

	const array: any[] = []
	const object: { [key: string]: any } = {}
	snapshot.forEach((doc) => {
		const data = { ...doc.data(), uid: doc.id }
		array.push(data)
		object[doc.id] = data
	})
	return { object, array }
}

interface UploadFileData {
	file: File
	filePath: string
	fileNumber?: number
	fileCount?: number
	popupFunctions: useTEPopupsFunctions
}
export const uploadFile = async (
	data: UploadFileData,
): Promise<{ type: string; fileEnding: string; filename: string; path: string; src: string }> => {
	const { file, filePath, fileNumber, fileCount, popupFunctions } = data
	const { showNetworkActivity, hideNetworkActivity } = popupFunctions
	try {
		return await new Promise((res, rej) => {
			const { name, type } = file
			const nameParts = name.split('.')
			const fileEnding = nameParts.pop()!
			const filename = nameParts.join('.')

			const uploadRef = `${filePath}/${filename}.${fileEnding}`
			const uploadTask = firebase
				.storage()
				.ref(uploadRef)
				.put(file, { contentType: file.type })
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const { bytesTransferred, totalBytes } = snapshot
					const progress = Math.round((bytesTransferred / totalBytes) * 100)
					showNetworkActivity(
						`Uploading File ${
							fileNumber && fileCount ? `${fileNumber} of ${fileCount} ` : ''
						}(${progress}%)...`,
					)
				},
				(e) => {
					console.log(e)
					hideNetworkActivity()
					return rej(e)
				},
				async () => {
					//Complete
					try {
						const downloadURL = await firebase
							.storage()
							.ref(uploadRef)
							.getDownloadURL()

						return res({
							type,
							fileEnding,
							filename,
							path: uploadRef,
							src: downloadURL,
						})
					} catch (e) {
						console.log(e)
						hideNetworkActivity()
						return rej('Error Getting File Download URL.')
					}
				},
			)
		})
	} catch (e) {
		console.log(e)
		throw new Error(e)
	}
}
