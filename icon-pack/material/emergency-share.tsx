import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C13.93 4 15.68 4.78 16.95 6.05L15.54 7.46C14.63 6.56 13.38 6 12 6C10.62 6 9.36997 6.56 8.45997 7.46L7.04997 6.05C8.31997 4.78 10.07 4 12 4ZM19.78 3.23L18.37 4.64C16.74 3.01 14.49 2 12.01 2C9.52997 2 7.26997 3.01 5.63997 4.63L4.21997 3.22C6.21997 1.23 8.96997 0 12.01 0C15.05 0 17.79 1.23 19.78 3.23ZM12 11C13.94 11 16 12.45 16 15.15C16 16.09 15.45 18.08 12 21.32C8.54997 18.08 7.99997 16.09 7.99997 15.15C7.99997 12.45 10.06 11 12 11ZM12 9C8.84997 9 5.99997 11.41 5.99997 15.15C5.99997 17.64 7.99997 20.59 12 24C16 20.59 18 17.64 18 15.15C18 11.41 15.15 9 12 9ZM13.5 15C13.5 14.17 12.83 13.5 12 13.5C11.17 13.5 10.5 14.17 10.5 15C10.5 15.83 11.17 16.5 12 16.5C12.83 16.5 13.5 15.83 13.5 15Z" />
    </Svg>
  )
}

Icon.displayName = 'EmergencyShare'

/**
 * Material Icon: Emergency Share
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:emergency_share Material Icon Docs}
 */
export const EmergencyShare = memo(Icon)
