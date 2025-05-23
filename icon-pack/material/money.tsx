import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8H15C14.45 8 14 8.45 14 9V15C14 15.55 14.45 16 15 16ZM16 10H17V14H16V10ZM9 16H12C12.55 16 13 15.55 13 15V9C13 8.45 12.55 8 12 8H9C8.45 8 8 8.45 8 9V15C8 15.55 8.45 16 9 16ZM10 10H11V14H10V10ZM5 8H7V16H5V8ZM2 4V20H22V4H2ZM20 18H4V6H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Money'

/**
 * Material Icon: Money
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:money Material Icon Docs}
 */
export const Money = memo(Icon)
