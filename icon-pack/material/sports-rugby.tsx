import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.49 3.51004C19.93 2.95004 18.34 2.54004 16.33 2.54004C13.25 2.54004 9.18001 3.50004 6.35001 6.33004C1.66001 11.03 2.10001 19.07 3.51001 20.49C4.07001 21.05 5.66001 21.46 7.67001 21.46C10.75 21.46 14.82 20.5 17.65 17.67C22.34 12.97 21.9 4.93004 20.49 3.51004ZM5.71001 18.29C6.34001 16.4 7.87001 13.3 10.58 10.59C13.26 7.91004 16.36 6.36004 18.28 5.71004C17.65 7.60004 16.12 10.7 13.4 13.41C10.74 16.09 7.64001 17.64 5.71001 18.29ZM7.76001 7.76004C10.4 5.12004 14.1 4.64004 15.79 4.57004C13.74 5.51004 11.33 7.03004 9.18001 9.18004C7.02001 11.34 5.51001 13.76 4.57001 15.81C4.66001 13.33 5.44001 10.07 7.76001 7.76004ZM16.24 16.24C13.6 18.88 9.90001 19.36 8.21001 19.43C10.26 18.49 12.67 16.97 14.82 14.82C16.98 12.66 18.49 10.24 19.44 8.19004C19.34 10.67 18.56 13.93 16.24 16.24Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsRugby'

/**
 * Material Icon: Sports Rugby
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_rugby Material Icon Docs}
 */
export const SportsRugby = memo(Icon)
