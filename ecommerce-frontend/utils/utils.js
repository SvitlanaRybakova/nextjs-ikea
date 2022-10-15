import { ABSOLUTE_PATH_NO_IMAGE, API_URL } from './constants';

export const capitalizeFirstLetter = (string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).replace(/-/g, ' ')
}

export const fromImageToUrl = (image) => {
  if (!image) return ABSOLUTE_PATH_NO_IMAGE
  if (image.url.indexOf('/') === 0) return `${API_URL}${image.url}`
  return image.url
}
