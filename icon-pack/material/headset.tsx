import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 15.5V18.5C19 19.05 18.55 19.5 18 19.5H17V15.5H19ZM7 15.5V19.5H6C5.45 19.5 5 19.05 5 18.5V15.5H7ZM12 2.5C7.03 2.5 3 6.53 3 11.5V18.5C3 20.16 4.34 21.5 6 21.5H9V13.5H5V11.5C5 7.63 8.13 4.5 12 4.5C15.87 4.5 19 7.63 19 11.5V13.5H15V21.5H18C19.66 21.5 21 20.16 21 18.5V11.5C21 6.53 16.97 2.5 12 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Headset'

/**
 * Material Icon: Headset
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:headset Material Icon Docs}
 */
export const Headset = memo(Icon)
