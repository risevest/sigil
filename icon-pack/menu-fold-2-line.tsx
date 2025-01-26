import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.40347 3.90332L2.98926 5.31753L6.17124 8.49951L2.98926 11.6815L4.40347 13.0957L8.99967 8.49951L4.40347 3.90332ZM20.9997 19.9995V17.9995H2.99967V19.9995H20.9997ZM20.9997 12.9995V10.9995H11.9997V12.9995H20.9997ZM20.9997 5.99951V3.99951H11.9997V5.99951H20.9997Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuFold2Line'

/**
 * Remix Icon: Menu Fold 2 Line
 * @see {@link https://remixicon.com/icon/menu-fold-2-line Remix Icon Docs}
 */
export const MenuFold2Line = memo(Icon)