import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.788 17.444A.5.5 0 0 1 7 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816zM16 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z" />
    </Svg>
  )
})
Icon.displayName = 'SkipForwardMiniFill'
/**
 * Remix Icon: Skip Forward Mini Fill
 * @see {@link https://remixicon.com/icon/skip-forward-mini-fill Remix Icon Docs}
 */
export const SkipForwardMiniFill = Icon
