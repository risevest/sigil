import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.17 4L18 8.83V20H6V4H13.17ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM15 11H11V12H14C14.55 12 15 12.45 15 13V16C15 16.55 14.55 17 14 17H13V18H11V17H9V15H13V14H10C9.45 14 9 13.55 9 13V10C9 9.45 9.45 9 10 9H11V8H13V9H15V11Z" />
    </Svg>
  )
}

Icon.displayName = 'RequestPage'

/**
 * Material Icon: Request Page
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:request_page Material Icon Docs}
 */
export const RequestPage = memo(Icon)
