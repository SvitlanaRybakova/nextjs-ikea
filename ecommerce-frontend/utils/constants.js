import { v4 as uuidv4 } from 'uuid'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || ''

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const ICON_SIZE = 20
export const PARAGRAPH_IN_COLUMN = 3
export const ABSOLUTE_PATH_NO_IMAGE =
  "'https://www.freeiconspng.com/uploads/no-image-icon-15.png'"
export const HOME_URL = '/'
export const CATEGORIES_URL = '/categories'
export const DUMMY_DATA_URL = '/dummy-data'
export const PRODUCT_URL = '/product'
export const ACCOUNT_URL = '/account'
export const LOGIN_URL = '/login'

export const ABOUT_US = [
  {
    id: uuidv4(),
    title: 'about-company',
  },
  {
    id: uuidv4(),
    title: 'design',
  },
  {
    id: uuidv4(),
    title: 'work-at-IKEA',
  },
  {
    id: uuidv4(),
    title: 'climat-and-sustainability',
  },
]

export const CONTACT_US = [
  {
    id: uuidv4(),
    title: 'customer-service',
  },
  {
    id: uuidv4(),
    title: 'common-question',
  },
  {
    id: uuidv4(),
    title: 'service-services',
  },
  {
    id: uuidv4(),
    title: 'return-&-complaints',
  },
  {
    id: uuidv4(),
    title: 'spare-parts',
  },
  {
    id: uuidv4(),
    title: 'purchase-&-delivery-conditions',
  },
  {
    id: uuidv4(),
    title: 'give-IKEA-feedback',
  },
]
