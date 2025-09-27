import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.687 3.063-4.996 5.711-4.32-5.711H2.112l7.477 9.776-7.086 8.099h3.034l5.469-6.25 4.78 6.25h6.102l-7.794-10.304 6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z" />
    </Svg>
  )
})
Icon.displayName = 'TwitterXFill'
/**
 * Remix Icon: Twitter X Fill
 * @see {@link https://remixicon.com/icon/twitter-x-fill Remix Icon Docs}
 */
export const TwitterXFill = Icon
