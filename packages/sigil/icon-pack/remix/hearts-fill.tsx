import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.363 11.045a3.614 3.614 0 0 1 5.084 0 3.55 3.55 0 0 1 0 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 0 1 0-5.047 3.614 3.614 0 0 1 5.084 0l.363.36zm1.88-6.288a6 6 0 0 1 1.689 3.338A5.62 5.62 0 0 0 17 8.808a5.62 5.62 0 0 0-6.856.818 5.55 5.55 0 0 0-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993a6 6 0 0 1 8.48-8.464 6 6 0 0 1 8.242.228" />
    </Svg>
  )
})
Icon.displayName = 'HeartsFill'
/**
 * Remix Icon: Hearts Fill
 * @see {@link https://remixicon.com/icon/hearts-fill Remix Icon Docs}
 */
export const HeartsFill = Icon
