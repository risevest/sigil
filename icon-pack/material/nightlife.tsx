import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.5 4.5H15.5L9.5 13.5V17.5H11.5V19.5H5.5V17.5H7.5V13.5L1.5 4.5ZM10.6 8.5L12 6.5H4.99L6.39 8.5H10.6ZM17.5 4.5H22.5V7.5H19.5V16.5C19.5 18.16 18.16 19.5 16.5 19.5C14.84 19.5 13.5 18.16 13.5 16.5C13.5 14.84 14.84 13.5 16.5 13.5C16.85 13.5 17.19 13.56 17.5 13.67V4.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Nightlife'

/**
 * Material Icon: Nightlife
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nightlife Material Icon Docs}
 */
export const Nightlife = memo(Icon)
