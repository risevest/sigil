import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 15V17C5 18.0544 5.95 19 7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM3 3H9C10.6569 3 12 4.34315 12 6C12 6.76878 11.7108 7.47002 11.2353 8.00088C11.7112 8.53084 12 9.23169 12 10C12 11.6569 10.6569 13 9 13H3V3ZM9 9H5V11H9C9.55228 11 10 10.5523 10 10C10 9.45 9.55 9 9 9ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM9 5H5V7H9C9.55228 7 10 6.55228 10 6C10 5.45 9.55 5 9 5Z" />
    </Svg>
  )
}

Icon.displayName = 'AB'

/**
 * Remix Icon: A B
 * @see {@link https://remixicon.com/icon/a-b Remix Icon Docs}
 */
export const AB = memo(Icon)