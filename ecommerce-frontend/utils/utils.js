const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const capitalizeFirstLetter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).replace(/-/g, ' ')
}

export const fromImageToUrl = (image) => {
  if (!image) return 'https://www.freeiconspng.com/uploads/no-image-icon-15.png'
  if (image.url.indexOf('/') === 0) return `${API_URL}${image.url}`
  return image.url
}
