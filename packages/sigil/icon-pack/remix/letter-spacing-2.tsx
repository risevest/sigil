import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.2 14h2.154l1.2-3h4.892l1.2 3H17.8L13 2h-2zM12 4.885 13.646 9h-3.292zM3 16v6h2v-2h14v2h2v-6h-2v2H5v-2z" />
    </Svg>
  )
})
Icon.displayName = 'LetterSpacing2'
/**
 * Remix Icon: Letter Spacing 2
 * @see {@link https://remixicon.com/icon/letter-spacing-2 Remix Icon Docs}
 */
export const LetterSpacing2 = Icon
