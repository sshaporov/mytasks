import React, {useState} from 'react'

type ItemType = {
  id: string
  title: string
  hotKey?: string
  icon?: string
}
export type MenuPropsType = {
  items: Array<ItemType>
  onClickMenuItem: (id: string) => void
}
export const Menu: React.FC<MenuPropsType> = React.memo((
  {
    items,
    onClickMenuItem
  }
) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        // onBlur={() => setIsCollapsed(false)}
      >...</button>

      {isCollapsed
      && <ul>
        {items.map((item, index) => {
          return (
            <div onClick={() => onClickMenuItem(item.id)}>
              {item.icon && <img src={item.icon} alt={'#'}/>}
              <li key={index}>{item.title}</li>
              <span>{item.hotKey}</span>
            </div>
          )
        })}
      </ul>

      }
    </div>
  )
})