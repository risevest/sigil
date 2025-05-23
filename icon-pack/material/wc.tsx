import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 22V14.5H3.5V9C3.5 7.9 4.4 7 5.5 7H8.5C9.6 7 10.5 7.9 10.5 9V14.5H9V22H5ZM17.5 22V16H20.5L17.96 8.37C17.68 7.55 16.92 7 16.06 7H15.94C15.08 7 14.31 7.55 14.04 8.37L11.5 16H14.5V22H17.5ZM7 6C8.11 6 9 5.11 9 4C9 2.89 8.11 2 7 2C5.89 2 5 2.89 5 4C5 5.11 5.89 6 7 6ZM16 6C17.11 6 18 5.11 18 4C18 2.89 17.11 2 16 2C14.89 2 14 2.89 14 4C14 5.11 14.89 6 16 6Z" />
    </Svg>
  )
}

Icon.displayName = 'Wc'

/**
 * Material Icon: Wc
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wc Material Icon Docs}
 */
export const Wc = memo(Icon)
