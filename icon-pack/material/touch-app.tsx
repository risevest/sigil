import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.2639 12.94L15.0239 11.32C16.3139 10.32 17.1439 8.76 17.1439 7C17.1439 3.97 14.6739 1.5 11.6439 1.5C8.61385 1.5 6.14385 3.97 6.14385 7C6.14385 9.13 7.36385 10.98 9.14385 11.89V15.15C6.99385 14.69 7.12385 14.71 6.88385 14.71C6.35385 14.71 5.85385 14.92 5.47385 15.3L4.07385 16.72L9.16385 21.81C9.59385 22.25 10.1939 22.5 10.8139 22.5H17.1139C18.0939 22.5 18.9239 21.8 19.0839 20.83L19.8839 16.12C20.1039 14.82 19.4539 13.54 18.2639 12.94ZM17.9139 15.79L17.1139 20.5H10.8139C10.7239 20.5 10.6439 20.46 10.5739 20.4L6.89385 16.72L11.1439 17.61V7C11.1439 6.72 11.3639 6.5 11.6439 6.5C11.9239 6.5 12.1439 6.72 12.1439 7V13H13.9039L17.3639 14.73C17.7639 14.93 17.9839 15.36 17.9139 15.79ZM8.14385 7C8.14385 5.07 9.71385 3.5 11.6439 3.5C13.5739 3.5 15.1439 5.07 15.1439 7C15.1439 7.95 14.7639 8.81 14.1439 9.44V7C14.1439 5.62 13.0239 4.5 11.6439 4.5C10.2639 4.5 9.14385 5.62 9.14385 7V9.44C8.52385 8.81 8.14385 7.95 8.14385 7Z" />
    </Svg>
  )
}

Icon.displayName = 'TouchApp'

/**
 * Material Icon: Touch App
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:touch_app Material Icon Docs}
 */
export const TouchApp = memo(Icon)
