import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_235)">
        <Path
          d="M34.9057 33.3333C38.0731 29.7948 40 25.1228 40 20C40 14.8772 38.073 10.2051 34.9056 6.66663L20 5.21741L5.09438 6.66663C1.92695 10.2051 0 14.8772 0 20C0 25.1228 1.92688 29.7948 5.0943 33.3333L20 34.7826L34.9057 33.3333Z"
          fill={color}
        />
        <Path
          d="M5.09375 6.66664H34.9051C31.243 2.57547 25.9223 0 19.9994 0C14.0765 0 8.75578 2.57547 5.09375 6.66664Z"
          fill={color}
        />
        <Path
          d="M0 20.0001L20 21.7392L40 20.0001C40 17.6623 39.5976 15.4187 38.8603 13.3334H1.13969C0.402422 15.4187 0 17.6623 0 20.0001H0Z"
          fill={color}
        />
        <Path
          d="M1.13969 26.6666H38.8605C39.5976 24.5813 40 22.3378 40 20H0C0 22.3378 0.402422 24.5813 1.13969 26.6666V26.6666Z"
          fill={color}
        />
        <Path
          d="M34.9052 33.3334H5.09375C8.75578 37.4246 14.0765 40.0001 19.9995 40.0001C25.9224 40.0001 31.2431 37.4246 34.9052 33.3334Z"
          fill={color}
        />
        <Path
          d="M26.674 20.0001C26.674 23.6862 23.6862 26.674 20.0001 26.674C16.3139 26.674 13.3262 23.6862 13.3262 20.0001C13.3262 16.3139 16.3139 13.3262 20.0001 13.3262C23.6862 13.3262 26.674 16.3139 26.674 20.0001Z"
          fill={color}
        />
        <Path
          d="M22.4448 20.3403L19.9998 19.2809C19.9998 19.2809 20.5719 17.3822 20.6023 17.2523C20.6246 17.1574 20.6365 17.0584 20.6365 16.9567C20.6365 16.5964 20.4905 16.2703 20.2544 16.0344L20.8692 15.4196C20.4759 15.0262 19.9323 14.7828 19.332 14.7828C18.7317 14.7828 18.1882 15.0261 17.7948 15.4196L18.4097 16.0344C18.1736 16.2704 18.0277 16.5965 18.0277 16.9567C18.0277 17.0884 18.0476 17.2153 18.0839 17.3353L17.1582 18.2609H18.8407C18.8407 18.2609 18.1451 19.3057 17.7653 20.1638C17.3855 21.0217 17.7705 22.0692 18.6482 22.4593L19.1557 22.6849L19.9998 23.4783V24.3478L19.1303 25.2174H20.8695V23.4782L21.663 22.6847H23.3042C23.3121 22.6684 23.3204 22.6524 23.3279 22.6357C23.7178 21.7582 23.3225 20.7303 22.4448 20.3403Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_235">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Uganda'

/**
 * Flags by `Deji.Zeal`: Uganda
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Uganda = memo(Icon)
