import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V6H19V18Z" />
      <Path d="M7 15H10C10.55 15 11 14.55 11 14V13H9.5V13.5H7.5V10.5H9.5V11H11V10C11 9.45 10.55 9 10 9H7C6.45 9 6 9.45 6 10V14C6 14.55 6.45 15 7 15Z" />
      <Path d="M14 15H17C17.55 15 18 14.55 18 14V13H16.5V13.5H14.5V10.5H16.5V11H18V10C18 9.45 17.55 9 17 9H14C13.45 9 13 9.45 13 10V14C13 14.55 13.45 15 14 15Z" />
    </Svg>
  )
}

Icon.displayName = 'ClosedCaptionOff'

/**
 * Material Icon: Closed Caption Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:closed_caption_off Material Icon Docs}
 */
export const ClosedCaptionOff = memo(Icon)
