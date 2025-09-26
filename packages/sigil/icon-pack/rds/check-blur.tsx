import { memo } from 'react'
import type { IconProps } from '../../types'
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
  FeBlend,
  FeFlood,
  FeGaussianBlur,
  Filter,
} from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 129 128" fill="none" height={size} width={size} {...otherProps}>
      <G filter="url(#filter0_f_9040_38315)">
        <_Circle cx="64.375" cy="64" r="14" fill={color} />
      </G>
      <G clipPath="url(#clip0_9040_38315)">
        <Path
          d="M64.375 54C69.898 54 74.375 58.477 74.375 64C74.375 69.523 69.898 74 64.375 74C58.852 74 54.375 69.523 54.375 64C54.375 58.477 58.852 54 64.375 54ZM64.375 56C62.2533 56 60.2184 56.8429 58.7181 58.3431C57.2179 59.8434 56.375 61.8783 56.375 64C56.375 66.1217 57.2179 68.1566 58.7181 69.6569C60.2184 71.1571 62.2533 72 64.375 72C66.4967 72 68.5316 71.1571 70.0319 69.6569C71.5321 68.1566 72.375 66.1217 72.375 64C72.375 61.8783 71.5321 59.8434 70.0319 58.3431C68.5316 56.8429 66.4967 56 64.375 56ZM67.91 60.381C68.0895 60.1997 68.3316 60.094 68.5865 60.0853C68.8415 60.0767 69.0902 60.1658 69.2816 60.3345C69.473 60.5031 69.5927 60.7386 69.6162 60.9926C69.6397 61.2467 69.5652 61.5001 69.408 61.701L69.325 61.795L63.739 67.382C63.5483 67.5726 63.2943 67.6866 63.0252 67.7023C62.756 67.7179 62.4905 67.6342 62.279 67.467L62.183 67.382L59.425 64.624C59.2437 64.4445 59.138 64.2024 59.1293 63.9475C59.1207 63.6925 59.2098 63.4438 59.3785 63.2524C59.5471 63.061 59.7826 62.9413 60.0366 62.9178C60.2907 62.8943 60.5441 62.9688 60.745 63.126L60.839 63.21L62.961 65.331L67.911 60.381H67.91Z"
          fill={color}
        />
      </G>
      <Defs>
        <Filter
          id="filter0_f_9040_38315"
          x="0.375"
          y="0"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood result="BackgroundImageFix" floodOpacity="0" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_9040_38315" />
        </Filter>
        <ClipPath id="clip0_9040_38315">
          <Rect width="24" height="24" fill={color} transform="translate(52.375 52)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CheckBlur'

export const CheckBlur = memo(Icon)
