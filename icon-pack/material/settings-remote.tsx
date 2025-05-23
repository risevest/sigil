import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.005 9.5H9.00498C8.45498 9.5 8.00498 9.95 8.00498 10.5V22.5C8.00498 23.05 8.45498 23.5 9.00498 23.5H15.005C15.555 23.5 16.005 23.05 16.005 22.5V10.5C16.005 9.95 15.555 9.5 15.005 9.5ZM14.005 21.5H10.005V11.5H14.005V21.5Z" />
      <Path d="M12.005 14.5C12.5573 14.5 13.005 14.0523 13.005 13.5C13.005 12.9477 12.5573 12.5 12.005 12.5C11.4527 12.5 11.005 12.9477 11.005 13.5C11.005 14.0523 11.4527 14.5 12.005 14.5Z" />
      <Path d="M7.05498 6.55L8.46498 7.96C9.37498 7.06 10.625 6.5 12.005 6.5C13.385 6.5 14.635 7.06 15.545 7.96L16.955 6.55C15.685 5.28 13.935 4.5 12.005 4.5C10.075 4.5 8.32498 5.28 7.05498 6.55ZM12.005 0.5C8.96498 0.5 6.21498 1.73 4.22498 3.72L5.63498 5.13C7.26498 3.51 9.51498 2.5 12.005 2.5C14.495 2.5 16.745 3.51 18.365 5.14L19.775 3.73C17.795 1.73 15.045 0.5 12.005 0.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsRemote'

/**
 * Material Icon: Settings Remote
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_remote Material Icon Docs}
 */
export const SettingsRemote = memo(Icon)
