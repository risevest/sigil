import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.93998 4.48488C8.30998 12.0249 13.69 16.8949 17.6 18.2849C16.21 19.3749 14.48 19.9949 12.67 19.9949C8.25998 19.9949 4.66998 16.4049 4.66998 11.9949C4.66998 8.54488 6.86998 5.59488 9.93998 4.48488ZM12.66 2.00488C7.06998 2.00488 2.66998 6.53488 2.66998 11.9949C2.66998 17.5149 7.14998 21.9949 12.67 21.9949C16.38 21.9949 19.6 19.9749 21.33 16.9749C13.82 16.7249 9.23998 8.54488 13.01 2.00488H12.66Z" />
    </Svg>
  )
}

Icon.displayName = 'Bedtime'

/**
 * Material Icon: Bedtime
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bedtime Material Icon Docs}
 */
export const Bedtime = memo(Icon)
