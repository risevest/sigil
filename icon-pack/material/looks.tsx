import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 10.5C8.14 10.5 5 13.64 5 17.5H7C7 14.74 9.24 12.5 12 12.5C14.76 12.5 17 14.74 17 17.5H19C19 13.64 15.86 10.5 12 10.5ZM12 6.5C5.93 6.5 1 11.43 1 17.5H3C3 12.54 7.04 8.5 12 8.5C16.96 8.5 21 12.54 21 17.5H23C23 11.43 18.07 6.5 12 6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Looks'

/**
 * Material Icon: Looks
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:looks Material Icon Docs}
 */
export const Looks = memo(Icon)
