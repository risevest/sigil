import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 4C4 3.44772 4.44772 3 5 3H10C10.5523 3 11 3.44772 11 4L11 16C11 16.5523 10.5523 17 10 17H5C4.44772 17 4 16.5523 4 16L4 4ZM14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7L14 7ZM21 19L3 19V21H21V19Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignItemBottomFill'

/**
 * Remix Icon: Align Item Bottom Fill
 * @see {@link https://remixicon.com/icon/align-item-bottom-fill Remix Icon Docs}
 */
export const AlignItemBottomFill = memo(Icon)
