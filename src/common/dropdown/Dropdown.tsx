import React, {useState} from 'react'
import s from './Dropdown.module.css'

type ItemType = {
  id: string
  title: string
  hotKey?: string
  icon?: string
}
export type DropDownPropsType = {
  items: Array<ItemType>
  onClickMenuItem: (id: string) => void
}
export const Dropdown: React.FC<DropDownPropsType> = React.memo((
  {
    items,
    onClickMenuItem
  }
) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={s.dropdown}>
      <button
        className={s.dropBtn}
        onClick={() => setIsCollapsed(!isCollapsed)}
        // onBlur={() => setIsCollapsed(false)}
      >...
      </button>

      {isCollapsed
      && <div className={s.dropContent}>
        {items.map((item, index) => <div onClick={() => onClickMenuItem(item.id)} key={index} className={s.dropItem}>

            {item.icon && <img className={s.itemIcon} src={item.icon} alt={'#'}/>}
            <div className={s.itemTitle}>{item.title}</div>
            {item.hotKey && <div className={s.itemHotKey}>{item.hotKey}</div>}

          </div>
        )}
      </div>

      }
    </div>
  )
})

