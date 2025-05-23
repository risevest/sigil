import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.57 13.825C10.21 14.105 9.4 14.985 9.4 16.235C9.4 17.575 10.51 18.655 11.89 18.655C13.94 18.655 15.6 16.995 15.6 14.945C15.6 13.875 15.45 12.825 15.14 11.825C14.35 12.895 12.94 13.545 11.57 13.825ZM13.5 1.33496C13.5 1.33496 14.24 3.98496 14.24 6.13496C14.24 8.19496 12.89 9.86496 10.83 9.86496C8.76 9.86496 7.2 8.19496 7.2 6.13496L7.23 5.77496C5.21 8.17496 4 11.285 4 14.665C4 19.085 7.58 22.665 12 22.665C16.42 22.665 20 19.085 20 14.665C20 9.27496 17.41 4.46496 13.5 1.33496ZM12 20.665C8.69 20.665 6 17.975 6 14.665C6 13.135 6.3 11.625 6.86 10.235C7.87 11.245 9.27 11.865 10.83 11.865C13.49 11.865 15.58 10.035 16.11 7.43496C17.34 9.63496 18 12.105 18 14.665C18 17.975 15.31 20.665 12 20.665Z" />
    </Svg>
  )
}

Icon.displayName = 'Whatshot'

/**
 * Material Icon: Whatshot
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:whatshot Material Icon Docs}
 */
export const Whatshot = memo(Icon)
