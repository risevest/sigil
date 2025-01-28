import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 7V9H13V7H11ZM11 11V17H13V11H11Z" />
    </Svg>
  )
}

Icon.displayName = 'FileInfoFill'

/**
 * Remix Icon: File Info Fill
 * @see {@link https://remixicon.com/icon/file-info-fill Remix Icon Docs}
 */
export const FileInfoFill = memo(Icon)
