import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.0004 9C17.0004 7 15.9904 2 9.97039 2C4.95039 2 1.94039 6 2.00039 11.52C2.06039 17.04 6.96039 19 9.97039 19C11.9804 19 11.9804 22 15.9904 22C19.0004 22 22.0004 19 22.0004 15.02C22.0004 12 21.0104 11 19.0004 9ZM15.9904 20C14.5004 20 14.0304 19.5 13.3104 18.74C12.6604 18.05 11.6604 17 9.97039 17C8.33039 17 4.05039 16.01 4.00039 11.5C3.97039 8.99 4.68039 6.88 5.99039 5.55C7.01039 4.52 8.35039 4 9.97039 4C13.3104 4 14.4804 5.86 15.8304 8.02C16.3804 8.9 16.9004 9.73 17.5904 10.41C19.4904 12.3 20.0004 12.81 20.0004 15.02C20.0004 17.87 17.8804 20 15.9904 20Z" />
      <Path d="M12.0004 15.5C13.9334 15.5 15.5004 13.933 15.5004 12C15.5004 10.067 13.9334 8.5 12.0004 8.5C10.0674 8.5 8.50039 10.067 8.50039 12C8.50039 13.933 10.0674 15.5 12.0004 15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'EggAlt'

/**
 * Material Icon: Egg Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:egg_alt Material Icon Docs}
 */
export const EggAlt = memo(Icon)
