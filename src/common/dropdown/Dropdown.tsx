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
  onClickDropDownItem: (id: string) => void
}
export const Dropdown: React.FC<DropDownPropsType> = React.memo((
  {
    items,
    onClickDropDownItem
  }
) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={s.dropdown}>
      <button
        className={s.dropBtn}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >...
      </button>

      {isCollapsed
      && <div className={s.dropContent}>
        {items.map((item, index) => <div onClick={() => onClickDropDownItem(item.id)} key={index} className={s.dropItemWrapper}>

          <div className={s.dropItem}>
            {item.icon && <img className={s.itemIcon} src={item.icon} alt={'#'}/>}
            <div className={s.itemTitle}>{item.title}</div>
            {item.hotKey && <div className={s.itemHotKey}>{item.hotKey}</div>}
          </div>

          </div>
        )}
      </div>

      }
    </div>
  )
})

