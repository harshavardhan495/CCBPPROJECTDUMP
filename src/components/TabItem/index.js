// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickButtonChange} = props
  const {tabId, displayText} = tabDetails
  const highlightButton = isActive ? 'active-btn' : ''
  const clickedButton = () => {
    onClickButtonChange(tabId)
  }

  return (
    <li>
      <button
        className={`tab-button ${highlightButton}`}
        type="button"
        onClick={clickedButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
