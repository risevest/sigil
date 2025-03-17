import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.9616 11.22C21.5716 7.01 17.7616 4 13.5616 4C13.3716 4 13.1816 4.01 12.9916 4.02C2.00159 4.74 2.00159 17.2 2.00159 17.2V18C2.00159 19.1 2.90159 20 4.00159 20H14.0016C18.6716 20 22.4116 15.99 21.9616 11.22ZM5.26159 11.56C5.83159 10.27 6.54159 9.21 7.40159 8.37L11.0216 9.9C11.6216 10.15 12.0016 10.73 12.0016 11.38C12.0016 12.27 11.2816 12.99 10.3916 12.99H4.72159C4.87159 12.53 5.04159 12.05 5.26159 11.56ZM18.4416 16.04C17.3016 17.29 15.6816 18 14.0016 18H4.00159V17.2C4.00159 17.18 4.01159 16.28 4.24159 15H10.3916C12.3816 15 14.0016 13.38 14.0016 11.39C14.0016 9.94 13.1316 8.63 11.8016 8.07L9.30159 7.01C10.4016 6.44 11.6716 6.11 13.1216 6.02C13.2716 6 13.4216 6 13.5616 6C16.8716 6 19.6916 8.37 19.9716 11.41C20.1316 13.13 19.5916 14.77 18.4416 16.04Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsMotorsports'

/**
 * Material Icon: Sports Motorsports
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_motorsports Material Icon Docs}
 */
export const SportsMotorsports = memo(Icon)
