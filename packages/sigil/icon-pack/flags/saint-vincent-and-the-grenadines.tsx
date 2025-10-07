import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#FFDA44"
          d="M29.565 2.432A19.9 19.9 0 0 0 20 0a19.9 19.9 0 0 0-9.565 2.432L8.695 20l1.74 17.568A19.9 19.9 0 0 0 20 40c3.465 0 6.723-.882 9.565-2.432L31.305 20z"
        />
        <Path
          fill="#338AF3"
          d="M10.435 37.568V2.432C4.218 5.824 0 12.419 0 20c0 7.58 4.218 14.176 10.435 17.568"
        />
        <Path
          fill="#6DA544"
          d="M40 20c0-7.58-4.219-14.176-10.436-17.568v35.136C35.782 34.176 40 27.581 40 20M15.652 25.217 12.174 20l3.478-5.217L19.131 20zM24.347 25.217 20.87 20l3.478-5.217L27.826 20zM20 32.174l-3.479-5.218L20 21.74l3.478 5.217z"
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
Icon.displayName = 'SaintVincentAndTheGrenadines'
/**
 * Flags by `Deji.Zeal`: Saint Vincent And The Grenadines
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaintVincentAndTheGrenadines = Icon
