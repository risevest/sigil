import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 10.5H12V8.5H14V10.5ZM14 6.5H12V1.5H14V6.5ZM8 18.5C6.9 18.5 6.01 19.4 6.01 20.5C6.01 21.6 6.9 22.5 8 22.5C9.1 22.5 10 21.6 10 20.5C10 19.4 9.1 18.5 8 18.5ZM18 18.5C16.9 18.5 16.01 19.4 16.01 20.5C16.01 21.6 16.9 22.5 18 22.5C19.1 22.5 20 21.6 20 20.5C20 19.4 19.1 18.5 18 18.5ZM9.1 13.5H16.55C17.3 13.5 17.96 13.09 18.3 12.47L22 5.46L20.25 4.5L16.55 11.5H9.53L5.27 2.5H2V4.5H4L7.6 12.09L6.25 14.53C5.52 15.87 6.48 17.5 8 17.5H20V15.5H8L9.1 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ProductionQuantityLimits'

/**
 * Material Icon: Production Quantity Limits
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:production_quantity_limits Material Icon Docs}
 */
export const ProductionQuantityLimits = memo(Icon)
