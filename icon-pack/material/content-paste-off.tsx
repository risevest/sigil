import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.9 21.3853L3.52 3.00531L2.1 4.41531L3.71 6.02531V19.1953C3.71 20.2953 4.61 21.1953 5.71 21.1953H18.88L20.49 22.8053L21.9 21.3853ZM5.71 19.1953V8.02531L16.88 19.1953H5.71ZM17.71 8.19531V5.19531H19.71V16.3653L21.71 18.3653V5.19531C21.71 4.09531 20.81 3.19531 19.71 3.19531H15.53C15.11 2.03531 14.01 1.19531 12.71 1.19531C11.41 1.19531 10.31 2.03531 9.89 3.19531H6.54L11.54 8.19531H17.71ZM12.71 3.19531C13.26 3.19531 13.71 3.64531 13.71 4.19531C13.71 4.74531 13.26 5.19531 12.71 5.19531C12.16 5.19531 11.71 4.74531 11.71 4.19531C11.71 3.64531 12.16 3.19531 12.71 3.19531Z" />
    </Svg>
  )
}

Icon.displayName = 'ContentPasteOff'

/**
 * Material Icon: Content Paste Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:content_paste_off Material Icon Docs}
 */
export const ContentPasteOff = memo(Icon)
