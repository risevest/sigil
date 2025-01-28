import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7C10.1805 7 8.58698 7.9735 7.71225 9.42771L9.42709 10.4558C9.95162 9.58339 10.9074 9 12 9C13.6575 9 15 10.3425 15 12C15 13.6575 13.6575 15 12 15C10.9069 15 9.95089 14.4162 9.42649 13.5432L7.71225 14.5723C8.58698 16.0265 10.1805 17 12 17Z" />
    </Svg>
  )
}

Icon.displayName = 'CopyleftFill'

/**
 * Remix Icon: Copyleft Fill
 * @see {@link https://remixicon.com/icon/copyleft-fill Remix Icon Docs}
 */
export const CopyleftFill = memo(Icon)
