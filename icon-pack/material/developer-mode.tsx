import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 5H17V7H19V3C19 1.9 18.1 1.01 17 1.01L7 1C5.9 1 5 1.9 5 3V7H7V5ZM15.41 16.59L20 12L15.41 7.41L14 8.83L17.17 12L14 15.17L15.41 16.59ZM10 15.17L6.83 12L10 8.83L8.59 7.41L4 12L8.59 16.59L10 15.17ZM17 19H7V17H5V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V17H17V19Z" />
    </Svg>
  )
}

Icon.displayName = 'DeveloperMode'

/**
 * Material Icon: Developer Mode
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:developer_mode Material Icon Docs}
 */
export const DeveloperMode = memo(Icon)
