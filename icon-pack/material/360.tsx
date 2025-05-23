import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 5.5C6.48 5.5 2 7.74 2 10.5C2 12.74 4.94 14.63 9 15.27V18.5L13 14.5L9 10.5V13.23C5.85 12.67 4 11.33 4 10.5C4 9.44 7.04 7.5 12 7.5C16.96 7.5 20 9.44 20 10.5C20 11.23 18.54 12.39 16 13.03V15.08C19.53 14.31 22 12.55 22 10.5C22 7.74 17.52 5.5 12 5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi360'

/**
 * Material Icon: 360
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:360 Material Icon Docs}
 */
export const Mi360 = memo(Icon)
