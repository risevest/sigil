import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.001 14L9.001 17V22H15.001V17L18.001 14V9H6.001V14ZM8.001 11H16.001V13.17L13.001 16.17V20H11.001V16.17L8.001 13.17V11ZM11.001 2H13.001V5H11.001V2ZM3.503 5.874L4.917 4.46L7.039 6.58L5.625 7.995L3.503 5.874ZM16.961 6.582L19.084 4.462L20.497 5.878L18.374 7.998L16.961 6.582Z" />
    </Svg>
  )
}

Icon.displayName = 'Highlight'

/**
 * Material Icon: Highlight
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:highlight Material Icon Docs}
 */
export const Highlight = memo(Icon)
