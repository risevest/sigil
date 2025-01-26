import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 7V20.9925C21 21.5511 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44694 2 3.99826 2H15.9968L21 7ZM8 8V13.6002C8 14.4496 8.4456 15.2427 9.18747 15.7138L12 17.5L14.8125 15.7138C15.5544 15.2427 16 14.4496 16 13.6002V8H8ZM10 10H14V13.6002C14 13.7579 13.9103 13.9176 13.7403 14.0255L12 15.1308L10.2597 14.0255C10.0897 13.9176 10 13.7579 10 13.6002V10Z" />
    </Svg>
  )
}

Icon.displayName = 'FileShieldFill'

/**
 * Remix Icon: File Shield Fill
 * @see {@link https://remixicon.com/icon/file-shield-fill Remix Icon Docs}
 */
export const FileShieldFill = memo(Icon)
