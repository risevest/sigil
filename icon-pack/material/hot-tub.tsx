import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 7.5C8.10457 7.5 9 6.60457 9 5.5C9 4.39543 8.10457 3.5 7 3.5C5.89543 3.5 5 4.39543 5 5.5C5 6.60457 5.89543 7.5 7 7.5Z" />
      <Path d="M11.15 11.5C10.84 11.28 10.56 11.04 10.33 10.78L8.93 9.23C8.74 9.02 8.5 8.85 8.24 8.73C7.95 8.59 7.62 8.5 7.28 8.5H7.25C6.01 8.5 5 9.51 5 10.75V11.5H2V19.5C2 20.6 2.9 21.5 4 21.5H20C21.1 21.5 22 20.6 22 19.5V11.5H11.15ZM7 19.5H5V13.5H7V19.5ZM11 19.5H9V13.5H11V19.5ZM15 19.5H13V13.5H15V19.5ZM19 19.5H17V13.5H19V19.5ZM17.42 6.71C17.99 7.33 18.24 8.12 18.09 8.91L17.98 9.5H19.89L19.95 9.07C20.16 7.71 19.68 6.36 18.65 5.36L18.58 5.29C18.01 4.67 17.76 3.88 17.91 3.09L18 2.5H16.11L16.05 2.93C15.85 4.29 16.32 5.64 17.35 6.65L17.42 6.71ZM13.42 6.71C13.99 7.33 14.24 8.12 14.09 8.91L13.98 9.5H15.89L15.95 9.07C16.16 7.71 15.68 6.36 14.65 5.36L14.58 5.29C14.01 4.67 13.76 3.88 13.91 3.09L14 2.5H12.11L12.05 2.93C11.85 4.29 12.32 5.64 13.35 6.65L13.42 6.71Z" />
    </Svg>
  )
}

Icon.displayName = 'HotTub'

/**
 * Material Icon: Hot Tub
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hot_tub Material Icon Docs}
 */
export const HotTub = memo(Icon)
