import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18.125V2.125H4V18.125H2V20.125H13.25C13.25 21.095 14.03 21.875 15 21.875C15.97 21.875 16.75 21.095 16.75 20.125H22V18.125H20ZM18 10.125H16V8.125H18V10.125ZM14 10.125H6V8.125H14V10.125ZM14 12.125V14.125H6V12.125H14ZM16 12.125H18V14.125H16V12.125ZM18 6.125H16V4.125H18V6.125ZM14 4.125V6.125H6V4.125H14ZM6 18.125V16.125H14V18.125H6ZM16 18.125V16.125H18V18.125H16Z" />
    </Svg>
  )
}

Icon.displayName = 'BlindsClosed'

/**
 * Material Icon: Blinds Closed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:blinds_closed Material Icon Docs}
 */
export const BlindsClosed = memo(Icon)
