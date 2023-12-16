import './index.css'

const TabItem = props => {
  const {tabDetails, selectActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onclickTab = () => {
    selectActiveTab(tabId)
  }

  const isActiveClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  return (
    <li>
      <button type="button" className="button" onClick={onclickTab}>
        <p className={`tab-btn ${isActiveClassName}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
