import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19V3H4V19H2V21H22V19H20ZM16 9H18V11H16V9ZM14 11H6V9H14V11ZM18 7H16V5H18V7ZM14 5V7H6V5H14ZM6 19V13H14V14.82C13.55 15.14 13.25 15.66 13.25 16.25C13.25 17.22 14.03 18 15 18C15.97 18 16.75 17.22 16.75 16.25C16.75 15.66 16.45 15.13 16 14.82V13H18V19H6Z" />
    </Svg>
  )
}

Icon.displayName = 'Blinds'

/**
 * Material Icon: Blinds
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:blinds Material Icon Docs}
 */
export const Blinds = memo(Icon)
