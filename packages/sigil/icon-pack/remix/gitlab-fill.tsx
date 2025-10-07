import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21.663 9.987-.028-.072-2.719-7.094a.71.71 0 0 0-.706-.449.711.711 0 0 0-.654.522L15.72 8.52H8.282L6.443 2.895a.71.71 0 0 0-.652-.524.72.72 0 0 0-.707.45L2.362 9.925l-.028.07a5.06 5.06 0 0 0 1.674 5.838l.01.007.024.019 4.147 3.104 2.05 1.553 1.247.944a.84.84 0 0 0 1.016 0l1.247-.944 2.05-1.553 4.172-3.123.01-.008a5.055 5.055 0 0 0 1.682-5.845" />
    </Svg>
  )
})
Icon.displayName = 'GitlabFill'
/**
 * Remix Icon: Gitlab Fill
 * @see {@link https://remixicon.com/icon/gitlab-fill Remix Icon Docs}
 */
export const GitlabFill = Icon
