import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 10v9h2v-7h6.172l-3.95 3.95 1.414 1.414L16 11 9.636 4.636 8.222 6.05l3.95 3.95zm11.25-5.364L13.836 6.05l4.95 4.95-4.95 4.95 1.414 1.414L21.614 11z" />
    </Svg>
  )
})
Icon.displayName = 'CornerUpRightDoubleLine'
/**
 * Remix Icon: Corner Up Right Double Line
 * @see {@link https://remixicon.com/icon/corner-up-right-double-line Remix Icon Docs}
 */
export const CornerUpRightDoubleLine = Icon
