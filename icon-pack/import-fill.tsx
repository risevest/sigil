import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3ZM12 16C10.3431 16 9 14.6569 9 13H4V5H20V13H15C15 14.6569 13.6569 16 12 16ZM16 9H13V6H11V9H8L12 13.5L16 9Z" />
    </Svg>
  )
}

Icon.displayName = 'ImportFill'

/**
 * Remix Icon: Import Fill
 * @see {@link https://remixicon.com/icon/import-fill Remix Icon Docs}
 */
export const ImportFill = memo(Icon)
