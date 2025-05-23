import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.5 14H8.5V17H10V14H11V18.5H12.5V13.5C12.5 12.95 12.05 12.5 11.5 12.5H7C6.45 12.5 6 12.95 6 13.5V18.5H7.5V14Z" />
      <Path d="M13.5 12.5V18.5H15V17H17C17.55 17 18 16.55 18 16V13.5C18 12.95 17.55 12.5 17 12.5H13.5ZM16.5 15.5H15V14H16.5V15.5Z" />
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      <Path d="M14 11.5H16.5C17.05 11.5 17.5 11.05 17.5 10.5V6.5C17.5 5.95 17.05 5.5 16.5 5.5H14C13.45 5.5 13 5.95 13 6.5V10.5C13 11.05 13.45 11.5 14 11.5ZM14.5 7H16V10H14.5V7Z" />
      <Path d="M11 10H8V9H10C10.55 9 11 8.55 11 8V6.5C11 5.95 10.55 5.5 10 5.5H6.5V7H9.5V8H7.5C6.95 8 6.5 8.45 6.5 9V11.5H11V10Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi20mp'

/**
 * Material Icon: 2 0mp
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:2_0mp Material Icon Docs}
 */
export const Mi20mp = memo(Icon)
