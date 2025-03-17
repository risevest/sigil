import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 9V13.66L12.5 17.17V19H11.5V17.17L8 13.65V9H16ZM16 3H14V7H10V3H8V7H7.99C6.9 6.99 6 7.89 6 8.98V14.5L9.5 18V21H14.5V18L18 14.49V9C18 7.9 17.1 7 16 7V3Z" />
    </Svg>
  )
}

Icon.displayName = 'Power'

/**
 * Material Icon: Power
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:power Material Icon Docs}
 */
export const Power = memo(Icon)
