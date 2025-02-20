import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_5548)">
        <Rect width="40" height="40" rx="20" fill="#FECB00" />
        <Rect
          x="-2.9704"
          y="-1.23975"
          width="62.7257"
          height="20"
          transform="rotate(42.7161 -2.9704 -1.23975)"
          fill="#002395"
        />
        <Rect
          x="13.1673"
          y="-13.6001"
          width="62.7257"
          height="20"
          transform="rotate(42.7161 13.1673 -13.6001)"
          fill="#FECB00"
        />
        <Path
          d="M8.4053 10.3774L6.11458 12.1658L7.1076 14.8971L4.69884 13.2711L2.40813 15.0596L3.21015 12.2663L0.801392 10.6403L3.70583 10.5399L4.50785 7.74658L5.50087 10.4778L8.4053 10.3774Z"
          fill="white"
        />
        <Path
          d="M13.8053 16.1774L11.5146 17.9658L12.5076 20.6971L10.0988 19.0711L7.80813 20.8596L8.61015 18.0663L6.20139 16.4403L9.10583 16.3399L9.90785 13.5466L10.9009 16.2778L13.8053 16.1774Z"
          fill="white"
        />
        <Path
          d="M20.2053 21.7774L17.9146 23.5658L18.9076 26.2971L16.4988 24.6711L14.2081 26.4596L15.0101 23.6663L12.6014 22.0403L15.5058 21.9399L16.3078 19.1466L17.3009 21.8778L20.2053 21.7774Z"
          fill="white"
        />
        <Path
          d="M26.6053 27.1774L24.3146 28.9658L25.3076 31.6971L22.8988 30.0711L20.6081 31.8596L21.4101 29.0663L19.0014 27.4403L21.9058 27.3399L22.7078 24.5466L23.7009 27.2778L26.6053 27.1774Z"
          fill="white"
        />
        <Path
          d="M32.2053 32.9774L29.9146 34.7658L30.9076 37.4971L28.4988 35.8711L26.2081 37.6596L27.0101 34.8663L24.6014 33.2403L27.5058 33.1399L28.3078 30.3466L29.3009 33.0778L32.2053 32.9774Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_5548">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'BosniaAndHerzegovina'

/**
 * Flags by `Deji.Zeal`: Bosnia And Herzegovina
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const BosniaAndHerzegovina = memo(Icon)
