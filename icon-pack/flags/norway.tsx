import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_855)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.95431 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.95431 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M0.689453 25.2174C1.84664 29.5111 4.39703 33.2325 7.82656 35.8676V25.2174H0.689453Z"
          fill={color}
        />
        <Path
          d="M18.2617 39.9239C18.835 39.9733 19.4148 40 20.0009 40C29.2414 40 37.0169 33.7327 39.3119 25.2174H18.2617V39.9239Z"
          fill={color}
        />
        <Path
          d="M39.3119 14.7826C37.0169 6.26726 29.2414 0 20.0009 0C19.4148 0 18.835 0.0267187 18.2617 0.0760937V14.7826H39.3119Z"
          fill={color}
        />
        <Path
          d="M7.82656 4.13245C4.39703 6.7676 1.84664 10.4889 0.689453 14.7826H7.82656V4.13245Z"
          fill={color}
        />
        <Path
          d="M39.8307 17.3913H15.6523H15.6522V0.475342C13.8039 0.885185 12.0516 1.54948 10.4348 2.43175V17.3911V17.3912H0.169297C0.0579688 18.2452 0 19.1158 0 19.9999C0 20.8841 0.0579688 21.7547 0.169297 22.6086H10.4347H10.4348V37.5681C12.0516 38.4503 13.8039 39.1147 15.6522 39.5245V22.6089V22.6087H39.8307C39.9419 21.7547 40 20.8841 40 19.9999C40 19.1158 39.9419 18.2452 39.8307 17.3913V17.3913Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_855">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Norway'

/**
 * Flags by `Deji.Zeal`: Norway
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Norway = memo(Icon)
