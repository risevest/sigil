import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_842)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M0 20.0001C0 27.5809 4.21797 34.1763 10.4348 37.5683V2.43188C4.21797 5.82392 0 12.4192 0 20.0001Z"
          fill="#D80027"
        />
        <Path
          d="M38.7561 26.9567C39.56 24.79 40 22.4466 40 20.0002C40 17.5538 39.56 15.2103 38.7561 13.0437H1.24406C0.440078 15.2103 0 17.5538 0 20.0002C0 22.4466 0.440078 24.79 1.24406 26.9567L20 28.6958L38.7561 26.9567Z"
          fill="#D80027"
        />
        <Path
          d="M20.0001 40.0001C28.5995 40.0001 35.9302 34.5726 38.7562 26.9565H1.24414C4.06992 34.5726 11.4009 40.0001 20.0001 40.0001V40.0001Z"
          fill="#6DA544"
        />
        <Path
          d="M0 20C0 29.2405 6.26727 37.016 14.7826 39.311V0.688965C6.26727 2.98396 0 10.7594 0 20Z"
          fill="#D80027"
        />
        <Path
          d="M12.2357 8.80115L10.3911 6.95654L9.16137 8.18639L7.93168 6.95654L6.08707 8.80115L7.31684 10.0309L6.08691 11.2608L7.93152 13.1054L9.16129 11.8755L10.3911 13.1054L12.2357 11.2608L11.0059 10.0309L12.2357 8.80115Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_842">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Oman'

/**
 * Flags by `Deji.Zeal`: Oman
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Oman = memo(Icon)
