import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 14.98C19.48 14.98 19.47 14.98 19.45 14.99C19.2 13.3 17.76 12 16 12C14.6 12 13.4 12.83 12.84 14.02C11.26 14.1 10 15.4 10 17C10 18.66 11.34 20 13 20L19.5 19.98C20.88 19.98 22 18.86 22 17.48C22 16.1 20.88 14.98 19.5 14.98ZM19.51 18H13C12.45 18 12 17.55 12 17C12 16.45 12.45 16 13 16H14.25V15.75C14.25 14.78 15.03 14 16 14C16.97 14 17.75 14.78 17.75 15.75V17C17.75 17 19.5 17 19.51 17C19.79 17 20.01 17.22 20.01 17.5C20 17.77 19.78 18 19.51 18ZM8 4.26V6.35C5.67 7.18 4 9.39 4 12C4 13.77 4.78 15.34 6 16.44V14H8V20H2V18H4.73C3.06 16.54 2 14.4 2 12C2 8.27 4.55 5.15 8 4.26ZM18 6H15.27C16.7 7.26 17.68 9.01 17.93 11H15.91C15.68 9.64 14.98 8.45 14 7.56V10H12V4H18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'CloudSync'

/**
 * Material Icon: Cloud Sync
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cloud_sync Material Icon Docs}
 */
export const CloudSync = memo(Icon)
