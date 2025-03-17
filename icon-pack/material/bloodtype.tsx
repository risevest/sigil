import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 16H9V18H15V16Z" />
      <Path d="M13 9H11V11H9V13H11V15H13V13H15V11H13V9Z" />
      <Path d="M12 2C6.67 6.55 4 10.48 4 13.8C4 18.78 7.8 22 12 22C16.2 22 20 18.78 20 13.8C20 10.48 17.33 6.55 12 2ZM12 20C8.65 20 6 17.43 6 13.8C6 11.46 7.95 8.36 12 4.66C16.05 8.36 18 11.45 18 13.8C18 17.43 15.35 20 12 20Z" />
    </Svg>
  )
}

Icon.displayName = 'Bloodtype'

/**
 * Material Icon: Bloodtype
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bloodtype Material Icon Docs}
 */
export const Bloodtype = memo(Icon)
