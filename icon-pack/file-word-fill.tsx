import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM14 8V12.989L12 11L10.0108 13L10 8H8V16H10L12 14L14 16H16V8H14Z" />
    </Svg>
  )
}

Icon.displayName = 'FileWordFill'

/**
 * Remix Icon: File Word Fill
 * @see {@link https://remixicon.com/icon/file-word-fill Remix Icon Docs}
 */
export const FileWordFill = memo(Icon)
