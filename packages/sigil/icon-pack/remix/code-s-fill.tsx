import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m24 12-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757z" />
    </Svg>
  )
})
Icon.displayName = 'CodeSFill'
/**
 * Remix Icon: Code S Fill
 * @see {@link https://remixicon.com/icon/code-s-fill Remix Icon Docs}
 */
export const CodeSFill = Icon
