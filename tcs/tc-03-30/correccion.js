
import { inspect } from 'util'
const URL = 'https://jsonplaceholder.typicode.com/'

// Import mockFetch from module
import mockFetch from './mockFetch.js'
// To use the mock, uncomment the following line:
globalThis.fetch = mockFetch

const INFO_LOG = []
const ERRORMSG = 'ERROR'


async function fetchJSON(url) {

  let res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Http request to ${url} failed, respose code not in 200-299. Current response code ${res.status}`)
  }
  return res.json()
}







async function getUser(userId) {
  return fetchJSON(URL + 'users/' + userId)
}

async function getAlbums(userId) {
  let data = await fetchJSON(URL + 'users/' + userId + '/albums')

  return data

  // let photos = albumsData.map(album => getPhotos(album.id))

  // photos = await Promise.all(photos)

  // let processedAlbums = albumsData.map((item, index) => {
  //   return {
  //     title: item.title,
  //     photos: photos[index]
  //   }
  // })
  // return processedAlbums

}

async function getPhotos(albumId) {

  let { data: photosData, success } = await fetchJSON(URL + 'albums/' + albumId + '/photos')
  return success
    ? photosData.map(photo => photo.title)
    : ERRORMSG
}

async function getUserAlbumsAndPhotos(userId) {


  // [
  //   { status: 'fulfilled', value: 33 },
  //   { status: 'fulfilled', value: 66 },
  //   { status: 'fulfilled', value: 99 },
  //   { status: 'rejected', reason: Error: an error }
  // ]


  const result = await Promise.allSettled([getUser(userId), getAlbums(userId)])

  // console.log(inspect(result, { depth: null }))


  const errors = []

  const [name, albums] = result.map(item => {
    if (item.hasOwnProperty('reason')) {
      errors.push(item.reason)
      return ERRORMSG
    }
    return item.value
  })



  return {
    data: {
      name,
      albums,
    },
    errors
  }
}

//-----------------------------


// let result = await getUserAlbumsAndPhotos(3)
// console.log(inspect(result, { depth: null }))




async function capturaErrores1(llamada) {

  try {
    const datos = await llamada()
    return {
      success: true,
      data: datos
    }

  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }

}

function capturaErrores2(llamada) {
  // Devuelve una FUNCION ASINCRONA
  // que realiza la llamada a la función pasada como argumento, y captura sus errores

  return async function (llamada) {
    try {
      const datos = await llamada()
      return {
        success: true,
        data: datos
      }

    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
}

async function patata(userId = 3) {
  //await Promise.all([getUser(userId), getAlbums(userId)])
  const [rawUser, rawAlbums] = await Promise.all(
    [capturaErrores1(() => getUser(userId)), capturaErrores1(() => getAlbums(userId))]
  )
  


  const result = {
    name: rawUser.data.name,
    albums: rawAlbums.data.map( item => item.title)
  }

  return result
}

let result = await patata(3)
// let result = await getUserAlbumsAndPhotos(3)
console.log(inspect(result, { depth: null }))

