import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 12C17 8.68628 14.7615 6 12 6 9.82275 6 7.97058 7.66992 7.2843 10.0006L6 10 8.5 13 11 10 9.40125 10.0002C9.91992 8.80457 10.8895 8 12 8 13.6569 8 15 9.79089 15 12 15 14.2091 13.6569 16 12 16 10.8899 16 9.92065 15.196 9.40186 14.0011L7.28467 14.0006C7.97131 16.3307 9.82312 18 12 18 14.7615 18 17 15.3137 17 12ZM12 2C9.23987 2 6.73865 3.12134 4.93005 4.93005 3.12134 6.73865 2 9.23987 2 12 2 14.7601 3.12134 17.2614 4.93005 19.0699 6.73865 20.8787 9.23987 22 12 22 14.7601 22 17.2614 20.8787 19.0699 19.0699 20.8787 17.2614 22 14.7601 22 12 22 9.23987 20.8787 6.73865 19.0699 4.93005 17.2614 3.12134 14.7601 2 12 2ZM6.34424 6.34424C7.79358 4.8949 9.79224 4 12 4 14.2078 4 16.2064 4.8949 17.6558 6.34424 19.1051 7.79358 20 9.79224 20 12 20 14.2078 19.1051 16.2064 17.6558 17.6558 16.2064 19.1051 14.2078 20 12 20 9.79224 20 7.79358 19.1051 6.34424 17.6558 4.8949 16.2064 4 14.2078 4 12 4 9.79224 4.8949 7.79358 6.34424 6.34424Z" />
    </Svg>
  )
}

Icon.displayName = 'CreativeCommonsSaLine'

/**
 * Remix Icon: Creative Commons Sa Line
 * @see {@link https://remixicon.com/icon/creative-commons-sa-line Remix Icon Docs}
 */
export const CreativeCommonsSaLine = memo(Icon)
