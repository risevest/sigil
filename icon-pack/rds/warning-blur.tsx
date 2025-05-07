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
    <Svg viewBox="0 0 129 128" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_9040_38321)">
        <Path
          d="M65.3001 55.1484L73.9342 70.1024C74.0658 70.3305 74.1351 70.5891 74.1351 70.8524C74.1351 71.1157 74.0658 71.3744 73.9342 71.6024C73.8025 71.8304 73.6132 72.0198 73.3851 72.1515C73.1571 72.2831 72.8985 72.3524 72.6352 72.3524H55.3671C55.1038 72.3524 54.8452 72.2831 54.6172 72.1515C54.3891 72.0198 54.1998 71.8304 54.0681 71.6024C53.9365 71.3744 53.8672 71.1157 53.8672 70.8524C53.8672 70.5891 53.9365 70.3305 54.0681 70.1024L62.7021 55.1484C63.2791 54.1484 64.7221 54.1484 65.3001 55.1484ZM64.0011 56.8984L56.2331 70.3524H71.7691L64.0011 56.8984ZM64.0011 67.0004C64.2664 67.0004 64.5207 67.1058 64.7083 67.2933C64.8958 67.4809 65.0011 67.7352 65.0011 68.0004C65.0011 68.2657 64.8958 68.52 64.7083 68.7075C64.5207 68.8951 64.2664 69.0004 64.0011 69.0004C63.7359 69.0004 63.4816 68.8951 63.294 68.7075C63.1065 68.52 63.0011 68.2657 63.0011 68.0004C63.0011 67.7352 63.1065 67.4809 63.294 67.2933C63.4816 67.1058 63.7359 67.0004 64.0011 67.0004ZM64.0011 60.0004C64.2664 60.0004 64.5207 60.1058 64.7083 60.2933C64.8958 60.4809 65.0011 60.7352 65.0011 61.0004V65.0004C65.0011 65.2657 64.8958 65.52 64.7083 65.7075C64.5207 65.8951 64.2664 66.0004 64.0011 66.0004C63.7359 66.0004 63.4816 65.8951 63.294 65.7075C63.1065 65.52 63.0011 65.2657 63.0011 65.0004V61.0004C63.0011 60.7352 63.1065 60.4809 63.294 60.2933C63.4816 60.1058 63.7359 60.0004 64.0011 60.0004Z"
          fill={color}
        />
      </G>
      <G filter="url(#filter0_f_9040_38321)">
        <_Circle cx="64.25" cy="64" r="14" fill={color} />
      </G>
      <Defs>
        <Filter
          id="filter0_f_9040_38321"
          x="0.25"
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
          <FeGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_9040_38321" />
        </Filter>
        <ClipPath id="clip0_9040_38321">
          <Rect width="24" height="24" fill={color} transform="translate(52 52)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'WarningBlur'

export const WarningBlur = memo(Icon)
