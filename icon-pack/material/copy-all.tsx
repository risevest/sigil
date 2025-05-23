import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.5 2H9.5C8.4 2 7.5 2.9 7.5 4V16C7.5 17.1 8.4 18 9.5 18H18.5C19.6 18 20.5 17.1 20.5 16V4C20.5 2.9 19.6 2 18.5 2ZM18.5 16H9.5V4H18.5V16ZM3.5 15V13H5.5V15H3.5ZM3.5 9.5H5.5V11.5H3.5V9.5ZM10.5 20H12.5V22H10.5V20ZM3.5 18.5V16.5H5.5V18.5H3.5ZM5.5 22C4.4 22 3.5 21.1 3.5 20H5.5V22ZM9 22H7V20H9V22ZM14 22V20H16C16 21.1 15.1 22 14 22ZM5.5 6V8H3.5C3.5 6.9 4.4 6 5.5 6Z" />
    </Svg>
  )
}

Icon.displayName = 'CopyAll'

/**
 * Material Icon: Copy All
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:copy_all Material Icon Docs}
 */
export const CopyAll = memo(Icon)
