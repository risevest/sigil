import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <Path
          fill="#D80027"
          d="M26.956 20c0 1.74-3.115 6.087-6.956 6.087-3.843 0-6.957-4.348-6.957-6.087a6.956 6.956 0 1 1 13.913 0"
        />
        <Path fill="#0052B4" d="M26.956 20a6.956 6.956 0 1 1-13.913 0" />
        <Path
          fill="#000"
          d="m27.373 26.149 1.844-1.844 1.23 1.23-1.844 1.843zM24.299 29.223l1.844-1.844 1.23 1.23-1.845 1.843zM31.063 29.837l1.844-1.844 1.23 1.23-1.845 1.844zM27.988 32.912l1.845-1.844 1.23 1.23-1.845 1.843zM29.217 27.993l1.844-1.844 1.23 1.23-1.845 1.844zM26.145 31.067l1.844-1.844 1.23 1.23-1.845 1.844zM31.07 13.854l-4.918-4.918 1.23-1.23 4.918 4.919zM26.15 12.625l-1.844-1.844 1.23-1.23 1.844 1.845zM29.225 15.7l-1.845-1.844 1.23-1.23 1.844 1.844zM29.84 8.936 27.996 7.09l1.23-1.23 1.843 1.845zM32.914 12.011l-1.844-1.844 1.23-1.23 1.844 1.844zM7.09 27.99l4.918 4.918-1.23 1.23L5.86 29.22zM12.008 29.219l1.844 1.844-1.23 1.23-1.844-1.845zM8.934 26.145l1.844 1.845-1.23 1.23-1.844-1.845zM10.78 24.3l4.918 4.918-1.23 1.23L9.55 25.53zM12.008 7.088 7.09 12.006l-1.23-1.23 4.918-4.918zM13.852 8.932 8.933 13.85l-1.23-1.23 4.919-4.918zM15.7 10.777l-4.919 4.919-1.23-1.23 4.919-4.918z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
Icon.displayName = 'SouthKorea'
/**
 * Flags by `Deji.Zeal`: South Korea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SouthKorea = Icon
