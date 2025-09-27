import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 32 12" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#fff"
          d="M20.843.68C18.57.68 16.54 1.888 16.54 4.12c0 2.561 3.601 2.738 3.601 4.025 0 .541-.605 1.026-1.638 1.026-1.466 0-2.562-.677-2.562-.677l-.469 2.253s1.263.572 2.939.572c2.484 0 4.439-1.268 4.439-3.539 0-2.706-3.617-2.877-3.617-4.072 0-.424.497-.889 1.527-.889 1.163 0 2.11.493 2.11.493l.46-2.176S22.298.68 20.843.68M.055.844 0 1.172s.956.18 1.817.538c1.108.41 1.187.65 1.374 1.392l2.034 8.049h2.728l4.2-10.307h-2.72l-2.7 7.008-1.101-5.94C5.53 1.232 5.019.844 4.392.844zm13.193 0-2.134 10.307h2.594L15.835.844zm14.47 0c-.625 0-.956.344-1.2.944l-3.8 9.363h2.72l.526-1.56h3.315l.32 1.56H32L29.906.844zm.355 2.785.806 3.867h-2.16z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .667h32v10.667H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'VisaLogoDark'
export const VisaLogoDark = Icon
