import React, {useState} from 'react'

type ItemType = {
  title: string
  hotKey?: string
  icon?: string
}
export type MenuPropsType = {
  items: Array<ItemType>
}
export const Menu: React.FC<MenuPropsType> = React.memo((
  {
    items
  }
) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}
              onBlur={() => setIsCollapsed(false)}>...</button>

      {isCollapsed
      && <ul>
        {items.map((item, index) => {
          return (
            <div>
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