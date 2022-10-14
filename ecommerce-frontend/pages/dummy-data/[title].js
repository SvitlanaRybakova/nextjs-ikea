import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

import { capitalizeFirstLetter } from '../../utils/utils'
import {PARAGRAPH_IN_COLUMN} from "../../utils/constants"
import {IPSUM_CONTENT} from "../../utils/loremIpsum"

const DummyDataPage = () => {
  const router = useRouter()
  const pageId = router.query.title

  return (
      <div className="container">
      <h1 className="dummy_page_title">Dummy data for {capitalizeFirstLetter(pageId)}</h1>
          <div className="dummy_page_flex">
              <div className="dummy_page_row">
                  {IPSUM_CONTENT &&
                      IPSUM_CONTENT.slice(0, PARAGRAPH_IN_COLUMN).map((p) => (
                          <div key={uuidv4()}>
                              <h4>{p.title}</h4>
                              <p>{p.text}</p>
                          </div>
                      ))}
              </div>
              <div className="dummy_page_row">
                  {IPSUM_CONTENT &&
                      IPSUM_CONTENT.slice(PARAGRAPH_IN_COLUMN).map((p) => (
                          <div key={uuidv4()}>
                              <h4>{p.title}</h4>
                              <p>{p.text}</p>
                          </div>
                      ))}
              </div>
          </div>

      </div>
  )
}
export default DummyDataPage
