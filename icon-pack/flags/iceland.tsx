import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1431)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M0.688477 25.2173C1.84566 29.511 4.39605 33.2324 7.82558 35.8674V25.2173H0.688477Z"
          fill={color}
        />
        <Path
          d="M18.2607 39.9238C18.834 39.9731 19.4138 39.9999 19.9999 39.9999C29.2404 39.9999 37.0159 33.7326 39.3109 25.2173H18.2607V39.9238Z"
          fill={color}
        />
        <Path
          d="M39.3109 14.7823C37.0159 6.26702 29.2404 -0.000244141 19.9999 -0.000244141C19.4138 -0.000244141 18.834 0.0264746 18.2607 0.0758496V14.7823H39.3109Z"
          fill={color}
        />
        <Path
          d="M7.82558 4.13232C4.39605 6.76748 1.84566 10.4888 0.688477 14.7825H7.82558V4.13232Z"
          fill={color}
        />
        <Path
          d="M39.8307 17.3913H15.6523H15.6522V0.475342C13.8039 0.885186 12.0516 1.54948 10.4348 2.43175V17.3912H0.169297C0.0579688 18.2452 0 19.1158 0 20C0 20.8841 0.0579688 21.7547 0.169297 22.6086H10.4347H10.4348V37.5681C12.0516 38.4503 13.8039 39.1147 15.6522 39.5245V22.6089V22.6087H39.8307C39.9419 21.7547 40 20.8841 40 20C40 19.1158 39.9419 18.2452 39.8307 17.3913V17.3913Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1431">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Iceland'

/**
 * Flags by `Deji.Zeal`: Iceland
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Iceland = memo(Icon)
