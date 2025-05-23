import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 11.5V10.5C21 9.7 20.3 9 19.5 9H16V15H17.5V13H18.6L19.5 15H21L20.1 12.9C20.6 12.6 21 12.1 21 11.5ZM19.5 11.5H17.5V10.5H19.5V11.5ZM6.5 11H4.5V9H3V15H4.5V12.5H6.5V15H8V9H6.5V11ZM13 9H9.5V15H13C13.8 15 14.5 14.3 14.5 13.5V10.5C14.5 9.7 13.8 9 13 9ZM13 13.5H11V10.5H13V13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'HdrOn'

/**
 * Material Icon: Hdr On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hdr_on Material Icon Docs}
 */
export const HdrOn = memo(Icon)
