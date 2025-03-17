import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.275 16.87L22.415 15.87L21.415 14.14L19.965 14.63C19.645 14.36 19.285 14.15 18.885 14L18.585 12.5H16.585L16.285 13.99C15.885 14.14 15.525 14.35 15.205 14.62L13.755 14.13L12.755 15.86L13.895 16.86C13.815 17.36 13.815 17.62 13.895 18.12L12.755 19.12L13.755 20.85L15.205 20.36C15.525 20.63 15.885 20.84 16.285 20.99L16.585 22.5H18.585L18.885 21.01C19.285 20.86 19.645 20.65 19.965 20.38L21.415 20.87L22.415 19.14L21.275 18.14C21.355 17.63 21.355 17.37 21.275 16.87ZM17.585 19.5C16.485 19.5 15.585 18.6 15.585 17.5C15.585 16.4 16.485 15.5 17.585 15.5C18.685 15.5 19.585 16.4 19.585 17.5C19.585 18.6 18.685 19.5 17.585 19.5ZM9.58496 5.5V10.91L11.945 13.27L12.985 11.48L11.585 10.09V5.5H9.58496ZM19.585 10.5C19.585 5.53 15.555 1.5 10.585 1.5C7.75496 1.5 5.23496 2.82 3.58496 4.86V2.5H1.58496V8.5H7.58496V6.5H4.84496C6.11496 4.69 8.21496 3.5 10.585 3.5C14.445 3.5 17.585 6.64 17.585 10.5H19.585ZM9.44496 17.41C6.45496 16.92 4.09496 14.51 3.66496 11.5H1.64496C2.14496 16 5.95496 19.5 10.585 19.5C10.605 19.5 10.635 19.5 10.655 19.5L9.44496 17.41Z" />
    </Svg>
  )
}

Icon.displayName = 'ManageHistory'

/**
 * Material Icon: Manage History
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:manage_history Material Icon Docs}
 */
export const ManageHistory = memo(Icon)
