import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.031 10.976c.04-1.48.127-2.667.325-3.655.331-1.658.954-2.659 2.199-3.489l-1.11-1.664c-1.754 1.17-2.632 2.669-3.05 4.76C1 8.902 1 11.485 1 14.88V15a5 5 0 1 0 9.935-.806c.33-.125.69-.194 1.065-.194.376 0 .734.069 1.065.194A5 5 0 1 0 23 15v-.12c0-3.396 0-5.979-.394-7.951-.419-2.092-1.296-3.591-3.051-4.761l-1.11 1.664c1.246.83 1.868 1.831 2.2 3.49.197.987.285 2.173.324 3.654A4.98 4.98 0 0 0 18 10a5 5 0 0 0-4.225 2.325A5 5 0 0 0 12 12a5 5 0 0 0-1.775.325A5 5 0 0 0 6 10a4.98 4.98 0 0 0-2.969.976" />
    </Svg>
  )
})
Icon.displayName = 'Glasses2Fill'
/**
 * Remix Icon: Glasses 2 Fill
 * @see {@link https://remixicon.com/icon/glasses-2-fill Remix Icon Docs}
 */
export const Glasses2Fill = Icon
