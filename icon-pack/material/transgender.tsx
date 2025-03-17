import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8C13.93 8 15.5 9.57 15.5 11.5C15.5 13.43 13.93 15 12 15C10.07 15 8.5 13.43 8.5 11.5C8.5 9.57 10.07 8 12 8ZM16.53 8.38L20.5 4.42V7H22.5V1H16.5V3H19.08L15.11 6.97C14.23 6.36 13.16 6 12 6C10.84 6 9.77 6.36 8.89 6.97L8.24 6.32L9.65 4.91L8.24 3.49L6.82 4.9L4.92 3H7.5V1H1.5V7H3.5V4.42L5.41 6.32L3.99 7.74L5.4 9.15L6.81 7.74L7.46 8.39C6.86 9.27 6.5 10.34 6.5 11.5C6.5 14.2 8.44 16.44 11 16.91V19H9V21H11V23H13V21H15V19H13V16.91C15.56 16.44 17.5 14.2 17.5 11.5C17.5 10.34 17.14 9.27 16.53 8.38Z" />
    </Svg>
  )
}

Icon.displayName = 'Transgender'

/**
 * Material Icon: Transgender
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:transgender Material Icon Docs}
 */
export const Transgender = memo(Icon)
