import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.5 14H8.5V17H10V14H11V18.5H12.5V13.5C12.5 12.95 12.05 12.5 11.5 12.5H7C6.45 12.5 6 12.95 6 13.5V18.5H7.5V14Z" />
      <Path d="M13.5 18.5H15V17H17C17.55 17 18 16.55 18 16V13.5C18 12.95 17.55 12.5 17 12.5H13.5V18.5ZM15 14H16.5V15.5H15V14Z" />
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      <Path d="M8.5 11.5H10V5.5H7V7H8.5V11.5Z" />
      <Path d="M16.5 10.5V6.5C16.5 5.95 16.05 5.5 15.5 5.5H13C12.45 5.5 12 5.95 12 6.5V8C12 8.55 12.45 9 13 9H15V10H12V11.5H15.5C16.05 11.5 16.5 11.05 16.5 10.5ZM15 8H13.5V6.5H15V8Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi19mp'

/**
 * Material Icon: 1 9mp
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:1_9mp Material Icon Docs}
 */
export const Mi19mp = memo(Icon)
