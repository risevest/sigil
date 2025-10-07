import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21.001 2.5v19l-18-2v-15zm-2 10.499-7 .001v5.487l7 .779zm-14 4.71 5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265-5 .556V11l5 .001z" />
    </Svg>
  )
})
Icon.displayName = 'WindowsLine'
/**
 * Remix Icon: Windows Line
 * @see {@link https://remixicon.com/icon/windows-line Remix Icon Docs}
 */
export const WindowsLine = Icon
