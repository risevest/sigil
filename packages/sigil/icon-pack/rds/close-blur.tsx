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
    <Svg viewBox="0 0 88 88" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_9040_38334)">
        <Path
          d="M44 34C49.523 34 54 38.477 54 44C54 49.523 49.523 54 44 54C38.477 54 34 49.523 34 44C34 38.477 38.477 34 44 34ZM44 36C41.8783 36 39.8434 36.8429 38.3431 38.3431C36.8429 39.8434 36 41.8783 36 44C36 46.1217 36.8429 48.1566 38.3431 49.6569C39.8434 51.1571 41.8783 52 44 52C46.1217 52 48.1566 51.1571 49.6569 49.6569C51.1571 48.1566 52 46.1217 52 44C52 41.8783 51.1571 39.8434 49.6569 38.3431C48.1566 36.8429 46.1217 36 44 36ZM41.879 40.464L44 42.586L46.121 40.464C46.2139 40.3711 46.3242 40.2974 46.4456 40.2471C46.567 40.1968 46.6971 40.1709 46.8285 40.1709C46.9599 40.1709 47.09 40.1968 47.2114 40.2471C47.3328 40.2974 47.4431 40.3711 47.536 40.464C47.6289 40.5569 47.7026 40.6672 47.7529 40.7886C47.8032 40.91 47.8291 41.0401 47.8291 41.1715C47.8291 41.3029 47.8032 41.433 47.7529 41.5544C47.7026 41.6758 47.6289 41.7861 47.536 41.879L45.414 43.999L47.536 46.121C47.7236 46.3086 47.8291 46.5631 47.8291 46.8285C47.8291 47.0939 47.7236 47.3484 47.536 47.536C47.3484 47.7236 47.0939 47.8291 46.8285 47.8291C46.5631 47.8291 46.3086 47.7236 46.121 47.536L44 45.414L41.879 47.536C41.6914 47.7236 41.4369 47.8291 41.1715 47.8291C40.9061 47.8291 40.6516 47.7236 40.464 47.536C40.2764 47.3484 40.1709 47.0939 40.1709 46.8285C40.1709 46.5631 40.2764 46.3086 40.464 46.121L42.586 44L40.465 41.879C40.2774 41.6915 40.1719 41.4371 40.1718 41.1719C40.1717 40.9066 40.277 40.6521 40.4645 40.4645C40.652 40.2769 40.9064 40.1714 41.1716 40.1713C41.4369 40.1712 41.6914 40.2765 41.879 40.464Z"
          fill={color}
        />
      </G>
      <G filter="url(#filter0_f_9040_38334)">
        <_Circle cx="44" cy="44" r="10" fill={color} />
      </G>
      <Defs>
        <Filter
          id="filter0_f_9040_38334"
          x="0.333508"
          y="0.333508"
          width="87.333"
          height="87.333"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood result="BackgroundImageFix" floodOpacity="0" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="16.8332"
            result="effect1_foregroundBlur_9040_38334"
          />
        </Filter>
        <ClipPath id="clip0_9040_38334">
          <Rect width="24" height="24" fill={color} transform="translate(32 32)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CloseBlur'

export const CloseBlur = memo(Icon)
